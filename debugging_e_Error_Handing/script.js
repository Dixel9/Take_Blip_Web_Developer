function validaArray (array, num) {
    try {
        if(!array && !num) throw new ReferenceError ("Envie os parâmetros");

        if(typeof array !== 'object') throw new TypeError ("O Array precisa ser do tipo object");
    
        if(typeof num !== 'number') throw new TypeError ("O número precisa ser do tipo number");
    
        if(array.length !== num) throw new RangeError ("O tamanho inválido");
    
        return array;
    }
    
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um Reference Error")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este é um Type Error")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este é um Range Error")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e)
            console.log(e.message)
        }
    }
}

console.log(validaArray([1,2,3,4,5], 5));