import React from 'react'
import {Input,FormControl} from "@chakra-ui/react"
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <form  action="https://unfinance1234.herokuapp.com/store" method="post" enctype="multipart/form-data">
      <FormControl>
      <Input type="file" name="file" />
      <Input type="submit" placeholder='Upload'/>
</FormControl>
      </form>
     
    </div>
  )
}

export default Dashboard
