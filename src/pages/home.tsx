import {Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Home() {
  type Option = {
    id: number;
    content: string;
  };
  const options: Array<Option> = [
    {
      id: 1,
      content: "Français",
    },
    {
      id: 2,
      content: "English",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col ring bottom-0 bg-gradient-to-tr from-blue-500 to-blue-800 items-center justify-between text-white p-24">
      <div className="fixed bottom-0 h-96 w-full text-center items-center justify-center flex">
        <div className="h-auto">
          <div className="w-full flex justify-center mx-auto">
            <img
              src="/logo.png"
              alt="logo"
              className="max-w-[75%] text-center"
            />
          </div>
          <div className="text-2xl text-center font-medium mt-5 w-full">
            Visitor & Vehicle Information <br /> Management System
          </div>
          <div className="my-32">
            <div className="flex justify-center mx-auto space-x-2">
              <span className="content-none bg-greeb rounded-xl h-2.5 w-6"></span>
              <a href="/scan" className="content-none bg-blue-gray-200 rounded-xl h-2.5 w-2.5" />
              <a href="/capture" className="content-none bg-blue-gray-200 rounded-xl h-2.5 w-2.5" />
            </div>
          </div>
          <div className="flex justify-center items-center mx-auto mb-32">
            <div className="w-auto text-white mt-3">
              <Select
                // label={
                //   <div className="flex w-auto">
                //     <p className="flex text-center items-center mt-3">

                    

                //     </p>
                //     <p className="text-white mt-3">Select Language</p>
                //   </div>
                // }
                label={'Choose language'}
                placeholder='white'
                color="gray"
                defaultValue={''}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="!bg-green-400/10 text-white text-md"
              >
                {options.map((option: Option) => (
                  <Option
                    key={option?.id}
                    value={option?.content}
                    data-id={option?.content}
                  >
                    <Link to={'/scan'}>
                      {option?.content}
                    </Link>
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
