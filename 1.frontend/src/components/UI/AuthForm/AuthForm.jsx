import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from 'react';

export default function AuthForm({ initialMode = "login"  }) {
  const [mode, setMode] = useState(initialMode);
  return (
    <div className="max-w-4xl p-1 mx-auto grid grid-cols-2 gap-4 rounded-lg bg-white text-center mb-4">
      {mode === "login" && <LoginForm switchMode={() => setMode("register")}/>}
      {mode === "register" && <RegisterForm switchMode={() => setMode("login")} />}
    </div>
  );
}