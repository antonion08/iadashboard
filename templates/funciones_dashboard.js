const modal = document.getElementById("myModal");
const btn = document.getElementById("openChat");
const span = document.getElementsByClassName("close")[0];

//btn.onclick = function() {
//  modal.style.display = "block";
//}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";   

  }
}
const chatBody = document.querySelector('.chat-body');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');   


let messageHistory = [];

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        const newMessage = {
            text: message,
            timestamp: new Date().toLocaleString()
        };

        messageHistory.push(newMessage);

        // Crear un nuevo elemento div para cada mensaje
        const messageElement = document.createElement('div');
        messageElement.textContent = `${newMessage.timestamp}: ${newMessage.text}`;

        // Agregar el mensaje al historial visual
        chatBody.appendChild(messageElement);

        // Limpiar el campo de entrada
        messageInput.value = '';
    }
});
                //const express = require('express');
                //const app = express();
                //const axios = require('axios');
                
               // class ChatBot {
                  //constructor(apiUrl) {
                    //this.apiUrl = https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent;
                   // this.tokenDeAutorizacion = AIzaSyC76BoVVmx7svNQQRtRB7sjgMLK4FEkfBU;
                 // }