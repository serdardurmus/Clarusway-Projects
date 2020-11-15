import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>Pakker installert i startProject</h3>
        <table>
          <tr>
            <th>Numre</th>
            <th>Pakker</th>
          </tr>
          <tr>
            <td>1</td>
            <td>yarn add axios</td>
          </tr>
          <tr>
            <td>2</td>
            <td>100</td>
          </tr> 
        </table>
      </header>
    </div>
  );
}

export default App;
