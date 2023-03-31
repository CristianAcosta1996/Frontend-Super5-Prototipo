import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ProductoModal } from "./ProductoModal";

export const ProductosCard = ({
  imagen,
  titulo,
  descripcion = "Descripcion",
  precio = "$0",
  handleOnPress,
}) => {
  const [open, setOpen] = useState(false);
  const [imagenModal, setImagenModal] = useState("");
  const [tituloModal, setTituloModal] = useState("");
  const [descripcionModal, setDescripcionModal] = useState("");
  const [precioModal, setPrecioModal] = useState("");

  const handleClick = ({ target }) => {
    const card = target.parentNode.parentNode;
    const cardContent = card.childNodes[0].childNodes;
    const cardBody = cardContent[1].childNodes;

    const imgUrl = cardContent[0].currentSrc;
    const titulo = cardBody[0].innerText;
    const descripcion = cardBody[1].innerText;
    const precio = cardBody[2].innerText;

    setTituloModal(titulo);
    setDescripcionModal(descripcion);
    setPrecioModal(precio);
    setImagenModal(imgUrl);
    setOpen(true);
  };

  return (
    <>
      <ProductoModal
        open={open}
        setOpen={setOpen}
        precio={precioModal}
        descripcion={descripcionModal}
        imagen={imagenModal}
        titulo={tituloModal}
      />
      <Card sx={{ width: "100%" }} elevation={0}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            image={imagen}
            alt="producto"
          />
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              textAlign="center"
              sx={{ typography: { xs: "body2", sm: "h6" } }}
            >
              {titulo}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ typography: { xs: "caption", sm: "body2" } }}
            >
              {descripcion}
            </Typography>
            <Typography
              textAlign="center"
              color="secondary"
              sx={{
                typography: {
                  xs: "caption",
                  sm: "h6",
                },
                fontWeight: "bold",
                marginTop: 1,
              }}
            >
              {`$${precio}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            fullWidth
            variant="contained"
            onClick={handleClick}
          >
            Comprar
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
