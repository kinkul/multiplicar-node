const opts={  
base:{
    demand:true,
    alias:'b',
},
limite:{
    alias:'l',
    
}

}
const argv= require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opts)
.command('crear','Genera un archivo con las tablas de multiplicar',opts)
.help()
.argv;

module.exports={
    argv
};