import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
  SearchIcon,
} from "./components/headerComponent";

import {
  RecipeContainer,
  CoverImage,
  IngredientText,
  SeeMoreText,
  RecipeName,
} from "./components/recipeComponent";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material"; // Import Dialog components

const APP_KEY = "023f9a5465104c63a30749316eca3301";

// Container styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

// Recipe Component for rendering
const RecipeComponent = ({ recipeObj }) => {
  const [dialogOpen, setDialogOpen] = useState(false); // State to manage Dialog visibility

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <RecipeContainer>
      <CoverImage src={recipeObj.image || "/logo.svg"} />
      <RecipeName>{recipeObj.title}</RecipeName>

      {/* Display Ingredients Button */}
      <IngredientText onClick={handleDialogOpen}>Ingredients</IngredientText>

      <SeeMoreText onClick={() => window.open(recipeObj.sourceUrl)}>
        See Complete Recipe
      </SeeMoreText>

      {/* Dialog to show Ingredients */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Ingredients for {recipeObj.title}</DialogTitle>
        <DialogContent>
          <ul>
            {recipeObj.ingredients && recipeObj.ingredients.length > 0 ? (
              recipeObj.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>No ingredients available</li>
            )}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </RecipeContainer>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  const fetchRecipe = async (searchString) => {
    if (!searchString) return; // Don't fetch if the search string is empty

    setLoading(true); // Start loading

    try {
      const response = await Axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchString}&apiKey=${APP_KEY}`
      );
      const recipes = response.data.results;

      // Fetch full details for each recipe to include the sourceUrl and ingredients
      const recipesWithDetails = await Promise.all(
        recipes.map(async (recipe) => {
          const fullRecipe = await Axios.get(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${APP_KEY}`
          );
          return {
            ...recipe,
            sourceUrl: fullRecipe.data.sourceUrl, // Add the full URL to the recipe object
            ingredients: fullRecipe.data.extendedIngredients.map(
              (ingredient) => ingredient.original
            ), // Add the ingredients
          };
        })
      );

      updateRecipeList(recipesWithDetails); // Update the recipe list
    } catch (err) {
      setError("Error fetching data, please try again."); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/logo.svg" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search.svg" />
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
        </SearchComponent>
      </Header>

      {/* Loading, Error or Data Display */}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <RecipeListContainer>
        {recipeList.length > 0 ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent key={recipeObj.id} recipeObj={recipeObj} />
          ))
        ) : (
          <div>No recipes found</div>
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
