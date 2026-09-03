const express = require("express");

const app = express();

const PORT = 5000;

// Sample user data
const users = [
  { id: 1, name: "Abhay", email: "abhay@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" },
  { id: 3, name: "Akash", email: "akash@gmail.com" },
  { id: 4, name: "Arjun", email: "arjun@gmail.com" },
  { id: 5, name: "Vishnu", email: "vishnu@gmail.com" },
  { id: 6, name: "Rohan", email: "rohan@gmail.com" }
];

// Home route
app.get("/", (req, res) => {
  res.send("User Data API is running");
});

// Route for users with EVEN IDs
app.get("/users/even", (req, res) => {
  const evenUsers = users.filter(user => user.id % 2 === 0);

  res.json(evenUsers);
});

// Route for users with ODD IDs
app.get("/users/odd", (req, res) => {
  const oddUsers = users.filter(user => user.id % 2 !== 0);

  res.json(oddUsers);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});