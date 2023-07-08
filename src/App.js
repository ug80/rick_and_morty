import './App.css';
import Cards from './components/cards/Cards';

import Nav from './components/nav/Nav';

import { useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/form/Form';
import Favorites from './components/Favorites/Favorites';

const EMAIL = 'giordau@gmail.com';
const PASSWORD = 'asd123';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const login = (userData)=>{
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate ('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id));
      setCharacters(charactersFiltered);
   }



   return (
      <div className='App'>
         <h1>Rick and Morty</h1>
         {
            location.pathname !== '/'
            ?<Nav onSearch={onSearch} setAccess= {setAccess}/>
            :null
         }
         

         <Routes>
            <Route path ='/' element ={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/*' element={<Error/>}/>
            <Route path='/favorites' element = {<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
