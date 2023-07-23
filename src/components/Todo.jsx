import React, { useState } from "react";

const Todo = () => {
  const [inputJob, setJob] = useState();
  const [jobs, setJobs] = useState([]);

  const handleInput = () => {
    setJobs((prev) => {
      console.log(prev);
      return [...prev, inputJob];
    });
    setJob("");
  };
  return (
    <div>
      <input
        value={inputJob}
        onChange={(e) => setJob(e.target.value)}
        type="text"
      />
      <ul>
        {jobs.map((job, index) => (
          <li key={index + 1}>{job}</li>
        ))}
      </ul>
      <button onClick={handleInput}>Add</button>
    </div>
  );
};

export default Todo;
