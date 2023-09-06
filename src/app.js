const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

//npm start para correr el servidor sin el node src/app.js
//modifique el package.json agregue en "script" >> "start": "node src/app.js"

//app.get ('/', (req,res)=>{res.send ("Bienvenidos al sitio")})
app.set('view engine', 'ejs');
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'views/main/home')) });

const proyectosRoutes = require('./routes/proyectos');
const serviciosRoutes = require('./routes/servicios')
const mainRoutes = require('./routes/main');

app.use(express.static('public'));

app.use('/proyectos', proyectosRoutes);
app.use('/servicios', serviciosRoutes); //este podria estar en 'main' tal vez y no armarle ruta y controller separados???
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});