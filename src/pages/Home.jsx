import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

import Image1 from "../images/im1.jpg";
import Image2 from "../images/im2.jpg";
import Image3 from "../images/im3.jpg";

const services = [
  {
    title: "Réservations d'hôtels",
    description: "Trouvez des hôtels confortables à des prix compétitifs.",
    image: Image1,
  },
  {
    title: "Forfaits vacances",
    description: "Explorez nos forfaits tout compris pour un voyage sans souci.",
    image: Image2,
  },
  {
    title: "Résérvation hôtel populaire",
    description: "Réservez des hôtels vers vos destinations préférées.",
    image: Image3,
  },
];



const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

const Home = () => (
  <Box>
    <Header />
    <Container
      component="main"
      sx={{
        textAlign: "center",
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Bienvenue à notre agence de voyage
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", lineHeight: 1.6 }}>
        Nous offrons une variété de services pour rendre vos voyages
        inoubliables. Explorez nos offres d'hôtels, nos forfaits et bien plus
        encore.
      </Typography>

      {/* Section des services */}
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AnimatedCard>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer />
  </Box>
);

export default Home;
