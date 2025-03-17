const express = require('express');
const app = express();
const port = 3007;
const comicsRouter = require('./routers/comics')
const videosRouter = require('./routers/videos')

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.use(express.static('public'));

app.use(express.json())

// middleware
app.use('/api/v1/comics', comicsRouter)

app.use('/api/v1/videos', videosRouter)
