export const getProductos = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  const productos = data.map((producto) => ({
    id: producto.id,
    titulo: producto.title,
    precio: producto.price,
    descripcion: producto.description,
    imagen: producto.image,
  }));
  return productos;
};
