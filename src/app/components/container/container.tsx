"use client";
import React, { useState } from "react";
import group15 from "../../assets/Group 15.svg";
import Image from "next/image";
import style from "./container.module.css";
import avatar from "../../assets/avatar.svg";
import arrow from "../../assets/arrow2.svg";
import arrow3 from "../../assets/arrow3.svg";
import fingerup from "../../assets/fingerup.svg";
import fingerUpGreen from "../../assets/fingerupgreen.svg";

const Container = () => {
  const [details, setDeteils] = useState(false);
  const [details2, setDeteils2] = useState(false);
  return (
    <div className="_container">
      <div className={style.wrap}>
        <div className={style.wrap_header}>
          <Image src={group15} alt="group15" layout="intrinsic" />
        </div>
        <button
          className={style.button2}
          onClick={() => setDeteils2((prev) => !prev)}
        >
          <Image
            className={style.img_fingerup2}
            src={fingerUpGreen}
            alt="fingerUpGreen"
            layout="intrinsic"
          />
        </button>

        <div className={style.container1}>
          <button
            className={style.button}
            onClick={() => setDeteils((prev) => !prev)}
          >
            <Image
              className={style.img_fingerup}
              src={fingerup}
              alt="fingerup"
              layout="intrinsic"
            />
          </button>
          {details && (
            <div className={style.container1_template}>
              <Image
                className={style.img_avatar}
                src={avatar}
                alt="avatar"
                layout="intrinsic"
              />
              <div className={style.container1_arrow}>
                <Image
                  className={style.container1_arrow_arrow3}
                  src={arrow3}
                  alt="arrow"
                  layout="intrinsic"
                />
                <Image
                  className={style.container1_arrow_arrow1}
                  src={arrow}
                  alt="arrow"
                  layout="intrinsic"
                />
                <div className={style.container1_arrow_p}>
                  <p className="p_arraw1">
                    ХОБЛ болеют
                    <br />
                    <strong>преимущественно</strong>
                    <br />
                    <strong>мужчины?</strong>
                  </p>
                </div>
              </div>
              <div className={style.container1_rect}>
                <p className="p_arraw1 ">
                  В десятилетнем исследовании "Генетическая эпидемиология
                  <br />
                  ХОБЛ" (COPDGene) среди пациентов с ХОБЛ,
                  <br />
                  <strong className="p_opaciti">
                    диагностированной до 55 лет, было выявлено преобладание...
                  </strong>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className={style.container2}>
          {details2 && (
            <div className={style.container1_template}>
              <Image
                className={style.img_avatar}
                src={avatar}
                alt="avatar"
                layout="intrinsic"
              />
              <div className={style.container1_arrow}>
                <Image
                  className={style.container1_arrow_arrow3}
                  src={arrow3}
                  alt="arrow"
                  layout="intrinsic"
                />
                <Image
                  className={style.container1_arrow_arrow1}
                  src={arrow}
                  alt="arrow"
                  layout="intrinsic"
                />
                <div className={style.container1_arrow_p}>
                  <p className="p_arraw1">
                    <strong>Опасно </strong>не наличие
                    <br />
                    заболевания, а
                    <br />
                    обострения?
                  </p>
                </div>
              </div>
              <div className={style.container1_rect}>
                <p className="p_arraw1 ">
                  Большенство пациентов с ХОБЛ столкнется с обострениями:
                  <br />
                  как минимум одно среднетяжелое или тяжелое обострения
                  <br />
                  <strong className="p_opaciti">случится в течение...</strong>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className={style.wrap_main}>
          <div>
            <Image src={group15} alt="group15" layout="intrinsic" />
          </div>
          <div className={style.wrap_main_yellow}></div>
          <div className={style.wrap_main_column}>
            <div className={style.wrap_main_column_p}>
              <p className="p_wrap_main_column_p">
                Приоритетные направления фармакотерапевтической стратегии при
                ХОБЛ:
              </p>
            </div>
            <div className={style.wrap_main_column_wr3}>
              <div className={style.wrap_main_column_wr3_section}>
                <div></div>
              </div>
              <div className={style.wrap_main_column_wr3_section}></div>
              <div className={style.wrap_main_column_wr3_section}></div>
            </div>
            <div className={style.wrap_main_column_wr2}>
              <div className={style.wrap_main_column_wr2_section}></div>
              <div className={style.wrap_main_column_wr2_section}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
