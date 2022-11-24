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
import { useContext } from 'react'
import { AuthContext } from '../context/authcontext'
  
  const Signin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
let {signin}=useContext(AuthContext)
    let [errormsg,seterrormsg]=useState("")
let [data,setdata]= useState({
 
  email:"",
  password:""
})

let handleSubmit=(e)=>{
e.preventDefault()
console.log(data,"payload")
fetch("http://localhost:8080/user/login",{
method:"POST",

headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
}).then((res)=>res.json()).then((res)=>{
  console.log(res)
  if(!res.error){
    signin(res.data.token)
    seterrormsg("")
  }else{
seterrormsg(res.message)
  }
})
}


let handleChange=(e)=>{
let {name,value}=e.target
setdata({...data,[name]:value})
console.log(name,value)
}
  return (
    <>
      <Button onClick={onOpen}>Sign in</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleSubmit}>
<FormControl isRequired>
  
    <FormLabel>Email</FormLabel>
    <Input type="email" name ="email" onChange={handleChange} ></Input>
    <FormLabel>Password</FormLabel>
    <Input type="text" name ="password" onChange={handleChange} ></Input>
    <h2 style={{color:"red"}}>{errormsg}</h2>
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
  
  export default Signin
  