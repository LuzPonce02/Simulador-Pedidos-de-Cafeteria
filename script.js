//Constantes, arrays y variables de tipos de cafe
const tiposDeCafe = ["Expresso", "Americano", "Latte", "Moka", "Capucchino"];
let preciosDeCafe = [200, 250, 300, 350, 400];
const tamaniosDeCafe = ["Pequeño", "Mediano", "Grande"];
let precioDeTamanios = [1, 1.5, 2];
let pedidos = [];

function pedirCafe() {
    //Bienvenida a la cafeteria.
    alert("Bienvenido a la cafeteria Universo☕\nPor favor selecciona tu cafe, tamaño y azucar.");

    //BUCLE para pedir café
    let seguirPidiendo = "Si";
    while (seguirPidiendo.toLowerCase() === "si") {
        let cafeSeleccionado = prompt("¿Que café desea?\n1. Expresso\n2. Americano\n3. Latte\n4. Moka\n5. Capucchino")
        if (cafeSeleccionado === null) {
            alert("No seleccionaste ningun café.⚠ Terminamos el pedido.");
            break;
        }
        if (!["1", "2", "3", "4", "5"].includes(cafeSeleccionado)) {
            alert("Selección inválida de café ⚠");
            continue;
        }

        let indiceCafe = cafeSeleccionado - 1;
        let tipo = tiposDeCafe[indiceCafe];
        let precioCafe = preciosDeCafe[indiceCafe];

        alert("Has seleccionado " + tipo + " por un precio de $" + precioCafe);

        //Seleccionar tamaño de cafe
        let tamanioSeleccionado = prompt("¿Qué tamaño deseas?\n1. Pequeño\n2. Mediano\n3. Grande");
        if (tamanioSeleccionado === null) {
            alert("No seleccionaste ningún tamaño. Terminamos el pedido.");
            break;
        }
        if (!["1", "2", "3"].includes(tamanioSeleccionado)) {
            alert("Selección inválida de tamaño");
            continue;
        }
        let indiceTamanio = tamanioSeleccionado - 1;
        let tamanio = tamaniosDeCafe[indiceTamanio];
        let precioTamanio = precioDeTamanios[indiceTamanio];

        //Azucar, opciones SI / NO
        let azucar = prompt("¿Deseas agregar azucar?\n(Si / No)");
        if (azucar === null) {
            alert("No respondiste. Continuamos sin azucar.")
            azucar = "No";
        }

        //Calcular el precio
        let precioFinal = precioCafe * precioTamanio;

        //Guardar pedido
        pedidos.push({ tipo, tamanio, azucar, precioFinal });
        alert("Tu pedido:\n" + tipo + " tamaño " + tamanio + "\nAzúcar: " + azucar + "\nPrecio final: $" + precioFinal)

        console.log(pedidos);

        // Preguntar si quiere seguir pidiendo
        seguirPidiendo = prompt("¿Deseas pedir otro café? (Si / No)");

        if (seguirPidiendo === null || seguirPidiendo.toLowerCase() !== "si") {
            alert("Perfecto! Mostraremos el resumen de tu compra❤");
            break;
        }

    }

    // Mostrar el resumen de todos los pedidos
    let resumenPedido = "";
    for (let i = 0; i < pedidos.length; i++) {
        resumenPedido += pedidos[i].tipo + " " + pedidos[i].tamanio + " - $" + pedidos[i].precioFinal + "\n";
    }

    // Calcular el total de todos los pedidos
    let totalPedido = 0; 
    for (let i = 0; i < pedidos.length; i++) {
        totalPedido += pedidos[i].precioFinal; 
    }

    alert("Resumen de tu pedido:\n" + resumenPedido + "\nTotal: $" + totalPedido + "\nGracias por tu compra💟");

}
pedirCafe();



