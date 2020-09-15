const getSuspeitos = require('./suspense').suspeitos;
const getSuspeitoById = require('./suspense').getSuspeitoById;
const validarTeoria = require('./suspense').validarTeoria;

test('Existe suspeitos', () => {
    expect(getSuspeitos.length).toBeGreaterThanOrEqual(0);
});

test('Existe todos os suspeitos', () => {
    expect(getSuspeitos.length).toBe(6);
});

test('Retorna Jogador 1', () => {
    expect(getSuspeitoById(1).nome).toBe('Charles B. Abbage');
})

test('Teoria válida', () => {

    const teoria = [ 2, 3, 4];
    expect( validarTeoria( teoria ) ).toBe(0)

})


test('Suspeito inválido', () => {

    const teoria = [ 1, 1, 1];
    expect( validarTeoria( teoria ) ).toBe(1);

})

test('Local inválido', () => {

    const teoria = [ 2, 1, 4];
    expect( validarTeoria( teoria ) ).toBe(2);

})

test('arma inválido', () => {

    const teoria = [ 2, 3, 1];
    expect( validarTeoria( teoria ) ).toBe(3);

})

/*
test('Gerar teoria', () => { // valida Teoria: 2, 3, 4

}*/
