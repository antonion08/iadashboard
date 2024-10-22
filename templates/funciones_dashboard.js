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
// chat con la ia 
async function sendMessageToAPI(message) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':   
 `Bearer YOUR_API_KEY` // Reemplaza con tu clave de API
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;   

}

// Event listener para el botón de enviar
sendButton.addEventListener('click', async () => {
  const message = messageInput.value;
  addMessage(message, true); // Agrega el mensaje del usuario
  messageInput.value = '';

  // En lugar de simular una respuesta, enviamos el mensaje a la API
  const apiResponse = await sendMessageToAPI(message);
  addMessage(apiResponse, false); // Agrega la respuesta de la API
});
                //const express = require('express');
                //const app = express();
                //const axios = require('axios');
                
               // class ChatBot {
                  //constructor(apiUrl) {
                    //this.apiUrl = https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent;
                   // this.tokenDeAutorizacion = AIzaSyC76BoVVmx7svNQQRtRB7sjgMLK4FEkfBU;
                 // }