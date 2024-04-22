import React, { useState } from "react";
import Chart from 'react-apexcharts';
import "./App.css";

function App(){
  const [state,setState] = useState ({
      options: {
        chart: {
          id: "basic-barasdffsdf"
        },
        xaxis: {
          categories: ["Sun","Sun","Mon","Tue","Wed","Thu","Fri"]
        },
      },     
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70.9, 91]
        },
      ],
  });
  return (
     <div className="App">
      <h1>React Charts Demo</h1>
      <div className="row">
        <div className="col-4">
        <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
            />
        </div>
      </div>
      </div>
  );
}

export default App;
