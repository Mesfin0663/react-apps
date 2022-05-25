import   './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import React,{useState} from 'react'
import { getDatabase, push, ref, set, update } from "firebase/database";
import styled from 'styled-components';
import {toast} from 'react-toastify';
import { getStorage, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase/firebase";
import  {NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const initialState ={
    uid: "",
}

function Header() {
    const [state,setState]= useState(initialState);

    const {uid} = state;
    const handleInputChange = (e)=> {
        const {name, value} = e.target;
        setState({...state, [name]: value})
      }
      const history = useHistory();
     
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!uid ){
            toast.error("Please Enter User ID")
        }else{

            console.log(state.uid);
            history.push(`portfolio/${state.uid}/home`);
        }
      }
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">               Create Amazing International digital representation of your cerair and personal life today with Ethio-Portfolio
</h1>
      <p>submit your cerier path detalies and parts of your personal life that you want other people to see and you will have a fully digital portfolio in an instance </p>

      <div className="gpt3__header-content__input">
        <input type="id" placeholder="Enter User ID"  id= "name"
          name= "uid"
          value= {uid}
          onChange = {handleInputChange} />
        <button type="button" onClick={handleSubmit}>See Portfolio</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
   
  )
}

export default Header