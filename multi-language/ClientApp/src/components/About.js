import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavMenu from './NavMenu';

import { useState } from 'react';



const About = ({ lang }) => {

  
    

    const classes = useStyles();
    return (
        <div className={classes.root}>
         {/*   <NavMenu />*/}
            <span className={classes.title}>{lang.title}</span>
            
         
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        flexDirection:'column',
        alignItems:'center'

    },
    title: {

        color: 'white',
        textTransform: 'uppercase',
        fontSize:40

    }

}));
export default About