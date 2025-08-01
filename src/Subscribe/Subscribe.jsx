import React from "react";
import img from "../assets/bg-shadow.png";

export default function Subscribe() {
  return (
    <div>
      <div className="border-2 p-4 rounded-xl my-80 bg-transparent border-slate-300">
        <div
          className="bg-cover bg-no-repeat h-80 border-slate-200 rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p>Get the latest updates and news right in your inbox!</p>
            <input className="border-2 p-3 border-slate-300 rounded-xl mr-4 mt-3 w-80" type="email" name="" placeholder="Enter Your Email" id="" />
            <button className="border-2 p-3 bg-lime-400 font-semibold rounded-xl border-lime-300 px-5">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
