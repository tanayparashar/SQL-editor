import './App.css';
import {Editor} from "./components/editor"
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div style={{margin:"10px"}}><h3 style={{color:"#0acfa9"}}>SQL Editor</h3></div>
      </div>
      <div>
        <Editor/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
