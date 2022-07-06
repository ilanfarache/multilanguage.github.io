import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const About = ({ lang }) => {

  
    

    const classes = useStyles();
    return (
        <div className={classes.root}>

            <span className={classes.titlePage}>{lang.titlePage}</span>

            <div className={classes.container}>
            <span className={classes.title}>{lang.title}</span>

            <span className={classes.text}>{lang.text}</span>
                </div>

            
         
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        flexDirection:'column',
        alignItems:'center'

    },
    titlePage: {

        color: 'white',
        textTransform: 'uppercase',
        fontSize: 40,
        marginBottom:40

    },
    title: {

        color: 'white',
        fontSize: 25

    },
    text: {

        color: 'white',
        fontSize: 18

    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        textAlign:'justify'

    }

}));
export default About