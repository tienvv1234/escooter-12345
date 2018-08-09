import express from 'express';
console.log("routers");
const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK'));

router.get('/', (req, res) =>
  res.send('OK'));

router.get('/test', (req, res) =>{
  console.log("test");
  res.send('OK')
});

export default router;
