function argumentos_lista(...parametros){
// ...parametros es lo quivalente a  *args **kwargs en python
    console.log(parametros)
    for (x in parametros){
        console.log(x)
    }
}

function argumentos_diccionario(...parametros2){
// ...parametros es lo quivalente a *args **kwargs en python
    console.log(parametros2)
    for (x in parametros2){
        console.log(x)
    }
}


argumentos_lista(1, 2, 6, 2, "texto")
argumentos_diccionario(color="rojo", numero=10)
// argumentos_mesclados(1, 2, 6, 2, "texto", color="rojo", numero=10)