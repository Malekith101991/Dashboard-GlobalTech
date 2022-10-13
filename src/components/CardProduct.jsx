import React from 'react'
import "../App.css"

const CardProduct = ({products}) => {
  return (
    <section>      
              <div class="MproductsDetail">
                    <img src={`https://globaltech-grupo2.herokuapp.com/images/Productos/${products.image}`} alt=""/>
                    <h4>{products.name}</h4>
                    <p></p>
                    <a href="">Más Información</a>
              </div>
        </section>

  )
}

export default CardProduct