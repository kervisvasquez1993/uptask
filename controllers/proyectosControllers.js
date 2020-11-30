exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePaginas :'Proyectos'
    })
}

exports.formularioProyectos = (req,res) =>{
    res.render('nueva-actividad',{
        nombrePaginas : ' Nueva Actividad'
    })
}

exports.nuevoProyecto = (req,res) => {
    //console.log(req.body)

    // validar que tengamos alg en el input 

    const { nombre } = req.body

    let errores = []

    if(!nombre){
        errores.push({'texto': 'Agrega un Nombre al Proyecto'})
    }

    // si hay errores

    if(errores.length > 0 ){
        res.render('nueva-actividad', {
            nombrePaginas : 'Nuevo Proyecto',
            errores 
        })
    }
    else
    {
        // insertar en la base de datos
    }
}

