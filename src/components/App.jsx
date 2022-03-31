import React, { useState } from "react";
import User from "./User";

function Users(props) {
  return (
    <>
      {props.userdata.map((userData, i) => {
        return (
          <User
            id={userData["id"]}
            fName={userData["first_name"]}
            lName={userData["last_name"]}
            avatar={userData["avatar"]}
            email={userData["email"]}
          />
        );
      })}
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const loadUsers = () => {
    setButtonClicked(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse["data"]);
        setInterval(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Error in fetching data: ", err);
      });
  };

  return (
    <div>
      <div className="navbar">
        <h1>UD</h1>
        <button onClick={loadUsers}>Get Users</button>
      </div>
      <h1 className="heading">User Details</h1>
      <hr />

      {buttonClicked ? (
        !isLoading ? (
          <div className="user-details">
            <Users userdata={data} />
          </div>
        ) : (
          <div> Loading data... </div>
        )
      ) : (
        <div> User details will be displayed here. </div>
      )}
    </div>
  );
}

export default App;
