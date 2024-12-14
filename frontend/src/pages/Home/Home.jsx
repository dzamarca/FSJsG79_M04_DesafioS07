import { useContext, useEffect, useState } from 'react'
import CardPizza from "../../components/CardPizza/CardPizza"
import Header from '../../components/Header/Header'
import './Home.css'
import { PizzaContext } from '../../context/PizzaContext'

const Home = () => {
  const pizzas = useContext(PizzaContext)

  return (
    <>
      <Header />
      <div className='boxCards'>
        {pizzas.map(pizza => (
          <div key={pizza.id} className="d-flex justify-content-center mb-4 col-12 col-md-6 col-lg-4">
            <CardPizza
              pizza={pizza}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </>
  )
}
export default Home