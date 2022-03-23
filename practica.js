let Nombre = 'christian'
let Apellido = 'barrio'
let NombreUsPlatzi = 'ChrisBarrio'
let Edad = '32'
let Email = 'ch.barrionuevo@gmail.com'
let MayorDeEdad = true
let DineroAh = 1000
let Deudas = 100

nombreCompleto = `${Nombre} ${Apellido}`;
dineroReal = DineroAh - Deudas;

// 

const name = "Chris";
const lastname = "Barrio";
const completeName = name + lastname;
const nickname = "bocha";

const  mifunction = (name,lastname,nickname)=>{
    let fullName=`${name} ${lastname}`
    return `Mi nombre es ${fullName} pero prefiero que me llames ${nickname}`
}
console.log(mifunction('christian','barronuevo', 'pepe'));
// juego de piedra, papel o tijera
let opc1 = 'piedra';
let opc2 = 'papel';
let opc3 = 'tijera';


let resultado = function(user,cpu){
    if (user!= cpu){
        if (user === opc1 && cpu === opc3){
         console.log(`gano el user con ${opc1}`)
        }
        else if (user === opc2 && cpu === opc1){
            console.log(`gano el user con ${opc2}`)
        }
        else if (user === opc3 && cpu === opc2){
            console.log(`gano el user con ${opc3}`)
        }
        else ('gano la cpu!')     
    }else{
        console.log('es un empate!')
    }
}

resultado(opc1,opc1)

// piedra , paperl o tijera con switch

let opc1 = 'piedra';
let opc2 = 'papel';
let opc3 = 'tijera';
let resultadoSwitch = function(user, cpu){
switch (true){
    case user === opc1 && cpu === opc3:
        console.log(`gano el user con ${opc1}`);
        break;
    case  user === opc2 && cpu === opc1:
        console.log(`gano el user con ${opc2}`);
        break;
    case   user === opc3 && cpu === opc2:
        console.log(`gano el user con ${opc3}`);
        break;
    case   user === cpu:
        console.log(`empate`);
        break;    
    default:
        console.log ('gano la cpu!');
    }
}
resultadoSwitch(opc1 , opc2)

// loop

var estudiantes = ['maria','sergio','rosa','vitta']

function saludarEstudiantes(estudiantes){
    console.log(`Hola ${estudiantes} bienvenida`)
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// for(var estudiante of estudiantes){
//     saludarEstudiantes(estudiante)
// }