import React, { useState, useEffect } from "react";
import providerpic from "../../../assets/img/provider.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Provider.css";
import CommodityCard from "../../Common/CommodityCard";
import { useParams } from "react-router-dom";


const Provider = () => {
  const { id } = useParams();
  const [commodities, setCommodities] = useState([]);
  const [providerInfo, setProviderInfo] = useState({});

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8080/providers/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
        mode: "cors",
      }
    ).then((response) => {
      if (response.ok) {
        console.log("Commodity fetch succussfuly");
      } else {
        console.log("Commodity fetch unsuccussfuly!");
      }
      return response.json();
    }).then(data => setProviderInfo(data));
  }, [id]);

  useEffect(() => {
    const allCommodities = [];
    const filteredCommodities = allCommodities.filter(
      (commodity) => commodity.provider === "Huawei"
    );
    setCommodities(filteredCommodities);
  }, []);
  if (providerInfo.providerModel === undefined)
    return(<></>);
  return (
    <div>
      <div className="centered">
        <img src={providerInfo.providerModel.image} className="provider-logo" alt="Provider" />
        <h4 className="date-provider">since {providerInfo.providerModel.registryDate}</h4>
        <h2 className="provider-title">{providerInfo.providerModel.name}</h2>
      </div>
      <div>
        <h2 className="all-provided-commodities">All provided commodities</h2>
        {commodities.map((commodity) => (
          <CommodityCard key={commodity.id} commodity={commodity} />
        ))}
      </div>
    </div>
  );
};

export default Provider;
