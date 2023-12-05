import React from "react";

//local dependencies
import { MAP_ADDRESS, PHONE_NUMBER } from "../../config/constants";
import { IconTelegramSvg } from "../../assets/svg/IconTelegramSvg";
import { IconViberSvg } from "../../assets/svg/IconViberSvg";
import { IconWhatsappSvg } from "../../assets/svg/IconWhatsappSvg";
import ContainerComponent from "../ui/ContainerComponent";
import { formatPhoneNumber } from "../../config/helpers";

function Footer() {
  const aboutCompany = [
    { text: "Партнёрская программа" },
    { text: "Вакансии" },
  ];

  const menuLeft = [
    { text: "Расчёт стоимости" },
    { text: "Услуги" },
    { text: "Виджеты" },
    { text: "Интеграции" },
    { text: "Наши клиенты" },
  ];

  const menuRight = [
    { text: "Кейсы" },
    { text: "Благодарственные письма" },
    { text: "Сертификаты" },
    { text: "Блог на Youtube" },
    { text: "Вопрос / Ответ" },
  ];
  return (
    <footer id="footer">
      <ContainerComponent>
        <div className="footer">
          <div className="footer__block">
            <div className="footer__block__nav">
              <p>О компании</p>
              <ul>
                {aboutCompany.map((el, idx) => (
                  <li key={idx}>
                    <a href="/">{el.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__block__nav">
              <p>Меню</p>
              <div className="group">
                <ul className="group--left">
                  {menuLeft.map((el, idx) => (
                    <li key={idx}>
                      <a href="/">{el.text}</a>
                    </li>
                  ))}
                </ul>
                <ul className="group--right">
                  {menuRight.map((el, idx) => (
                    <li key={idx}>
                      <a href="/">{el.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__block__nav">
              <p className="contact-text">Контакты</p>
              <ul className="contact-content">
                <li>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    {formatPhoneNumber(PHONE_NUMBER)}
                  </a>
                </li>
                <li>
                  <span className="messenger">
                    <a href="https://t.me">
                      <IconTelegramSvg />
                    </a>
                  </span>
                  <span className="messenger">
                    <a href="https://www.viber.com">
                      <IconViberSvg />
                    </a>
                  </span>
                  <span className="messenger">
                    <a href={`https://wa.me/${PHONE_NUMBER}`}>
                      <IconWhatsappSvg />
                    </a>
                  </span>
                </li>
                <li>
                  <a href="/">{MAP_ADDRESS}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__info">
            <p>©WELBEX 2022. Все права защищены.</p>
            <p className="privacy-link">Политика конфиденциальности</p>
          </div>
        </div>
      </ContainerComponent>
    </footer>
  );
}

export default Footer;
