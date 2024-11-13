import React from 'react'
import { useState } from 'react'

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  

  function handleEmailChange(event) {
    const emailValue = event.target.value;
    setEmail(setEmail);
    validateEmail(emailValue);
  }

  function handlePasswordChange(event) {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    evaluatePasswordStrength(passwordValue);
  }

  function handleNationalityChange(event) {
    setNationality(event.target.value);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    if (isValid) {
      setEmailMessage("Your email address is: " + email);
    } else {
      setEmailMessage("");
    }
  }

  function evaluatePasswordStrength(password) {
    let strength = "Weak";
    if (password.length >= 8) {
      if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
      } else if (/[A-Z]/.test(password) || /[a-z]/.test(password) || /\d/.test(password) || /[!@#$%^&*]/.test(password)) {
        strength = "Medium";
      }
    }
    setPasswordStrength(strength);
  }

  function greetingMessage() {
    let greeting = "";
    switch(nationality) {
      case "fi":
        greeting = "Hei";
        break;
      case "en":
        greeting = "Hello";
        break;
      case "de":
        greeting = "Hallo";
        break;
      case "fr":
        greeting = "Bonjour";
        break;
      default:
        greeting = "";
    }
    console.log("Greetings: ", greeting);
    return greeting;
  }
    

  return (
    <div class="flex items-center justify-center min-h-screen bg-rose-50">
      {/* <!-- Card Container --> */}
      <div
        class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        {/* <!-- Left Side --> */}
        <div class="p-6 md:p-20">
          {/* <!-- Top Content --> */}
          <div>
            <h2 class="font-mono mb-5 text-4xl font-bold">Welcome</h2>
            <p class="mb-2 font-sans font-light text-gray-600">Email</p>
            <input
              type="email"
              class={`w-full p-6 mb-4 border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} ${isEmailValid ? '' : 'outline-none'} rounded-md placeholder:font-sans placeholder:font-light`}
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <p class="mb-4 font-sans font-light text-gray-600">
              {isEmailValid ? '' : 'Please enter a valid email address'}
            </p>
            <p class="mb-2 font-sans font-light text-gray-600">Password</p>
            <input
              type="password"
              class="w-full p-6 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p class="mb-4 font-sans font-light text-gray-600">
              Password strength: {passwordStrength}
            </p>
            <p class="mb-2 font-sans font-light text-gray-600">Nationality</p>
            <select name="" id="" class="w-full p-6 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" value={nationality} onChange={handleNationalityChange}>
              <option value="">Choose a nationality</option>
              <option value="fi">Finnish</option>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
          </div>


          {/* <!-- Middle Content --> */}
          <div
            class="flex flex-col items-center justify-between mt-6 space-y-6"
          >
            <button
              class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
            >
              <span>Sign Up</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          <div class="mt-12 border-b border-b-gray-300"></div>

          {/* <!-- Bottom Content --> */}
          <p class="my-2 font-sans font-light text-gray-600">{greetingMessage()}</p>
          <p class="my-2 font-sans font-light text-gray-600">
            {emailMessage}
          </p>



        </div>

        {/* <!-- Right Side --> */}
        <img src="images/image.jpg" alt="" class="w-[430px] hidden" />

      </div>
    </div>
  )
}

export default SignupPage
