const Map = () => {
  const data = [
    {
      id: 1,
      name: "Sid",
    },
    {
      id: 2,
      name: "Ajay",
    },
  ];

  return data.map((currElem) => {
    return <h1 key={currElem.id}>{currElem.name}</h1>;
  });
};

export default Map;
