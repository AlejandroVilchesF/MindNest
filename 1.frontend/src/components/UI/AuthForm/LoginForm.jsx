import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import MindNest from "@/assets/MindNest.png";
import { useState } from 'react';

export default function LoginForm({switchMode}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* Form */}
      <div className="p-4">
        <h1 className="font-bold">Login to Dashboard</h1>
        <p className="font-thin text-[10px] mb-4">Fill the below form to login</p>
        {/* Inputs */}
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
        {/* Forgot */}
        <p className="text-[12px] text-yellow-500 mb-4 hover:brightness-90 cursor-pointer">Forgot Password?</p>
        {/* Buttons */}
        <Button text="Login" extraClasses="mb-4"/>
        <Button text="Sign Up" type="outline" onClick={switchMode}/>
      </div>
      {/* Image */}
      <div className="p-4">
        <img src={MindNest} alt="MindNest Logo" className="w-full h-full rounded"/>
      </div>
    </>
  );
}
