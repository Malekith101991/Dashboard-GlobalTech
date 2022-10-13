import { useEffect, useState } from 'react'
import CardProduct from './CardProduct';
import "../App.css"

const Products = () => {

    const [products, setProducts] = useState([]);

    
          
    useEffect(() =>{

        const url = "https://globaltech-grupo2.herokuapp.com/apiProducts";
        fetch(url)
            .then(response => response.json())
            .then(({data}) =>{
                setProducts(data)
                console.log(data);
            })

    }, [])

    //Una variable de estado para guardar el listado de heroes
    //llamar al endpoint de heroes al momento de cargar el componente
    //Verificar que la variable con el listado de heroes tenga datos
    //Revisar el state desde el navegador
    //recorrer la variable con el listado de heroes y mostrarlos en la página

  return (
    <section className=''>
        
  
        <hr />
        
        <div className='Mproducts'>
            
            {
                products.map(product =>
                   (<CardProduct key={product.name} products={product}/>)
                )
            }
            
        </div>

    </section>
  )
}

export default Products