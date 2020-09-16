const evidencias = [2,3,4];

let validarTeoria = (teoria) => {
    const assassinoCorreto = assassinoValido(teoria[0]);
    const localCorreto = localValido(teoria[1]);
    const armaCorreta = armaValida(teoria[2]);

    const caso = [assassinoCorreto, localCorreto, armaCorreta];

    const casoSolucionado = caso.every(item => !!item);
    if (casoSolucionado) {
        return 0;
    }

    const casoIncompleto = caso
        .map((item, i) => ({ key: i + 1, value: item }))
        .filter(item => !item.value)
        .map(item => item.key);

    return casoIncompleto[Math.floor(Math.random() * casoIncompleto.length)];
}

let assassinoValido = (assassino) => {
    return assassino == evidencias[0];
};

let localValido = (local) => {
    return local == evidencias[1];
};

let armaValida = (arma) => {
    return arma == evidencias[2];
};

module.exports.validarTeoria = validarTeoria;
