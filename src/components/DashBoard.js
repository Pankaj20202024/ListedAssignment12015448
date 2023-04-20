import React from "react";
import styles from "./DashBoard.module.css";

export default function DashBoard() {
  const detailsData = [
    {
      innerdetails: "Total Revenues",
      innercontainerColor: "#DDEFE0",
      innervalue: "$2,129,430",
      innerimglink: "./dashboardimages/Revenues.png",
    },
    {
      innerdetails: "Total Transactions",
      innercontainerColor: "#F4ECDD",
      innervalue: "1520",
      innerimglink: "./dashboardimages/transaction.png",
    },
    {
      innerdetails: "Total Likes",
      innercontainerColor: "#EFDADA",
      innervalue: "9721",
      innerimglink: "./dashboardimages/likes.png",
    },
    {
      innerdetails: "Total Users",
      innercontainerColor: "#DEE0EF",
      innervalue: "892",
      innerimglink: "./dashboardimages/user.png",
    },
  ];

  return (
    <div className={styles.DashBoardContainer}>
      <div id={styles.DashBoardNavContainer}>
        <div id={styles.DashBoardNavLeftOption}>
          <p id={styles.DashBoardHeading}>DashBoard</p>
        </div>
        <div id={styles.DashBoardNavRightOption}>
          <div id={styles.SearchBar}>
            <input type="text" id={styles.search} placeholder="Search" />
            <img
              src="./dashboardimages/search.png"
              alt="myassignment"
              id={styles.SearchBarImage}
            />
          </div>

          <div id={styles.NotificationOptionContainer}>
            <img
              src="./dashboardimages/notification.png"
              alt="myassignment"
              id={styles.NotificationImage}
            />
          </div>

          <div id={styles.ProfileImageContainer}>
            <img
              src="./dashboardimages/myphoto.jpg"
              alt="myassignment"
              id={styles.UserProfile}
            />
          </div>
        </div>
      </div>
      <div id={styles.DetailsContainer}>
        {detailsData.map((x, key) => {
          return (
            <div
              className={styles.innerContainer}
              
              style={{ backgroundColor: x.innercontainerColor }}
            >
              <div className={styles.innerDetail} >
                <p className={styles.DetailHeading}>{x.innerdetails}</p>
                <p className={styles.Detials}>{x.innervalue}</p>
              </div>
              <div className={styles.InnerDetailsImgContainer}>
                <img
                  src={x.innerimglink}
                  alt="myassignment"
                  className={styles.InnerDetailsImage}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
