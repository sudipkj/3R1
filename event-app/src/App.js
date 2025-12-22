import logo from './logo.svg';
import './App.css';
import Reducer  from './reducer/Reducer';
import ControlledForm from './Form Validation/ControlledForm';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Event Handling</h2>
      {/* <Reducer/> */}
      <ControlledForm/>
    </div>
  );
}

export default App;
