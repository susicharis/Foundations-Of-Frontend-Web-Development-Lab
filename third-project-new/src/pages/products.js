import React from "react";
import Navbar from './Navbar';
import { Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CrniBlokovi from '../pictures/cigle.jpg';
import obicniBlokovi from '../pictures/betonski.jpg';
import ZeljezoBob from '../pictures/zeljezo.jpg';
import './products.css'; 

// Sixth and Seventh Requirement --------------------------------------- //
const theme = createTheme({
  palette: {
    primary: {
      main: '#eaf60d',
    },
    
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: 8, 
    
  },
  
});

function Products() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        
        <Typography variant="h1" className="h1products">PRODUCTS</Typography>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <img src={CrniBlokovi} alt="Crni Blokovi" className="imgCigle" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={obicniBlokovi} alt="Obični Blokovi" className="imgBetonski" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={ZeljezoBob} alt="Željezo" className="imgZeljezo" />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default Products;
