import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header';
import Carousel from './carousel';
import {Grid} from '@material-ui/core';
import About from './About';
import Blog from './Blog';
import Product from './Products';
import Bulk from './Bulk';
import Footer from './Footer';

class Home extends Component {
render(){
    return(
    <Grid container direction='row' spacing={1}> 
     <Grid item xs={12}>
      <Header />
     </Grid>
      <Grid item xs={12}>
      <Carousel />
     </Grid>
     <Grid item xs={12}>
          <About />
     </Grid>
     <Grid item xs={12}>
          <Product />
     </Grid>
     <Grid item xs={12}>
          <Blog />
     </Grid>
     <Grid item xs={12}>
          <Bulk />
     </Grid>
     <Grid item xs={12}>
          <Footer />
     </Grid>
     
 </Grid>  
     
    )
}

}

export default withRouter(Home)