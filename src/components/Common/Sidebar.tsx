import React, { useState } from "react";
import { settings, customers, business } from "../../Utils/Data";
import "../../Styles/Sidebar.scss";
import orgIcon from "../../Assets/images/show organization icon.svg";
import orgDropdown from "../../Assets/images/show organization dropdown.svg";
import dashIcon from "../../Assets/images/dashboard icon.svg";

const Sidebar = () => {
  const [customer, setCustomer] = useState(customers);
  console.log("data", customer);
  const [setting, setSetting] = useState(settings);

  return (
    <div className="sidebar_container">
      <div className="sidebar_container--organization">
        <img src={orgIcon} alt="icon" />

        <p>Switch Organization</p>

        <img src={orgDropdown} alt="icon" />
      </div>
      <div className="sidebar_container--dashboard">
        <p>
          <img src={dashIcon} alt="icon" />
        </p>
        <p>Dashboard</p>
      </div>
      <div className="sidebar_container--customers">
        <h4>CUSTOMERS</h4>
        {customers?.map((item) => {
          return (
            <div className="sidebar_container--customers--A" key={item.id}>
              <p>{item.icon}</p>
              <p className="text">{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="sidebar_container--business">
        <h4>BUSINESSES</h4>
        {business?.map((item) => {
          return (
            <div className="sidebar_container--business--B" key={item.id}>
              <p>{item.icon}</p>
              <p className="text">{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="sidebar_container--setting">
        <h4>SETTINGS</h4>
        {settings?.map((item) => {
          return (
            <div className="sidebar_container--setting--C" key={item.id}>
              <p>{item.icon}</p>
              <p className="text">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
