import React from "react";

//local depenencies
import SectionComponent from "../ui/SectionComponent";

const Hero = () => {
  return (
    <SectionComponent idName="hero">
      <div className="hero">
        <div className="hero--text">
          <h1>
            Зарабатывайте больше <span>с WELBEX</span>
          </h1>
          <p>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className="hero--bonus">
          <h3>
            Вместе с <span>бесплатной</span> <span>консультацией</span>{" "}
            мы дарим:
          </h3>
          <div className="bonus">
            <div className="bonus--items">
              <div className="bonus-item">
                <h5>Виджеты</h5>
                <p>30 готовых решений</p>
              </div>
              <div className="bonus-item">
                <h5>Skype Аудит</h5>
                <p>отдела продаж и CRM системы</p>
              </div>
            </div>
            <div className="bonus--items">
              <div className="bonus-item">
                <h5>Dashboard</h5>
                <p>с показателями вашего бизнеса</p>
              </div>
              <div className="bonus-item">
                <h5>35 дней</h5>
                <p>использования CRM</p>
              </div>
            </div>
          </div>
          <div className="hero-btn">
            <button>Получить консультацию</button>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default Hero;
