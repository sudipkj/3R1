import logo from './logo.svg';
import './App.css';

import ControlledForm from './Form Validation/ControlledForm';
import FormEvents from './Events/FormEvents';
import StateHooks from './Hooks/StateHooks';
import EffectsHook from './Hooks/EffectsHook';
import UseRefHook from './Hooks/UseRefHook';
import UseReducerHook from './Hooks/UseReducerHook';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Event Handling</h2>
      {/* <Reducer/> */}
      {/* <ControlledForm/> */}
      {/* <FormEvents/> */}
      {/* <StateHooks/>
      <EffectsHook/> */}
      {/* <UseRefHook/> */}
      <UseReducerHook />
    </div>
  );
}

export default App;
