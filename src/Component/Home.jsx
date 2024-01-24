import React from 'react'

function Home() {

  async function allData() {
    const response = await fetch("https://mysterious-handkerchief-frog.cyclic.app/user");
    const data = await response.json();
    console.log(data);
  }
  allData();
  return <div className="container">hii this is home</div>;
}

export default Home
