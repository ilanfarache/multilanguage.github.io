import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const SectionOne = ( {lang}) => {


    const classes = useStyles();
    return (
        <div className={classes.root}>

            <div className={classes.container}>

                <span>{lang.title}</span>
                <span>{lang.text}</span>
            </div>


        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent:'center',
        width: '100%',
        color: 'blue',
        height: '100vh',
     
        padding:10
      

    },
    container: {

        display: 'flex',
        flexDirection: "column",
        alignItems:'center',
        padding:'25px 20px',
        backgroundImage: 'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);',
        height: "80vh",
        width: "30%",
        borderRadius: 40,
        border: 'solid 4px white',
        color:'black'


    }

}));
export default SectionOne