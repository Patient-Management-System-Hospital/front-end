import { useState } from "react";
import img from "../images/Group 1116603021.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterData({ ...registerData, [name]: value });

    if (name === "FirstName") {
      if (value === "") {
        setErrors({ ...errors, FirstNameError: "First Name Is Required" });
      } else {
        setErrors({ ...errors, FirstNameError: "" });
      }
    } else if (name === "LastName") {
      if (value === "") {
        setErrors({ ...errors, LastNameError: "Last Name Is Required" });
      } else {
        setErrors({ ...errors, LastNameError: "" });
      }
    } else if (name === "email") {
      if (value === "") {
        setErrors({ ...errors, emailError: "Email Is Required" });
      } else {
        setErrors({ ...errors, emailError: "" });
      }
    } else if (name === "number") {
      if (value === "") {
        setErrors({ ...errors, numberError: "Number Is Required" });
      } else {
        setErrors({ ...errors, numberError: "" });
      }
    } else if (name === "Country") {
      if (value === "") {
        setErrors({ ...errors, CountryError: "Please Select Your Contry" });
      } else {
        setErrors({ ...errors, CountryError: "" });
      }
    } else if (name === "State") {
      if (value === "") {
        setErrors({ ...errors, StateError: "Please Select Your State" });
      } else {
        setErrors({ ...errors, StateError: "" });
      }
    } else if (name === "City") {
      if (value === "") {
        setErrors({ ...errors, CityError: "Please Select Your City" });
      } else {
        setErrors({ ...errors, CityError: "" });
      }
    } else if (name === "Gender") {
      if (value === "") {
        setErrors({ ...errors, GenderError: "Please Select Your Gender" });
      } else {
        setErrors({ ...errors, GenderError: "" });
      }
    } else if (name === "Hospital") {
      if (value === "") {
        setErrors({ ...errors, HospitalError: "Please Select Your Hospital" });
      } else {
        setErrors({ ...errors, HospitalError: "" });
      }
    } else if (name === "pass") {
      if (value === "") {
        setErrors({ ...errors, passError: "Password Is Required" });
      } else {
        setErrors({ ...errors, passError: "" });
        setRegisterData({ ...registerData, pass: value });
      }
    } else if (name === "ConfirmPass") {
      if (value === "") {
        setErrors({
          ...errors,
          ConfirmPassError: "Please Confirm Your Password",
        });
      } else if (value !== registerData.pass) {
        setErrors({
          ...errors,
          ConfirmPassError: "Confirm Password & Password Is Not Match",
        });
      } else {
        setErrors({ ...errors, ConfirmPassError: "" });
      }
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    const {
      FirstName,
      LastName,
      email,
      number,
      Country,
      State,
      City,
      Gender,
      Hospital,
      pass,
      ConfirmPass,
    } = registerData;

    if (!FirstName) {
      setErrors({ ...errors, FirstNameError: "First Name Is Required" });
    } else if (!LastName) {
      setErrors({ ...errors, LastNameError: "Last Name Is Required" });
    } else if (!email) {
      setErrors({ ...errors, emailError: "Email Is Required" });
    } else if (!number) {
      setErrors({ ...errors, numberError: "Number Is Required" });
    } else if (!Country) {
      setErrors({ ...errors, CountryError: "Please Select Your Country" });
    } else if (!State) {
      setErrors({ ...errors, StateError: "Please Select Your State" });
    } else if (!City) {
      setErrors({ ...errors, CityError: "Please Select Your City" });
    } else if (!Gender) {
      setErrors({ ...errors, GenderError: "Please Select Your Gender" });
    } else if (!Hospital) {
      setErrors({ ...errors, HospitalError: "Please Select Your Hospital" });
    } else if (!pass) {
      setErrors({ ...errors, passError: "Password is Required" });
    } else if (!ConfirmPass) {
      setErrors({
        ...errors,
        ConfirmPassError: "Please Confirm Your Password",
      });
    } else if (pass !== ConfirmPass) {
      setErrors({
        ...errors,
        ConfirmPassError: "Confirm Password & Password Do Not Match",
      });
    } else {
      try {
        const res = await axios.post(
          "http://localhost:3000/data",
          registerData
        );
        alert("Registration Successful");
        setErrors({});
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Registration</h2>
          <form method="post" onSubmit={(e) => submitData(e)}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="FirstName"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.FirstNameError
                        ? "border-red-500"
                        : registerData.FirstName
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                />
                <span className="text-red-500 font-semibold">
                  {errors.FirstNameError ? errors.FirstNameError : ""}
                </span>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="LastName"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.LastNameError
                        ? "border-red-500"
                        : registerData.LastName
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                />
                <span className="text-red-500 font-semibold">
                  {errors.LastNameError ? errors.LastNameError : ""}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.emailError
                        ? "border-red-500"
                        : registerData.email
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                />
                <span className="text-red-500 font-semibold">
                  {errors.emailError ? errors.emailError : ""}
                </span>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  name="number"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.numberError
                        ? "border-red-500"
                        : registerData.number
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                />
                <span className="text-red-500 font-semibold">
                  {errors.numberError ? errors.numberError : ""}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Country<span className="text-red-500">*</span>
                </label>
                <select
                  name="Country"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.CountryError
                        ? "border-red-500"
                        : registerData.Country
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                >
                  <option>Select Country</option>
                  <option value={"India"}>India</option>
                </select>
                <span className="text-red-500 font-semibold">
                  {errors.CountryError ? errors.CountryError : ""}
                </span>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  State<span className="text-red-500">*</span>
                </label>
                <select
                  name="State"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.StateError
                        ? "border-red-500"
                        : registerData.State
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                >
                  <option>Select State</option>
                  <option value={"GUJARAT"}>Gujarat</option>
                </select>
                <span className="text-red-500 font-semibold">
                  {errors.StateError ? errors.StateError : ""}
                </span>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  City<span className="text-red-500">*</span>
                </label>
                <select
                  name="City"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.CityError
                        ? "border-red-500"
                        : registerData.City
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                >
                  <option>Select City</option>
                  <option value={"Surat"}>Surat</option>
                </select>
                <span className="text-red-500 font-semibold">
                  {errors.CityError ? errors.CityError : ""}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Gender<span className="text-red-500">*</span>
              </label>
              <select
                name="Gender"
                className={`w-full px-3 py-2 border-2 rounded-md 
                  ${
                    errors.GenderError
                      ? "border-red-500"
                      : registerData.Gender
                      ? "border-green-500"
                      : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }`}
                onChange={(e) => getValue(e)}
              >
                <option>Select Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Other"}>Other</option>
              </select>
              <span className="text-red-500 font-semibold">
                {errors.GenderError ? errors.GenderError : ""}
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Select Hospital<span className="text-red-500">*</span>
              </label>
              <select
                name="Hospital"
                className={`w-full px-3 py-2 border-2 rounded-md 
                  ${
                    errors.HospitalError
                      ? "border-red-500"
                      : registerData.Hospital
                      ? "border-green-500"
                      : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }`}
                onChange={(e) => getValue(e)}
              >
                <option>Select Hospital</option>
                <option value={"Kiraan Hospitaal"}>Kiran Hosspital</option>
              </select>
              <span className="text-red-500 font-semibold">
                {errors.HospitalError ? errors.HospitalError : ""}
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="pass"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.passError
                        ? "border-red-500"
                        : registerData.pass
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                />
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <span className="text-red-500 font-semibold">
                {errors.passError ? errors.passError : ""}
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                 type={showPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  name="ConfirmPass"
                  className={`w-full px-3 py-2 border-2 rounded-md 
                    ${
                      errors.ConfirmPassError
                        ? "border-red-500"
                        : registerData.confirmPass
                        ? "border-green-500"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }`}
                  onChange={(e) => getValue(e)}
                />
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <span className="text-red-500 font-semibold">
                {errors.ConfirmPassError ? errors.ConfirmPassError : ""}
              </span>
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-sm">
                  I agree to all the{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-500 hover:text-blue-800"
                  >
                    T&amp;C
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-500 hover:text-blue-800"
                  >
                    Privacy Policies
                  </a>
                  .
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-blue-500 hover:text-blue-800"
            >
              Login
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center ml-16">
          <img
            src={img}
            alt="Illustration of a doctor with medical icons around"
            className="mb-4"
          />
          <h1 className="text-3xl font-semibold">Hospital</h1>
          <p className="text-gray-600">
            You Can stay your Hospital and Contact With Your Facility
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
