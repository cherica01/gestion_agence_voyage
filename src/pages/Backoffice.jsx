import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";
import { hotels as initialHotels } from "../data/data.ts";
import Header from "../components/Header";  // Importation du Header
import Footer from "../components/Footer";  // Importation du Footer

const BackOffice = () => {
  const [hotels, setHotels] = useState(initialHotels);
  const [form, setForm] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Gérer les changements des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Gérer le changement du fichier image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convertir l'image en URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);  // Lire le fichier image comme URL
    }
  };

  const handleAdd = () => {
    if (form.name && form.price && form.stars && form.description && form.image) {
      const newHotel = {
        id: hotels.length ? hotels[hotels.length - 1].id + 1 : 1,
        ...form,
      };
      setHotels([...hotels, newHotel]);
      setForm({});
    }
  };

  const handleEdit = (id) => {
    const hotelToEdit = hotels.find((hotel) => hotel.id === id);
    if (hotelToEdit) {
      setForm(hotelToEdit);
      setIsEditing(true);
    }
  };

  const handleUpdate = () => {
    if (form.id) {
      setHotels(hotels.map((hotel) => (hotel.id === form.id ? { ...hotel, ...form } : hotel)));
      setForm({});
      setIsEditing(false);
    }
  };

  const handleDelete = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  return (
    <>
      <Header /> {/* Ajout du Header */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Gestion des Hôtels
        </Typography>
        <Paper sx={{ p: 2, mb: 4 }}>
          <Typography variant="h6">Ajouter / Modifier un Hôtel</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Nom" name="name" value={form.name || ""} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Étoiles" name="stars" value={form.stars || ""} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Prix" name="price" value={form.price || ""} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" name="description" value={form.description || ""} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              {/* Champ pour télécharger l'image */}
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }} // Cacher l'élément input
                id="upload-image"  // ID pour associer au label
              />
              <label htmlFor="upload-image">
                <Button variant="contained" color="secondary" component="span">
                  Choisir une image
                </Button>
              </label>
              {form.image && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2">Image sélectionnée :</Typography>
                  <img
                    src={form.image}
                    alt="image-preview"
                    style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "8px" }}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            {isEditing ? (
              <Button variant="contained" color="primary" onClick={handleUpdate}>
                Modifier
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleAdd}>
                Ajouter
              </Button>
            )}
            <Button variant="outlined" color="secondary" sx={{ ml: 2 }} onClick={() => setForm({})}>
              Annuler
            </Button>
          </Box>
        </Paper>
        <Typography variant="h6" gutterBottom>
          Liste des Hôtels
        </Typography>
        <Grid container spacing={2}>
          {hotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{hotel.name}</Typography>
                <Typography variant="body2">Étoiles : {hotel.stars}</Typography>
                <Typography variant="body2">Prix : {hotel.price} Ar</Typography>
                <Typography variant="body2">{hotel.description}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="outlined" color="primary" onClick={() => handleEdit(hotel.id)}>
                    Modifier
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(hotel.id)} sx={{ ml: 1 }}>
                    Supprimer
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer /> {/* Ajout du Footer */}
    </>
  );
};

export default BackOffice;
