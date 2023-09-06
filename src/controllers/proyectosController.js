const proyectosController = {
    menu: (req, res) => {
        return res.render('proyectos/menu-personalizados')
    },
    detalle: (req, res) => {
        return res.render('proyectos/detalle-personalizado')
    },
    detalleRealizados: (req, res) => {
        return res.render('proyectos/detalle-realizados')
    }
}

module.exports = proyectosController;