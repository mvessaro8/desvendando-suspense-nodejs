const validarTeoria = require('./suspense').validarTeoria;

test('Teoria correta! Caso solucionado', () => {
    const teoria = [2, 3, 4];
    expect(validarTeoria(teoria)).toBe(0);
});

test('Teoria incorreta', () => {
    const teoriasIncorretas = [1, 2, 3];
    const teoria = [3, 4, 5];

    expect(teoriasIncorretas).toContain(validarTeoria(teoria));
});

test('Suspeito incorreto', () => {
    const teoria = [1, 3, 4];
    expect(validarTeoria(teoria)).toBe(1);
});

test('Local incorreto', () => {
    const teoria = [2, 1, 4];
    expect(validarTeoria(teoria)).toBe(2);
});

test('Arma incorreta', () => {
    const teoria = [2, 3, 1];
    expect(validarTeoria(teoria)).toBe(3);
});

test('Suspeito ou Local incorretos', () => {
    const teoriasIncorretas = [1, 2];
    const teoria = [1, 1, 4];

    expect(teoriasIncorretas).toContain(validarTeoria(teoria));
});

test('Suspeito ou Arma incorretos', () => {
    const teoriasIncorretas = [1, 3];
    const teoria = [1, 3, 1];

    expect(teoriasIncorretas).toContain(validarTeoria(teoria));
});

test('Local ou Arma incorretos', () => {
    const teoriasIncorretas = [2, 3];
    const teoria = [2, 1, 1];

    expect(teoriasIncorretas).toContain(validarTeoria(teoria));
});
