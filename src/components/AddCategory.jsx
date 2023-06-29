import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => { // El componente recibe Props 

    const [inputValue, setInputValue] = useState('');


    // el {target} es para desestructurar el evento (event.tarjet)
    const onInputChange = ({ target }) => {  // funcion creada para cambiar el onChange
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();  // preventDefault para que no se recargue la pagina. Solo el form
        if (inputValue.trim().length <= 1) { // trim para sacar los espacios y length para que sea por lo menos de un caracter
            return;
        }

        // setCategories( categories => [inputValue,... categories])
        onNewCategory ( inputValue.trim() )

        setInputValue(''); // para que se reinicie el input cuando das enter
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange} // para cambiar el input
            />
        </form>
    )
}
