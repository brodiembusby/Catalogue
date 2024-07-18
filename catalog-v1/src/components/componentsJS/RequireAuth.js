import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({}) => {
    const {auth} = useAuth();
    const location = useLocation();

    // Only if we have a user will these work
    return (
        auth?.user 
         ? <Outlet />
         : <Navigate to="/login" state={{from:location}} replace/>
    );

}
export default RequireAuth;