const image = document.createElement('img');
image.src = window.URL.createObjectURL(new File(['logo.png'], 'logo.jpg', { type: 'image/png' }));
document.body.appendChild(image);