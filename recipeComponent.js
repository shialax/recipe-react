import styled from "styled-components";

// Recipe Container (Main Card Styling)
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 280px; /* Adjust width to fit better on various screen sizes */
  gap: 15px;
  background-color: #fff; /* Clean white background for the card */
  border-radius: 12px; /* Rounded corners for a softer, modern look */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Softer shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;

  /* Add hover effect for modern touch */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Recipe Cover Image Styling
export const CoverImage = styled.img`
  height: 180px; /* Slightly smaller image to balance card */
  width: 100%; /* Full width to make the image responsive */
  object-fit: cover; /* Ensure the image covers the area without distortion */
  border-radius: 8px; /* Rounded corners for the image */
`;

// Recipe Name Styling
export const RecipeName = styled.span`
  font-size: 20px; /* Larger font size for the recipe name */
  font-weight: 600; /* Slightly bold for better readability */
  color: #4b3c3a; /* Muted earthy brown for text */
  margin: 10px 0;
  font-family: "Poppins", sans-serif; /* Elegant, modern font */
`;

// Ingredient Text Styling (Boho Inspired Button)
export const IngredientText = styled.span`
  font-size: 16px;
  color: #6a4e23; /* Earthy, muted green for the ingredient button */
  cursor: pointer;
  padding: 12px 18px;
  border-radius: 30px; /* Soft rounded corners */
  border: 2px solid #6a4e23; /* Matching border color */
  text-align: center;
  margin-bottom: 12px;
  background-color: transparent; /* Transparent background for the button */
  transition: all 0.3s ease;

  /* Hover effect */
  &:hover {
    background-color: #6a4e23;
    color: white; /* Change text color to white on hover */
  }
`;

// See More Text Styling (Boho-inspired link button)
export const SeeMoreText = styled(IngredientText)`
  color: #eb3300; /* Warm, earthy red for the 'See More' button */
  border: 2px solid #eb3300; /* Matching border color */
  background-color: transparent;

  /* Hover effect */
  &:hover {
    background-color: #eb3300;
    color: white; /* Change text to white on hover */
  }
`;
