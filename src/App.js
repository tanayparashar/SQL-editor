import React, { Suspense } from 'react';
import SplitPane from 'react-split-pane';
import './App.css';
const CsvToTable=React.lazy(() => import('./components/csvToTable'));
const Editor=React.lazy(() => import('./components/editor'));

function App() {
  const styles = {
  background: '#ffffff',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 10px',
  height:'100vh'
};

  return (
    <div className="App">
      <div className='navbar'>
        <div style={{margin:"10px"}}><h3 style={{color:"#0acfa9"}}>SQL Editor</h3></div>
      </div>
      <Suspense fallback={<div class="loader"></div>}>
        <SplitPane split="vertical"
          defaultSize={"60%"}
          resizerStyle={styles}
          minSize={200}
          maxSize={1200}
        >
          <CsvToTable/>
          <Editor />
        </SplitPane>
        </Suspense>
    </div>
  );
}

export default App;
