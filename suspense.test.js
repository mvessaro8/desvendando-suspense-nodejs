const resultadoTeste = [2,3,4];

const { resultado, verificaTeoria } = require('./suspense');


test('Verifica se o valor informado é igual ao valor do res', () => {
    expect(resultado).toStrictEqual(resultadoTeste)
});

test('Verifica se a teoria está correta', () => {
    expect(verificaTeoria([2,3,4])).toEqual(0);
});

test('Verificar se o input é uma possível resposta', () => {
    expect(verificaTeoria([3,3,4])).toStrictEqual(1);
});