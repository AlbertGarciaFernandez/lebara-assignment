import { useState, useEffect } from "react";
import JSONDATA from "../../../api/faqData.json";
import FaqResult from "../../molecules/FaqResult/FaqResult";

import "./SearchFaq.css";

function SearchFaq() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="searchFaqSection">
      <div className="searchFaqWrapper">
        <input
          className="inputSearch"
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {JSONDATA.faq
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return <FaqResult key={val.id} faq={val} />;
          })}
        {/* <FaqResult /> */}
      </div>
    </div>
  );
}

export default SearchFaq;
