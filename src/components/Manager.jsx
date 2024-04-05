import React, { useEffect, useState } from 'react'
import { getAllPass, setPass } from '../utils/HandleApi'

const Manager = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [sitename, setSitename] = useState("");
  const [password, setPassword] = useState("");
  const [submitForm,setSubmitForm] = useState(false);
  

  // console.log(formdata);
  // const storedFormData = JSON.parse(localStorage.getItem("formData"));
  // console.log("My form data : ", storedFormData);
  const submitHandler = () => {
    // console.log("my sitename : ", sitename);
    // console.log("my pass : ", password);
    if (sitename != "" || password != "") {
      // setSubmitForm(!submitForm);
      setPass({ sitename: sitename, password: password });
      alert("You have saved a new password");
      setSubmitForm(!submitForm);
    }
    setSitename("")
    setPassword("")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] h-full"></div>

      <section className="text-gray-600 body-font h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Own Password Manager</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Safeguard your digital life with a custom-built password manager. Say goodbye to forgotten passwords and embrace security with ease.</p>
          </div>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">

              {/* FOR MY SITE NAME */}
              <label htmlFor="link-name" className="leading-7 text-sm text-gray-600">Website Name</label>
              <input value={sitename} onChange={(e) => setSitename(e.target.value)} type="text" id="link-name" name="link-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
            </div>

            <div className="relative flex-grow w-full">

              {/* FOR MY Passoword field */}
              <label htmlFor="pass" className="leading-7 text-sm text-gray-600">Password</label>
              <div className="flex">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} id="pass" name="pass" className="w-full bg-gray-100 bg-opacity-50 rounded border border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 relative" />

                <button onClick={togglePasswordVisibility} id="togglePassword" type="button" className="focus:outline-none absolute top-1/2 right-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/ccrgnftl.json"
                    trigger="click"
                    state="hover-look-around"
                    style={{ width: '25px', height: '25px' }}>
                  </lord-icon>
                </button>
              </div>
            </div>

            <button onClick={submitHandler} className="text-white bg-slate-900 border-0 py-[0.55rem] px-3 focus:outline-none hover:bg-slate-700 rounded text-base flex items-center gap-2">
              <lord-icon
                src="https://cdn.lordicon.com/ftndcppj.json"
                trigger="loop"
                style={{ width: '20px', height: '20px' }}>
              </lord-icon>
              Add
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Manager
