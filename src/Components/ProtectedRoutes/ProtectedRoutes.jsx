import { Navigate } from "react-router-dom";

function ProtectedRoutes({children}) {
    let token = localStorage.getItem('token')
    if(token) {
        return children
    }else{
       return <Navigate to={'/signin'}/>
    }

   ;
}

export default ProtectedRoutes;