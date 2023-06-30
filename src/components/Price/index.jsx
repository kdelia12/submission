import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Container from "../../common/Container";

const TICKERS = ["SOL", "BTC", "BNB", "ETH", "ARB", "MATIC"];

const RunningText = () => {
  const [tickerData, setTickerData] = useState({});
  const [scrollPosition, setScrollPosition] = useState(800);

  const textRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const requests = TICKERS.map((ticker) =>
        axios.get(
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${ticker}&tsym=USD&limit=2`
        )
      );
      const responses = await Promise.all(requests);
      const data = {};
      responses.forEach((response, index) => {
        const ticker = TICKERS[index];
        const close = response.data.Data.Data[1].close;
        const prevClose = response.data.Data.Data[0].close;
        data[ticker] = { close, prevClose };
      });
      setTickerData(data);
    };
    fetchData();
    const interval = setInterval(fetchData, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = textRef.current.parentNode.offsetWidth;
    const animationDuration = (textWidth + containerWidth) * 30; // 30 pixels per second
    const interval = setInterval(() => {
      setScrollPosition((scrollPosition) =>
        (scrollPosition + 1) % (textWidth + containerWidth)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="runningtext" className="runningtext section-spacing dark:bg-black">
        <Container className="text-center">
      <div
        style={{
          position: "relative",
          left: scrollPosition - textRef.current?.offsetWidth || 0,
          display: "inline-flex",
        }}
        ref={textRef}
      >
        {TICKERS.map((ticker) => {
          const { close, prevClose } = tickerData[ticker] || {};
          const color = close > prevClose ? "green" : "red";
          const text = `${ticker}: ${close || "-"} USD`;
          return (
            <span key={ticker} style={{ marginRight: "1rem", color }}>
              {text}
            </span>
          );
        })}
      </div>
    </Container>
    </section>
  );
};

export default RunningText;
