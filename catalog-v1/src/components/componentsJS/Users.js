import { useState, useEffect } from "react";
import api from "../../api/axiosConfig";


const Users = () => { 

    const [users, setUsers ] = useState();

    useEffect(() => {
        let isMounted = true;
        // Cancel our request if component unmounts
        const controller = new AbortController();

        const getUsers = async () => {
            try{
                const response = await api.get('/user' ,{
                    signal: controller.signal
                })
                console.log(response.data);
                isMounted && setUsers(response.data);
            }catch(e){
                console.error(e);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[])

    return (
        <article>
            <h2> Users List </h2>
            {users?.length 
            ? (
            <ul>
                {users.map((users,i) => <li key={i}>{users?.
                username}</li>)}
            </ul>
        ) : <p> no Users to display </p>}
        </article>
    )
}