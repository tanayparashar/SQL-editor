import './App.css';
import {Editor} from "./components/editor"
//import {CsvToTable} from "./components/csvToTable"
import { useEffect,useState } from 'react';
import categories from "./assets/employees.csv"
function App() {
  const [ text, setText ] = useState();
  const [csvArray, setCsvArray] = useState([]);

const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })
        console.log(newArray);
        setCsvArray(newArray)
    }
  useEffect(()=>{
    const file = categories;
    fetch( file )
            .then( response => response.text() )
            .then( responseText => {
                setText( responseText );
                processCSV(responseText);
            });
  },[]);
  return (
    <div className="App">
      <div className='navbar'>
        <div style={{margin:"10px"}}><h3 style={{color:"#0acfa9"}}>SQL Editor</h3></div>
      </div>
      <div>
        <Editor/>
      </div>
      <div>
        {csvArray.length>0 ? 
            <>
                <table>
                    <thead>
                      {
                        Object.keys(csvArray[0]).map(ele=><th>{ele}</th>)
                      }

                    </thead>
                    <tbody>
                      {csvArray.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
                    </tbody>
                </table>
            </> : null}

      </div>
    </div>
  );
}

export default App;
