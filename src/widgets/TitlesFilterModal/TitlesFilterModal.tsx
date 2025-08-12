import React from "react";

const currentNames = [
  { id: 1, name: "Snoop Dog" },
  { id: 2, name: "Snoop Dog" },
  { id: 3, name: "Snoop Dog" },
  { id: 4, name: "Snoop Dog" },
  { id: 5, name: "Snoop Dog" },
  { id: 6, name: "Snoop Dog" },
  { id: 7, name: "Snoop Dog" },
];

const TitlesFilterModal: React.FC = () => {
  return (
    <div>
      {currentNames.map((currentName) => (
        <li key={currentName.id}>{currentName.name}</li>
      ))}
    </div>
  );
};

export default TitlesFilterModal;
