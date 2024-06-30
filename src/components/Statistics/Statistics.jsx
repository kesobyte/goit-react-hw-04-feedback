import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.label}>
        Good: <span className={css.result}>{good}</span>
      </p>
      <p className={css.label}>
        Neutral: <span className={css.result}>{neutral}</span>
      </p>
      <p className={css.label}>
        Bad: <span className={css.result}>{bad}</span>
      </p>
      <p className={css.label}>
        Total: <span className={css.result}>{total}</span>
      </p>
      <p className={css.label}>
        Positive Feedback:{" "}
        <span className={css.result}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
