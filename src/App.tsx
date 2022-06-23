import React from 'react';
import Navbar from './components/navbar'
import Router from "./components/Router";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <div className="app">
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <Navbar links={[]} />
      </MantineProvider>
      <Router />
    </div>
  );
}

export default App;
