import { useEffect, useRef } from "react";

export const GoogleLogin = ({ onSuccess }) => {
  const buttonDiv = useRef(null);

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

    const handleCredentialResponse = (response) => {
      const jwt = response.credential;
      const base64Url = jwt.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const userData = JSON.parse(jsonPayload);
      onSuccess(userData);
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
  }, [onSuccess]);

  return <div ref={buttonDiv}></div>;
};
