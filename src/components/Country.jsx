/* eslint-disable no-unused-vars */
import React from "react";

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
  return (
    <div>
      <div className="border-2 border-gray-300 rounded-lg p-5">
        <img className="w-[360px] h-[200px]" src={flags.png} alt="" />
        <h4>Name: {name.common}</h4>
        <p>status: {ccn3}</p>
      </div>
    </div>
  );
};

export default country;
