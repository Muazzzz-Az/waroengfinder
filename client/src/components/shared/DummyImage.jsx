import React from "react";

export const DummyImage = ({ className = "", alt = "Foto", style, src }) => {
  const defaultUrl =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop";
  const fallbackUrl =
    "https://images.unsplash.com/photo-1604908176997-1251884b08a3?q=80&w=1200&auto=format&fit=crop";

  const imageSrc = src || defaultUrl;

  return (
    <div
      className={`bg-[#d9d9d9] rounded-[20px] border border-[#cfcfcf] shadow-sm overflow-hidden ${className}`}
      style={style}
    >
      <img
        src={imageSrc}
        alt={alt}
        onError={(e) => {
          if (e.target.src !== fallbackUrl) {
            e.target.onerror = null;
            e.target.src = fallbackUrl;
          }
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
