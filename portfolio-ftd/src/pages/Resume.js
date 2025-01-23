import React, { useEffect } from "react";

const ResumeViewer = () => {
  useEffect(() => {
    // Automatically trigger file download
    const link = document.createElement("a");
    link.href = "/Aditya_Raj_Benn_Resume.pdf"; // Ensure the file is in the public folder
    link.download = "Aditya_Raj_Benn_Resume.pdf";
    link.click();
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <iframe
        src="/Aditya_Raj_Benn_Resume.pdf"
        title="Resume"
        style={{ width: "80%", height: "90%", border: "none" }}
      ></iframe>
    </div>
  );
};

export default ResumeViewer;
