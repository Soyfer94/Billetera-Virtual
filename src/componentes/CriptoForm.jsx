/*import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const Form = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [crypto, setCrypto] = useState("");
  const [quote, setQuote] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeCrypto = (event) => {
    setCrypto(event.target.value);
    setQuote(10000);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
    setTotal(amount * quote);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add a new record to the table
    fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        crypto,
        amount,
        total,
      }),
    });
  };

  return (
    <div>
       
      <h1>Form</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          disabled
        />
      </div>
      <div>
        <label htmlFor="balance">Balance</label>
        <input
          type="text"
          id="balance"
          value={balance}
          disabled
        />
      </div>
      <div>
        <label htmlFor="crypto">Crypto</label>
        <select
          id="crypto"
          onChange={handleChangeCrypto}
        >
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
          <option value="USDT">USDT</option>
          <option value="ADA">ADA</option>
          <option value="Litecoin">Litecoin</option>
        </select>
      </div>
      <div>
        <label htmlFor="quote">Quote</label>
        <input
          type="text"
          id="quote"
          value={quote}
          disabled
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleChangeAmount}
        />
      </div>
      <div>
        <label htmlFor="total">Total</label>
        <input
          type="text"
          id="total"
          value={total}
          disabled
        />
      </div>
      <Button onClick={handleSubmit}>Buy</Button>
    </div>
  );
};

export default Form;
*/