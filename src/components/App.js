import React from 'react';
import '../css/styles.css';
import Menu from './Menu'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>King's Kid</h1>
        </header>
        <nav className="app-nav">
          <h2>Catering Available</h2>
          <h1>973-696-9496</h1>
        </nav>
        <Menu />
      </div>
    );
  }
}

export default App;
