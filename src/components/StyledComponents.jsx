import styled from "styled-components";

const StyledComponents = () => {
  // ^ 1st way of writing styled components
  //   const Button = styled.button({
  //     backgroundColor: "green",
  //     padding: "10px 20px",
  //     color: "white",
  //     borderRadius: "10px",
  //   });

  // ^ 2nd way of writing styled components - Using Template Literals
  const Button = styled.button`
    background-color: green;
    padding: 10px 20px;
    color: white;
    border-radius: 10px;
  `;
  return (
    <div>
      <ProfileCard
        name="Sid"
        age={24}
        greeting={
          <div>
            <strong style={{ color: "violet" }}>Hi, I am Siddhant</strong>
          </div>
        }
      >
        <p>Hello Bob, how are you.</p>
        <button className="button">Info</button>
      </ProfileCard>
      <ProfileCard
        name="Ramesh"
        age={24}
        greeting={
          <div>
            <strong>Hi, I am Siddhant</strong>
          </div>
        }
      >
        <p>Hello Ramu, how are you.</p>
        <Button>Info</Button>
      </ProfileCard>
    </div>
  );
};

function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>{greeting}</p>
      <p>{children}</p>
    </>
  );
}

export default StyledComponents;
