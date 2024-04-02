import { Button } from "@material-tailwind/react";
import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";

const Login = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-400 to-bluestrong">
      <div className="relative h-1/3 text-center text-white px-5">
        <p className="text-4xl relative pt-28 pb-3 font-bold leading-snug">
          Welcome Back
        </p>
        <p className="text-lg">
          Login to your account by entering your email <br /> and password
          below. Happy to see you back.
        </p>
      </div>
      <form onSubmit={(e)=> { 
        e.preventDefault()
        alert('submit');
      }} className="h-2/3 bg-white rounded-t-3xl mt-8 w-full px-4 pt-16">
        <div className="w-full grid grid-cols-12 border space-x-2 justify-center items-center rounded-full p-5">
          <div className="col-span-1">
            <AiOutlineUser size={25} className="text-blue-gray-200" />
          </div>
          <div className="col-span-10">
            <input
              type="text"
              placeholder="Your email, phone or ID number"
              className="border-none text-xl"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-12 border space-x-2 justify-center items-center rounded-full p-5 mt-8">
          <div className="col-span-1">
            <AiOutlineEye size={25} className="text-blue-gray-200" />
          </div>
          <div className="col-span-10">
            <input
              type="text"
              placeholder="Enter your password"
              className="border-none text-xl"
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end mb-4">
          <a href="/notification" className="text-blue-700 font-bold text-xl">
            Forgot Password
          </a>
        </div>

        <div className="flex mx-auto justify-center mt-6">
          <Button
            children="Log in"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="rounded-full font-medium text-xl normal-case col-span-3 w-full py-6 bg-greed"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
