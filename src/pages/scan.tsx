import { Button } from "@material-tailwind/react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Scan = () => {
  return (
    <div className=" bg-blue-gray-50/50 h-screen">
      <div className="p-8">
        <img src="/scan.png" alt="scan" />
      </div>

      <div className="h-1/3 mt-32 bg-white m-4 rounded-xl">
        <div className="bg-white -mt-5 rounded-xl w-24 flex justify-center mx-auto">
          <div className="flex absolute justify-center mx-auto space-x-2 h-16 -mt-8 pt-3 bg-white w-24 rounded-xl">
            <span className="content-none bg-blue-gray-200 rounded-xl h-2.5 w-2.5"></span>{" "}
            <span className="content-none bg-greed/90 rounded-xl h-2.5 w-6"></span>
            <a
              href="/capture"
              className="content-none bg-blue-gray-200 rounded-xl h-2.5 w-2.5"
            />
          </div>
        </div>
        <div className="h-hull w-full text-center p-2 mt-8">
          <p className="text-2xl font-bold">
            Scan ID Cards/Passport of Visitors
          </p>
          <p className="text-lg mt-4 text-blue-gray-300 leading-relaxed">
            Manage visitors by scanning ID Cards or <br /> Passports and
            extracting visitor information.{" "}
          </p>

          <div className="grid grid-cols-4 space-x-2 mt-20 mx-4 items-center justify-center">
            <div className="col-span-1 flex justify-start">
              <BsArrowLeftCircle size={25} className="text-greed" />
            </div>
            <Button
              children="Scan now"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="rounded-full font-medium text-xl lowercase col-span-2 w-auto py-4 bg-greed"
            />
            <div className="col-span-1 flex justify-end">
              <BsArrowRightCircle size={25} className="text-greed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
