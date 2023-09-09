const mainController = {
    home: (req, res) => {
        return res.render('main/home'); //supuestamente no hace falta aclarar la carpeta en donde está almacenada la vista
        //ni la extensión del archivo
}
}

module.exports = mainController;
