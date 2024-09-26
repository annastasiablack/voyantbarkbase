module.exports = function(app) {
    const express = require('express');
    const path = require('path');
    const fs = require('fs').promises;
  
    // Middleware to parse JSON bodies
    app.use(express.json());
  
    // Example route to handle updating a dog
    app.patch('/api/dogs/:id', async (req, res) => {
      try {
        const dogId = req.params.id;
        const updatedDog = req.body.data.attributes;
  
        const dogsFilePath = path.join(__dirname, '..', 'public', 'api', 'dogs.json');
        const dogsData = JSON.parse(await fs.readFile(dogsFilePath, 'utf-8'));
  
        const dogIndex = dogsData.findIndex(dog => dog.id === dogId);
        if (dogIndex === -1) {
          return res.status(404).json({ error: 'Dog not found' });
        }
  
        dogsData[dogIndex] = { ...dogsData[dogIndex], ...updatedDog };
  
        await fs.writeFile(dogsFilePath, JSON.stringify(dogsData, null, 2));
  
        res.json({ data: { id: dogId, type: 'dogs', attributes: dogsData[dogIndex] } });
      } catch (error) {
        console.error('Error updating dog:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  };