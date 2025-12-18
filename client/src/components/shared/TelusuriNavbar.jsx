import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "../icons/ArrowBack";
import { Search } from "../icons/Search";

export const TelusuriNavbar = ({ searchQuery, onSearchChange }) => {
  const navigate = useNavigate();

  return (
    <header className="h-20 flex items-center gap-3 px-4 sm:px-8 shadow-[0px_5px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)]">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent text-[#387647] transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
        aria-label="Go back"
      >
        <ArrowBack className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      <div className="flex-1">
        <div className="w-full h-11 sm:h-12 rounded-full bg-white flex items-center gap-3 px-4 shadow-[0px_5px_4px_#00000040] border border-[#387647]/20">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#387647]" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="flex-1 bg-transparent outline-none text-[#387647] placeholder:text-gray-400 [font-family:'Playfair-Black',Helvetica] text-sm sm:text-base"
            placeholder="Telusuri"
          />
        </div>
      </div>
    </header>
  );
};
