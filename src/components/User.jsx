import React from "react";

function User(props) {
  // props.userdata.map((userData, i) => {
  return (
    <div className="card" id={props.id}>
      <div className="top">
        <h2 className="heading name">
          {props.fName} {props.lName}
        </h2>
        <img className="circle-img" src={props.avatar} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.email}</p>
      </div>
    </div>
    // <div className="card">
    //   <div className="top">
    //     <h2 className="heading name">
    //       {userData["first_name"]} {userData["last_name"]}
    //     </h2>
    //     <img
    //       className="circle-img"
    //       src={userData["avatar"]}
    //       alt="avatar_img"
    //     />
    //   </div>
    //   <div className="bottom">
    //     <p className="info">{userData["email"]}</p>
    //   </div>
    // </div>
  );
  // });
}

export default User;
