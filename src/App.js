
import './App.css';

import { All } from './All';
import { FullStack } from './FullStack';
import { Cyber } from './Cyber';
import { DataScience } from './DataScience';


import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Tab, Tabs, AppBar, Toolbar, Typography } from '@mui/material'


const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <>{children}</>}
    </div>
  );
};
function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div className="App">
      {/* <nav >
        <ul style={{display:'flex', justifyContent:"space-evenly", alignItems:"center"}}>
          <li>
            <a href='/All'>All</a>
          </li>
          <li>
            <a href='/FullStack'>FullStack</a>
          </li>
          <li>
            <a href='/Cyber'>Cyber</a>
          </li>
          <li>
            <a href='/DataScience'>DataScience</a>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/All" element={<All/>}/>
        <Route path="/FullStack" element={<FullStack/>}/>
        <Route path="/Cyber" element={<Cyber/>}/>
        <Route path="/DataScience" element={<DataScience/>}/>
      </Routes> */}
       <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <Tabs>
            <Tab label="All" component={Link} to="/All" />
            <Tab label="FullStack" component={Link} to="/FullStack" />
            <Tab label="Cyber" component={Link} to="/Cyber" />
            <Tab label="DataScience" component={Link} to="/DataScience" />
          </Tabs>
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/All" element={<All />} />
        <Route path="/FullStack" element={<FullStack />} />
        <Route path="/Cyber" element={<Cyber />} />
        <Route path="/DataScience" element={<DataScience />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
