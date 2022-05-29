import './App.css';
import {Editor} from "./components/editor";
import {CsvToTable} from"./components/csvToTable";
import SplitPane from 'react-split-pane';

function App() {
  const styles = {
  background: '#ffffff',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 10px',
};

  return (
    <div className="App">
      <div className='navbar'>
        <div style={{margin:"10px"}}><h3 style={{color:"#0acfa9"}}>SQL Editor</h3></div>
      </div>
      <SplitPane split="vertical"
      defaultSize={"60%"}
      resizerStyle={styles}>
        <CsvToTable/>
        <Editor/>
      </SplitPane>
    </div>
  );
}

export default App;
