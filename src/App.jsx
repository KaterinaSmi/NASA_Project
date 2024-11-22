import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [showModel, setShowModel] = useState(false);

  function handleToggleModel() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      // Check the localStorage content before parsing it
      const cachedData = localStorage.getItem(localKey);
      if (cachedData) {
        console.log("Cached Data:", cachedData); // Log the cached data for inspection
        try {
          const apiData = JSON.parse(cachedData);
          setData(apiData);
          console.log("Fetched from cache today");
          return;
        } catch (err) {
          console.error("Error parsing cached data:", err);
          localStorage.removeItem(localKey); // Clear invalid data
        }
      }

      // Avoid clearing entire localStorage, clear only the specific item
      localStorage.removeItem(localKey);

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData)); // Store valid data in localStorage
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log("API fetch error:", err.message);
      }
    }
    fetchAPIData();
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && <SideBar data={data} open={showModel} handleToggleModel={handleToggleModel} />}
      {data && <Footer data={data} handleToggleModel={handleToggleModel} />}
    </>
  );
}

export default App;
