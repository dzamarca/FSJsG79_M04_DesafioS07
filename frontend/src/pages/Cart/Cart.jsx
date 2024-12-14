import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from "react-bootstrap"
import "./Cart.css"

const Cart = () => {
    const { cart, handleDisminuye, handleIncrementa, handleCalculaTotal } = useContext(CartContext)
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'> 
                <h3>Detalles del Pedido</h3>
                {cart.map(pizza =>
                    <div className="cardPizza" key={pizza.id}>
                        <div className="imagenTexto">
                            <img src={pizza.img} alt="" />
                            <p className="nombrePizza">{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</p>
                        </div>
                        <div className="opciones">
                            <p className="nombrePizza">${pizza.price.toLocaleString()}</p>
                            <Button
                                variant="dark"
                                className="boton"
                                onClick={() => handleDisminuye(pizza.id)}
                            >-</Button>
                            <p className="nombrePizza">{pizza.count}</p>
                            <Button
                                variant="dark"
                                className="boton"
                                onClick={() => handleIncrementa(pizza.id)}
                            >+</Button>
                        </div>
                    </div>
                )}
                <h4>Total: {handleCalculaTotal()}</h4>
                <Button variant="dark">Pagar 🛒</Button>
            </div>
        </>
    )
}
export default Cart