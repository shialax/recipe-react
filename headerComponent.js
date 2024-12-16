import styled from "styled-components";

// Header Styles
export const Header = styled.div`
  color: #fff;
  background-color: #f4e1d2; /* Soft, warm beige for a boho feel */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px; /* Added horizontal padding for more spacing */
  font-size: 28px; /* Slightly larger font size for better readability */
  font-weight: 600; /* More balanced weight for a modern feel */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Lighter shadow for a softer look */
  border-radius: 12px; /* Rounded corners for a smooth look */
`;

// App Name Component Styling
export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif; /* Elegant, modern font */
  font-weight: 600; /* Slightly bolder font weight */
  color: #4b3c3a; /* Muted, earthy brown */
`;

// App Icon Styling
export const AppIcon = styled.img`
  width: 40px; /* Slightly larger icon */
  height: 40px; /* Keeping it proportional */
  margin-right: 12px; /* Space between icon and text */
`;

// Search Icon Styling
export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  color: #6a4e23; /* A soft, muted brown to match the boho theme */
`;

// Search Component Container
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff; /* White background for search bar */
  padding: 12px 18px;
  border-radius: 30px; /* Rounded border for a soft, modern look */
  width: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
`;

// Search Input Field
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500; /* Slightly lighter weight for input */
  color: #4b3c3a; /* Earthy brown text color */
  background-color: transparent; /* No background for input */
  width: 100%; /* Full width of the container */

  ::placeholder {
    color: #a79c91; /* Light gray-brown for placeholder */
  }

  &:focus {
    border: 2px solid #6a4e23; /* Add a focus state with a warm accent */
    border-radius: 8px;
  }
`;
