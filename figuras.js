// Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value;
    const perimetro =perimetroCuadrado(value);

    const resultadoCuadrado = document.getElementById('resultadoCuadrado');
    resultadoCuadrado.innerText = 'El perimetro del cuadrado es ' + perimetro + ' cm.' //print
}

function areaCuadrado(lado){
    return lado * lado
}
function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value;
    const area = areaCuadrado(value);
    
    const resultadoCuadrado = document.getElementById('resultadoCuadrado');
    resultadoCuadrado.innerText = 'El area del cuadrado es de ' + area + ' cm.' //print
}


// Codigo del Triangulo
console.group('Triangulos')

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     'Los lados del triangulo miden: ' 
//     + ladoTriangulo1 
//     + 'cm, ' 
//     + ladoTriangulo2 
//     + 'cm, ' 
//     + baseTriangulo 
//     + 'cm.'
//     );
    
// const alturaTriangulo = 5.5;

// console.log('La altura del triangulo es de : ' + alturaTriangulo + 'cm.' )

function perimetroTriangulo(lado1 , lado2 , base){
    return lado1 + lado2 + base;
};
function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById('InputTrianguloA');
    const ladoB = document.getElementById('InputTrianguloB');
    const baseT = document.getElementById('InputTrianguloBase');
    const lado1 = Number(ladoA.value);
    const lado2 = Number(ladoB.value);
    const base = Number(baseT.value);
    const perimetroT = perimetroTriangulo(lado1, lado2, base);

    const resultadoTriangulo = document.getElementById('resultadoTriangulo');
    resultadoTriangulo.innerText = 'El perimetro del triangulo es ' + perimetroT + ' cm.' //print
}

// console.log('El perimetro del triangulo es: ' + perimetroTriangulo + 'cm');

function areaTriangulo(baseT , alturaT){
    return (baseT * alturaT) / 2;
};
function calcularAreaTriangulo(){
    const alturaT = document.getElementById('InputTrianguloAltura');
    const baseT = document.getElementById('InputTrianguloBase');
    const altura = Number(alturaT.value);
    const base = Number(baseT.value);
    const areaT = areaTriangulo(base, altura);

    const resultadoTriangulo = document.getElementById('resultadoTriangulo');
    resultadoTriangulo.innerText = 'El area del triangulo es ' + areaT + ' cm.' //print
};

// console.log('El area del triangulo es: ' + areaTriangulo + 'cm^2');
 

// Codigo del circulo

// Radio
// const radioCirculo = 4;
// console.log('El radio del circulo es :' + radioCirculo + 'cm.')

//Diametro
function diametroCirculo(radio){
    return radio * 2;
};
function calcularDiametro(){
    const radio = document.getElementById('InputCirculo');
    const radioCirculo = Number(radio.value);
    const diametro = diametroCirculo(radioCirculo);

    const resultadoTCirculo = document.getElementById('resultadoCirculo');
    resultadoTCirculo.innerText = 'El diametro del circulo es ' + diametro + ' cm.' //print
};

//PI
const PI = Math.PI;

//Perimetro

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};
function calcularPerimetroCirculo(){
    const radio = document.getElementById('InputCirculo');
    const radioCirculo = Number(radio.value);
    const perimetroC = perimetroCirculo(radioCirculo);

    const resultadoTCirculo = document.getElementById('resultadoCirculo');
    resultadoTCirculo.innerText = 'El perimetro del circulo es ' + perimetroC + ' cm.' //print
};

//Area

function areaCirculo(radio){
    return(radio * radio) * PI;
};
function calcularAreaCirculo(){
    const radio = document.getElementById('InputCirculo');
    const valueC = Number(radio.value);
    const areaC = areaCirculo(valueC);

    const resultadoTCirculo = document.getElementById('resultadoCirculo');
    resultadoTCirculo.innerText = 'El area del circulo es ' + areaC + ' cm.' //print
};

