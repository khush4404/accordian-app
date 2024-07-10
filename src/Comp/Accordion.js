import React, { useState } from "react";
import { questions } from "./Api";
import MyAccordion from "./MyAccordion";
import "./Accordion.css";

const Accordion = () => {
  const [data, setdata] = useState(questions);
  return (
    <>
    <section className="main_div">
        <h1>Personal Questions</h1>

      {data.map((cur) => {
        const { id, question, answer } = cur;
        return <MyAccordion key={id} {...cur} />;
      })}
    </section>
    </>
  );
};

export default Accordion;
