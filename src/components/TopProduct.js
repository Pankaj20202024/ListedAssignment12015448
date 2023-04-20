import React from "react";
import styles from "./TopProducts.module.css";
import { Cell, ResponsiveContainer } from "recharts";

import { PieChart, Pie } from "recharts";

export default function TopProduct() {
  const myData = [
    {
      name: "Basic Tees",
      value: 57,
    },
    {
      name: "Custom Short Pants",
      value: 33,
    },
    {
      name: "Super Hoodies",
      value: 15,
    },
  ];

  const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const legenddata = [
    {
      legenddatabgcolor: "#98D89E",
      legenddataname: "Basic Tees",
      legenddata: "55%",
    },
    {
      legenddatabgcolor: "#F6DC7D",
      legenddataname: "Custom Short Pants",
      legenddata: "31%",
    },
    {
      legenddatabgcolor: "#EE8484",
      legenddataname: "Super Hoodies",
      legenddata: "55%",
    },
  ];

  return (
    <div id={styles.MainTopProductContainer}>
      <div id={styles.PieChartHeadingsContainer}>
        <div id={styles.PieChartHeading}>
          <p id={styles.Heading}>Top Products</p>
        </div>
        <div id={styles.PieChartTimePeriod}>
          <p id={styles.PieChartTime}>May-June2021</p>

          <div id={styles.PieChartImgContainer}>
            <img
              src="./chartimages/dropdown.png"
              alt="myassignment"
              id={styles.PieChartOptionImg}
            />
          </div>
        </div>
      </div>
      <div id={styles.PieCharMainContainer}>
        <div id={styles.PieChartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={300} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                label={renderCustomizedLabel}
                labelLine={false}
                data={myData}
                outerRadius="100%"
             
              >
                {myData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                label={renderCustomizedLabel}
                labelLine={false}
                data={myData}
                outerRadius="100%"
                fill="#8884d8"
              
              >
                {myData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer> */}
        </div>
        <div id={styles.PieChartDetailsContainer}>
          <div id={styles.LegendContainer}>
            <div className={styles.LegendColor}>
              {legenddata.map((x, key) => {
                return (
                  <>
                    <div className={styles.LegendInnerContainer1}>
                      <div
                        className={styles.CircularDiv}
                        style={{ backgroundColor: x.legenddatabgcolor }}
                      ></div>
                      <div className={styles.LegendData}>
                        {x.legenddataname}
                      </div>
                    </div>
                    <div className={styles.LegendInnerContainer2}>
                      <span className={styles.percentagedata}>
                        {x.legenddata}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }
