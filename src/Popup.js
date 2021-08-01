import React from "react";
export const Popup = () => {
  const popupremove = (e) => {
    e.preventDefault();

    e.target.parentElement.parentElement.parentElement.classList.add("hide");
    e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].classList.remove(
      "bg"
    );
    e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].classList.remove(
      "bg"
    );
  };
  return (
    <div className="popup hide">
      <div>
        <div className="popuptext">
          Oh, no! These Animals Have Better Memory Than You!
        </div>
        <div className="button">
          <button onClick={popupremove}>Retry</button>
        </div>
      </div>
    </div>
  );
};
