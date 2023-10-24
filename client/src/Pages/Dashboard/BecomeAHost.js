import React, { useContext, useEffect, useState } from "react";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { getImageUrl } from "../../api/imageUpload";
import { AuthContext } from "../../contexts/AuthProvider";
import { getRole, hostRequest } from "../../api/user";
import toast from "react-hot-toast";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);

  const [userRole, setUserRole] = useState(null);

useEffect(()=>{
    getRole(user?.email).then(data =>{
        console.log(data)
        setUserRole(data)
    })
},[user])

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image).then((data) => {
      const hostData = {
        location,
        documentIMG: data,
        role: 'requested',
        email: user?.email,
      };

      // Host Request
      hostRequest(hostData).then((data) => {
        console.log(data);
        if (data.result.acknowledged) {
          toast.success("Host Request Sumbited");
        }
      });
    });
  };
  return (
    <div>
      <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>
    </div>
  );
};

export default BecomeAHost;
