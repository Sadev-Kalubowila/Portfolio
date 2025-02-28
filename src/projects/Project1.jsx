import React from 'react';

const Project1 = () => {
  return (
    <div>
      <h1>Project Title</h1>
      <video width="600" controls>
        <source src="https://www.youtube.com/watch?v=XhDYxnkYKVk" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>This is a description of the project.</p>
    </div>
  );
};

export default Project1;
