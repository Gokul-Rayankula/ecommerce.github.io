import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

export default function CarouselSlide(props) {
    const { backgroundColor, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            minWidth:'100%',
            minHeight:'250px' ,
            textAlign:'center',
            cursor:'pointer'
           
        } 
    }));

    const classes = useStyles();
    return (
       
        <Card className={classes.card}>
            <h1 style={{marginTop:'100px'}}>{title}</h1> 
        </Card> 
    
    );
}
