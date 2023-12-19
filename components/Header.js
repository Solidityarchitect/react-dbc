import React from "react";

export default function Header() {
  return (
    <header className="header--container">
      <img src="../images/Photo.png" style={{ width: "287px" }}/>
      <h1 className="header--name">Ayazhan Kadessova</h1>
      <h2 className="header--position">Frontend Developer</h2>
      <h3 className="header--email">kadessovaayazhan@gmail.com</h3>
      <div className="header--logo">
      <img src="../images/Email.png" />
      <img src="../images/LinkedIn.png" />
      </div>
    </header>
  );
}
