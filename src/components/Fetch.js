import { useState, useEffect } from "react";

function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data1 = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items1 = await data1.json();
    const data = await fetch("http://127.0.0.1:8000/api/products/");
    const items = await data.json();
    console.log(items);
    console.log(items1);
  };
  return (
    <div>
      <h2>Ambil Data dengan Fetch</h2>
      <p>Lihat console.</p>
    </div>
  );
}

export default Home;
