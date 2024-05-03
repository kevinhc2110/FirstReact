import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuthProvider";
import { LoginForm } from "./LoginForm";

export const LoginContainer: React.FC = () => {
  const auth = useAuth();

  //Login no aparece al estar autenticado
  if (auth.isAuthenticated) {
    return <Navigate to="dashboard" />;
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex justify-center h-screen items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
        </a>
        <LoginForm />
      </div>
    </section>
  );
};
