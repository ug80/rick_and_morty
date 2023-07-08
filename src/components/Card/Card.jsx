import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name, status, species, gender, origin, image, onClose, 
   addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div  className={styles.div}>

         {
          isFav ? (
             <button onClick={handleFavorite}>❤️</button>
          ) : (
             <button onClick={handleFavorite}>🤍</button>
          )
         }
         {/** <button onClick={hadleFavorite}>{isFav?'❤️':'🤍'}</button> */}
         <button className={styles.btn} onClick={()=>onClose(id)}> X </button>
         <img className={styles.image} src={image} alt='imagen' />
         <Link to ={`/detail/${id}`}>
            <h4 className={styles.name} >{name} </h4>
         </Link>
         <div className={styles.data}>
            {/*<h2>{status} </h2>*/}
            <h2>{species} </h2>
            <h2>{gender}</h2>
            {/*<h2>{origin} </h2>*/}
         </div>
      </div>
   );
}


const mapStateToProps =(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps =(dispatch)=>{
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
