import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const myData = [
    {
      name: "week1",
      guest: 100,
      user: 400,
    },
    {
      name: "week2",
      guest:450,
      user: 250,
    },
    {
      name: "week3",
      guest: 350,
      user: 460,
    },
    {
      name: "week4",
      guest: 80,
      user: 550,
    },
  ];
  return (
    <>
      {console.log(myData)}
      <ResponsiveContainer width={"100%"} aspect={5} >
        <LineChart
          data={myData}
          width={"100%"}
          
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray=" 4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="guest" stroke="#E9A0A0" />
          <Line type="monotone" dataKey="user" stroke="rgb(155, 221, 124)" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
