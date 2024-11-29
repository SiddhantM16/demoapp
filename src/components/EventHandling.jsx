import styled from "styled-components";

const EventHandling = () => {
  const Click = styled.button({
    padding: "10px",
    backgroundColor: "yellow",
    border: "1px solid transparent",
  });
  const handleClick = () => {
    alert("Hello World!!");
  };
  const handleClickWelcome = (name) => {
    alert(`Hello ${name}!!`);
  };
  return (
    <>
      <Click onClick={handleClick}>Click me</Click>
      {/* //^ Passing arguments to event handlers */}
      <br />
      <Click onClick={() => handleClickWelcome("Sid")}>Passing Arg</Click>
    </>
  );
};

export default EventHandling;
