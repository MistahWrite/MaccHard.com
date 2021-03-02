import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Content from './Content'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;