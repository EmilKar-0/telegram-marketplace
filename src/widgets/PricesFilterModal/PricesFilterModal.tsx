import React from "react";

const currentPrices = [
  { id: 1, value: 300 },
  { id: 2, value: 100 },
  { id: 3, value: 200 },
  { id: 4, value: 250 },
  { id: 5, value: 400 },
  { id: 6, value: 1000 },
  { id: 7, value: 3000 },
];
const PricesFilterModal: React.FC = () => {
  return (
    <div>
      {currentPrices.map((currentPrice) => (
        <li key={currentPrice.id}>{currentPrice.value}</li>
      ))}
    </div>
  );
};

export default PricesFilterModal;
