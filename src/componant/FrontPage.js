import React from 'react';
import lens from "../images/lens-1418954.jpg";
import { useNavigate } from 'react-router-dom';


export const FrontPage = () => {
    let navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <section className="left">
            <img src={lens} alt="lens" />
        </section>
        <section className="right">
            <div><h3>10X Team 04</h3></div>
            <div><button onClick={()=>navigate('/posts')}>ENTER</button></div>
        </section>
      </div>
    </div>
  )
}
