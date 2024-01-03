import React from "react";
import Sidebar from "./components/sidebar";
import Read from "./read";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cash from "./cash";
import Studentsdetail from "./studentsdetail";
import Studentlist from "./studentlist";
import Studentedit from "./studentedit";
import Studentview from "./Studentview";
import InterviewScheduleForm from "./InterviewScheduleForm";
import Interviewlist from "./Interviewlist";
import "./App.css";
import Interviewedit from "./interviewedit";
import Interviewview from "./interviewview";
import Leadsform from "./Addleads";
import Leadslist from "./Leadslist";
import Leadsedit from "./Leadsedit";
import Leadsview from "./Leadsview";
import Leadsreport from "./Leadsreport";
import Attendanceform from "./Addattendance";
// import Addattendance from "./Addattendance";
import Attendancelist from "./Attendancelist";
import Dashboard from "./Dashboard";
import Cashin from "./Cashin";
import Cashlist from "./Cashlist";
import Cashview from "./Cashinview";
import Cashedit from "./Cashedit";
import Customerform from "./Customerform";
import Customerlist from "./Customerlist";
import Customeredit from "./Customeredit";
import Employeedetail from "./Employeedetail";
import Employeelist from "./Employeelist";
import Employeeedit from "./Employeeedit";
import Employeeview from "./Employeeview";
const Main = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/studentdetail" element={<Studentsdetail />} />
            <Route path="/studentlist" element={<Studentlist />} />
            <Route path="/interviewscheduleform" element={<InterviewScheduleForm />} />
            <Route path="/interviewlist" element={<Interviewlist />} />
            <Route path="/update2/:id" element={<Interviewedit/>}/>
            <Route path="/view1/:id" element={<Interviewview/>}></Route>
            <Route path="/Leadsform" element={<Leadsform />} />
            <Route path="/Leadslist" element={<Leadslist />} />
            <Route path="/update3/:id" element={<Leadsedit/>}/>
            <Route path="/view3/:id" element={<Leadsview/>}/>
            <Route path="/Report" element={<Leadsreport/>}/>
            <Route path="/Addattendanceform" element={<Attendanceform/>}/>
            <Route path="/Attendancelist" element={<Attendancelist/>}/>
           
<Route path="/Cashin" element={<Cashin/>}/>
<Route path="/Cashlist" element={<Cashlist/>}/>
<Route path="/update5/:id" element={<Cashedit/>}/>
<Route path="/view5/:id" element={<Cashview/>}/>
<Route path="/Customerform" element={<Customerform/>}/>
<Route path="/Customerlist" element={<Customerlist/>}/>
<Route path="/update6/:id" element={<Customeredit/>}/>
<Route path="/Employeeform" element={<Employeedetail/>}/>
<Route path="/Employeelist" element={<Employeelist/>}/>
<Route path="/update7/:id" element={<Employeeedit/>}/>
<Route path="/view7/:id" element={<Employeeview/>}/>
<Route path="/view4/:id" element={<Leadsview/>}/>
            <Route path="/cash" element={<Cash />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update/:id" element={<Studentedit />}></Route>
            <Route path="/view/:id" element={<Studentview />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default Main;
