import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../common/Container";

const TICKERS = ["SOL", "BTC", "BNB", "ETH", "ARB", "MATIC", "DOGE", "XRP", "ADA", "OKB", "APT"];
const ICON_URLS = {
  SOL: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/64/solana.png",
  BTC: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  BNB: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  ETH: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  ARB: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/64/arbitrum.png",
  MATIC: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
  DOGE: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
  XRP: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  ADA: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
  OKB: "https://s2.coinmarketcap.com/static/img/coins/64x64/3897.png",
  APT: "https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png"
};
const HelpVideo = () => {
  const [tickerData, setTickerData] = useState({});

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
        const percentageDiff = ((close - prevClose) / prevClose) * 100;
        data[ticker] = { close, prevClose, percentageDiff };
      });
      setTickerData(data);
    };
    fetchData();
    const interval = setInterval(fetchData, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const getArrow = (close, prevClose) => {
    if (close > prevClose) {
      return <span style={{ color: "green" }}>⬈</span>;
    } else if (close < prevClose) {
      return <span style={{ color: "red" }}>⬊</span>;
    } else {
      return null;
    }
  };

  const tickerText = TICKERS.map((ticker) => {
    const { close, prevClose, percentageDiff } = tickerData[ticker] || {};
    const color = close > prevClose ? "green" : "red";
    const tickers = `${ticker}:`;
    const iconUrl = ICON_URLS[ticker];
    const sign = percentageDiff > 0 ? '+' : '';
    const text = ` ${close ? `${close.toFixed(2)}` : "-"} (${percentageDiff ? `${sign}${percentageDiff.toFixed(2)}%` : "-"})`;
  
    return (
      <span key={ticker} style={{ display: "inline-flex", alignItems: "center", marginRight: "1rem", color }}>
        {iconUrl && <img src={iconUrl} alt={ticker} height={16} width={16} style={{ marginRight: "0.5rem" }} />}
        <span>{tickers}</span>
        <span style={{ marginLeft: "0.25rem" }}>{getArrow(close, prevClose)}</span>
        <span style={{ marginLeft: "0.25rem" }}>{text}</span>
        <span style={{ marginLeft: "0.25rem" }}>|</span>
      </span>
    );
  });
  

  return (
    <section className="video section-spacing dark:bg-black">
      <Container>
        <marquee>{tickerText}</marquee>
      </Container>
    </section>
  );
};


export default HelpVideo;
