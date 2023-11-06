import React, { useState } from 'react';
import "./Hero.scss";

const Hero = () => {
  // Define state variables for form inputs
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First: ', first);
    console.log('Second: ', second);
    console.log('Start Date: ', startDate);
    console.log('End Date: ', endDate);
  };

  return (
    <section id="hero">
      <h1>RENT OR BUY</h1>
      <h4>Find your construction machines and more!</h4>
      <form onSubmit={handleSubmit}>
        <label>
          First:
          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <label>
          Second:
          <select value={second} onChange={(e) => setSecond(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Hero;
