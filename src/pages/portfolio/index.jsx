import React from "react";
import "./style.css";
import { CardLeft, CardRight } from "../../sections/portfolio/cards";
import { Menu } from "../../sections/portfolio/menu";
import {useState, useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import { useDB } from "../../utils/firebase/databaseContext";

export const PortFolio = () => {

  const database = useDB()

  const [datas, setDatas] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchPortfolio = async() => {
    // searchParams.get("sort")

    database.getAllPortfolios().then(
      list => setDatas(list)
    )
    
    console.log(datas)
}

  useEffect (() => {
    fetchPortfolio();
  }, [])

  return (
    <div className="port-folio">
      <div className="container">
        <div className="frame-3">
          <h1 className="h-1">OUR WORKS</h1>
          <Menu/>
        </div>
        <CardLeft/>
        <CardRight/>
      </div>
    </div>
  );
};
