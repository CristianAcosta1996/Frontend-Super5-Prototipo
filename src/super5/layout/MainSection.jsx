import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductosCard } from "../productos/components/ProductosCard";
import { getProductos } from "../productos/helpers/getProductos";

export const MainSection = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((prod) => setProductos(prod));
  }, []);
  return (
    <>
      <Grid container justifyContent="center" alignItems="flex-start">
        {productos.map(({ id, titulo, precio, descripcion, imagen }) => (
          <Grid
            item
            xs={4}
            sm={3}
            md={2}
            sx={{ boxShadow: 5 }}
            mr={2}
            mb={2}
            key={id}
          >
            <ProductosCard
              titulo={titulo}
              precio={precio}
              descripcion={descripcion}
              imagen={imagen}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
