import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm({ mode }) {
  return (
    <>
        <h1>Auth Form</h1>
        {mode === "login" && <LoginForm />}
        {mode === "register" && <RegisterForm />}
    </>
  );
}