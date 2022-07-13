import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (e) =>{
      setinputValue(e.target.value)
      
  }
  const onSubmit = (e) =>{
      e.preventDefault();

      if(inputValue.trim().length <=1) return;

     // setCategories(cat => [inputValue, ...cat]);
      setinputValue('')
      onNewCategory(inputValue.trim());
  }
return (
   
   <form onSubmit={onSubmit}>
   <input
    type="text"
    placeholder="Buscar gifs"
    value={inputValue}
    onChange={onInputChange}
     />
    </form>
   
  )
}
