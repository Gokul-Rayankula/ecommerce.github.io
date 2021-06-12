import React from 'react';
import {Grid,Typography,TextField,Button} from '@material-ui/core';
import {ReactComponent as Logo} from '../../images/bulk.svg';
import {makeStyles} from '@material-ui/core/styles'

export default function Bulk(){

    const classes=usestyles()
    return(
   <>

    <Grid container   className={classes.container} spacing={1}>
       <Grid item xs={12} sm={12} md={5} className={classes.item} >
         <Logo color='primary' className={classes.image} />

       </Grid>
       <Grid item className={classes.quoteitem} justify='center' xs={12} sm={12} md={5} >
           <Typography  className={classes.header}>GET A QUOTE</Typography> 
              <Grid container>
                 <Grid item xs={12} sm={4}>
                     <TextField className={classes.textfield} label='Name' variant='outlined' />
                 </Grid>
                 <Grid item xs={12} sm={6}>
                     <TextField className={classes.textfield} label='Email' variant='outlined' />
                 </Grid>
                 <Grid item xs={12} sm={7}>
                     <TextField className={classes.textfield} label='Products' variant='outlined' />
                 </Grid>
                 <Grid item xs={12} sm={5}>
                     <TextField className={classes.textfield} label='Organisation' variant='outlined' />
                 </Grid>
              </Grid>  
             <TextField className={classes.textfield} label='comments/Query' variant='outlined' />
             <Button className={classes.button} size='large' variant='outlined'>Submit</Button>

       </Grid>
    </Grid>

   </> 
)

}

const usestyles=makeStyles({
    container:{
       marginTop:'2%'
    },
    quoteitem:{
       marginLeft:'5%'
    },
    item:{
        marginTop:'2%',
        backgroundColor:'green',
        alignItems:'center'
    },
    image:{
        width:'450px',
        height:'300px',
        paddingLeft:'10%'
    },
    header:{
        textAlign:'center',
        fontWeight:'100 !important',
        fontSize:'30px !important'
    },
    textfield:{
        width:'100%',
        marginTop:'2%',
        padding:'10px',
        textAlign:'center'
        
    },
    button:{
        backgroundColor:'green',
        color:'white',
        marginLeft:'100%',
        '&:hover':{
           backgroundColor:'green',
           color:'white'}

    }
})