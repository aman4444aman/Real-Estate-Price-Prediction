const generateSyntheticData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        area: Math.floor(Math.random() * (3000 - 500) + 500),
        bedrooms: Math.floor(Math.random() * 5) + 1,
        location: ['urban', 'suburban', 'rural'][Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * (1000000 - 100000) + 100000)
      });
    }
    return data;
  };
  
  export const realEstateData = generateSyntheticData(1000);
  