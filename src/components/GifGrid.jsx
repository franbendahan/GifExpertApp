import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  


  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && ( <h2>Cargando...</h2> ) //si isLoading es true que muestre cargando        
      }

      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id } 
              {... image}
            />        
            )
          )
        }
        
      </div>

    </>
  )
}
