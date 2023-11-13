
class gasto{
    constructor(producto, monto){
        this.producto = producto
        this.monto = monto
    }
}


const gastos = []
let opcion = 9


function agregar(){
    const producto = new gasto(prompt("De qué es el gasto?"),parseFloat(prompt("Ingrese el monto del gasto")))
    gastos.push(producto)
    console.log(gastos)
    while (true) {
        opcion = prompt("Elija una nueva opción\n1- Agregar otro gasto\n2- Volver al inicio")
        if (opcion == 1){
            agregar()
        break
        } else if (opcion == 2) {
        break
        }
    alert ("Elija una opcion valida")
    }
    
}

function eliminar(){
    while(true){
        opcion = prompt("Esta seguro que desea eliminar el último gasto añadido?\n1- Si\n2- No")
        if (opcion == 1){
            gastos.pop()
            alert("Operacion realizada con exito")
            break
        } else if (opcion == 2){
        break
        } else {
            alert("Elija una opcion correcta")
        }
    } 
}


function total(){
    let acum = 0
    const total = gastos.map(gasto=>gasto.monto)
    total.forEach(monto =>{
        acum+=monto
    })
    alert("Su total parcial es " + acum)
    console.log(acum)
}



function inicio(){
    while(true){
        opcion = prompt("Elija una de las siguientes opciones para sus gastos\n1- Agregar gasto\n2- Eliminar último gasto\n3- Ver total de gastos\n0- Finalizar")
    console.log(opcion)
    if (opcion == 1){
        agregar()
    } else if (opcion == 2){
        eliminar()
    } else if (opcion == 3){
        total()
    } else if (opcion == 0){
        let acum = 0
        const total = gastos.map(gasto=>gasto.monto)
        total.forEach(monto =>{
        acum+=monto
        })
        alert("Su total es " + acum)
        break
    } else {
    alert("Elija una opcion correcta")
    }
}
}

inicio()



