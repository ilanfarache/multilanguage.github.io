import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/';
import { englishLang } from './languages/english'
import { frenchLang } from './languages/french'
import {  hebrewLang } from './languages/hebrew'
import { useState } from 'react';
import About from './components/About';
import NavMenu from './components/NavMenu';


const useGlobalStyles = makeStyles((theme) => ({
   

    "@global": {

        html: {

            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'black',
    

        },

        body: {


            maxWidth: 1396,
            width: '100%',
            maxHeight: '100vh',
            backgroundColor: 'black'
        },

    }
}));
const theme = createTheme({});

function MyThemeProvider({ children }) {
    useGlobalStyles();
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const App = () => {

    const [language, setLanguage] = useState('fr');
    return (
        <MyThemeProvider>
            <NavMenu language={language} setLanguage={setLanguage} french={frenchLang.NavBar} english={englishLang.NavBar} hebrew={hebrewLang.NavBar}/>
            <Route exact path={["/fr", "/"]} component={() => <Home lang={frenchLang.home}  />}  />
            <Route path='/en' component={() => <Home lang={englishLang.home} />} />
            <Route path='/he' component={() => <Home lang={hebrewLang.home} />} />


            <Route exact path={["/about/fr", "/about"]} component={() => <About lang={frenchLang.about} />} />
            <Route path='/about/en' component={() => <About lang={englishLang.about} />} />
            <Route path='/about/he' component={() => <About lang={hebrewLang.about} />} />
        </MyThemeProvider>
    );

}

export default App;