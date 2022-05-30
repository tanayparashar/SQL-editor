import { useEffect, useState } from "react"
import employees from "../assets/employees.csv"
import categories from "../assets/categories.csv"
export const CsvToTable=()=>{
    const [tableValue,setTableValue]=useState("employees");
    const [file,setFile]=useState(employees);
    const [csvArray, setCsvArray] = useState([]);
    const selectOnChange=(e)=>{
        setTableValue(e.target.value);
        switch(e.target.value)
        {
            case "employees":
                setFile(employees);
                break;
            case "categories":
                setFile(categories);
                break;
            default:
                setFile(employees);
        }
    }
    const CSVtoArray = (str, delim=',') => {
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
        //console.log(newArray);
        newArray.pop();
        setCsvArray(newArray)
    }
    useEffect(()=>{
        fetch( file )
            .then( response => response.text() )
            .then( responseText => {
                CSVtoArray(responseText);
            });
    },[file]);
    const unqKey=tableValue==="employees"?"employeeID":"categoryID";
    return(
        <div>
            <div style={{margin:"10px"}}>
                <label style={{margin:"10px"}}>Select Table </label>
                <select value={tableValue} onChange={selectOnChange}>
                    <option value="employees">employees</option>
                    <option value="categories">categories</option>
                </select>
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
                                    <tr key={item[unqKey]}>
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
export default CsvToTable;