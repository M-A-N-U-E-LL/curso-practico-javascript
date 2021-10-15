//Código del cuadrado

console.group("Cuadrados");


function perimetroCuadrado(lado) {
    return lado * 4;
}; 


function areaCuadrado(lado) {
    return lado * lado
};

console.groupEnd();



//Código del triángulo
console.group("Triangulos")


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) /2;
};

 
console.groupEnd();


// Código del Círculo
console.group("Círculos");


// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
};

// PI
// const PI = 3.1415;
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
};

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
};

console.groupEnd();


// Interactuando con el HTML

// CUADRADO
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
};

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
};

// TRIÁNGULO
function CalcularPerimetroTriangulo() {
    const InputTriangulo1 = document.getElementById("InputTriangulo1");
    const InputTriangulo2 = document.getElementById("InputTriangulo2");
    const InputBaseTriangulo = document.getElementById("InputBaseTriangulo");

    const value1 = Number(InputTriangulo1.value);
    const value2 = Number(InputTriangulo2.value);
    const value3 = Number(InputBaseTriangulo.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
};

function CalcularAreaTriangulo() {
    const InputBase = document.getElementById("InputBaseTriangulo");
    const InputAltura = document.getElementById("InputAlturaTriangulo");

    const value1 = InputBase.value;
    const value2 = InputAltura.value;

    const area = areaTriangulo(value1, value2);

    alert(areaTriangulo);
};

// CIRCULO
function CalcularPerimetroCirculo() {
    const InputPerimetro = document.getElementById("InputRadioCirculo");
    
    const value1 = InputPerimetro.value;
    
    const perimetro = perimetroCirculo(value1);
    
    
    alert(perimetro);
};

function CalcularDiametroCirculo() {
    const InputDiametro = document.getElementById("InputRadioCirculo");
    
    const value2 = InputDiametro.value;
    
    const diametro = diametroCirculo(value2);
    
    alert(diametro);
};

function CalcularAreaCirculo() {
    
    const InputArea = document.getElementById("InputRadioCirculo");
    
    const value3 = InputArea.value;
    
    const area = areaCirculo(value3);

    alert(area);
};