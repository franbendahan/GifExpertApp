
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])


  const onAddCategory = (newCategory) => {

    // Validar que no se repita la categoria
    if (categories.includes(newCategory)) return;

    console.log(newCategory);

    setCategories([newCategory, ...categories]);
    // setCategories( cat => { [...cat, 'Valorant']});

  }

  return (
    <>

      <h1>GifExpertApp</h1>
      

      <AddCategory

        // se agrega una propiedad al componente la cual recibe una funcion
        onNewCategory={onAddCategory}
      />

      
      {
        categories.map( ( category ) => (
          <GifGrid
            key={ category }
            category={ category } />
        ))
      }
    

    </>
  )
}
