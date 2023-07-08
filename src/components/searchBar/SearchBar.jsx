import styles from './SearchBar.modules.css';
import { useState } from 'react';

 const SearchBar = ({onSearch}) => {
   const [id, setId] = useState('');

   const handleChange = (evento) =>{
      setId(evento.target.value);
   }

   return (
      <div className={styles.div} >
         <input className={styles.input}
          type='search' 
          onChange={handleChange}
          placeholder='busca un personaje'
          value = {id}
          />
         <button className={styles.btn} onClick={() => {onSearch(id); setId('')}}>Agregar</button> 
      </div>
   );
}
export default SearchBar;


