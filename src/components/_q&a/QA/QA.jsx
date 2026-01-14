import { useState } from "react";
import styles from "./QA.module.css";
import Button from "../../_button/Button";

const qaList = [
  {
    question: "予約は必要ですか？",
    answer:
      "ご予約なしでもご利用いただけます。 ただし、週末や混雑時はお待ちいただく場合がございます。 確実にご利用されたい場合は、事前のご相談がおすすめです。",
  },

  {
    question: "犬と一緒に入店できますか？",
    answer:
      "はい、犬同伴OKのカフェです。 ワンちゃんと一緒に、ゆったりとした時間をお過ごしください。 他のお客様へのご配慮だけお願いいたします。。",
  },
  {
    question: "一人でも利用できますか？",
    answer:
      "はい、もちろんです。 看板犬がそっと寄り添ってくれるような、 お一人でもほっとできる空間をご用意しています。",
  },
  {
    question: "看板犬はいつ会えますか？",
    answer:
      "看板犬は基本的に在店していますが、体調やお昼寝の時間によってはお休みしている場合もあります。その日の様子は、SNSでお知らせすることもあります。",
  },
  {
    question: "ワンちゃん用のメニューはありますか？",
    answer:
      "はい、ワンちゃん向けのおやつをご用意しています。 詳しくは店内メニューをご覧ください。",
  },
  {
    question: "支払い方法を教えてください。",
    answer: "現金のほか、クレジットカード・電子マネーがご利用いただけます。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "はい、専用の駐車スペースをご用意しています。台数に限りがありますので、満車の場合は近隣のコインパーキングをご利用ください。",
  },
];

export default function QA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Q&amp;A</h2>

      <ul className={styles.list}>
        {qaList.map((qa, index) => (
          <li key={index} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(index)}>
              <span className={styles.q}>Q</span>
              <span className={styles.text}>{qa.question}</span>
              <span
                className={`${styles.arrow} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openIndex === index && (
              <div className={styles.answer}>{qa.answer}</div>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.buttonWrapper}>
        <Button href="/" label="TOP" />
      </div>
    </section>
  );
}
