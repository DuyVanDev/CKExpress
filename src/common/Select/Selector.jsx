import React, { useState, useEffect } from "react";
// import { getAllCountries, getStatesOfCountry, getCitiesOfState } from 'country-state-city';
import { City, Country, State } from "country-state-city";
import Select from "react-select";
import { Typography } from "antd";

const Selector = ({ data ,selected, onSelected, label, placeholder=""}) => {
  

  return (
    <div>
      <Typography.Title level={5} className="text-inherit">
        {label} <span className="text-red">(*)</span>
      </Typography.Title>
      <Select
        className="text-black"
        value={selected}
        onChange={onSelected}
        options={data.map((state) => ({
          value: state?.isoCode || state?.name,
          label: state?.name,
        }))}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Selector;
