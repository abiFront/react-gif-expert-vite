import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);

    const onAddCategory = (newCategory) =>{
      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    }
   
  return (
    <>
   <AddCategory
 
    onNewCategory={(e)=>onAddCategory(e)}
    />


    {categories.map(cat=>
        (
        <GifGrid
        key={cat}
        category={cat}
        />
        )
    )}
  
    </>
  )
}
