import React from "react";

//local dependencies
import { LogoWelbexSvg } from "../../assets/svg/LogoWelbexSvg";
import { IconTelegramSvg } from "../../assets/svg/IconTelegramSvg";
import { IconViberSvg } from "../../assets/svg/IconViberSvg";
import { IconWhatsappSvg } from "../../assets/svg/IconWhatsappSvg";
import { PHONE_NUMBER } from "../../config/constants";
import ContainerComponent from "../ui/ContainerComponent";
import { formatPhoneNumber } from "../../config/helpers";

function Header() {
  return (
    <header id="header">
      <ContainerComponent>
        <div className="header">
          <div className="header__nav">
            <a href="/" className="logo-link">
              <LogoWelbexSvg />
              <p>
                крупный интегратор CRM <br /> в Росcии и ещё 8 странах
              </p>
            </a>
            <nav className="main-nav">
              <ul>
                <li>
                  <a href="/">Услуги</a>
                </li>
                <li>
                  <a href="/">Виджеты</a>
                </li>
                <li>
                  <a href="/">Интеграции</a>
                </li>
                <li>
                  <a href="/">Кейсы</a>
                </li>
                <li>
                  <a href="/">Сертификаты</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__contacts">
            <a href={`tel:${PHONE_NUMBER}`}>
              {formatPhoneNumber(PHONE_NUMBER)}
            </a>
            <a href="https://t.me">
              <IconTelegramSvg />
            </a>
            <a href="https://www.viber.com">
              <IconViberSvg />
            </a>
            <a href={`https://wa.me/${PHONE_NUMBER}`}>
              <IconWhatsappSvg />
            </a>
          </div>
        </div>
        <div className="bullPurple"></div>
      </ContainerComponent>
    </header>
  );
}

export default Header;
