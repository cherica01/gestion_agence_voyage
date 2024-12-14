import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const HotelCard = ({ hotel }) => {
  return (
    <Card
      sx={{
        width: 300, // Taille uniforme des cartes
        height: 400, // Hauteur fixe pour uniformiser
        margin: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Espacement uniforme des éléments
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180" // Taille fixe de l'image
        image={hotel.image}
        alt={hotel.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {hotel.name}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={0.5}
          mb={1}
        >
          {Array(hotel.stars)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} sx={{ color: "#FFD700" }} />
            ))}
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginBottom: "10px" }}
        >
          {hotel.description}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {hotel.price} Ariary
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" fullWidth>
          Réserver
        </Button>
      </CardActions>
    </Card>
  );
};

export default HotelCard;
