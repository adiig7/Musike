import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
const { Sider, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider width={300} className="sideBar">
        <img src={Spotify} alt="Logo" className="logo"/>
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined style={{fontSize: "30px"}} />
        </div>
        <Link to="/">
            <p style={{ color: "#1DB954" }}>Home</p>
        </Link>
        <p>Your Music</p>
        <div className="recentPlayed">
          <p className="recentTitle">RECENTLY PLAYED</p>
          <div className="install">
            <span> Install App </span>
            <DownCircleOutlined style={{ fontSize: "30px" }} />
          </div>
        </div>
      </Sider>
      <Content />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album />} />
    </Routes>
    </Layout>
    
  )
};

export default App;
