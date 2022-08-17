
function generadorAutomatico() {
    recetas.push(new Receta('BROWNIE DE CHOCOLATE','POSTRE', "DULCE", '1 HORA'))
    recetas.push(new Receta('FLAN','POSTRE', "DULCE", '30 MINUTOS'))
    recetas.push(new Receta('LEMON PIE','TORTA', "LIMON", '1:30 HORAS'))
    recetas.push(new Receta('ROGEL','TORTA', "DULCE", '2 HORAS'))
    ingredientes.push(new Ingrediente('BROWNIE DE CHOCOLATE', 'CHOCOLATE', '200 GRAMOS'))
    ingredientes.push(new Ingrediente('BROWNIE DE CHOCOLATE', 'HARINA', '2 TAZAS'))
    ingredientes.push(new Ingrediente('BROWNIE DE CHOCOLATE', 'AGUA', '1 VASO'))
    ingredientes.push(new Ingrediente('FLAN', 'LECHE', '1 LITRO'))
    ingredientes.push(new Ingrediente('FLAN', 'HUEVO', '5 HUEVOS'))
    ingredientes.push(new Ingrediente('FLAN', 'AZUCAR', '100 GRAMOS'))
    console.log("Se generaron recetas automaticamente.")
    console.table(recetas)
}


function nuevaReceta() {
    
    let nombre = (prompt("Ingrese el nombre de la receta")).toUpperCase()
    let tipo = (prompt("Ingrese el tipo de la receta", "Ej: comida, bebida, postre, torta, snack")).toUpperCase()
    let sabor = (prompt("Ingrese el sabor de la receta", "Ej: dulce, salado, agridulce, amargo")).toUpperCase()
    let tiempo = (prompt("Ingrese el tiempo aproximado de elaboración")).toUpperCase()

    receta = new Receta(nombre, tipo, sabor, tiempo)

    recetas.push(receta)
    console.table(recetas)

    let agregarAhora = true

    agregarAhora = confirm("¿Desea agregar los ingredientes de la receta?")

    if (agregarAhora) {       
       agregarIngredientes(receta)
    } 
        console.log("La receta fue agregada exitosamente.")
}

function agregarIngredientes(receta) {

    let seguimos = true
    let cantIngredientes = 0
    let nombreReceta = receta.nombre

    while(seguimos) {

    let ing = (prompt("Agregar ingrediente:")).toUpperCase()
    let cantidad = (prompt("Cantidad del ingrediente ingresado:")).toUpperCase()

    if (ing == "" || cantidad == "" || ing == null || cantidad == null) {
        console.error("Los campos no pueden quedar vacios!")
    }
    else {
         console.log(ing, ",", cantidad)
         cantIngredientes++
         ingredientes.push(new Ingrediente(nombreReceta, ing, cantidad))
    }

    seguimos = confirm("¿Desea agregar otro ingrediente?")

         if ((seguimos == false) && (cantIngredientes < 3)) {
        console.warn("Debe agregar minimo 3 ingredientes.")
        seguimos = true
        } 

    }
    console.log("Cantidad de ingredientes: ", cantIngredientes)
}



function calcularIMC() {
     peso = parseInt(prompt("Ingrese su peso en kilogramos:"))
     altura = parseInt(prompt("Ingrese su altura en centimetros:"))
     altura = altura / 100
     imc = peso / (altura * altura)
     if (peso == "" || altura == "") {
        console.error("Los campos no pueden quedar vacios!")    
    } else {
         console.log("Su indice de masa corporal es:", imc)
    }

    if (imc >= 18.5 && imc <= 24.9) {
        console.log("Su peso se encuentra normal")
    } else if (imc > 25){
        console.log("Se encuentra por arriba del limite")
    } else if (imc < 18.4){
        console.log("Se encuentra por debajo del limite")
    } else {
        console.warn("Ups, ocurrió un erro en el calculo.")
    }
}

function buscarReceta() {

    console.log("OPCIONES:")
    console.log("1: NOMBRE DE LA RECETA")
    console.log("2: TIPO DE LA RECETA")
    console.log("3: SABOR DE LA RECETA")
    console.log("4: TIEMPO APROXIMADO DE LA RECETA")
    let opcion = prompt("Ingresa la opcion para buscar:")

        switch(opcion) {
            case "1":
                let busqueda1 = (prompt("Ingresa la receta a buscar:")).toUpperCase()
                const resultado1 = recetas.filter(receta => receta.nombre.includes(busqueda1))
                console.table(resultado1)
                break
            case "2":
                let busqueda2 = (prompt("Ingresa el tipo receta a buscar:")).toUpperCase()
                const resultado2 = recetas.filter(receta => receta.tipo.includes(busqueda2))
                console.table(resultado2)
                break
            case "3":
                let busqueda3 = (prompt("Ingresa el sabor de la receta a buscar:")).toUpperCase()
                const resultado3 = recetas.filter(receta => receta.sabor.includes(busqueda3))
                console.table(resultado3)
                break
            case "4":
                let busqueda4 = (prompt("Ingresa el tiempo de la receta a buscar:")).toUpperCase()
                const resultado4 = recetas.filter(receta => receta.tiempo.includes(busqueda4))
                console.table(resultado4)
                break
            default:
                return "Opción no valida."
        }
    }
    
function borrarReceta() {

   let borrar = (prompt("Ingrese el nombre de la receta que desea borrar:")).toUpperCase()
   const resultado = recetas.some(receta => receta.nombre === borrar)

   if (resultado === true) {
    let quieroBorrar = true
    const mostrarReceta = recetas.find(receta => receta.nombre === borrar)
         console.table(mostrarReceta)
    quieroBorrar = confirm("¿Esta segur@ que desea eliminar esta receta?")
        if (quieroBorrar == true) {
        recetas.pop(borrar)
        console.warn("Se ha eliminado la receta:", borrar)
        } else {
         console.log("No se ha borrado la receta.")
        } 
   } else {
        console.error("No se ha encontrado la receta", borrar)
   }

}

function ordenarRecetas() {
    console.clear()
    recetas.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    console.table(recetas)
}

function mostrarIngredientes() {
    
    let busquedaIng = (prompt("Ingresa la receta a mostrar:")).toUpperCase()
    const resultado = ingredientes.filter(ingrediente => ingrediente.nombre.includes(busquedaIng))
    console.table(resultado)
    
}


generadorAutomatico()
nuevaReceta()
buscarReceta()
mostrarIngredientes()
borrarReceta()
calcularIMC()
