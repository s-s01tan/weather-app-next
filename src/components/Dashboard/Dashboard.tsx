import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left-container">
        <div className="dashboard-left-container-top">
          <div className="icon-container">
            <div className="icon">
              <Image
                src="https://s-s01tan.github.io/weather-app-next/image/logo.svg"
                alt="logo"
                width={30}
                height={20}
              />
            </div>
          </div>
          <input className="search-input" placeholder="Buscar local"></input>
        </div>
        <div className="dashboard-left-container-bottom">
          <div className="main-container">
            <div className="main-container-left">
              <div className="main-container-left-top">Porto Alegre, RS</div>
              <div className="main-container-left-bottom">
                Segunda-feira, 15 de maio de 2023
              </div>
            </div>
            <div className="main-container-right">21:39</div>
          </div>
        </div>
      </div>
      <div className="dashboard-right-container">
        <div className="dashboard-right-container-top"></div>
        <div className="dashboard-right-container-bottom"></div>
      </div>
    </div>
  );
};

export default Dashboard;
