"use client";

import { React, useState, useEffect } from "react";
import FormQuestion from "../components/FormQuestion";

const page = () => {
  const [userAgent, setUserAgent] = useState("");
  const [ipAddress, setIPAddress] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userAgent = window.navigator.userAgent;
        setUserAgent(userAgent);

        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container items-center text-sm">
      <h2>
        <img src="nk-2.png" alt="Logo"></img>
      </h2>
      <FormQuestion
        nps={{
          bu: "nk",
          question: "What do you think about the Bakery?",
          score: "",
          comment: "",
          ...{ agent: { userAgent }, IP: { ipAddress } },
        }}
      />
    </div>
  );
};

export default page;
