import brain from 'brain.js';
import { preprocessedData } from './dataPreprocessing';

// Create and train the neural network
const net = new brain.NeuralNetwork({
  hiddenLayers: [10, 10],
});

const trainingData = preprocessedData.map(item => ({
  input: {
    area: item.area,
    bedrooms: item.bedrooms,
    location: item.location,
    age: item.age,
  },
  output: { price: item.price },
}));

// Train the model
net.train(trainingData);

// Save the trained model to LocalStorage
export const saveModel = () => {
  const jsonModel = net.toJSON();
  localStorage.setItem('trainedModel', JSON.stringify(jsonModel));
};

// Load the trained model from LocalStorage
export const loadModel = () => {
  const savedModel = localStorage.getItem('trainedModel');
  if (savedModel) {
    net.fromJSON(JSON.parse(savedModel));
    console.log('Trained model loaded successfully!');
    return true;
  } else {
    console.warn('No trained model found in LocalStorage.');
    return false;
  }
};

// Predict price using the trained model
export const predictPrice = (input) => {
  return net.run(input);
};
