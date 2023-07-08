import styles from './Form.module.css'
import {useState} from 'react';  
import validation from '../Validation/Validation';



const Form = ({login}) =>{
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value 
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
 
    }

    return (
        <div className={styles['login-container']}>
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <label htmlFor="email">Email:</label>
            <input type="text" name = "email" value={userData.email} onChange={handleChange} className={styles['input-field']}/>
            {errors.email && <p  style={{color:"red"}}>{errors.email}</p> }
            
            <label htmlFor="password" >Password:</label>
            <input type="text" name="password" value = {userData.password} onChange={handleChange} className={styles['input-field']}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form;
