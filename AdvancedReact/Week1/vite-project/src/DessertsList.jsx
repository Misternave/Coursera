function DessertsList(props) {
  // Implement the component here.
  const desertsFilter = props.data.filter((x) => x.calories < 500);
  const desertsSorted = desertsFilter.sort((a, b) => {
    return a.calories - b.calories;
  });
  const listDesserts = desertsSorted.map((x) => {
    const desertText = `${x.name} - ${x.calories} cal`;
    return <li>{desertText}</li>;
  });

  return <ul>{listDesserts}</ul>;
}

export default DessertsList;
