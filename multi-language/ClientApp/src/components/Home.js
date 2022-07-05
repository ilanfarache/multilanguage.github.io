import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavMenu from './NavMenu';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';



const Home = ({ lang }) => {

    

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavMenu />
            <SectionOne lang={lang.sectionOne} />
            <SectionTwo lang={lang.sectionTwo}/>
            <SectionThree lang={lang.sectionThree}/>
            
         
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        flexDirection: 'column',

    },

}));
export default Home