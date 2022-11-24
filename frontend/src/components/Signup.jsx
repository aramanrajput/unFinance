import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button, useDisclosure, FormLabel, Input, FormControl
  } from '@chakra-ui/react'


  import React, { useState } from 'react'
import { Form } from 'react-router-dom'
  
  const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

let [data,setdata]= useState({
    username:"",
    email:"",
    password:""
})

let handleSubmit=(e)=>{
e.preventDefault()
console.log(data,"payload")
fetch("http://localhost:8080/user/register",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(data)
}).then((res)=>res.json()).then((res)=>{console.log(res)})
}


let handleChange=(e)=>{
let {name,value}=e.target
setdata({...data,[name]:value})
console.log(name,value)
}

  return (
    <>
      <Button onClick={onOpen}>Sign up</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        <form onSubmit={handleSubmit}>
<FormControl isRequired>
    <FormLabel>Username</FormLabel>
    <Input type="text" name ="username" onChange={handleChange} ></Input>
    <FormLabel>Email</FormLabel>
    <Input type="email" name ="email" onChange={handleChange} ></Input>
    <FormLabel>Password</FormLabel>
    <Input type="text" name ="password" onChange={handleChange} ></Input>
    <Input mt="10" placeholder='submit' type="submit"/>
</FormControl>
        </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
  }
  
  export default Signup
  