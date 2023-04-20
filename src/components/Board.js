import React from "react";
import styles from "./Board.module.css";

export default function Board() {
  const boardData = [
    {
      boardHeading: "Dashboard",
      boardImage: "./boardimages/dashboard_icon.png",
    },
    {
      boardHeading: "Transitions",
      boardImage: "./boardimages/transaction_icon.png",
    },
    {
      boardHeading: "Schedules",
      boardImage: "./boardimages/schedule_icon.png",
    },
    {
      boardHeading: "Users",
      boardImage: "./boardimages/user_icon.png",
    },
    {
      boardHeading: "Settings",
      boardImage: "./boardimages/setting_icon.png",
    },
  ];
  return (
    <div className={styles.BoardOptionContainer}>
      <div id={styles.UpperOptions}>
        <div id={styles.BoardHeadingContiner}>
          <p id={styles.BoardHeading}>Board.</p>
        </div>
        <div className={styles.BoardContainerOption}>
          {boardData.map((x, key) => {
            return (
              <a href="#" className={styles.BoardOption}>
                <li className={styles.BoardLiContainer}>
                  <div className={styles.Imgcontainer}>
                    <img
                      src={x.boardImage}
                      alt="myassignment"
                      className={styles.OptionImage}
                    />
                  </div>
                  <div className={styles.OptionHeadingContainer}>
                    <p className={styles.OptionHeading}>{x.boardHeading}</p>
                  </div>
                </li>
              </a>
            );
          })}
        </div>
      </div>
      <div id={styles.LowerOptions}>
        <a href="#" className={styles.AchorTagForLowerOption}>
          <li className={styles.LowerLiTag}>Help </li>
        </a>
        <a href="#" className={styles.AchorTagForLowerOption}>
          <li className={styles.LowerLiTag}>Contact Us </li>
        </a>
      </div>
    </div>
  );
}
