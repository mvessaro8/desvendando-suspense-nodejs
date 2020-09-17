const evidencias = [2,3,4];

let validarTeoria = (teoria) => {
    const assassinoCorreto = validarAssassino(teoria[0]);
    const localCorreto = validarLocal(teoria[1]);
    const armaCorreta = validarArma(teoria[2]);

    const caso = [assassinoCorreto, localCorreto, armaCorreta];

    const solucao = caso
        .map((item, i) => ({ key: i + 1, value: item }))
        .filter(item => !item.value)
        .map(item => item.key);

    return solucao.length > 0 ? solucao[Math.floor(Math.random() * solucao.length)] : 0;
}

let validarAssassino = (assassino) => {
    return assassino == evidencias[0];
};

let validarLocal = (local) => {
    return local == evidencias[1];
};

let validarArma = (arma) => {
    return arma == evidencias[2];
};

module.exports.validarTeoria = validarTeoria;
