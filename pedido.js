function calcularTotalPedido(productos, descuento) {
  let total = 0;
  productos.forEach(producto => {
    total += producto.precio * producto.cantidad;
  });
  return total - (total * (descuento / 100));  // Aplica el descuento
}

module.exports = { calcularTotalPedido };
