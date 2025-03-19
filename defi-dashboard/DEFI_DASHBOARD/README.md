Step 2: Create the CryptoCard Component
Objective: Build a reusable component to display individual crypto data.
Why: Reusing a CryptoCard for each cryptocurrency makes the UI modular and easier to style or update later.
How:
In the src/components/ folder, create a new file named CryptoCard.jsx.
Define a functional component that accepts props for crypto details (e.g., name, price, change).
Design the component to render a card-like structure with the crypto’s name, price, and percentage change.
Step 3: Implement Conditional Rendering in CryptoCard
Objective: Ensure CryptoCard handles missing or invalid data gracefully.
Why: API data might be incomplete (e.g., missing price), and conditional rendering prevents errors or bad UX.
How:
Update CryptoCard to check for data availability using conditional rendering.
If a prop (e.g., price) is missing or invalid, display a fallback message (e.g., “Price unavailable”).
Use a combination of ternaries or && to keep the rendering logic clean.
Step 4: Replace the List in Dashboard with CryptoCard Instances
Objective: Update Dashboard to use CryptoCard for rendering the crypto list.
Why: This leverages props to make the list more modular and prepares for future enhancements (e.g., styling, interactivity).
How:
Open Dashboard.jsx and locate the section where the crypto list is rendered in “List View.”
Import the CryptoCard component.
Replace the current list rendering with a loop over the top 10 cryptocurrencies, passing each crypto’s data as props to a CryptoCard instance.
Ensure the rendering respects the loading and error states (e.g., don’t render cards if loading or in error state).
Step 5: Test and Validate the Update
Objective: Confirm the new component and rendering work as expected.
Why: Testing ensures props and conditional rendering are implemented correctly.
How:
Restart the development server if needed.
Interact with the app, toggling to “List View” to see the CryptoCard instances.
Use React DevTools to inspect the component tree, verifying CryptoCard instances are rendered with correct props.
Test edge cases (e.g., simulate missing data) to ensure conditional rendering works.
