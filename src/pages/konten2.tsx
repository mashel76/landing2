import { GiTakeMyMoney } from "react-icons/gi";
import { Button } from "@nextui-org/react";
function konten2() {
  return (
    <div id="konten2" className='flex h-screen pt-20'>
      <div className='bg-gray-100 w-full flex flex-col h-auto gap-5 shadow-xl p-10 rounded-lg'>
        <div className="text-black w-full justify-center flex flex-col items-center">
          <p className="text-3xl">
            Choose Your Plan
          </p>
          <p className="text-xl">
            Let's choose the package that is best for you and explore it happily and cheerfully.
          </p>
        </div>
        <div className="h-full flex justify-between px-96 py-20 select-none text-black">
          <div className="border-3 hover:bg-gray-300 shadow-2xl rounded-xl hover:scale-110 flex flex-col items-center justify-center ease-in-out duration-300 border-teal-500 h-full w-64">
            <GiTakeMyMoney className="text-9xl text-teal-500 mt-10" />
            <div className=" w-full h-full items-center flex flex-col">
              <p className="text-xl mt-28">
                ✔ centang 1
              </p>
              <p className="text-xl">
                ✔ centang 1
              </p>
              <p className="text-xl">
                ✔ centang 1
              </p>
              <p className="text-xl mb-28">
                ✔ centang 1
              </p>
              <Button className="bg-transparent hover:bg-teal-500 hover:text-white border-2 border-teal-500 text-teal-500">
                Select Plan
              </Button>
            </div>
          </div>
          <div className="border-3 hover:bg-gray-300 shadow-lg rounded-xl hover:scale-110 flex flex-col items-center justify-center ease-in-out duration-300 border-teal-500 h-full w-64">
            <GiTakeMyMoney className="text-9xl text-teal-500 mt-10" />
            <div className=" w-full h-full items-center flex flex-col">
              <p className="text-xl mt-28">
                ✔ centang 1
              </p>
              <p className="text-xl">
                ✔ centang 1
              </p>
              <p className="text-xl">
                ✔ centang 1
              </p>
              <p className="text-xl mb-28">
                ✔ centang 1
              </p>
              <Button className="bg-transparent hover:bg-teal-500 hover:text-white border-2 border-teal-500 text-teal-500">
                Select Plan
              </Button>
            </div>
          </div>
          <div className="border-3 hover:bg-gray-300 shadow-lg rounded-xl hover:scale-110 flex flex-col items-center justify-center ease-in-out duration-300 border-teal-500 h-full w-64">
            <GiTakeMyMoney className="text-9xl text-teal-500 mt-10" />
            <div className=" w-full h-full items-center flex flex-col">
              <p className="text-xl mt-28">
                ✔ centang 1
              </p>
              <p className="text-xl">
                ✔ centang 1
              </p>
              <p className="text-xl">
                ✔ centang 1
              </p>
              <p className="text-xl mb-28">
                ✔ centang 1
              </p>
              <Button className="bg-transparent hover:bg-teal-500 hover:text-white border-2 border-teal-500 text-teal-500">
                Select Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default konten2