import React, { useState } from "react";
import { Box, TextField, Slider, Button, Typography } from "@mui/material";

const Filter = ({ onFilter }) => {
  const [price, setPrice] = useState(500);
  const [stars, setStars] = useState(0);

  const handleFilter = () => {
    onFilter({ price, stars });
  };

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: 300,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filtrer les hôtels
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Prix Max (Ariary)"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          variant="outlined"
          fullWidth
        />
        <Typography variant="body2" color="textSecondary">
          Nombre d'étoiles : {stars}
        </Typography>
        <Slider
          value={stars}
          onChange={(e, val) => setStars(val)}
          step={1}
          min={0}
          max={5}
          valueLabelDisplay="auto"
          sx={{ color: "#1976d2" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleFilter}
          sx={{
            fontWeight: "bold",
          }}
        >
          Appliquer les filtres
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
