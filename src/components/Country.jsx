/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const country = ({ AllCountry }) => {
  console.log(AllCountry);
  
  const {
    name,
    tld,
    ccn3,
    capital,
    altSpellings,
    region,
    languages,
    continents,
    flags,
    timezones,
  } = AllCountry;
  const [visited, setVisited] = useState(false);
  const handlVisited = () => {
    setVisited(true)
  }
  return (
    <div>
      <div className="border-2 border-gray-300 rounded-lg p-5">
        <div>
          <img className="w-[360px] h-[200px]" src={flags.png} alt="" />
          <h4 className="text-xl font-semibold text-gray-700 mt-1">
            Name: {name.common}
          </h4>
          <p>Capital: {capital}</p>
          <p>Religion: {region}</p>
          <p>Code: {ccn3}</p>
        </div>
        <div>
            <button onClick={handlVisited} className="text-lg font-semibold text-gray-700 border-2 rounded-lg py-2 px-5 mt-3 hover:bg-slate-600 hover:text-slate-200">Going</button>
            {
              visited && 'Your are Visited'
            }
        </div>
      </div>
    </div>
  );
};

export default country;
