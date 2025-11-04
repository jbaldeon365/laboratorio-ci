const { calcularTotalPedido } = require('./pedido.js');

function generarResumen(productos, descuento, cliente) {
  if (!cliente) {
    return "Error: no hay nombre de cliente";
  }

  const total = calcularTotalPedido(productos, descuento);
  const cantidadProductos = productos.reduce((acc, p) => acc + p.cantidad, 0);

  return `Cliente: ${cliente}\nCantidad de productos: ${cantidadProductos}\nTotal: S/${total}`;
}

module.exports = { generarResumen };