import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/Adminform.css";
import axios from "axios";
export default function Form() {
  const [response,setresponse]=useState()
    const [formres, setfromres] = useState(false);
    const[formdata,setformdata]=useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setformdata(data)

    setfromres(true)

  };
  
  const handlepost=async()=>{
    
// const inputData = {
//   data: [[
//     102222222222,
//     0,
//     1111111111111,
//     470,
//     0,
//     true,
//     true,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     true,
//   ]],
  
// };
const inputData = {
  data: [
    [
      Number(formdata.ApplicantIncome),
      Number(formdata.CoapplicantIncome),
      Number(formdata.LoanAmount),
      Number(formdata.Loan_Amount_Term),
      Number(formdata.Credit_History),
      Boolean(formdata.Gender_Male=='true'?true:false),
      Boolean(formdata.Married_Yes=='true'?true:false),
      Boolean(formdata.Dependents_1=='true'?true:false),
      Boolean(formdata.Dependents_2=='true'?true:false),
      Boolean(formdata.Dependents_3=='true'?true:false),
      Boolean(formdata.Education_Not_Graduate=='true'?true:false),
      Boolean(formdata.Self_Employed_Yes=='true'?true:false),
      Boolean(formdata.Property_Area_Semiurban=='true'?true:false),
      Boolean(formdata.Property_Area_Urban=='true'?true:false),
    ],
  ],
};

const jsonData = JSON.stringify(inputData);
await axios
  .post("http://127.0.0.1:5000/predict", inputData)
  .then((res) => {
    setresponse(String(res.data.prediction));
    console.log(res.data.prediction);
  }).catch((err)=>{console.log(err)});


  }

  return (
    <div className="formcont">
      <div className="formtitle">
        <h1>Test Input</h1>
        {response ? <h1>{response}</h1> : <></>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="adminform">
        <div className="feild">
          <label>ApplicantIncome</label>
          <input
            type="number"
            placeholder="ApplicantIncome"
            {...register("ApplicantIncome", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="feild">
          <label>CoapplicantIncome</label>
          <input
            type="number"
            placeholder="CoapplicantIncome"
            {...register("CoapplicantIncome", {
              required: true,
              maxLength: 100,
            })}
          />
        </div>
        <div className="feild">
          <label>LoanAmount</label>
          <input
            type="number"
            placeholder="LoanAmount"
            {...register("LoanAmount", { required: true, maxLength: 50 })}
          />
        </div>
        <div className="feild">
          <label>Loan_Amount_Term</label>
          <input
            type="number"
            placeholder="Loan_Amount_Term"
            {...register("Loan_Amount_Term", {
              required: true,
            })}
          />
        </div>
        <div className="feild">
          <label>Credit_History</label>
          <input
            type="number"
            placeholder="Credit_History"
            {...register("Credit_History", {
              required: true,
             
              maxLength: 12,
            })}
          />
        </div>
        <div className="feild">
          <label>Gender_Male</label>
          <select {...register("Gender_Male", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Married_Yes</label>
          <select {...register("Married_Yes", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Dependents_1</label>
          <select {...register("Dependents_1", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Dependents_2</label>
          <select {...register("Dependents_2", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Dependents_3</label>
          <select {...register("Dependents_3", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label> Education_Not Graduate</label>
          <select {...register("Education_Not_Graduate", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Self_Employed_Yes</label>
          <select {...register("Self_Employed_Yes", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Property_Area_Semiurban</label>
          <select {...register("Property_Area_Semiurban", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="feild">
          <label>Property_Area_Urban</label>
          <select {...register("Property_Area_Urban", { required: true })}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>

        <input type="submit" />
      </form>
      {formres ? <div onClick={()=>{handlepost()}}>Press</div> : <></>}
    </div>
  );
}
