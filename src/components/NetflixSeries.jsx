const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = 8.2;
  const summary = "Hi this is queen of tears with a raring of 8.2";
  const returnGenre = () => {
    const genre = "Comedy";
    return genre;
  };
  let age = 12;
  const ageValid = () => {
    return age > 18 ? "Watch Now" : "Not Available";
  };
  return (
    <>
      <div>
        <img src="src\assets\react.svg" alt="image" width="10%" />
      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {rating}</h3>
      <p>Summary : {summary}</p>
      <p>Genre : {returnGenre()}</p>
      <button>{ageValid()}</button>
      <hr />
    </>
  );
};

export default NetflixSeries;
let copyright = String.fromCodePoint("0169");
export const Footer = () => {
  return `${copyright}Siddhant`;
};
