import React from "react";
import { BiScan } from "react-icons/bi";
import { BsHouse, BsHouseDoorFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


type Props = {
  children: React.ReactNode,
  title: string
};

const SkeletonApp = ({children, title}: Props) => {

  const navigate = useNavigate()

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-400 to-bluestrong">
      <div className="flex justify-start relative text-center text-white px-5 py-[2.5rem]">
        <div 
          onClick={() => navigate(-1)}
          className="w-auto cursor-pointer">
          <FiArrowLeft size={20} />
        </div>
        <div className="w-full text-center text-xl -ml-6">
          {title}
        </div>
      </div>
      <div
        className="h-full bg-blue-gray-50 mt-8 w-full px-4 pt-3 overflow-auto"
      >{children}
      </div>
      <div className="grid grid-cols-5 fixed w-screen bottom-0 space-x-1 bg-white pb-7 pt-3 -mt-6 justify-center text-center rounded-xl px-4">
        <div className="col-span-1 p-1 text-blue-gray-200 flex justify-center mx-auto">
         <BsHouseDoorFill className="" size={30}/>
        </div><div className="col-span-1 p-1 text-blue-gray-200 flex justify-center mx-auto">
         <BsHouse size={30}/>
        </div>
        <div className="col-span-1 p-1 flex justify-center items-center mx-auto -mt-7 bg-gradient-to-tr from-blue-400 to-bluestrong rounded-full w-16 h-16">
         <BiScan color="white" size={30}/>
        </div><div className="col-span-1 p-1 text-blue-gray-200 flex justify-center mx-auto">
         <BsHouse size={30}/>
        </div><div className="col-span-1 p-1 text-blue-gray-200 flex justify-center mx-auto">
         <BsHouse size={30}/>
        </div>
      </div>
    </div>
  );
};

export default SkeletonApp;
