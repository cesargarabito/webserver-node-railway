require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;




//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cesar Garabito',
        titulo: 'Webserver'
    });
  });
  app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Cesar Garabito',
        titulo: 'Webserver'
    });
  });
  app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Cesar Garabito',
        titulo: 'Webserver'
    });
  });
// Middleware para redireccionar "/generic" a "/generic.html"
app.use((req, res, next) => {
  if (req.path === '/generic') {
    req.url = '/generic.html';
  }
  next();
});

// Enruta otras páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
