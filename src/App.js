import React, { Component } from 'react';
import { AppProvider } from './context/AppContext'
import PageLayout from './components/Layout/PageLayout'

class App extends Component {
  render() {
    return (
      <AppProvider>
        <PageLayout />
      </AppProvider>
    );
  }
}

export default App;
