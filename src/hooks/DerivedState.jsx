import { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([
    {
      name: "Sid",
      age: 24,
    },
    {
      name: "Akshay",
      age: 30,
    },
  ]);

  const userCount = users.length;
  console.log(userCount);

  // Finding average age
  const averageAge =
    users.reduce((accum, currEle) => accum + currEle.age, 0) / userCount;
  console.log(averageAge);

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <h2>
                {user.name} - {user.age} years old
              </h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DerivedState;
