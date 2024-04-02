import SkeletonApp from "../components/skeletApp";

const EditProfile = () => {
  return (
    <SkeletonApp
      title="Edit Profile"
      children={
        <>
          {/* profile page */}
          <div>
            <div className="flex justify-between p-5 py-7 my-1 border-b border-blue-gray-300">
              <div className="w-auto items-center">
                <div>Full name</div>
                <p className="text-xl font-bold mt-3">FRANCIS FON TEBOH</p>
              </div>
              <p className="border border-blue-gray-500 rounded-md h-7 px-3">
                Edit
              </p>
            </div>
            <div className="flex justify-between p-5 py-7 my-1 border-b border-blue-gray-300">
              <div className="w-auto items-center">
                <div>Email</div>
                <p className="text-xl font-bold mt-3">francfon@gmail.com</p>
              </div>
              <p className="border border-blue-gray-500 rounded-md h-7 px-3">
                Edit
              </p>
            </div>
            <div className="flex justify-between p-5 py-7 my-1 border-b border-blue-gray-300">
              <div className="w-auto items-center">
                <div>Phone number</div>
                <p className="text-xl font-bold mt-3">+237 79455487</p>
              </div>
              <p className="border border-blue-gray-500 rounded-md h-7 px-3">
                Edit
              </p>
            </div>
          </div>
        </>
      }
    />
  );
};

export default EditProfile;
