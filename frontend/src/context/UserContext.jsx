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
        text: 'Se hacerrado la sesión exitosamente',
        icon: 'success'
      }).then(
        ()=>navigate('/')
      )
    }

    const stateGlobal ={
        token,
        logout
    }

  return (
    <UserContext.Provider value ={stateGlobal}>{children}</UserContext.Provider>
  )
}

//botpon del carrito que deshabilita el botón del pago del carrito con  !carrito.length || !token
//<button disabled={!carrito.length || !token}> {!token ? "Inicia sesión para continuar" : "Pagar"} </button>

//yo hice asi  <button className="btn btn-success mt-2 mb-2" disabled={!token}> {token ? 'Pagar' : 'Inicia sesión para pagar'} </button>

export default UserProvider