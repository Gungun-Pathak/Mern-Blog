import React from "react";
import { Label, TextInput, Button, Alert } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      const res = await fetch("api/auth/signup", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username" value="Your Username" />
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" value="Your Email" />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="password" value="Your Password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 mt-4 w-full">
            <Button
              className="w-full"
              gradientDuoTone="purpleToPink"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="flex gap-2">
          <span>Have an account?</span>
          <Link to="/signin" className="text-blue-500">
            {" "}
            Sign in
          </Link>
        </div>
        {errorMessage && (
          <Alert className="mt-6" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}
