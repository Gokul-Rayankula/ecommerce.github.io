import React from 'react';
import avatar from '../../images/avatar.svg';
import quality from '../../images/quality.svg';
import ecobulb from '../../images/ecobulb.jpg';
import truck from '../../images/truck.png';
import leaves from '../../images/leaves.svg';
import {Grid,Typography}  from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function About() {
    const classes=usestyles()
    return(
        <>
          <Grid container spacing={1} >
              <Grid item xs={12} sm={6} md={3}>
                  <img src={ecobulb} alt='ecobulb' className={classes.bulb}/>
                 
              </Grid>
              <Grid item xs={12} sm={6} md={4} >
                  <Typography className={classes.text}>
                  Sellsage is a certified minority enterprise for eco-friendly products. We are driven by a
                  passion for creating awareness of eco-friendly goods and making them accessible to the larger part of the world.
                  </Typography>

              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                  <Grid container direction='row' spacing={2}>
                      <Grid item >
                            <Grid container>
                                <Grid item>
                                    <img src={leaves} alt='leaves' className={classes.logo} />
                                    <Typography className={classes.logotext}>
                                      Eco-friendly Products
                                      </Typography>
                                </Grid> 
                                <Grid item>
                                    <img src={avatar} alt='avatar' className={classes.logo} />
                                    <Typography className={classes.logotext}>
                                    24x7 Support
                                      </Typography>
                                </Grid> 
                            </Grid>
                      </Grid>
                      <Grid item >
                      <Grid container>
                                <Grid item>
                                    <img src={quality} alt='leaves' className={classes.logo} />
                                    <Typography className={classes.logotext}>
                                    Guaranteed Quality
                                      </Typography>
                                </Grid> 
                                <Grid item>
                                    <img src={truck} alt='avatar' className={classes.logo} />
                                    <Typography className={classes.logotext}>
                                    Superior Logistics
                                      </Typography>
                                </Grid> 
                            </Grid>
                            
                      </Grid>

                  </Grid>

              </Grid>
          </Grid>
        </>  
    );
}
const usestyles=makeStyles({
    bulb:{
        width:'450px',
        height:'400px'
    },
    text:{
       textAlign:'left',
       marginTop:'5%',
       paddingLeft:'5%',
       fontWeight:'100 !important',
       fontSize:'30px !important',
    },
    logo:{
        marginTop:'5%',
        width:'150px',
        height:'100px',
        paddingLeft:'60px',
        alignItems:'center'
    },
    logotext:{
        marginTop:'5%',
        paddingLeft:'60px',
        textAlign:'center'

    }
})

export default About;