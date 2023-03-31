import { Box, Button, Modal, Typography } from "@mui/material";

export const ProductoModal = ({
  open,
  setOpen,
  titulo,
  descripcion,
  precio,
  imagen,
}) => {
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 1000,
    bgcolor: "background.paper",
    border: "2px solid #555",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography variant="h4" component="span">
            Imagen Producto
          </Typography> */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={imagen}
              alt="producto"
              style={{ width: 200, objectFit: "cover" }}
            />
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2" mt={2}>
            {titulo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {descripcion}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            color="secondary"
            textAlign="center"
            variant="h5"
          >
            {precio}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            color="secondary"
            fullWidth
          >
            Comprar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
