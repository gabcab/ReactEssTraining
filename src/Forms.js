/*
Librerías de formularios
========================
https://formik.org
https://react-hook-form.com
https://usehooks.com

*/

import { useRef } from "react";

function Forms(){
    const txtTitle = useRef();
    const hexColor = useRef();
    console.log(txtTitle);
    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`);
        txtTitle.current.value = "";
        hexColor.current.value = "";
    };

    return (
        <form onSubmit={submit}>
            <input 
                ref={txtTitle}
                type="text"
                placeholder="color title..." 
            />
            <input ref={hexColor} type="color" />
            <button>ADD</button>
        </form>
    );
}
export default Forms;