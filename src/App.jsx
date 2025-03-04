import React, { useState, useEffect } from 'react';
import PropertyForm from './components/PropertyForm';
import PriceComparisonChart from './components/PriceComparisonChart';
import { predictPrice, saveModel, loadModel } from './brainModel';

const App = () => {
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [actualPrices, setActualPrices] = useState([]);
  const [predictedPrices, setPredictedPrices] = useState([]);

  // Load the model on app startup
  useEffect(() => {
    const isLoaded = loadModel();
    if (!isLoaded) {
      console.warn('No pre-trained model found. Please train and save a model.');
    }
  }, []);

  const handleFormSubmit = (data) => {
    const price = predictPrice(data);
    setPredictedPrice(price);

    // For demonstration purposes, we'll use a random actual price
    const actualPrice = price * (0.9 + Math.random() * 0.2);

    setActualPrices([...actualPrices, actualPrice]);
    setPredictedPrices([...predictedPrices, price]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Real Estate Price Prediction</h1>
      <div className="row">
        <div className="col-md-6">
          <PropertyForm onSubmit={handleFormSubmit} />
          {predictedPrice !== null && (
            <div className="mt-4 alert alert-success">
              <h2 className="h4">Predicted Price:</h2>
              <p className="lead">${predictedPrice.toFixed(2)}</p>
            </div>
          )}
          <button className="btn btn-primary mt-3" onClick={saveModel}>
            Save Model
          </button>
        </div>
        <div className="col-md-6">
          {actualPrices.length > 0 && (
            <PriceComparisonChart
              actualPrices={actualPrices}
              predictedPrices={predictedPrices}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
