# Gestion d'Agence de Voyage

Ce projet est une application web interactive pour la gestion des services d'une agence de voyage. Elle inclut des fonctionnalités pour la gestion des hôtels, la navigation entre les différents services proposés, et la recherche des hôtels avec des critères personnalisés.

## Fonctionnalités principales

### 1. BackOffice - Gestion des Hôtels
Le composant **BackOffice** permet d'ajouter, modifier et supprimer des hôtels dans la base de données.

- **Ajout d'un hôtel** :
  - Remplissez les champs (nom, étoiles, prix, description) et téléchargez une image.
  - Cliquez sur le bouton "Ajouter" pour enregistrer l'hôtel.

- **Modification d'un hôtel** :
  - Cliquez sur le bouton "Modifier" d'un hôtel existant pour charger ses informations dans le formulaire.
  - Mettez à jour les champs nécessaires et cliquez sur "Modifier".

- **Suppression d'un hôtel** :
  - Cliquez sur "Supprimer" pour retirer un hôtel de la liste.

- **Liste des hôtels** :
  - Les hôtels ajoutés sont affichés avec leurs détails (nom, étoiles, prix, description, image).

### 2. Page d'Accueil - Services
Le composant **Home** présente les principaux services de l'agence de voyage à travers une interface attrayante et responsive.

- **Services offerts** :
  - Réservation d'hôtels : Trouvez des hôtels adaptés à vos besoins.
  - Forfaits vacances : Explorez des options de voyages tout compris.
  - Hôtels populaires : Accédez à une sélection d'hôtels prisés.

- **Expérience utilisateur** :
  - Mise en avant des services via des cartes animées.
  - Interface claire et accueillante pour les visiteurs.

### 3. Recherche et Filtrage des Hôtels
Le composant **Hotels** permet de parcourir les hôtels disponibles, d'appliquer des filtres et de naviguer à travers les résultats.

- **Filtres personnalisés** :
  - Filtrez les hôtels selon le prix maximum et le nombre minimum d'étoiles.

- **Pagination** :
  - Naviguez entre les pages de résultats avec une pagination simple et intuitive.

- **Liste des hôtels** :
  - Les hôtels affichés répondent aux critères de recherche appliqués.

- **Message d'absence de résultat** :
  - Un message s'affiche si aucun hôtel ne correspond aux filtres.

## Technologies utilisées

- **Frontend** : React.js avec Material-UI pour des composants modernes et stylés.
- **Gestion des données** : Stockage des données d'hôtels simulées via un fichier de données.
- **Structure des composants** :
  - `Header` et `Footer` pour une navigation et une mise en page uniformisées.
  - `HotelCard` pour afficher les informations détaillées des hôtels.
  - `Filter` pour appliquer les critères de recherche.

## Instructions pour l'exécution

1. **Installation des dépendances** :
   - Assurez-vous d'avoir Node.js installé.
   - Exécutez la commande `npm install` pour installer les dépendances nécessaires.

2. **Lancement de l'application** :
   - Démarrez le serveur de développement avec la commande `npm start`.
   - L'application sera accessible à l'adresse `http://localhost:3000/`.

3. **Personnalisation des données** :
   - Les données initiales des hôtels sont stockées dans `../data/data.ts`.
   - Modifiez ce fichier pour personnaliser les hôtels affichés par défaut.

## Améliorations possibles

- **Intégration avec une API backend** : Remplacez le fichier de données statiques par une API REST ou GraphQL.
- **Gestion des utilisateurs** : Ajoutez une authentification pour gérer les autorisations sur les fonctionnalités de BackOffice.
- **Meilleure gestion des images** : Implémentez un stockage d'images sur un serveur distant ou un service cloud.

## Auteurs

Ce projet a été conçu pour fournir une solution simple mais fonctionnelle à la gestion d'une agence de voyage. Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.

