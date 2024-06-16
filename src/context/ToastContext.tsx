"use client";
import { Toaster } from "react-hot-toast";

const ToastContext = () => {
  return (
    <div className="z-[99999]">
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ToastContext;
