import React from "react";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper w-screen h-screen flex justify-center items-center">
        <section className="bg-white w-72 border p-5 rounded-2xl shadow-md">
          <div className="w-full">
            <img
              src="/images/image-qr-code.png"
              alt="qr image "
              className="w-full rounded-md"
            />
          </div>
          <div className="flex flex-col text-center mt-2 py-3 px-2">
            <p className=" heading font-bold">
              Improve your front-end skills by building projects
            </p>
            <p className="deiscription mt-3">
              Scan the QR to visite Frontend Mentor and take your codding skill
              to the next level
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
