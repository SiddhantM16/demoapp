const Profile = () => {
  const btn = {
    backgroundColor: "green",
    padding: "10px 20px",
    color: "white",
  };
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
        <button style={btn}>Info</button>
      </ProfileCard>
    </div>
  );
};
export default Profile;

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
