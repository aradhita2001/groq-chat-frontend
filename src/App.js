import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import ChatContainer from './components/ChatContainer';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatContainer />
    </ThemeProvider>
  );
}

export default App;
