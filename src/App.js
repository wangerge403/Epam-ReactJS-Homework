import './App.css';
import {Task1CreateEle, Task1Comp, Task1PureComp, Task1Func} from './Task1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Task1CreateEle name={'CreateElement'} />
        <Task1Comp name={'Component'} />
        <Task1PureComp name={'PureComponent'} />
        <Task1Func name={'Functional Component'} />
      </header>
    </div>
  );
}

export default App;
