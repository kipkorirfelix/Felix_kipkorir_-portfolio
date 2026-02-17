import React from "react";
import { useLanguage } from "../contexts/language-context";

/** Full-screen loading state shown before the hero renders. */
const LoadingScreen: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <h1 className="text-xl font-semibold">{texts.loading.text}</h1>
    </div>
  );
};

export default LoadingScreen;
