import {useState} from 'react';
export  default function Player({initialName, symbol, isActive, onChangeName }){
   
    const [ isEditing, setIsEditing ] = useState(false);
    const [playerName, setPlayerName ] = useState(initialName);
   
   function handlingButton(){
    setIsEditing(prevIsEditing => !prevIsEditing);
    
    if(isEditing){
        onChangeName(symbol, playerName);
    }
   }

   function hanleChange(event){
    console.log(event);
    setPlayerName(event.target.value);
   }

   let editablPlayerName =  <span className="player-name">{ playerName }</span>
   
   if(isEditing){
    editablPlayerName = (
    <input type="text" required value={playerName} onChange={hanleChange}/>
    );
   }  
   return(
    <li className={isActive ? 'active' : undefined }>
          <span className="player">
         {editablPlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handlingButton}>{isEditing ? 'Save':'Edit' }</button>
    </li>
    );
}