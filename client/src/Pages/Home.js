import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import { Link } from "react-router-dom";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`expdata.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllExp(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="md:flex gap-5 justify-center px-6 md:px-10 lg:px-20">
        <div>
          <SearchForm></SearchForm>
        </div>

        <div className="mt-5">
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-3xl font-semibold">Experiences</h3>
              <Link to="/comming-soon">See All</Link>
            </div>

            {loading ? (
              <Spinner></Spinner>
            ) : (
              <>
                <div className="flex">
                  {[...Array(3)].map((test) => (
                    <HomeCard></HomeCard>
                  ))}
                </div>

                <div className="flex">
                  {allExp.map((exp, i) => (
                    <ExpCard key={exp.i} exp={exp}></ExpCard>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
