import React from "react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

const PDFLink = ({ text, link }) => {
  return (
    <div className="text-jm-blue-200 underline flex flex-row gap-3 hover:text-jm-blue-300">
      <Link href={link} target="_blank">
        {text}
      </Link>
      <IoDocumentTextOutline />
    </div>
  );
};

export default PDFLink;
