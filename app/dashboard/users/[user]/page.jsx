import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";

async function getUserData(slug) {
  const response = await axios.get(`http://localhost:3000/api/users/${slug}`);
  return response.data;
}


const SingleUser = async ({ params }) => {
  const { user } = await getUserData(params.user);
  return (
    <div className="flex flex-col items-center   ">
      <h1 className="text-2xl mt-4  mb-5">User Information</h1>

      <div className="row w-full  flex xl:flex-row flex-col  ">
      <div className="w-full personal-info  overflow-x-hidden p-4 ">
        <div className="flex flex-col md:flex-row ">
          <div className="personal-details md:w-4/12 flex justify-center items-center border-b md:border-b-0  p-4">
            <h1 className="md:text-sm text-neutral-400 hover:text-neutral-200 transition-all duration-300 ease-in-out">Personal Details</h1>
          </div>
          <div className="SingleUserData w-full font-sans md:w-9/12 flex flex-wrap justify-evenly p-4">
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className="text-md">Username</label>
                <span className="text-sm text-red-500">{user.username}</span>
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">Google Id</label>
                <span className="text-sm text-red-500">{user.googleId}</span>
              </div>
              <div className="role flex flex-col mb-4">
                <label className="text-md">Role</label>
                <span className="text-sm text-red-500">{user.role}</span>
              </div>
            </div>
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className="text-md">Email</label>
                <span className="text-sm text-red-500">{user.email}</span>
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">Date</label>
                <span className="text-sm text-red-500">{user.createdAt}</span>
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">Email Subscription</label>
                <span className="text-sm text-red-500">{user.emailSubscription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full contact-info     overflow-x-hidden p-4">
        <div className="flex flex-col md:flex-row h-full ">
          <div className="personal-details md:w-4/12 flex justify-center items-center border-b md:border-b-0  p-4">
            <h1 className="md:text-sm text-neutral-400 hover:text-neutral-200 transition-all duration-300 ease-in-out">Contact Info</h1>
          </div>
          <div className="SingleUserData w-full md:w-9/12 font-sans flex flex-wrap justify-evenly p-4">
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Full Name</label>
                {user.contactInfo ? <span className="text-sm text-red-500">{user.contactInfo.Fullname}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Phone</label>
                {user.contactInfo ? <span className="text-sm text-red-500">{user.contactInfo?.Phone}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Email</label>
                {user.contactInfo ? <span className="text-sm text-red-500">{user.contactInfo.Email}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
            </div>
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className="text-md">Comments</label>
                {user.contactInfo ? <span className="text-sm text-red-500">{user.contactInfo.Comments}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      
      


      <div className="row w-full  flex xl:flex-row flex-col">
      <div className="w-full Delivery-address   overflow-x-hidden  p-4">
        <div className="flex flex-col md:flex-row ">
          <div className="personal-details md:w-4/12 flex justify-center items-center border-b md:border-b-0  p-4">
            <h1 className="md:text-sm text-neutral-400 hover:text-neutral-200 transition-all duration-300 ease-in-out">Delivery Details</h1>
          </div>
          <div className="SingleUserData font-sans w-full md:w-9/12 flex flex-wrap justify-evenly p-4">
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Company OR recipient</label>
                {user.deliveryAddress ? <span className="text-sm text-red-500">{user.deliveryAddress.companyORrecipient}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Country</label>
                {user.deliveryAddress ? <span className="text-sm text-red-500">{user.deliveryAddress.Country}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Address 1</label>
                {user.deliveryAddress ? <span className="text-sm text-red-500">{user.deliveryAddress.Address_1}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
            </div>
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className="text-md">Address 2</label>
                {user.deliveryAddress ? <span className="text-sm text-red-500">{user.deliveryAddress.Address_2}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">Date</label>
                {user.deliveryAddress ? <span className="text-sm text-red-500">{user.deliveryAddress.Zip_Code}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">City</label>
                {user.deliveryAddress ? <span className="text-sm text-red-500">{user.deliveryAddress.City}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full billing-address    overflow-x-hidden p-4 ">
        <div className="flex flex-col md:flex-row  ">
          <div className="personal-details md:w-4/12 flex justify-center items-center border-b md:border-b-0  p-4">
            <h1 className="md:text-sm text-neutral-400 hover:text-neutral-200 transition-all duration-300 ease-in-out">Billing Details</h1>
          </div>
          <div className="SingleUserData w-full font-sans md:w-9/12  flex flex-wrap justify-evenly p-4">
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Company OR recipient</label>
                {user.billingAddress ? <span className="text-sm text-red-500">{user.billingAddress.companyORrecipient}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Country</label>
                {user.billingAddress ? <span className="text-sm text-red-500">{user.billingAddress.Country}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="email flex flex-col mb-4">
                <label className=" text-sm md:text-md">Address 1</label>
                {user.billingAddress ? <span className="text-sm text-red-500">{user.billingAddress.Address_1}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
            </div>
            <div className="Email-Date w-full md:w-1/2 flex flex-col p-4">
              <div className="email flex flex-col mb-4">
                <label className="text-md">Address 2</label>
                {user.billingAddress ? <span className="text-sm text-red-500">{user.billingAddress.Address_2}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">Date</label>
                {user.billingAddress ? <span className="text-sm text-red-500">{user.billingAddress.Zip_Code}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
              <div className="date flex flex-col mb-4">
                <label className="text-md">City</label>
                {user.billingAddress ? <span className="text-sm text-red-500">{user.billingAddress.City}</span> : <span className="text-sm text-red-500">No Data</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      
      
    </div>
  );
};

export default SingleUser;
