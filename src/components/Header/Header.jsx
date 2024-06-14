import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NB from "../../assets/img/NB.png";
import "./Header.scss";

export const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + search);
    }
  };
  return (
    <div className="header">
      {user ? (
        <>
          <img className="NB" src={ NB }/>
          <div className="search-container">
            <input type="text" name="search" className="search-input" onKeyUp={handleSearch} value={search} onChange={(e) => setSearch(e.target.value)} />
            <img className="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvlltFRAzEMRKVKIJWEVAKpBKiEUAlHJYRKlixj3yg6nyxPyOQDz+Qjk9hP0q4lq9xo6Y24kgYDuBeR+jmq6nRJ0CG4wJ5E5HkFchSRd1V9GQ1iFQzgQUQ+kgcOB9AEA2AGNsuDiHyLCMtLCBcD256+syJ1vWazX4BdpoTsIz0BVCmoP9cuo38L/FVMJHoKP1Pq4gXKQjiNt+ntOzsYwJspXSryCiiZcz/XQVX3EdyDa7aTqu56UfvfATBrat/N2oNRDqOuNNTQcqbcqGo14uKcGexKFW5ai8YZM5TKgucrlDVVo9Q0F+XiCq+WBduGMWQsYzB7RiiXBaejDUrNO12dndOYhwH4K1d3e0B0j4ec7Yw1fI9Z7rkDlfa3eiWMtlambrbcl+nV4dhrTLFutk1w0bo1nT5LR5rMnL5z04nbUyOyN4/p0Dp1oi5GGEdmHZFdePYF8hgEMDcK1/1CeGrslfLbN9dvSVtzNwtPg0emRQZ+FXCpkO1ii759NbCBb1uPgquC0y+QER0v/e//y/gHHeHVH101Pt8AAAAASUVORK5CYII="/>
          </div>
        </>
      ) : (
        <>
          <img className="NB" src={ NB }/>
        </>
      )}
    </div>
  );
};
export default Header
