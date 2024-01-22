import React from "react";
import FormQuestion from "../components/FormQuestion";

const page = () => {
  return (
    <div className="container items-center text-sm">
      <h2>
        <img src="nk-2.png" alt="Logo"></img>
      </h2>
      <FormQuestion
        nps={{
          bu: "nk",
          question: "What do you think about the Bakery?",
          score: 0,
          comment: "",
          agent: "Anonymous",
          IP: "127.0.0.1",
        }}
      />
    </div>
  );
};

export default page;
