import React from "react";

function SortedTours(props) {
  return (
    <div>
      <button onClick={() => props.onSort("date")}>By date</button>
      <button onClick={() => props.onSort("price")}>By price</button>
      <button onClick={() => props.onSort("country")}>By country</button>
    </div>
  );
}

export default SortedTours;
