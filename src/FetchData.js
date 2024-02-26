import { useState, useEffect } from "react";

function GithubUser({ name, creada, avatar }){
    return (
        <div>
            <h2>{name}</h2>
            <p>Since: {creada}</p>
            <img src={avatar} height={150} alt={name} />
        </div>
    )
}

function FetchData(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true);
        fetch(
            `https://api.github.com/users/gabcab`
        ).then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, []);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{JSON.stringify(error)}</pre>;
    if (!data) return null;

        return (
            <GithubUser 
                name={data.login} 
                creada={data.created_at}
                avatar={data.avatar_url}
            />
            //<pre>{JSON.stringify(data, null, 2)}</pre>
    );
}

export default FetchData;