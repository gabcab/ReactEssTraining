import { useState } from "react";

function FormsControlled(){


    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${title}, ${color}`);
        setColor("#000000");
        setTitle("");
    };

    return (
        <form onSubmit={submit}>
            <input 
                value={title} 
                onChange={(event)=>setTitle(event.target.value)} 
                type="text"
                placeholder="color title..." 
            />
            <input value={color} onChange={event=>setColor(event.target.value)}  type="color" />
            <button>ADD</button>
        </form>
    );
}
export default FormsControlled;
