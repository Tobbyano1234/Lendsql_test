import { useState } from "react";
import "../../Styles/Dashboard.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Common/Navbar";
import Sidebar from "../../components/Common/Sidebar";
import Card from "../../components/Common/Card";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Helmet>
        <title>Lendsqr | Dashboard</title>
      </Helmet>
      <Navbar />
      <Sidebar />
      <div className="dashboard_container--content">
        <div className="dashboard_container--content--user">
          <h2>User</h2>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
