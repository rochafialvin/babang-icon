import React, { useState } from 'react';
import './App.css';
import { Button, Container, Grid, Typography } from '@material-ui/core'

import AddBoxIcon from '@material-ui/icons/AddBox';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function App() {

  const [addBox, setAddBox] = useState(true)
  const [addCircle, setAddCircle] = useState(true)
  const [arrow, setArrow] = useState(true)

  return (
    <Container>              
      <Button onClick={() => {setAddBox(!addBox)}} > 
        { addBox ? 
          <AddBoxIcon fontSize="large"/> : 
          <AddBoxOutlinedIcon fontSize="large"/> 
        }
      </Button>

      <Button onClick={() => {setAddCircle(!addCircle)}} > 
        { addCircle ? 
          <AddCircleIcon fontSize="large"/> : 
          <AddCircleOutlineOutlinedIcon fontSize="large"/> 
        }
      </Button>

      <Button onClick={() => {setArrow(!arrow)}} > 
        { arrow ? 
          <ArrowForwardOutlinedIcon fontSize="large"/> : 
          <ArrowForwardIosIcon fontSize="large"/> 
        }
      </Button>
    </Container>
  );
}





export default App;
