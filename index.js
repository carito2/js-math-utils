const showNumber = (number) => {
    console.log(`El número ingresado es ${number}`);
}

showNumber(25);

const sumNumbers = (a, b) => {
    console.log(`La suma de ${a} y ${b} es igual a ${a+b}`);
    return a+b;
}

sumNumbers(25, 2);

const rest = (a,b) => {
    console.log(`La resta de ${a} y ${b} es igual a ${a-b}`);
}

rest(3,4);

const multiplication = (a,b) => {
    console.log(`La multiplicación de ${a} y ${b} es igual a ${a*b}`);
}
multiplication(10, 3);

const division = (a,b) => {
    console.log(`La división de ${a} y ${b} es igual a ${a/b}`);
}

division(20,5);

const calculateAverage = (a,b) => {
    let result = sumNumbers(a,b)/2
    console.log(`El promedio de ${a} y ${b} es igual a ${result}`)
    return (
        result
    )

}