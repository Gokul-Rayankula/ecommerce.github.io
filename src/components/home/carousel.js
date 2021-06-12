import React,{useState,useEffect} from 'react';
import CarouselSlide from './content';
import { SLIDE_INFO } from '../../constants/slideinfo';
import {makeStyles} from '@material-ui/core/styles';


function Carousel(){
    let [index,setIndex]=useState(0)
    const classes=usestyles()
    const content = SLIDE_INFO[index];
    
    useEffect(() => {
        setInterval(setstate() ,4000)
    },[])
    
    const setstate = () => {
            return () => setIndex(index => (index+4)%3)
        
    }
    
    return (
        
            <CarouselSlide className={classes.format} content={ content }
            />

    );
}

const usestyles=makeStyles({
    format:{
    textAlign:'center',
    minWidth:'100%'
    }
})

export default Carousel;