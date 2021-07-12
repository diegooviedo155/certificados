import React from "react";
import Header from "../components/header";
import Codigofacilito from '../components/codigofacilito'
import Repos from "../components/repos";

export default function Home() {
  return <div>
    
    <Header/>
    <Repos/>
    <Codigofacilito></Codigofacilito>
    <section className=" p-60 "/>
  </div>
}
