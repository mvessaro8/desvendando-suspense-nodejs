const suspeitos = [
    {
        id: 1,
        nome: 'Charles B. Abbage'
    },
    {
        id: 2,
        nome: 'Donald Duck Knuth'
    },
    {
        id: 3,
        nome: 'Ada L. Ovelace'
    },
    {
        id: 4,
        nome: 'Alan T. Uring'
    },
    {
        id: 5,
        nome: 'Ivar J. Acobson'
    },
    {
        id: 6,
        nome: 'Ras Mus Ler Dorf'
    }
];

let getSuspeitoById = (id) => {
    return suspeitos.filter(sus => sus.id === id)[0];
}

const evidencias = [2,3,4];

let validarTeoria = (arr) => {
    if (arr[0] !== evidencias[0]) {
        return 1;
    } else if (arr[1] !== evidencias[1]) {
        return 2;
    } else if (arr[2] !== evidencias[2]) {
        return 3;
    } else {
        return 0;
    }
}

module.exports.suspeitos = suspeitos;
module.exports.getSuspeitoById = getSuspeitoById;
module.exports.validarTeoria = validarTeoria;
