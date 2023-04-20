import React from "react";
import styles from "./Activities.module.css";
import Chart from "./chart/Chart";

export default function Activities() {
  const legenddata = [
    {
      legenddatabgcolor: "#E9A0A0",
      legenddata: "Guest",
    },
    {
      legenddatabgcolor: "#9BDD7C",
      legenddata: "User",
    },
  ];
  return (
    <div id={styles.ActivityMainContainer}>
      <div id={styles.ActivitiesUpperContainer}>
        <div id={styles.ActivityHeadingsContainer}>
          <div id={styles.ActivitiesHeading}>
            <p id={styles.Heading}>Activities</p>
          </div>
          <div id={styles.ActivitiesTimePeriod}>
            <p id={styles.ActivitiesTime}>May-June2021</p>
            <div id={styles.ActivitiesImgContainer}>
              <img
                src="./chartimages/dropdown.png"
                alt="myassignment"
                id={styles.ActivitiesOptionImg}
              />
            </div>
          </div>
        </div>
        <div id={styles.LegendContainer}>
          <div className={styles.LegendColor}>
            {legenddata.map((x, key) => {
              return (
                <>
                  <div
                    className={styles.CircularDiv}
                    style={{ backgroundColor: x.legenddatabgcolor }}
                    key={key}
                  ></div>
                  <div className={styles.LegendData} key={key}>
                    {x.legenddata}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div id={styles.ChartMainContainer}>
        <Chart />
      </div>
    </div>
  );
}
