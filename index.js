const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to FluentFlow! Our language translation API integrates seamlessly into applications and services. It provides fast, accurate translations powered by cutting-edge neural machine translation technology, supporting over 100 languages.');
});

// Define route for the translation page
app.get('/translate', (req, res) => {
  res.send('Our translation feature allows you to translate text in real-time, supporting over 100 languages and providing fast, accurate translations powered by cutting-edge neural machine translation technology.');
});

// Define route for the language detection page
app.get('/detect-language', (req, res) => {
  res.send('Our language detection feature allows you to automatically detect the language of text, making it easy to provide accurate translations for your users.');
});

// Define route for the language support page
app.get('/languages', (req, res) => {
  res.send('Our language support feature allows you to view the list of over 100 languages supported by our API, making it easy to determine which languages are available for translation.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});