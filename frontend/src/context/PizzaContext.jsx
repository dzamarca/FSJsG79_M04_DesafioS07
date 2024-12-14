import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([])
    const URL = 'http://localhost:5000/api/pizzas'
    useEffect(() => {
        const loadPizzas = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setPizzas(data)
        }
        loadPizzas()
    }, [])

    return (
        <PizzaContext.Provider value={pizzas}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider