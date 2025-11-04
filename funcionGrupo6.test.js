const { generarResumen } = require('./funcionGrupo6');

test('debe generar el resumen correctamente', () => {
  const productos = [{ precio: 100, cantidad: 2 }];
  const descuento = 10;
  const cliente = "Juan Pérez";
  
  const resultado = generarResumen(productos, descuento, cliente);
  expect(resultado).toBe('Cliente: Juan Pérez\nCantidad de productos: 2\nTotal: S/180');
});

test('debe rechazar cuando no se proporciona nombre de cliente', () => {
  const productos = [{ precio: 100, cantidad: 2 }];
  const descuento = 10;
  const cliente = "";
  
  const resultado = generarResumen(productos, descuento, cliente);
  expect(resultado).toBe("Error: no hay nombre de cliente");
});
