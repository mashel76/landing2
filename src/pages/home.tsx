import { Button, Divider } from '@nextui-org/react'
import { FaInfoCircle, FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function home() {
    return (
        <div className='select-none'>
            <div className='flex gap-2'>
                <div className='w-1/2 flex-col flex pl-48 pt-20'>
                    <div className='text-5xl text-black pb-2'>INI TULISAN GEDE POKOKNYA, GATAU NULIS APAAN TERSERAH</div>
                    <div className='text-2xl text-black font-light pb-2'>INI TULISAN GEDE POKOKNYA GATAU NULIS APAAN TERSERAH</div>
                    <Button className='bg-teal-500 text-2xl w-48 py-8 shadow-xl text-white my-10'>
                        Get Started
                    </Button>
                </div>
                <div className='w-1/2 flex items-center'>
                    <img src='/viking2.png' width={'60%'} />
                </div>
            </div>
            <div className='h-[21rem] flex justify-center items-center'>
                <div className='bg-gray-100 shadow-2xl rounded-xl w-3/4 h-32 flex items-center space-x-48 justify-center text-black'>
                    <div className='flex flex-col gap-2'>
                        <FaInfoCircle className='text-5xl text-teal-500' />
                        Data 1
                    </div>
                    <Divider orientation="vertical" />
                    <div className='flex flex-col gap-2'>
                        <FaRegUserCircle className='text-5xl text-teal-500' />
                        Data 1
                    </div>
                    <Divider orientation="vertical" />
                    <div className='flex flex-col gap-2'>
                        <FaLocationDot className='text-5xl text-teal-500' />
                        Data 1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home