import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/products/")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Ambil Data dengan Axios</h2>
      <p>Lihat console.</p>
    </div>
  );
}

export default Home;
