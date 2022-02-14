import React from "react";

export default function Card({ children }) {
  return (
    <div className="border-2 border-rose-900 border-opacity-50 rounded">
      {children}
    </div>
  );
}
