import React, { useState } from "react";
import "./Hero.scss";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Hero = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First: ", first);
    console.log("Second: ", second);
    console.log("Start Date: ", startDate);
    console.log("End Date: ", endDate);
  };
  const inputStyle = {
    width: "220px",
  };
  return (
    <section id="hero">
      <h1>RENT OR BUY</h1>
      <h4>Find your construction machines and more!</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <TextField
            id="outlined-basic"
            label="What are you looking for?"
            type="text"
            variant="outlined"
            value={first}
            style={{ ...inputStyle, backgroundColor: "white" }}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <label>
          <Select
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            displayEmpty
            style={{ ...inputStyle, backgroundColor: "white" }}
            label="What are you looking for?"
          >
            <MenuItem value="" disabled>
              <em>Select an option</em>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option4">Option 4</MenuItem>
            <MenuItem value="option5">Option 5</MenuItem>
          </Select>
        </label>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Pick start date"
              className="custom-datepicker"
              sx={{ backgroundColor: "white", width: "220px" }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Pick end date"
              className="custom-datepicker"
              sx={{ backgroundColor: "white", width: "220px" }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <button type="submit">Submit</button>
      </form>
      <h4>
        Or list all available equipment in{" "}
        <span style={{ color: "yellow" }}>marketplace.</span>
      </h4>
    </section>
  );
};

export default Hero;
