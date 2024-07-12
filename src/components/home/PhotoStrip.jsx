import React from "react";

const PhotoStrip = () => {
  // URL of the image
  const imageSrc = "/images/JMPhotoStrip.webp";

  return (
    <div className="flex">
      <img
        src={imageSrc}
        alt="Random"
        className="w-full max-w-full rounded-lg shadow-lg object-cover"
        style={{ height: "auto" }}
      />
    </div>
  );
};

export default PhotoStrip;
