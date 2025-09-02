const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nsp', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema
const locationSchema = new mongoose.Schema({
  location: String,
  seo_name: String
});

const Location = mongoose.model('Location', locationSchema);

// Helper to generate SEO-friendly URL
function generateSeoName(location) {
  return location.toLowerCase().replace(/\s+/g, '-') + '-seo-agency';
}

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to NSP Locations Project</h1><a href="/locations">View Locations</a>');
});

// Admin panel
app.get('/admin', (req, res) => res.render('admin'));

// Add location (auto-generate SEO name)
app.post('/admin/add-location', async (req, res) => {
  const { location } = req.body;
  const seo_name = generateSeoName(location);
  await Location.create({ location, seo_name });
  res.redirect('/locations');
});

// List all locations
app.get('/locations', async (req, res) => {
  const locations = await Location.find();
  res.render('locations', { locations });
});

// Dynamic location page
app.get('/locations/:seo_name', async (req, res) => {
  const loc = await Location.findOne({ seo_name: req.params.seo_name });
  if (!loc) return res.status(404).send('Location not found!');
  res.render('location-page', { location: loc.location, seo_name: loc.seo_name });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
