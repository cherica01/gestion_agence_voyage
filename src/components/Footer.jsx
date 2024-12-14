import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: " #c33d20 ",
      color: "white",
      py: 4, // Augmente le padding vertical
      mt: "auto",
    }}
  >
    <Grid container spacing={4} justifyContent="center">
      {/* Section "À propos" */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          À propos de nous
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          Nous sommes une agence de voyage passionnée par la création 
          d'expériences uniques pour nos clients. Explorez le monde avec 
          nous en toute sérénité.
        </Typography>
      </Grid>

      {/* Section "Contact" */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Contactez-nous
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          Téléphone : <Link href="tel:0384079008" color="inherit">0384079008</Link><br />
          Email : <Link href="mailto:contact@agencevoyage.com" color="inherit">riantsoaagencee-voyage@gmail.com</Link><br />
          Adresse : 123 Tsimbazaza, TANA, Madagascar
        </Typography>
      </Grid>

      {/* Section "Liens utiles" */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Liens utiles
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          <Link href="/" color="inherit" underline="hover">Accueil</Link><br />
          <Link href="/Hotels" color="inherit" underline="hover">Hôtels</Link><br />
          <Link href="#" color="inherit" underline="hover">Nous contacter</Link><br />
          <Link href="/Backoffice" color="inherit" underline="hover">Backoffice</Link>
        </Typography>
      </Grid>

      {/* Section "Réseaux sociaux" */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Suivez-nous
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          <Link href="#" target="_blank" color="inherit" underline="hover">
            cHERICA-VOYAGE
          </Link><br />
          <Link href="#" target="_blank" color="inherit" underline="hover">
            E-VOYAGE TWIT
          </Link><br />
          <Link href="#" target="_blank" color="inherit" underline="hover">
            E_VOYAGE insta
          </Link>
        </Typography>
      </Grid>
    </Grid>

    <Typography variant="body2" sx={{ mt: 4, textAlign: "center" }}>
      &copy; {new Date().getFullYear()} Agence de Voyage E-CHERICA. Tous droits réservés.
    </Typography>
  </Box>
);

export default Footer;
