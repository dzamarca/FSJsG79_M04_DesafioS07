import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const UserContext = createContext()
const UserProvider = ({children}) => {

    const [token, setToken] = useState(true);
    const navigate = useNavigate()
    const logout = () =>{
      setToken(false);
      Swal.fire({
        text: 'Se ha cerrado la sesión exitosamente',
        icon: 'info'
      })
    }
    const stateGlobal ={
        token,
        logout
    }

  return (
    <UserContext.Provider value ={stateGlobal}>{children}</UserContext.Provider>
  )
}
export default UserProvider