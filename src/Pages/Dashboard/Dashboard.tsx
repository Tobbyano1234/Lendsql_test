import { useState } from "react";
import "../../Styles/Dashboard.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Common/Navbar";
import Sidebar from "../../components/Common/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Helmet>
        <title>Lendsqr | Dashboard</title>
      </Helmet>
      <Navbar />
      <Sidebar />
      {/* Dashboard */}
    </div>
  );
};

export default Dashboard;
