
const argv=require('./config/yangs').argv;

const {listarTabla, Creararchivo}= require('./multiplicar/multiplicar');










let comando=argv._[0];
switch(comando){
  
    case 'listar':
   
    listarTabla(argv.base, argv.limite);
   

    break;
    case 'crear':
  
    Creararchivo(argv.base, argv.limite)
    .then(archivo=> console.log(`Archivo creado: tabla-${argv.base}.txt`))
    .catch(e=>console.log(e));
    break;
    default:
    console.log('Comando no reconocido');
    break;
}