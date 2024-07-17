import React, {useContext} from "react";
// import AuthContext from "./src/context/AuthContext";
import AuthContext from "../../context/AuthProvider";
const UserProfile = () => {
    const {auth} = useContext(AuthContext);

    return (
        <div>
            <h1> User Profile</h1>
            {auth ?( <div> 

                <p> Email: {auth.email}</p>
                <p> Password: {auth.password}</p>

            </div>) : 
            (<p> No user is logged in.</p>) 
            }
        </div>
    );
};

export default UserProfile;