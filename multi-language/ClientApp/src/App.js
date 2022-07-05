import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/';
import { englishLang } from './languages/english'
import { frenchLang } from './languages/french'
import {  hebrewLang } from './languages/hebrew'


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

   
    return (
        <MyThemeProvider>
            <Route exact path='/' component={() => <Home lang={englishLang.home}  />}  />
            {/*<Route  path='/en' component={() => <Home lang={englishLang.home} />} />*/}
            {/*<Route  path='/he' component={() => <Home lang={hebrewLang.home} />} />*/}
        </MyThemeProvider>
    );

}

export default App;