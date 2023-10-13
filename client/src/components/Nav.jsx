import { useEffect, useState } from "react";

function Nav() {
  return (
    <div className="nav">
      <header className="header">
        <ul>
          <li>
            <a href="https://myblog-starlight-122f3f.netlify.app/">Homepage</a>
          </li>
          {/* <li>
            <a href="#footer">Add your note</a>
          </li> */}
          <li>
            <a href="https://myblog-starlight-122f3f.netlify.app/">Contact</a>
          </li>
        </ul>
      </header>
      <h1>ShareBlog...</h1>
      <p>...to share with us whatever You want!</p>
    </div>
  );
}

export default Nav;
