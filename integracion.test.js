const { calcularTotalPedido } = require('./pedido');
const { generarResumen } = require('./funcionGrupo6');

test('debe calcular el total y generar el resumen correctamente', () => {
  const productos = [{ precio: 100, cantidad: 2 }];
  const descuento = 10;
  const cliente = "Juan Pérez";
  
  const totalEsperado = calcularTotalPedido(productos, descuento);
  const resultado = generarResumen(productos, descuento, cliente);
  
  expect(resultado).toBe(`Cliente: ${cliente}\nCantidad de productos: 2\nTotal: S/${totalEsperado}`);
});
