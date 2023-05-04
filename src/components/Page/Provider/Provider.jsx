import React, { useState, useEffect } from "react";
import providerpic from "../../../assets/img/provider.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Provider.css";
import CommodityCard from "../../Common/CommodityCard";

const Provider = () => {
  const [commodities, setCommodities] = useState([]);
  useEffect(() => {
    const allCommodities = [];
    const filteredCommodities = allCommodities.filter(
      (commodity) => commodity.provider === "Huawei"
    );
    setCommodities(filteredCommodities);
  }, []);
  return (
    <div>
      <div className="centered">
        <img src={providerpic} className="provider-logo" alt="Provider" />
        <h4 className="date-provider">since 1990</h4>
        <h2 className="provider-title">Huawei</h2>
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
