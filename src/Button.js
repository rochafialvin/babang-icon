import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core'



function Btn(props) {
  return (
    <Container>              
      <Button onClick={() => {setAddBox(!addBox)}} > 
        { addBox ? 
          <AddBoxIcon fontSize="large"/> : 
          <AddBoxOutlinedIcon fontSize="large"/> 
        }
      </Button>
    </Container>
  );
}





export default Btn;
