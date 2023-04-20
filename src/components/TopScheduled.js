import React from "react";
import styles from "./TopScheduled.module.css";

export default function TopScheduled() {
  return (
    <div id={styles.MainTopScheduledContainer}>
      <div id={styles.ScheduleHeadingsContainer}>
        <div id={styles.ScheduleHeading}>
          <p id={styles.Heading}>Todays Schedule</p>
        </div>
        <div id={styles.ScheduleTimePeriod}>
          <p id={styles.ScheduleTime}>See All</p>

          <div id={styles.ScheduleImgContainer}>
            <img
              src="./chartimages/dropdown.png"
              alt="myassignment"
              id={styles.ScheduleOptionImg}
            />
          </div>
        </div>
      </div>
      <div id={styles.SchedulesDetailsContainer}>
        <div id={styles.contentContainer1}>
          <div className={styles.leftsidecontent}></div>
          <div className={styles.rightsidecontent}>
            <p className={styles.meatingheading}>Meating with supplies from Kuta Bali</p>
            <p className={styles.meatingothercontent}>14:00 - 15:00</p>
            <p className={styles.meatingothercontent}>at Sunset Road, Kuta, Bali</p>
          </div>
        </div>
        <div id={styles.contentContainer2}>
          <div className={styles.leftsidecontent}></div>
          <div className={styles.rightsidecontent}>
            <p className={styles.meatingheading}>Check operation at Giga Factory 1</p>
            <p className={styles.meatingothercontent}>18.00-20.00</p>
            <p className={styles.meatingothercontent}>at Central Jakarta </p>
          </div>
        </div>
      </div>
    </div>
  );
}
