import { FaGithub, FaLinkedin, FaSpotify, FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Tooltip, Button } from "@nextui-org/react";
function konten3() {
  return (
    <div id="konten3" className='flex h-screen pt-20'>
      <div className='bg-gray-100 w-full flex flex-col h-auto gap-5 shadow-xl p-10 rounded-lg'>
        <div className="text-black w-full justify-center flex flex-col items-center">
          <p className="text-3xl">
            Serah Lah Mau Nulis Apaan
          </p>
          <p className="text-xl">
            Anggep Aja Ini Kata - Kata Mutiara
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/map2.png" className="w-2/5" />
          <div className="w-full flex justify-between px-48 mt-6">
            <Tooltip content="Github" placement="top" className="bg-teal-500 text-white">
              <Button isIconOnly className="bg-transparent text-teal-500 opacity-50 text-6xl h-24 w-24">
                <FaGithub />
              </Button>
            </Tooltip>
            <Tooltip content="LinkedIn" placement="top" className="bg-teal-500 text-white">
              <Button isIconOnly className="bg-transparent text-teal-500 opacity-50 text-6xl h-24 w-24">
                <FaLinkedin />
              </Button>
            </Tooltip>
            <Tooltip content="Spotify" placement="top" className="bg-teal-500 text-white">
              <Button isIconOnly className="bg-transparent text-teal-500 opacity-50 text-6xl h-24 w-24">
                <FaSpotify />
              </Button>
            </Tooltip>
            <Tooltip content="Twitch" placement="top" className="bg-teal-500 text-white">
              <Button isIconOnly className="bg-transparent text-teal-500 opacity-50 text-6xl h-24 w-24">
                <FaTwitch />
              </Button>
            </Tooltip>
            <Tooltip content="Youtube" placement="top" className="bg-teal-500 text-white">
              <Button isIconOnly className="bg-transparent text-teal-500 opacity-50 text-6xl h-24 w-24">
                <FaYoutube />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default konten3