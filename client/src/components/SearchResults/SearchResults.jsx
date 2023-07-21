import React from "react";
import { useState } from "react";
import "./SearchResults.scss"

const SearchResults = () => {
  const dummyResults = [
    {
      id: 1,
      title: "What is AI?",
      url: "https://www.google.ca",
      comments:
        "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making",
      img: "https://picsum.photos/id/123/200/300",
    },
    {
      id: 2,
      title: " Where does it come from?",
      url: "https://www.lipsum.com/",
      comments:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "https://picsum.photos/id/452/200/300",
    },
    {
      id: 3,
      title: "Why do we use it?",
      url: "https://www.lipsum.com/",
      comments:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: "https://picsum.photos/id/412/200/300",
    },
    {
      id: 4,
      title: "New Ai Technology is here!",
      url: "https://www.lipsum.com/",
      comments:
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://picsum.photos/id/892/200/300",
    },
    {
      id: 5,
      title: "How to leverage your business ideas",
      url: "https://www.lipsum.com/",
      comments:
        "Placeholder text is commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      img: "https://picsum.photos/id/932/200/300",
    },
    
  ];
  return (
    <div>
      {dummyResults.map((results, index) => (
        <div className="search" key={index}>
          <div className="search__info">
            <a href={results.url} target="_blank">
              {results.url}
            </a>
            <h3 className="search__title">{results.title}</h3>

            <p>{results.comments}</p>
          </div>
          {results.img && <img src={results.img} alt={results.title} />}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
