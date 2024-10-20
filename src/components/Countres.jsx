/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countres = () => {
  const [allCountry, setCountres] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountres(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold">
        Total Country: {allCountry.length}
      </h1>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {allCountry.map((country) => (
          <Country key={allCountry.name.common} AllCountry={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countres;
