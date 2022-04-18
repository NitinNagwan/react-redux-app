import QuenstinCreate from "./components/QuenstinCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizApp from "./components/QuizApp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPj from "./components/FormPj";

import RegisterPj from "./components/RegisterPj";
import Required from "./components/Required";
import AdminPage from "./components/AdminPage";
import Required2 from "./components/Required2";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/Quiz"
              element={
                <Required>
                  <QuizApp />
                </Required>
              }
            />
            <Route
              path="/Admin"
              element={
                <Required2>
                  <AdminPage />
                </Required2>
              }
            />
            <Route path="/" element={<QuenstinCreate />} />
            <Route path="/Login" element={<FormPj />} />
            <Route path="/Register" element={<RegisterPj />} />
          </Routes>
        </BrowserRouter>
        {/* <FormPj /> */}
      </div>
    </>
  );
}

export default App;
