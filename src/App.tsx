import { useEffect, useState } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Index";
import CodeView from "./components/codeview/codeview";

function App() {
  const [isCodeView, setIsCodeView] = useState<boolean | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");

    if (mode === "code") {
      setIsCodeView(true);
    } else if (mode === "portfolio") {
      setIsCodeView(false);
    } else {
      params.set("mode", "portfolio");
      window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
      setIsCodeView(false);
    }
  }, []);

  useEffect(() => {
    if (isCodeView === null) return; 

    const params = new URLSearchParams(window.location.search);
    params.set("mode", isCodeView ? "code" : "portfolio");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl); 
  }, [isCodeView]);

  if (isCodeView === null) return null; 

  return (
    <>
      {isCodeView ? (
        <CodeView
          owner="VIBHORE-LAB"
          repo="Portfolio"
          branch="main"
          onToggle={() => setIsCodeView(false)}
        />
      ) : (
        <Portfolio onCodeToggle={() => setIsCodeView(true)} />
      )}
    </>
  );
}

export default App;
