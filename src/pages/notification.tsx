import { BsBell } from "react-icons/bs";
import SkeletonApp from "../components/skeletApp";

const Notification = () => {
  return (
    <SkeletonApp
      title="Notifications"
      children={
        <>
          <div className="flex justify-start w-full bg-white p-5 rounded-lg my-0.5 text-blue-gray-800 font-medium">
            <div className="w-20 flex items-center">
              <BsBell size={30} color="blue" />
            </div>
            <div className="w-full">
              <p><span className="font-bold">Tabe Lilian’s</span> information has been registered successfully.</p>
              <code>10 minutes ago</code>
            </div>
          </div>
          <div className="flex justify-start w-full bg-white p-5 rounded-lg my-0.5 text-blue-gray-800 font-medium">
            <div className="w-20 flex items-center">
              <BsBell size={30} color="blue" />
            </div>
            <div className="w-full">
              <p><span className="font-bold">Tabe Lilian’s</span> information has been registered successfully.</p>
              <code>10 minutes ago</code>
            </div>
          </div>
          <div className="flex justify-start w-full bg-white p-5 rounded-lg my-0.5 text-blue-gray-800 font-medium">
            <div className="w-20 flex items-center">
              <BsBell size={30} color="blue" />
            </div>
            <div className="w-full">
              <p><span className="font-bold">Tabe Lilian’s</span> information has been registered successfully.</p>
              <code>10 minutes ago</code>
            </div>
          </div>
          <div className="flex justify-start w-full bg-white p-5 rounded-lg my-0.5 text-blue-gray-800 font-medium">
            <div className="w-20 flex items-center">
              <BsBell size={30} color="blue" />
            </div>
            <div className="w-full">
              <p><span className="font-bold">Tabe Lilian’s</span> information has been registered successfully.</p>
              <code>10 minutes ago</code>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Notification;
