const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

app.use(cors());
app.use(middlewareLogRequest);

app.use(express.json());

app.use("/user", userRoutes);

app.use("/", (req, res) => {
    res.send('PATCH API terhubung');
})

app.listen(5000, () => {
    console.log('Server berhasil terhubung');
})