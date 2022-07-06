import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useHistory, useLocation } from "react-router-dom";


const NavMenu = ({ language, setLanguage, french, english , hebrew}) => {


    const [lang, setLang] = useState(french);

    let history = useHistory();
   



    const handleChangeLang = (event) => {
        setLanguage(event.target.value);

        if (event.target.value == "fr") {

            setLang(french)

        } else if (event.target.value == "en") {
            setLang(english)

        }
        else if (event.target.value == "he") {
            setLang(hebrew)
        }
        history.push(`${event.target.value}`);
       

    };

    const hangleChangePage = (event) => {
       
        event.preventDefault();


        let id = event.target.id;
        console.log("id",id);
        if (id == "home") {

            history.push(`/${language}`);
        }
        else if (id == "about") {

            history.push(`/about/${language}`);
        }
        else if (id == "contact") {

            /* history.push(`/${event.target.value}`);*/
            console.log("contact");
        }


    };


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.menu}>
                <span onClick={hangleChangePage} id="home" className={classes.span}>{lang.home}</span>
                <span onClick={hangleChangePage} id="about" className={classes.span}>{lang.about}</span>
             {/*   <span onClick={hangleChangePage} id="contact" className={classes.span}>Contact</span>*/}
            </div>

            <div className={classes.select}>
                <FormControl className={classes.formControl}>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        onChange={handleChangeLang}
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
        justifyContent: 'space-between',
        padding: '0 10px',
        width: '100%',
        background: '#ADADAD',
        height: 50,
        marginTop: 20,
        marginBottom: 60,
        borderRadius: 10

    },
    menu: {

        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',

    },
    span: {
        color: 'white',
        padding: '0 10px',
        cursor:'pointer'

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