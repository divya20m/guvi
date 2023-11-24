
import './App.css';
import {Button} from '@mui/material';
import { All } from './All';
import { FullStack } from './FullStack';
import { Cyber } from './Cyber';
import { DataScience } from './DataScience';
import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function App() {
  
  const [live, setLive] = useState('')
  const [practice, setPractice] =useState('')
  const [resources, setResources] =useState('')
  const [products, setProducts] = useState('')

  const handleChange1 = (event) => {
    setLive(event.target.value);
  };
  const handleChange2 = (event) => {
    setPractice(event.target.value);
  };
  const handleChange3= (event) => {
    setResources(event.target.value);
  };
  const handleChange4 = (event) => {
    setProducts(event.target.value);
  };



  return (
    <div className="App">
       <div className='top'>
        <div><img src='https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png'/></div>
        <div className='top-side'> 

          <Button style={{marginRight:"50px"}}>Courses</Button>
<div className='all-buttons'>

<div className='buttons'>
<Box sx={{ minWidth: 120 }}>
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Live Classes</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={live}
    label="Live Classes"
    onChange={handleChange1}
  >
    <MenuItem value={10}>Full Stack Developmemt Program(FSD)</MenuItem>
    <MenuItem value={20}>Automation And Testing Program</MenuItem>
    <MenuItem value={30}>IIT-M Advanced Program</MenuItem>
  </Select>
</FormControl>
</Box>
   </div>

   <div  className='buttons'>
   <Box sx={{ minWidth: 120 }}>
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Practice</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={practice}
    label="Age"
    onChange={handleChange2}
  >
    <MenuItem value={10}>CodeKata</MenuItem>
    <MenuItem value={20}>WebKata</MenuItem>
    <MenuItem value={30}>IDE</MenuItem>
  </Select>
</FormControl>
</Box>
   </div>

   <div className='buttons'>
   <Box sx={{ minWidth: 120 }}>
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Resources</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={resources}
    label="Resources"
    onChange={handleChange3}
  >
    <MenuItem value={10}>Reward</MenuItem>
    <MenuItem value={20} >Referal</MenuItem>
    <MenuItem value={30}>Blogs</MenuItem>
    <MenuItem value={40}>Forum Support</MenuItem>
  </Select>
</FormControl>
</Box>
   </div>

   <div className='buttons'>
   <Box sx={{ minWidth: 120 }}>
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Our Products</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={products}
    label="Our Products"
    onChange={handleChange4}
  >
    <MenuItem value={10}>HackerKid</MenuItem>
    <MenuItem value={20} >Guvi For Corporates</MenuItem>
  </Select>
</FormControl>
</Box>
   </div>
   
   </div>
    </div>


       </div>
      <Routes>
        <Route path="/All" element={<All />} />
        <Route path="/" element={<All />} />
        <Route path="/FullStack" element={<FullStack />} />
        <Route path="/Cyber" element={<Cyber />} />
        <Route path="/DataScience" element={<DataScience />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
  

export function NavigateButtons(){
  const Navigate=useNavigate()
  return(
   
<div className='NavigateButtons'>
       <Button onClick={()=>{Navigate("/All")}}>All</Button>
       <Button onClick={()=>{Navigate("/FullStack")}}>FullStack</Button>
       <Button onClick={()=>{Navigate("/Cyber")}}>Cyber</Button>
       <Button onClick={()=>{Navigate("/DataScience")}}>DataScience</Button>
       
       </div>
    
  )
}