import { BsBell } from "react-icons/bs";
import SkeletonApp from "../components/skeletApp";
import { BiChevronRight, BiLogIn } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";


const Profile = () => {
  return (
    <SkeletonApp
      title="Profile"
      children={
        <>
          {/* profile page */}
          <div className="flex flex-col items-center justify-center mx-auto mt-8  ">
            <img src="/user.png" alt="" className="w-1/3" />
            <p className="text-2xl font-bold mt-3">FRANCIS FON TEBOH</p>
            <p className="py-2.5 px-7 bg-greed/5 text-greed rounded-full mt-4">
              francfon@gmail.com
            </p>
          </div>
          <hr className="bg-blue-gray-100 h-0.5 mt-6" />
          <div>
            <div className="flex justify-between p-5 py-7 my-1">
              <div className="flex flex-start space-x-3 w-auto items-center">
                <div>
                  <AiOutlineUser size={30} className="text-blue-500" />
                </div>
                <p>Edit Profile</p>
              </div>
              <BiChevronRight size={35} />
            </div>
            <div className="flex justify-between p-5 py-7 my-1">
              <div className="flex flex-start space-x-3 w-auto items-center">
                <div>
                  <BsBell size={30} className="text-blue-500" />
                </div>
                <p>Setting</p>
              </div>
              <BiChevronRight size={35} />
            </div>
            <div className="flex justify-between p-5 py-7 my-1 text-red-400">
              <div className="flex flex-start space-x-3 w-auto items-center">
                <div>
                  <BiLogIn size={30} />
                </div>
                <p>Log out</p>
              </div>
              <BiChevronRight size={35} />
            </div>
          </div>
        </>
      }
    />
  );
};

export default Profile;
