const resultado = [2,3,4];

const verificaTeoria = (teoria) => {
    let erros = []
    if(teoria[0] !== resultado[0]) {
        erros.push(1)
    }
    if(teoria[1] !== resultado[1]) {
        erros.push(2)
    }
    if(teoria[2] !== resultado[2]) {
        erros.push(3)
    }

    if () {

    }
    
    if (!erros) {
        return 0
    } else {
        return erros[parseInt((Math.random()*(0-2) + (erros.length-1)).toFixed(0))]
    }
}

module.exports = {
    resultado,
    verificaTeoria,
}