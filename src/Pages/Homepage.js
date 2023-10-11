import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import Card from '../Components/Card';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';
import Card4 from '../Components/Card4';
import Card5 from '../Components/Card5';



import ImageSlider from '../Components/ImageSlider';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


function Homepage() {
  
 

  return (
    <div class="container">
      <Header/>
      

      <div class="row">
        <div class='col-12' id='header'><h1></h1></div>

      </div>

      <div class="row">
        <div class='col-12' id='menu'>
          {/*  */}
        </div>

      </div>
      <div class="row">
        {/* <div class='col-md-3' id='sidebar'>



</div> */}

        <div class='col-md-12' id='content'>
          <ImageSlider />

        </div>
       

      </div>
      <div class="row">
        <div class='col-7' id='rotational-card'>

            <Card/>

        </div>

        <div class='col-5' id='rotational-card'>
               <Card1/>
        </div>

        <div class='col-7' id='rotational-card'>
               <Card2/>
        </div>

        {/* <div class='col-6' id='rotational-card'>
               <Card3/>
        </div> */}

        <div class='col-5' id='rotational-card'>
               <Card4/>
        </div>

        <div class='col-6' id='rotational-card'>
               <Card5/>
        </div>

         
        

       
      </div>
      <div class="row" id='footer'>
      <Footer/>

      </div>
  
    </div>
  )
}

export default Homepage;