import React from 'react';
import {withRouter} from 'react-router-dom';
import {AppBar,Toolbar,Typography,Grid,Button,IconButton,TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ReactComponent as Logo} from '../../images/sellsage.svg';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header(props){
const classes=usestyles()
console.log('in header')
return(
    <>
       <AppBar className={classes.Appbar}>
          <Toolbar>
              <Grid container spacing={1}>
                                                      
                <Grid item xs={12} sm={12} md={3}>
                  <Logo  className={classes.Logo}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}  >
                  <Grid container spacing={3} className={classes.textcontainer}> 
                   <Grid item>
                    <Typography className={classes.appbartext}>
                      Home    
                    </Typography> 
                    </Grid> 
                    <Grid item>
                   <Typography className={classes.appbartext}>
                       About Us    
                   </Typography>
                   </Grid>
                   <Grid item>
                   <Typography className={classes.appbartext}>
                      Blog
                   </Typography>
                   </Grid>
                   <Grid item>
                   <Typography className={classes.appbartext}>
                      Shop   
                   </Typography>
                   </Grid>
                   <Grid item>
                   <Typography className={classes.appbartext}>
                      Wholesale
                   </Typography>
                   </Grid>
                   </Grid> 
                </Grid>
                   <Grid item xs={12} sm={12} md={3} >
                       <Grid container spacing={0}>
                           <Grid item>  
                               <Typography className={classes.logotext}>
                                   Login/SignUp
                               </Typography>
                               </Grid>    
                            <Grid item > 
                               <IconButton  > <ShoppingCartOutlinedIcon className={classes.icon} color='primary'/>
                               </IconButton>
                               </Grid>   
                               
                           </Grid>
                        <Grid container spacing={1}>
                            <Grid item>
                            <TextField className={classes.searchbar}  label="Search Products" />
                            </Grid>
                            <Grid item>
                               <Button size='medium' className={classes.searchbutton}   variant='outlined' >Search</Button>
                            </Grid>
                        </Grid>   
                           

                   </Grid>
              </Grid>

          </Toolbar>
      </AppBar>
  
    </>
)
}

const usestyles=makeStyles({
Logo:{
    width:'250px',
    height:'100px',
    marginLeft:'15%'
},
Appbar:{
    backgroundColor:'white !important',
    minHeight:'35px !important',
    position:'relative'
},
appbartext:{
    color:'black',
    cursor:'pointer',
    fontWeight:'300 !important',
    fontSize:'25px !important',
    
},
textcontainer:{
    marginTop:'5%'
},
logotext:{
    color:'black',
    cursor:'pointer',
    fontWeight:'500 !important',
    fontSize:'20px !important', 
    marginTop:'10%'
},
icon:{
    height:'35px',
    width:'50px',
    padding:'0%'
},
searchbar:{
      marginBottom:'5%'
},
searchbutton:{
    backgroundColor:'green',
    color:'white',
    borderRadius:'100px!important',
    '&:hover':{
        backgroundColor:'green',
        color:'white'
    }
}



});

export default withRouter(Header);