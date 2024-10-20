const modal = document.getElementById("myModal");
const btn = document.getElementById("openChat");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";   

  }
}
                //const express = require('express');
                //const app = express();
                //const axios = require('axios');
                
               // class ChatBot {
                  //constructor(apiUrl) {
                    //this.apiUrl = https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent;
                   // this.tokenDeAutorizacion = AIzaSyC76BoVVmx7svNQQRtRB7sjgMLK4FEkfBU;
                 // }