const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(cors())
app.use(express.json())

// Database Connection
const uri = process.env.DB_USER
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

async function run() {
  try {
    const homesCollection = client.db('aircncdb').collection('homes')
    const usersCollection = client.db('aircncdb').collection('users')
    const bookingsCollection = client.db('aircncdb').collection('bookings')

    app.put('/user/:email', async (req, res)=>{
      const email = req.params.email 
      const user = req.body 
      const filter = {email : email}
      
      const options = { upsert: true };
      
      const updateDoc = {
        $set: user
      };

      const result = await usersCollection.updateOne(filter, updateDoc, options);
      console.log(result)

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})

      res.send({result, token})

    })


    // GET A SINGLE USER BY EMAIL
    app.get('/user/:email', async (req, res) =>{
      const email = req.params.email 
      const query = {email: email}
      const user = await usersCollection.findOne(query)
      console.log(user?.role);
      res.send(user) 
    })


    // Save Bookings Data
    app.post('/bookings', async (req, res)=>{
      const bookingsData = req.body 
      const result = await bookingsCollection.insertOne(bookingsData)
      console.log(result)
      res.send(result)
    })

 

    // Get All Bookings
    app.get('/bookings', async (req, res) =>{
      let query = {}
      const email = req.query.email
      
      if(email){
        query = {
          guestEmail : email
        }
      }
      const bookings = await bookingsCollection.find(query).toArray()
      res.send(bookings)
    })


    

    console.log('Database Connected...')
  } finally {
  }
}

run().catch(err => console.error(err))

app.get('/', (req, res) => {
  res.send('Server is running...')
})

app.listen(port, () => {
  console.log(`Server is running...on ${port}`)
})
