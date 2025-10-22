import React, { useEffect, useState } from "react";
import QoutesGenaretor from "./Components/QoutesGenaretor";
import "./Quotes.css";

function App() {
  const [quote, setquote] = useState(null);
  const [loading, setloading] = useState(true);

  const fetchQuote = async () => {
    setloading(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setquote(data);
    } catch (err) {
      console.error("Error fetching api ", err);
    }
    setloading(false);
  };

  useEffect(() => {
    console.log("Use useEffect ");
    fetchQuote()
  }, []);

  return (
    <div className="app">
      <h1 className="title">Noor Qoutes App</h1>
      <QoutesGenaretor
        quote={quote}
        loading={loading}
        onNewQoute={fetchQuote}
      />
    </div>
  );
}

export default App;
