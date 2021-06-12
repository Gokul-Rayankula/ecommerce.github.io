import React,{useState,useEffect} from 'react';
import {PRODUCT_SLIDE} from '../../constants/slideinfo';
import {makeStyles} from '@material-ui/core/styles';
import {Card,Grid, Typography,Button} from '@material-ui/core';
import container from '../../images/palmleafcontainer.jpg';
import roundtray from '../../images/roundtray.jpg';
import heartbowl from '../../images/palmleafheartbowl.jpg';
import roundbowl from '../../images/roundbowl.jpg';
import roundplate from '../../images/roundplate.jpg';


export default function Products (){
    const [prd,setPrd] =useState({
        prdone :0,
        prdtwo:1,
        prdthree:2,
        prdfour:3
    })
    
    var product1=container
    var product2=heartbowl
    var product3=roundbowl
    var product4=roundplate
    if(PRODUCT_SLIDE[prd.prdone].src==='heartbowl'){
         product1=heartbowl
    }
    else if(PRODUCT_SLIDE[prd.prdone].src==='roundbowl'){
         product1=roundbowl
    }
    else if(PRODUCT_SLIDE[prd.prdone].src==='roundplate'){
         product1=roundplate
    }
    else if(PRODUCT_SLIDE[prd.prdone].src==='roundtray'){
         product1=roundtray
    }
    else{
         product1=container
    }
    if(PRODUCT_SLIDE[prd.prdtwo].src==='heartbowl'){
         product2=heartbowl
    }
    else if(PRODUCT_SLIDE[prd.prdtwo].src==='roundbowl'){
         product2=roundbowl
    }
    else if(PRODUCT_SLIDE[prd.prdtwo].src==='roundplate'){
         product2=roundplate
    }
    else if(PRODUCT_SLIDE[prd.prdtwo].src==='roundtray'){
         product2=roundtray
    }
    else{
         product2=container
    }
    if(PRODUCT_SLIDE[prd.prdthree].src==='heartbowl'){
         product3=heartbowl
    }
    else if(PRODUCT_SLIDE[prd.prdthree].src==='roundbowl'){
         product3=roundbowl
    }
    else if(PRODUCT_SLIDE[prd.prdthree].src==='roundplate'){
         product3=roundplate
    }
    else if(PRODUCT_SLIDE[prd.prdthree].src==='roundtray'){
         product3=roundtray
    }
    else{
         product3=container
    }
    if(PRODUCT_SLIDE[prd.prdfour].src==='heartbowl'){
         product4=heartbowl
    }
    else if(PRODUCT_SLIDE[prd.prdfour].src==='roundbowl'){
         product4=roundbowl
    }
    else if(PRODUCT_SLIDE[prd.prdfour].src==='roundplate'){
         product4=roundplate
    }
    else if(PRODUCT_SLIDE[prd.prdfour].src==='roundtray'){
         product4=roundtray
    }
    else{
         product4=container
    }


    
    const classes=usestyles()

    useEffect(() => {
      setInterval(changeproducts(),4000)
    },[ ])

    const changeproducts=() => {
    return () => setPrd(prd => ({prdone: (prd.prdone+1)%5,
        prdtwo:(prd.prdtwo+1)%5,
        prdthree:(prd.prdthree+1)%5,
        prdfour:(prd.prdfour+1)%5
    }))
       
    }


    return(
        <>
           <Typography className={classes.header}>
                    OUR PRODUCTS
           </Typography> 
           <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
             <Card className={classes.card}>
                <img className={classes.image} src={product1} alt='productimg' />
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdone].title}</Typography>
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdone].cost}</Typography>
                <Button size='large' className={classes.searchbutton}   variant='outlined' >Search Options</Button>
            </Card>
            </Grid>  
            <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <img className={classes.image} src={product2} alt='productimg' />
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdtwo].title}</Typography>
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdtwo].cost}</Typography>
                <Button size='large' className={classes.searchbutton}   variant='outlined' >Search Options</Button>
            </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <img className={classes.image} src={product3} alt='productimg' />
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdthree].title}</Typography>
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdthree].cost}</Typography>
                <Button size='large' className={classes.searchbutton}   variant='outlined' >Search Options</Button>
            </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <img className={classes.image} src={product4} alt='productimg' />
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdfour].title}</Typography>
                <Typography className={classes.text}>{PRODUCT_SLIDE[prd.prdfour].cost}</Typography>
                <Button size='large' className={classes.searchbutton}   variant='outlined' >Search Options</Button>
            </Card>
            </Grid>  
           </Grid>  
          </>  
    
        );
};

    const usestyles=makeStyles({
       image:{
           width:'300px',
           height:'400px'
       },
       header:{
        textAlign:'center',
        fontSize:'50px !important',
        fontWeight:'200 !important',
        marginTop:'2%',
        marginBottom:'4%'
      },
      searchbutton:{
         backgroundColor:'green',
         color:'white',
         marginLeft:'25%',
         '&:hover':{
            backgroundColor:'green',
            color:'white'}
         },
         text:{
            textAlign:'center'
         },
         card:{
            alignItems:'center',
            cursor:'pointer',
            marginLeft:'2%',
            width:'350px',
            boxShadow:' 0 0 5px 5px #dddddd',
            height:'500px !important'
         }
    });
