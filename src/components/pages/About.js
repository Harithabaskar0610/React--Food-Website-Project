import React from "react";
import MultiplePizzas from "../../assets/assest4.jpeg";
import "../../styles/About.css";
import Coverimage from "../../assets/assest2.jpeg";

function About() {
  return (
    <div className="about">
        <img className="aboutTop" src={MultiplePizzas} alt="assest4.jpeg"/>
      <div className="containerbody">
        <div className="containerleft">
          <img src={Coverimage} alt="assest2.jpeg" className="coverimage1"/>
        </div>
        <div className="containerright">
          <h1> ABOUT US</h1>
          <p className="para"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit.Quo nequ error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit.

          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;