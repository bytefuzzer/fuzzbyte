// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('blog.json')
      .then(response => response.json())
      .then(data => {
        const blogContainer = document.getElementById('blog-posts');
        data.forEach(entry => {
          const postDiv = document.createElement('div');
          postDiv.classList.add('blog-post');
  
          let imageHtml = ''; // Variable para almacenar el HTML de la imagen
  
          // Verificar si existe entry.image y construir el HTML correspondiente
          if (entry.image) {
            imageHtml = `<div class="image"><img src="${entry.image}"></div>`;
          }
  
          postDiv.innerHTML = `
            <div class="title">${entry.title}</div>
            <div class="date">${entry.date}</div>
            ${imageHtml}
            <div class="content">${entry.content}</div>
          `;
          
          blogContainer.appendChild(postDiv);
        });
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
  });
  