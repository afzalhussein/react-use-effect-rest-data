import {format} from 'date-fns'
import { UserProfile } from "./UserProfile";
import "./styles.css";
import React from 'react';

export default function App() {
  return (
    <div className="App container">
      <h1>Hello everyone!</h1>
      <div style={ {"display": "flex", "alignContent":"space-between"} }>
        <UserProfile user={ getUser() } />
        <UserProfile user={ getUser() } />
        <UserProfile user={ getUser() } />
        <UserProfile user={ getUser() } />
        <UserProfile user={ getUser() } />
        <UserProfile user={ getUser() } />
        {getUsers().map(e=><UserProfile user={e}/>)}
      </div>
      <div style={{display:"flex", alignContent:"space-between"}}>
        {getUsers().map((e,i)=><UserProfile user={e} key={crypto.randomUUID()}/>)}
      </div>
      <RealDate />
    </div>
  );

  function RealDate () {
    return <div style={ { "textAlign": "left" } }>
      <span style={ { fontWeight: "bold", textShadow: "2px 2px 5px black" } }>Today's date</span>:
      <span style={ { fontWeight: "lighter", textShadow: "2px 1px 4px black", fontFamily: "Times New Roman" } }>{ format( new Date, 'yyyy/MM/dd' ) }</span>
    </div>;
  }
}


function getUser () {
  return { name: 'Syeda', bio: 'Born in Toronto', avatarUrl: './20191026_200824.jpg' };
}

function getUsers () {
  return [
    { name: 'Syeda', bio: 'Born in Toronto', avatarUrl: './20191026_200824.jpg' },
    { name: 'Syeda', bio: 'Born in Toronto', avatarUrl: './20191026_200824.jpg' },
    { name: 'Syeda', bio: 'Born in Toronto', avatarUrl: './20191026_200824.jpg' },
    { name: 'Syeda', bio: 'Born in Toronto', avatarUrl: './20191026_200824.jpg' },
    { name: 'Syed', bio: 'Born in Toronto', avatarUrl: './20191026_200824.jpg' } ];
}
