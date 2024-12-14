import React, { useState } from "react";
import { hotels } from "../data/data.ts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
import Filter from "../components/Filter";
import { Box, Container, Grid, Typography, Pagination } from "@mui/material";

const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [hotelsPerPage] = useState(6); // Nombre d'hôtels par page

  // Gestion des filtres
  const handleFilter = (filters) => {
    const { price, stars } = filters;
    const filtered = hotels.filter(
      (hotel) => hotel.price <= price && hotel.stars >= stars
    );
    setFilteredHotels(filtered);
    setCurrentPage(1); // Réinitialiser la page à 1 après un filtre
  };

  // Calculer les hôtels à afficher pour la page actuelle
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // Changer la page actuelle
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      <Header />
      <Container
        component="main"
        sx={{
          py: 4, // Padding vertical
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Trouvez l'hôtel parfait pour votre voyage
        </Typography>

        {/* Filtre */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Filter onFilter={handleFilter} />
        </Box>

        {/* Liste des Hôtels */}
        <Grid container spacing={3} justifyContent="center">
          {currentHotels.length > 0 ? (
            currentHotels.map((hotel) => (
              <Grid item key={hotel.id}>
                <HotelCard hotel={hotel} />
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary" textAlign="center">
              Aucun hôtel ne correspond à vos critères de recherche.
            </Typography>
          )}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={Math.ceil(filteredHotels.length / hotelsPerPage)} // Calcul du nombre de pages
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Hotels;
