import React from "react";
import "./header.css";

export const Header = () => (
  <header className="header">
    <img
      src="/cat.jpg"
      alt="Logo"
      width="48"
      height="48"
      className="header_image"
    />
    <h1 className="header_title">ryusou.dev</h1>
  </header>
);
