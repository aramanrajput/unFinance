import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {Grid,GridItem} from "@chakra-ui/react"
import Signup from './Signup'
import Signin from './Signin'
const Navbar = () => {
  return (
   
      <Grid templateColumns='repeat(4, 1fr)' borderWidth="1px" borderColor="black" px={4} gap={4}>
  <GridItem h='10' >   <Button><Link to="/">Home</Link></Button></GridItem>
  <GridItem  h='10'  > <Button><Link to="/dashboard">Dashboard</Link></Button></GridItem>
  <GridItem  h='10'  > <Signup></Signup></GridItem>
  <GridItem  h='10'  > <Signin></Signin></GridItem>
</Grid>
   
     
   
  )
}

export default Navbar
