class Producto {
    constructor(nombre, marca, precio, stock ) {
        
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto("chocolate amargo", "chocolatory", 200, 90)
const producto2 = new Producto("chocolate semi amargo", "chocolatory", 180, 55)
const producto3 = new Producto("bocaditos", "Woow", 90, 20)
const producto4 = new Producto("mini chocolate", "chocolatory", 50, 120)
const producto5 = new Producto("chocolate amargo", "dr cacao", 220, 120)
const producto6 = new Producto("chocolate semi amargo", "cofler", 100, 120)


const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

let precio, stock, nombre, marca, continua




function buscarProducto(productos) {
    let nombreProducto = prompt("Ingrese un nombre de producto").toLowerCase()

    let productoBuscado = productos.find(producto => producto.nombre == nombreProducto)

    if(productoBuscado == undefined) {
        console.log("Producto no encontrado")
    } else {
        console.log(productoBuscado)
    }
}

function buscarProductos(productos) {
    
    let nombreMarca = prompt("Ingrese una marca").toLowerCase()

    let productosBuscados = productos.filter(producto => producto.marca == nombreMarca)

    if(productosBuscados == undefined) {
        console.log("No hay productos con dichas caracteristicas")
    } else {
        console.log(productosBuscados)
    }
} 


do {
    respuesta = parseInt(prompt(`Ingrese numero para:
        1) Buscar un producto
        2) Buscar por marca
        
    `))
} while(respuesta <1 || respuesta >2)
    


switch(respuesta) {
    case 1:
        buscarProducto(productos)
        break
    case 2:
        buscarProductos(productos)
        break
        case 3:
        buscarProductos(productos)
        break
    default:
        alert("Opcion no valida")
        break
}