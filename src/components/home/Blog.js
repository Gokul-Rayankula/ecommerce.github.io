import React from 'react';

import {Card,Typography,Grid}  from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';

export default function Blog(){

    const classes=usestyles()
    return(
        <>
           <Typography className={classes.header}>
               BLOG
           </Typography>
           <Grid container spacing={1}>
               <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <img src={blog1} alt='blogimg' className={classes.images}/>
                        <Typography className={classes.heading}>
                        Top 10 most deadly single-use plastic items for marine life found in the ocean & their eco alternatives
                        </Typography>
                        <Typography className={classes.info}>
                        On this World Ocean Day, let’s identify the top 10 most deadly single-use plastic items for marine life found in the ocean
                        and offer eco alternatives to step by step solve these issues human beings have created over the years.
                        </Typography>
                    </Card>   
               </Grid>
               <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                    <img src={blog2} alt='blogimg' className={classes.images} />
                        <Typography className={classes.heading}>
                        World Environment Day: 3 ways to bring damaged ecosystems back to life
                        </Typography>
                        <Typography className={classes.info}>
On June 5th, we celebrate World Environment Day, the official day designated by the United Nations to bring awareness and 
support actions to protect the environment.
                        </Typography>
                    </Card>  
               </Grid>
               <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                    <img src={blog3} alt='blogimg' className={classes.images} />
                        <Typography className={classes.heading}>
                        How to organize an eco-friendly wedding
                        </Typography>
                        <Typography className={classes.info}>
                        The wedding industry can be inherently wasteful. In fact, on average 400lbs of trash is produced for one wedding. We’ve asked Emily & Maria,
                         two wedding planners, to share their expertise on how to best organize an eco-friendly wedding. 
                        </Typography>
                    </Card>  
               </Grid>
           </Grid>
        </>  


    );
}

const usestyles=makeStyles({
   header:{
         textAlign:'center',
         fontSize:'50px !important',
         fontWeight:'200 !important',
         marginTop:'2%',
         marginBottom:'4%'
   },
   heading:{
    textAlign:'left',
    fontSize:'20px !important',
    fontWeight:'400 !important',
    padding:'2%'

   },
   info:{
    textAlign:'left',
    fontSize:'15px !important',
    fontWeight:'100 !important',
    padding:'2%'

   },
   images:{
       width:'100%',
       height:'300px !important',
       alignSelf:'center'
      
   },
   card:{
       alignItems:'center',
       borderRadius:'25px',
       cursor:'pointer',
       marginLeft:'2%',
       boxShadow:' 0 0 5px 5px #dddddd',
       height:'500px !important'

            
   }
});