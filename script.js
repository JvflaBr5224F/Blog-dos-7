// Adiciona um evento de input à barra de pesquisa
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase(); // Pega o valor da barra de pesquisa em minúsculas
    const images = document.querySelectorAll('.image-gallery img'); // Seleciona todas as imagens da galeria

    // Loop através de todas as imagens e verifica se o termo de pesquisa está na descrição
    images.forEach(function(image) {
        const altText = image.alt.toLowerCase(); // Pega o texto alternativo da imagem em minúsculas
        if (altText.includes(query)) {
            image.style.display = 'block'; // Exibe a imagem se o termo for encontrado
        } else {
            image.style.display = 'none'; // Esconde a imagem se o termo não for encontrado
        }
    });
});

