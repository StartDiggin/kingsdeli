import React from 'react';
import '../css/styles.css';
import Menu from './Menu'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
        <h1 className="logo">King's Kid Deli</h1>
        </header>
        <nav className="app-nav">
          <h1 className="catering">Catering Available</h1>
          <h1 className="phone">(973) 696-9496</h1>
        </nav>
        <Menu />
      </div>
    );
  }
}

export default App;
