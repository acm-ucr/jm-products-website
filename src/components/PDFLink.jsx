import React from "react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

const PDFLink = ({ text, link }) => {
  return (
    <div className="text-jm-blue-200 underline flex flex-row gap-2 lg:gap-3 hover:text-jm-blue-300 items-center">
      <Link href={link} target="_blank">
        {text}
      </Link>
      <IoDocumentTextOutline className="flex-shrink-0" />
    </div>
  );
};

export default PDFLink;
