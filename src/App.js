import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.title}</h1>
        <h2>{props.lab}</h2>
        <p>{props.student_id}</p>
        <p>{props.name}</p>
        <p>{props.college}</p>
    </div>
  );
}

export default App;
