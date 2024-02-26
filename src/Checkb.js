import { useReducer } from "react";

function Checkb(){
    //useReducer: recibe dos parámetros, una funcion y el valor inicial
    const [checked, setChecked] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <>
            <br /><br /><br />
            <hr />
            <h2>CheckBox</h2>
            <input type="checkbox" value={checked} 
            onChange={setChecked} />
            <label>{checked ? "Checked" : "Not Checked"}</label>
        </>
    );
}


/*
Realizada con useState
function Checkb(){
    const [checked, setChecked] = useState(false);

    return (
        <>
            <br /><br /><br />
            <hr />
            <h2>CheckBox</h2>
            <input type="checkbox" value={checked} 
            onChange={() => setChecked((checked) => !checked) } />
            <label>{checked ? "Checked" : "Not Checked"}</label>
        </>
    );
}
*/
export default Checkb;