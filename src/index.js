import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ChakraProvider,ColorModeScript,extendTheme} from '@chakra-ui/react'
const config={intialColorMode:'dark'}
const theme=extendTheme({config})

ReactDOM.render(
 <ChakraProvider theme={theme} >
<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <App/>
</ChakraProvider>
,document.getElementById('root'))



