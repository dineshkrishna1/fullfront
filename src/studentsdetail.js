import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_url1, post_url1 } from "./URL/url";
import "./studentslist.css";
import "./studentdetails.css";
import { useNavigate } from "react-router-dom";

const Studentsdetail = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [fathername, setfathername] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setgender] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("");
  const [totalAmount, setTotalAmount] = useState(30000);
  const [paidAmount, setPaidAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(30000);
  let navigate = useNavigate();

  useEffect(() => {
    // Calculate the remaining amount whenever paidAmount changes
    const newRemainingAmount = totalAmount - paidAmount;
    setRemainingAmount(newRemainingAmount);
  }, [totalAmount, paidAmount]);

  const handleTotalAmountChange = () => {
    setTotalAmount(30000);
  };
  const handlePaidAmountChange = (e) => {
    setPaidAmount(e.target.value);
  };
  const post_data1 = async () => {
    await axios.post(post_url1, {
      firstname,
      lastname,
      fathername,
      email,
      address,
      dob,
      contact,
      gender,
      maritalstatus,
      totalAmount,
      paidAmount,
      remainingAmount,
    });
    navigate("/studentlist");
  };

  return (
    <>
      <div className=" Container">
        <h1>Students Details</h1>
        <div>
          <form>
            <label>Firstname:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <br />
            <label>Lastname:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <br />
            <label>Fathername:</label>
            <input
              type="text"
              value={fathername}
              onChange={(e) => setfathername(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
            <br />
            <label>Dateofbirth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />
            <br />
            <label>Contact:</label>
            <input
              type="number"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
            />
            <br />

            <label>Gender:</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            />
            <br />
            <div>
              <label>Marital Status:</label>
              <label htmlFor="maritalYes">
                <input
                  type="checkbox"
                  id="maritalYes"
                  value="yes"
                  checked={maritalstatus === "yes"}
                  onChange={(e) =>
                    setMaritalstatus(e.target.checked ? "yes" : "no")
                  }
                />
                Yes
              </label>
              <label htmlFor="maritalNo">
                <input
                  type="checkbox"
                  id="maritalNo"
                  value="no"
                  checked={maritalstatus === "no"}
                  onChange={(e) =>
                    setMaritalstatus(e.target.checked ? "no" : "yes")
                  }
                />
                No
              </label>
            </div>
            <div>
              <label htmlFor="totalAmount">Total Amount:</label>
              <input
                type="number"
                id="totalAmount"
                value={totalAmount}
                readOnly // Make this field read-only
                onChange={handleTotalAmountChange}
              />
            </div>
            <div>
              <label htmlFor="paidAmount">Paid Amount:</label>
              <input
                type="number"
                id="paidAmount"
                value={paidAmount}
                onChange={handlePaidAmountChange}
              />
            </div>
            <div>
              <label htmlFor="remainingAmount">Remaining Amount:</label>
              <input
                type="number"
                id="remainingAmount"
                value={remainingAmount}
                readOnly
              />
            </div>
          </form>
        </div>

        <button type="submit" onClick={post_data1}>
          click
        </button>
      </div>
    </>
  );
};
export default Studentsdetail;
