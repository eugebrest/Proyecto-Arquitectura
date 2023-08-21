const express= require ("express");
const app= express ();
const path= require ('path')
const PORT = process.env.PORT || 3000;

//app.get ('/', (req,res)=>{res.send ("Bienvenidos al sitio")})
app.get ('/', (req,res)=>{res.sendFile (path.join (__dirname, 'proyecto-arquitectura/views/index.html'))});

app.listen (PORT,()=>{
    console.log (`Servidor corriendo en el puerto ${PORT}`);
});