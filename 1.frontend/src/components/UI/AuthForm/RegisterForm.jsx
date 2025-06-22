import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import MindNest from "@/assets/MindNest.png";
import { useState } from "react";

export default function RegisterForm({ switchMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* Image */}
      <div className="p-4">
        <img
          src={MindNest}
          alt="MindNest Logo"
          className="w-full h-full rounded"
        />
      </div>
      {/* Form */}
      <div className="px-4 pt-1 my-2">
        <h1 className="font-bold">Hello, friend!</h1>
        <p className="font-thin text-[10px] mb-4">
          Fill the information to sign up
        </p>
        {/* Inputs */}
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <Input
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {/* Buttons */}
        <Button text="Submit" extraClasses="mt-4 mb-4" />
        {/* Account (Log in) */}
        <p
          className="text-[#00549D] font-semibold text-[12px] cursor-pointer hover:brightness-90"
          onClick={switchMode}
        >
          Have an account already? Log in here!
        </p>
      </div>
    </>
  );
}
