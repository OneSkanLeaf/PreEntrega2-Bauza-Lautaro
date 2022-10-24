const creoID = () => parseInt(Math.random() * 10000);

const agregarProducto = () => {
  let id = creoID();
  let descripcion = prompt("Descripción del nuevo producto:").toUpperCase();
  let importe = parseFloat(prompt("Importe (sin IVA):"));
  productos.push(new Producto(id, descripcion, importe));
  listarProductos();
};

function listarProductos() {
  console.table(productos);
}

function generadorAutomatico() {
  productos.push(new Producto(1234, "PRODUCTO 1", 29950));
  productos.push(new Producto(2345, "PRODUCTO 2", 249900));
  productos.push(new Producto(3456, "PRODUCTO 3", 199949));
  productos.push(new Producto(4567, "PRODUCTO 4", 219890));
  productos.push(new Producto(5678, "PRODUCTO 5", 409090));
  productos.push(new Producto(6789, "PRODUCTO 6", 459000));
  productos.push(new Producto(7890, "PRODUCTO 7", 679800));
  productos.push(new Producto(8901, "PRODUCTO 8", 189900));
}
generadorAutomatico();

function agregarCarrito() {
  let buscar = prompt("Ingresa el producto a buscar:").toUpperCase();
  let resultado = productos.find((elemento) => elemento.nombre.includes(buscar));
  if (resultado === undefined) {
    console.warn("No se encontró el producto");
  } else {
    carrito.push(resultado);
  }
}

function filtrarProductos() {
  let precio = parseFloat(prompt("Ingrese el precio maximo de los productos que quiere ver"));
  let resultado = productos.filter((elemento) => elemento.importe < precio);
  console.table(resultado);
}

function totalCarrito() {
  let total = carrito.reduce((acc, elemento) => acc + elemento.importe, 0);
  console.log("El total del carrito es:", total);
}

function ordenar() {
  let productosOrdenados = productos.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  });
  console.table(productosOrdenados);
}
