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

    if (erros.length === 0) {
        return 0
    } else  if (erros.length === 1 && erros[0] === 1) {
        return 1 
    } else {
        return parseInt((Math.random()*(0-2) + (resultado.length-1)).toFixed(0));
    }
}

module.exports = {
    resultado,
    verificaTeoria,
}