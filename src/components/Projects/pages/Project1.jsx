import React from 'react';

const Project1 = () => {
  return (
    <div>
      <h1>Project Title</h1>
      <div>
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/XhDYxnkYKVk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
      <p>This is a description of the project.</p>
    </div>
  );
};

export default Project1;
