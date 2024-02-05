// import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

function Navigation() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div className='bg-teal-500 sticky top-0 z-10 shadow-lg w-full h-20 flex gap-2 items-center justify-between px-10 select-none'>
      <NavHashLink to='#home' >
        <div className="flex items-center">
          <img src="/logowhite.png" className="w-20 h-20" />
          MasHel
        </div>
      </NavHashLink>
      <div className="flex justify-center">
      <NavHashLink to="#konten1" className="hover:bg-teal-400 focus:bg-teal-400 text-white px-4 py-2 rounded-md">
        <div className="flex items-center">
          Konten 1
        </div>
      </NavHashLink>
      <a href="#konten2" className={'hover:bg-teal-400 focus:bg-teal-400 text-white px-4 py-2 rounded-md'}>
        <div className="flex items-center">
          Konten 2
        </div>
      </a>
      <a href="#konten3" className={'hover:bg-teal-400 focus:bg-teal-400 text-white px-4 py-2 rounded-md'}>
        <div className="flex items-center">
          Konten 3
        </div>
      </a>
      <a href="#konten4" className={'hover:bg-teal-400 focus:bg-teal-400 text-white px-4 py-2 rounded-md'}>
        <div className="flex items-center">
          Konten 4
        </div>
      </a>
      </div>
      <div className="flex justify-end">

      <Button onPress={onOpen}  className="bg-teal-700 shadow-xl text-white">
        Login
      </Button>
      </div>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        className="bg-opacity-70"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black text-center">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  className="text-black border-black"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  className="text-black border-black"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link className="text-teal-400" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="text-teal-500" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-teal-500 text-white" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Navigation