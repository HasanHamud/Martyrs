import React from 'react';

const PhotoItem = ({ src, description }) => {
  return (
    <div className="border rounded-lg p-4 mb-6 mx-6 w-64 text-center shadow-lg bg-white flex flex-col justify-between">
      <img
        src={src}
        alt={description}
        className="w-full h-auto rounded object-cover mb-4"
      />
      <p className="text-center font-bold mt-2">{description}</p>
    </div>
  );
};

export default PhotoItem;
