import { createContext } from "react";

export const UserContext = createContext()
const UserProvider = ({children}) => {

    const [token, setToken] = useState(true);
    const logout = () => {
      setToken(null);
    };

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

export default UserContext