// Dependancies
import React, { useState, useEffect, useRef } from "react";

// Assets
import "./AIWidget.scss";
import hoverImage from "../../assets/images/icons/insight-green.svg";

// Components
import ChatBotModal from "../ChatBotModal/ChatBotModal";

// Pages

export default function AIWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const aiWidgetRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScroll = () => {
    if (aiWidgetRef.current) {
      const aiWidgetTopOffset = aiWidgetRef.current.getBoundingClientRect().top;

      if (aiWidgetTopOffset <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`aiwidget__container ${isSticky ? "sticky" : ""}`}
        id="ai-widget"
        ref={aiWidgetRef}
      >
        <div className="aiwidget__tooltip">We leverage AI to improve Search with better rankings, featured snippets, and personalized results. AI enhances natural language understanding, provides autocomplete suggestions, and enables image and voice search. Our goal is to make information more accessible and relevant for all users. Click to interact with Insights chat to learn more.</div>

        <button
          className={`aiwidget__button--mobile ${isHovered ? "hovered" : ""}`}
          onClick={handleOpenModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          AI
        </button>
        <button
          className={`aiwidget__button--tablet ${isHovered ? "hovered" : ""}`}
          onClick={handleOpenModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
        </button>
      </div>
      {/* Render the ChatBotModal if isModalOpen is true */}
      {isModalOpen && <ChatBotModal handleCloseModal={handleCloseModal}/>}
    </>
  );
}
