import logo from './logo.svg';
import './App.css';
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux';

import CounterComponent from './redux/component/CounterComponent.jsx';
import { empStore } from './redux-example2/store.js';
import EmployeeComponent from './redux-example2/EmployeeComponent.jsx';


function App() {
  return (

    <div className="App">
      {/* <Provider store={store}>
        <CounterComponent />
      </Provider> */}
      <Provider store={empStore}>
        <EmployeeComponent />
      </Provider>

    </div>

  );
}

export default App;
