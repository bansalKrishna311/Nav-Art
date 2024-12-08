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
              className="text-blue-400 hover:underline font-semibold text-lg cursor-pointer text-pretty underline"
              style={{
                transition: "all 0.3s ease",
              }}
            >
              Krishna Bansal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
