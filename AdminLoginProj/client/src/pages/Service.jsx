import React from "react";
import { useAuth } from "../store/auth";
import "../Components/PageCss/Services.css";

export default function Service() {
  const { servicedata } = useAuth();
  
  return (
    <>
      <section className="section-container">
        <div className="container">
          <div className="main-heading">Services</div>
        </div>
        <div className="container grid grid-three-cols">
          {servicedata.map((curEle, index) => {
            const {price, description, provider, service} = curEle;
            return(
            <div className="card" key={index}>
              <div className="card-img">
                <img src="../../public/Image/images.jpeg" alt="our services image" className="serviceImg"/>
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>)
          })}
        </div>
      </section>
    </>
  );
}

// {servicedata.map((curEle, idx) => {
//   return (
//     <>
//       <p>{curEle.service}</p>
//       <p>{curEle.description}</p>
//       <p>{curEle.price}</p>
//       <p>{curEle.provider}</p>
//       <br /><br />
//     </>
//   );
// })}
