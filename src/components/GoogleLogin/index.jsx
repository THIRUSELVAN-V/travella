import { useEffect, useRef } from "react";
import { api } from "../../axious/api";
import { useAuthStore } from "../../store/authStore";

export const GoogleLogin = ({ onSuccess }) => {
  const buttonDiv = useRef(null);
  const setToken = useAuthStore((state) => state.setToken)

  useEffect(() => {
    const loadGoogleScript = () => {
      return new Promise((resolve) => {
        if (window.google && window.google.accounts) {
          resolve();
        } else {
          const script = document.createElement("script");
          script.src = "https://accounts.google.com/gsi/client";
          script.async = true;
          script.defer = true;
          script.onload = resolve;
          document.body.appendChild(script);
        }
      });
    };

    const handleCredentialResponse = async (response) => {
  try {
    const idToken = response.credential;

    const res = await api.post('/auth/google', { idToken }); // call your backend

    const userData = res.data.user; // assuming your backend returns `{ success, token, user }`

    // Save token if needed
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token)

    onSuccess(userData); // pass to parent component
  } catch (error) {
    console.error('Google login failed:', error);
  }
};

    const initGoogle = async () => {
      await loadGoogleScript();

      window.google.accounts.id.initialize({
        client_id:
          "831226183610-53rpegd19603ccbu5qjfm8ij6rf8a1k0.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      if (buttonDiv.current) {
        window.google.accounts.id.renderButton(buttonDiv.current, {
          theme: "outline",
          size: "large",
        });
      }

      // Optional: Automatically prompt sign-in
      // window.google.accounts.id.prompt();
    };

    initGoogle();
  }, [onSuccess,setToken]);

  return <div ref={buttonDiv}></div>;
};
