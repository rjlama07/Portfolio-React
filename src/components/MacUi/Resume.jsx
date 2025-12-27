import React from "react";
import WindowWrapper from "../../HOC/WindowWrapper";
import WindowControl from "./WindowControl";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <div>
      <div id="window-header">
        <WindowControl target="resume" />
        <h2>Resume.pdf</h2>
        <a href="./files/resume.pdf" download className="cursor-pointer">
          <Download className="icon" />
        </a>
      </div>
      <Document file="./files/resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </div>
  );
};

export default WindowWrapper(Resume, "resume");
