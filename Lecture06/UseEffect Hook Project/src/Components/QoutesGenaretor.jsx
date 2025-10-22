import React from "react";
import "../Quotes.css";

const QoutesGenaretor = ({ quote, loading, onNewQoute }) => {
  return (
    <div className="card">
      {loading ? (
        <p className="qoute" >loading.....</p>
      ) : (
        <>
          <p className="qoute">" {quote?.quote} "</p>
          <p className="author">-- {quote?.author}</p>
        </>
      )}
      <button onClick={onNewQoute} className="btn">
        New Quote
      </button>
    </div>
  );
};

export default QoutesGenaretor;
