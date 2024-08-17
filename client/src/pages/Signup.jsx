import React from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full max-w-md">
        <form>
          <div className="mb-4">
            <Label htmlFor="username" value="Your Username" />
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" value="Your Email" />
            <TextInput type="email" placeholder="Email" id="email" required />
          </div>
          <div>
            <Label htmlFor="password" value="Your Password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
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
          <Link to="/sign-in" className="text-blue-500">
            {" "}
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
