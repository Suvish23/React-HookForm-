import React, { useEffect, useState } from 'react'
import "../App.css";
import { useContext } from 'react';
import { AppContex } from '../App';
import { useQuery } from '@tanstack/react-query';
import Axios from "axios";
function Home() {
const {userName} = useContext(AppContex);

const { data, isLoading, error } = useQuery({
    queryKey: 
    ["users"],
    queryFn: () => {
      return Axios.get(
        "https://catfact.ninja/fact"
      ).then((res)=>res.data)
    }
  });
  console.log(data)
  return (
    <div className="App">
        <h1>
        {userName}
        </h1>
        <>
    {data?.fact}
    </>
    </div>
  )
}

export default Home