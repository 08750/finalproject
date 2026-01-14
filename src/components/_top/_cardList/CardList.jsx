import React from "react";
import DogFriendly from "../../../assets/DogFriendly.png";
import HumanMoms from "../../../assets/DogHumanMenu.png";
import OurFriendlyMascot from "../../../assets/liarCorgi.jpg";
import Wallpaper from "../../../assets/paperimage.jpeg";
import Pawicon from "../../../assets/pawicon.png";
import Button from "../../_button/Button";

const cards = [
  {
    image: DogFriendly,
    title: "Dog Friendly",
    text: "愛犬といっしょに、気軽に立ち寄れるくつろぎカフェ。店内もテラス席もワンちゃん同伴OKで、お散歩の途中やちょっと一息つきたいときにも、人も犬も自然体で過ごせる空間をご用意しています。足元で安心してくつろぐ愛犬のそばで、ゆったりとしたカフェ時間をお楽しみください。",
  },
  {
    image: HumanMoms,
    title: "Dog & Human Moms",
    text: "犬用・人用どちらにも、素材にこだわった手作りメニューをご提供。ワンちゃん用は無添加・低アレルゲン、人用メニューは季節の食材を使ったやさしい味わいです。",
    hasButton: true,
  },
  {
    image: OurFriendlyMascot,
    title: "Our Friendly Mascot",
    text: "お店の看板犬が、ゆったりとした空気の中でお迎えします。人にもワンちゃんにも慣れているので、初めての来店でもほっと安心。のんびりした存在が、カフェ全体をやさしく包み込むような、心地よい時間をつくります。",
  },
];

export default function CardLayout() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card, index) => (
        <div key={index} style={{ width: "360px" }}>
          {/* 上の画像 */}
          <img
            src={card.image}
            alt={card.title}
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />

          {/* 余白 */}
          <div style={{ height: "16px" }} />

          {/* 下のカード（背景＋テキスト） */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "300px", // ← ボタンが入っても余裕
            }}
          >
            {/* 背景 */}
            <img
              src={Wallpaper}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            {/* テキストエリア */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "1.4rem",
                paddingTop: "2.2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                color: "#4a3b2a",
              }}
            >
              {/* 肉球 + タイトル */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.6rem",
                }}
              >
                <img src={Pawicon} alt="" width={20} height={20} />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  {card.title}
                </h3>
              </div>

              {/* 本文 */}
              <p
                style={{
                  margin: 0,
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                }}
              >
                {card.text}
              </p>

              {/* ボタン（あるカードのみ） */}
              {card.hasButton && (
                <div style={{ marginTop: "auto" }}>
                  <Button href="/menu" label="Menu" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
