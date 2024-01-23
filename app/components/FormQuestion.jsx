"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSadTear,
  faFrown,
  faMeh,
  faSmile,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function formQuestion(props) {
  const [newNPS, setNewNPS] = useState({
    bu: props.nps.bu,
    question: props.nps.question,
    score: props.nps.score || "",
    comment: props.nps.comment || "",
    agent: props.nps.agent.userAgent,
    IP: props.nps.IP.ipAddress,
  });

  const router = useRouter();

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    const value = icon.currentTarget.getAttribute("value");
    setNewNPS({ ...newNPS, score: value });
    setSelectedIcon((prevIcon) => (prevIcon === value ? null : value));
  };

  const handleMessageChange = (e) => {
    setNewNPS({ ...newNPS, comment: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure newNPS is defined and includes the bu property
      if (!newNPS || !newNPS.bu) {
        throw new Error("Invalid newNPS object");
      }

      const res = await fetch(`http://localhost:3000/api/nps/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ NPS: newNPS }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("http://localhost:3000/nk/more/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="p-2 mb-3">{props.nps.question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-x-3 icon-container">
          <FontAwesomeIcon
            onClick={handleIconClick}
            icon={faSadTear}
            className={selectedIcon === "1" ? "icon-selected" : ""}
            value="1"
          />
          <FontAwesomeIcon
            onClick={handleIconClick}
            icon={faFrown}
            className={selectedIcon === "2" ? "icon-selected" : ""}
            value="2"
          />
          <FontAwesomeIcon
            onClick={handleIconClick}
            icon={faMeh}
            className={selectedIcon === "3" ? "icon-selected" : ""}
            value="3"
          />
          <FontAwesomeIcon
            onClick={handleIconClick}
            icon={faSmile}
            className={selectedIcon === "4" ? "icon-selected" : ""}
            value="4"
          />
          <FontAwesomeIcon
            onClick={handleIconClick}
            icon={faGrinStars}
            className={selectedIcon === "5" ? "icon-selected" : ""}
            value="5"
          />
        </div>

        <div className="relative mb-5" data-te-input-wrapper-init>
          <textarea
            className="peer shadow-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Optional comment ? type here"
            value={newNPS.comment}
            onChange={handleMessageChange}
          ></textarea>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Comment
          </label>
        </div>

        <button
          type="submit"
          /* disabled={!props.nps.comment} */
          onClick={handleSubmit}
          className="inline-block text-xs rounded-full bg-primary px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
