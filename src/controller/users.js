const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "testAPI",
});

const userLogin = (req, res) => {
  console.log("Request Login User");
  const { username, password } = req.body;

  // Validate if username and password are provided
  if (!username || !password) {
    console.log("Username or password is missing");
    res.status(400).json({ message: "Username or password is missing" });
    return;
  }

  // Execute a SELECT query to check the user's credentials
  db.query(
    "SELECT username, password,id_user FROM user_id WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }

      // Check if the user exists and the password matches
      if (results.length > 0 && results[0].password === password) {
        
        console.log("User Login Successful: ", username);
        res.status(200).json({ message: "Login successful" });
      } else {
        console.log("User Login Failed for: ", username);
        res.status(401).json({ message: "Login failed" });
      }
    }
  );
};

module.exports = {
  userLogin,
};
