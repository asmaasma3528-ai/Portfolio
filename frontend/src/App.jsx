import { useState, useEffect } from "react";

export default function App(){
  const [ serverSearch, setServerSearch ] = useState("Connecting with the server...");

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
    .then((res) => {
      if(!res.ok) return "Server not found!!"
      return res.json();
    })
    .then((data) => setServerSearch(data.message))
    .catch((err) => setServerSearch("Error in connecting with connecting with the databases..Please test your terminal"))
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-gray-800">Connection Test</h1>
        <p className="mt-4 text-emerald-600 font-mono">
          {serverSearch}
        </p>
      </div>
    </div>
  )
}