import { realEstateData } from './realEstateData';
import fs from 'fs';

// Add this at the end of the file
const jsonData = JSON.stringify(preprocessedData);
fs.writeFileSync('preprocessedData.json', jsonData);


const minMaxScale = (value, min, max) => {
  return (value - min) / (max - min);
};

export const preprocessData = () => {
  const areaValues = realEstateData.map(item => item.area);
  const priceValues = realEstateData.map(item => item.price);

  const minArea = Math.min(...areaValues);
  const maxArea = Math.max(...areaValues);
  const minPrice = Math.min(...priceValues);
  const maxPrice = Math.max(...priceValues);

  return realEstateData.map(item => ({
    area: minMaxScale(item.area, minArea, maxArea),
    bedrooms: item.bedrooms / 5, // Assuming max bedrooms is 5
    location: item.location === 'urban' ? 1 : item.location === 'suburban' ? 0.5 : 0,
    price: minMaxScale(item.price, minPrice, maxPrice)
  }));
};

export const preprocessedData = preprocessData();
