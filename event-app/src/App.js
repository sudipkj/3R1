import logo from './logo.svg';
import './App.css';
import Reducer  from './reducer/Reducer';
import ControlledForm from './Form Validation/ControlledForm';
import FormEvents from './Events/FormEvents';
import StateHooks from './Hooks/StateHooks';
import EffectsHook from './Hooks/EffectsHook';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Event Handling</h2>
      {/* <Reducer/> */}
      {/* <ControlledForm/> */}
      {/* <FormEvents/> */}
      <StateHooks/>
      <EffectsHook/>
    </div>
  );
}

export default App;
