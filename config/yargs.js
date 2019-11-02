const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción dse la tarea por hacer'
}

const completado = {
	default: true,
	alias: 'c',
	desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
							.command('crear', 'Crear un elemento por hacer', {
								descripcion
							})
							.command('actualizar', 'Actualizar el estado completo de una tarea', {
								descripcion,
								completado
							})
							.command('borrar', 'Borra una tarea', {
								descripcion
							})
							.help()
							.argv;

module.exports = {
	argv
}