import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
import redo from "../assets/redo.png"
export const Editor=()=>
{
  const [code, setCode] = useState(`SELECT employeeID FROM employees \nWHERE lastName=Peacock;`);
  const [output,setOutput]=useState("");
  function callAPI(){
      /*
        Call API with ${code}
        const data = { query: code};

        fetch('https://example.com/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => setOutput(data))
        .catch((error) => {
          console.error('Error:', error);
        });

      */
     if(code===`SELECT employeeID FROM employees \nWHERE lastName=Peacock;`)
     {
       setOutput("4")
     }
     else
      setOutput("null");
  }
  return (
    <div className='editorContainer'>
      <div className='editorTop' style={{margin:"10px"}}>
        <div  style={{marginRight:"10px"}}>
          <button className='clearButton'><img src={redo} alt="clear" onClick={()=>{setCode("")}} height={18} width={20}/></button>
        </div>
        <div>
          <button className='runButton' onClick={callAPI}>
            RUN
          </button>
        </div>
      </div>
      <CodeEditor
        value={code}
        language="sql"
        placeholder="Please enter sql queries."
        onChange={(evn) => {setCode(evn.target.value);console.log(evn.target.value)}}
        padding={15}
        minHeight={600}
        style={{
          fontSize: 18,
          color:"white",
          backgroundColor: "#242526",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          minHeight:"80%",
        }}
      />
      <div  style={{margin:"5px"}}>
        <h3>Output:</h3>
        <div>{output}</div>
      </div>
    </div>
  );
}
export default Editor;