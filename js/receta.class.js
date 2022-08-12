class Receta {
    constructor(nombre, tipo, sabor, tiempo) {
        this.nombre = nombre
        this.tipo = tipo
        this.sabor = sabor
        this.tiempo = tiempo
    }
}

class Ingrediente {
    constructor(nombre, ingrediente, cantidad) {
        this.nombre = nombre
        this.ingrediente = ingrediente
        this.cantidad = cantidad
    }
}




Ingrediente.nombre = Receta.nombre