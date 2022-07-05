import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const NavMenu = () => {

    const [language, setLanguage] = useState('fr');

    const handleChange = (event) => {
        setLanguage(event.target.value);


    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.menu}>
            <span className={classes.span}>Home</span>
            <span className={classes.span}>About</span>
            <span className={classes.span}>Contact</span>
            </div>

            <div className={classes.select}>
                <FormControl className={classes.formControl}>
            
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        onChange={handleChange}
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'fr'}>Francais</MenuItem>
                        <MenuItem value={'he'}>עברית</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:'0 10px',
        width: '100%',
        background: '#ADADAD',
        height: 50,
        marginTop: 20,
        borderRadius:10
      
    },
    menu: {

        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',

    },
    span: {
        color: 'white',
        padding:'0 10px'

    },
    select: {
        padding: '0 10px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

}));
export default NavMenu