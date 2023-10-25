import React, { useContext, useEffect, useState } from "react";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { getImageUrl } from "../../api/imageUpload";
import { AuthContext } from "../../contexts/AuthProvider";
import { getRole, hostRequest } from "../../api/user";
import toast from "react-hot-toast";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    setLoading(true)
    getRole(user?.email).then((data) => {
      setRole(data);
      console.log(data);
      setLoading(false)
    });
  }, [user?.email]);

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
       {role ? (
        <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
          Request Sent, wait for admin approval
        </div>
      ) : (
        <>{!loading && <BecomeHostForm handleSubmit={handleSubmit} />}</>
      )}
    </div>
  );
};

export default BecomeAHost;
