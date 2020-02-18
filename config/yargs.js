const descripcion = {
    alias: "d",
    demand: true,
    desc: "Descripcion de la tarea por hacer"
};

const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea"
};


const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado de una tarea", {
        descripcion,
        completado
    })
    .command("listar", "Muestra la lista de tareas por hacer", {

    })
    .command("borrar", "Elimina una tarea por hacer", {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}