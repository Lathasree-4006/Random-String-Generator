import { useState, useCallback, useEffect } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(10);
  const [randomString, setRandomString] = useState("");
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}?~`";
  const generateString = useCallback(() => {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      );
      result += characters[randomIndex];
    }
    setRandomString(result);
  }, [length]);
  useEffect(() => {
    generateString();
  }, [generateString]);
  return (
    <div className="bg-white-100">
      <div className="container">
        <h2>Random String Generator</h2>
        <div className="card">
          <input
            type="text"
            value={randomString}
            readOnly
            placeholder="Generated String"
          />
          <label>
            Enter String Length:
          </label>
          <input
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <button onClick={generateString}>
            Generate String
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;