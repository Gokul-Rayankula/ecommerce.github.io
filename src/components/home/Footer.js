import React from 'react';

import {Grid,Typography,TextField,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import logofooter from '../../images/new_logo_foot.svg';


export default function Footer(){
    const classes=usestyles()
    return(
         <>
          <Grid container className={classes.container}>
             <Grid item xs={12} sm={6} md={4} >
               <img className={classes.img}  src={logofooter} alt='sellsageimg' />       
             </Grid>
             <Grid item item xs={12} sm={6} md={4}>
                <Typography className={classes.header}>
                    Quicklinka
                </Typography>
                <Typography className={classes.text}>
                    Downloads
                </Typography>
                <Typography className={classes.text}>
                    FAQ
                </Typography>
                <Typography className={classes.text}>
                    Contact Us
                </Typography>
                <Typography className={classes.text}>
                    Shipping & Return Policy
                </Typography>
             </Grid>

             <Grid  item xs={12} sm={12} md={4}>
                <Typography className={classes.header}>
                    WEEKLY UPDATES
                </Typography>
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}}  className={classes.textfield}  label='Name' variant='outlined' />
               <Typography>
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}}  className={classes.textfield}   label='Your Email' variant='outlined' />
                </Typography> 
                <Button className={classes.button} >SUBSCRIBE</Button>
             </Grid>
          </Grid>  

         </>
    );

}
const usestyles=makeStyles({
    container:{
        marginTop:'0%',
        backgroundColor:'#222222'

    },
    text:{
        color:'#ddd',
        textAlign:'center',
        paddingTop:'3%',
        fontWeight:'10 !important'
    },
    img:{
          height:'150px'
          
    },
    header:{
        fontWeight:'500 !important',
        color:'white',
        textAlign:'center',
        paddingTop:'3%',

    },
    textfield:{
        backgroundColor:'white',
        color:'black',
        marginTop:'2%',
        alignItems:'center',
        marginLeft:'30%',
        paddingBottom:'2%',
        height:'30px'
    
    },
    button:{
        backgroundColor:'green',
        color:'white',
        marginLeft:'30%',
        marginTop:'2%',
        '&:hover':{
           backgroundColor:'green',
           color:'white'}
    }
}
);