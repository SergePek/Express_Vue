const { Router } = require('express');
const {getAll, create, remove }= require('../controllers/server.js')
const router = Router();

router.get('/api/server', getAll);

router.post('/api/server', create);

router.delete('/api/server/:id', remove)

module.exports = router;