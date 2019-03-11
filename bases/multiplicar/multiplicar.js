const fs = require('fs');
 listarTabla= (base,limite)=>{
    let data='';
    
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }
}
Creararchivo= async(base, limite)=>{
if(!Number(base)){
    throw new Error (`El valor introducido ${base} no es un numero`);
    return;
}
let data='';

for(let i=1; i<limite; i++){
    data+=`${i}*${base}= ${base*i}\n `;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if(err) throw err;
  //throw new Error (`${err}`);
 else return 'The file has been saved!';
});}
module.exports={
    Creararchivo,
    listarTabla
}