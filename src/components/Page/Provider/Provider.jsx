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
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
  };

  const handleDecrement = (id) => {
    if (quantities[id] > 0) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const getQuantity = (id) => {
    return quantities[id] || 0;
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/providers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Commodity fetch succussfuly");
        } else {
          console.log("Commodity fetch unsuccussfuly!");
        }
        return response.json();
      })
      .then((data) => setProviderInfo(data));
  }, [id]);

  useEffect(() => {
    const allCommodities = [];
    const filteredCommodities = allCommodities.filter(
      (commodity) => commodity.provider === "Huawei"
    );
    setCommodities(filteredCommodities);
  }, []);
  if (
    providerInfo.providerModel === undefined ||
    providerInfo.commoditiesList === undefined
  )
    return <></>;
  return (
    <div>
      <div className="centered">
        <img
          src={providerInfo.providerModel.image}
          className="provider-logo"
          alt="Provider"
        />
        <h4 className="date-provider">
          since {providerInfo.providerModel.registryDate}
        </h4>
        <h2 className="provider-title">{providerInfo.providerModel.name}</h2>
      </div>
      <div>
        <h2 className="all-provided-commodities">All provided commodities</h2>
        <div className="commodities-list">
          {providerInfo.commoditiesList.map((commodity) => (
            <CommodityCard
              commodity={commodity}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              getQuantity={getQuantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provider;
