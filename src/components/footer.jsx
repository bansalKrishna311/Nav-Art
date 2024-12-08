"use client";
import React from "react";

export default function StickyFooter() {
  return (
    <div 
      className="relative h-[200px]" 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[200px] w-full flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-md">
            Made with 🤍 by{" "}
            <a
              href="https://www.linkedin.com/in/bansalkrishna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Krishna Bansal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
