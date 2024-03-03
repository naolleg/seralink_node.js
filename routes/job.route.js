const express = require('express');
const jobRoute = express.Router();
const jobcontroller=require('../controllers/job.controller')
jobRoute.get('/', (req, res) => {
    res.send('Hello, World!');
  });
// jobRoute.get('/seeker',jobcontroller.getallposts )
jobRoute.get('/posts',jobcontroller.getallposts )
// jobRoute.get('/providers/posts',jobcontroller.getposts )
// jobRoute.get('/posts/:id',jobController.getsinglepost)
jobRoute.post('/posts',jobcontroller.createpost)
// jobRoute.delete('/provider/posts/:id',jobcontroller.deletepost)
// jobRoute.put('/api/posts/:id',jobController.updatepost)



module.exports = jobRoute;