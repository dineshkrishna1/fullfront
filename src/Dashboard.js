import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_url1 } from "./URL/url";
import "./Dashboard.css"

const Dashboard = () => {
  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  const [tableLength, setTableLength] = useState(0);

  useEffect(() => {
    axios.get(get_url1).then((res) => {
      console.log(res.data);
      setdata1(res.data);
      setTableLength(res.data.length); 
    });
  }, [ref]);



  return (
    <>
    

        <div className="dashboardbox">
          <div className="EmployeeCount" id="one">
          <h4>Students</h4>
            <p>{tableLength}</p>
            
          </div>
          </div>
       

       
      
    </>
  );
};

export default Dashboard;
