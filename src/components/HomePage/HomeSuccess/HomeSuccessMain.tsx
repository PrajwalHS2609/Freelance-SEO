"use client";
import CountUp from "react-countup";
import "./HomeSuccess.css";
export default function HomeSuccessMain() {
  const metric = [
    {
      id: "1",
      number: 84,
      category: "Successfully Project Finished.",
      duration: 8,
      suffix: "+",
    },
    {
      id: "2",
      number: 10,
      category: "Years of experience with proud",
      duration: 8,
      suffix: "+",
    },
    {
      id: "3",
      number: 15,
      category: "Revenue Generated",
      duration: 8,
      suffix: "cr+",
    },
    {
      id: "4",
      number: 12,
      category: "Colleagues & counting more daily",
      duration: 8,
      suffix: "+",
    },
  ];
  return (
    <div className="homeSuccessMain-container">
      {metric.map((x) => (
        <div className="homeSuccessMain-content" key={x.id}>
          <CountUp
            start={0}
            end={x.number}
            duration={x.duration}
            suffix={x.suffix}
          />
          <h3>{x.category}</h3>
        </div>
      ))}
    </div>
  );
}
