<h3 align="center">
  Desafio 3: Desafio Rocketseat - Praticando HTML, CSS e JavaScript
</h3>

<p align="center">“Se algo é importante o suficiente, você deve tentar. Mesmo se o resultado provável for o fracasso.”!</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-04?color=%2304D361">
</p>

## Sobre o desafio

Desafio da trilha de Discover da Rocketseat.

Crie uma aplicação usando **HTML, CSS e JavaScript**.

Neste desafio você deverá desenvolver uma homepage para uma marca de café.

As informações contidas na aplicação são **estáticas** e não precisam refletir nenhuma API REST ou back-end.

### Tela da aplicação do resultado final:

<img alt="Tela final da aplicação" src="https://danielcanudo.github.io/rocketcoffee/images/tela-final-rocketcoffee.png">

### Componentes

**index.html (HTML):** Parte responsável por todo o conteúdo em código HTML que foi criado no projeto, iniciada com uma tag 'header' que comporta todas as logos e símbolos de 'menu' que serão utilizadas em conjunto com a responsividade criada via CSS e JavaScript. Logo em seguida temos a tag 'nav' que irá conter todos os links de navegação, tanto da 'side bar' que é aberta em modo responsivo, como também dos links de navegação padrão para desktop. Por fim temos a tag 'main' que comporta todo o conteúdo restante da página, com os textos escritos e a imagem do café.

**style.css (CSS):** Na parte de CSS foram usados os conceitos de Flexbox para a estilização da aplicação, via Flexbox por linhas (rows) para a 'Nav Bar' padrão de Desktop, e também a Flexbox por colunas (column) para o conteúdo da tag 'main'. Também foram adicionadas algumas funcionalidades para responsividade do site através do @media, além também de aspectos visuais como o ':hover' presente no botão "PEGAR MEU CAFÉ" e no texto "&lt;&sol;Great Code&gt;".

**script.js (JavaScript):** Responsável pela parte da funcionalidade do Nav Bar (barra de navegação), fazendo com que seja adicionada a class: 'show' na tag 'nav', e também alterando a estilização já realizada via CSS, assim como desativando também ao sair da Nav Bar. Código usado para realizar esse evento:

```js
const menuopen = document.getElementById('menu-open');
const navmenu = document.getElementsByTagName('nav');
const menuclose = document.getElementById('menu-close');

menuopen.onclick = () => {
    navmenu[0].classList.add('show');
    menuopen.style.display = 'none';
    menuclose.style.display = 'block';
}

menuclose.onclick = () => {
    navmenu[0].classList.remove('show');
    menuopen.style.display = 'block';
    menuclose.style.display = 'none';
}
```
