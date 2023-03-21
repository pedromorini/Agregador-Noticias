apikey = '64bfa1670134e080d52230dd11a786cb';

requisicaoSlides('https://gnews.io/api/v4/top-headlines?category=general&lang=pt&country=br&max=4&apikey=' + apikey);

const catLista = document.querySelector('.categorias__lista');

catLista.addEventListener('click', function(evento) {
  const idDoItemClicado = evento.target.id;

  switch(idDoItemClicado) {

    case "cat1":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=nation&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat2":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=business&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat3":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=science&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat4":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=sports&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat5":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=world&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat6":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=health&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat7":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=technology&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
    case "cat8":
      requisicaoEventos('https://gnews.io/api/v4/top-headlines?category=entertainment&lang=pt&country=br&max=10&apikey=' + apikey);
      break;
  }
});

const imagem = document.querySelector('.menu__pesquisar img');

imagem.addEventListener('click', function() {
  
  exclui();
  const palavra = document.querySelector('.menu__pesquisar #pesquisar').value;

  requisicaoEventos('https://gnews.io/api/v4/search?q=' + palavra + '&lang=pt&country=br&max=20&apikey=' + apikey);
});


function requisicaoEventos(url) {

  exclui();

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    for (i = 0; i < articles.length; i++) {

      const lista = document.querySelector('.eventos__lista');

      // Cria o elemento li
      const li = document.createElement('li');
      li.classList.add('eventos__item');

      // Cria a imagem
      const img = document.createElement('img');
      img.src = articles[i]['image'];
      img.alt = articles[i]['title'];

      // Cria o título
      const titulo = document.createElement('h3');
      titulo.textContent = articles[i]['title'];

      // Cria a data
      const data = document.createElement('h4');
      data.textContent = articles[i]['publishedAt'];

      const site = document.createElement('a');
      site.href = articles[i]['url'];
      site.target = '_blank';

      // Cria o botão
      const botao = document.createElement('button');
      botao.textContent = 'Ver';

      site.appendChild(botao);

      // Adiciona todos os elementos dentro do li
      li.appendChild(img);
      li.appendChild(titulo);
      li.appendChild(data);
      li.appendChild(site);

      // Adiciona o li dentro da lista
      lista.appendChild(li);

    }
  });
}

function requisicaoSlides(url) {

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    for (i = 0; i < articles.length; i++) {
      
      const lista = document.querySelector('.slides #slide' + i);
      lista.setAttribute("src", articles[i]['image']);

    }
  });
}

function exclui(){
  
  elementos = document.querySelectorAll(".eventos .eventos__item");
 
  elementos.forEach(function(elemento) {
  elemento.remove();
  });

}