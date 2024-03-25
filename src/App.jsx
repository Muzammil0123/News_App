import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
function App() {
  const [progress, setProgress] = useState(10);
  return (
    <BrowserRouter>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News key="general" category="general" setProgress={setProgress} />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News key="sports" category="sports" setProgress={setProgress} />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News key="science" category="science" setProgress={setProgress} />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              category="technology"
              setProgress={setProgress}
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              category="entertainment"
              setProgress={setProgress}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
