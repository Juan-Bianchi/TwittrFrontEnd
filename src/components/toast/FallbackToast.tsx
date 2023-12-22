import React from "react";
import Toast, { ToastType } from "./Toast";

const FallbackToast = ({ error }: { error: Error }) => {
  return <Toast type={ToastType.ALERT} message={error.message} />;
};

export default FallbackToast;
