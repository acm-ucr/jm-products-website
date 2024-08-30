import React from "react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

const PDFLink = ({ text, link, textColor, hoverColor }) => {
  return (
    <div
      className={`${textColor} underline flex flex-row gap-2 lg:gap-3 ${hoverColor} items-center font-hk`}
    >
      <Link href={link} target="_blank">
        {text}
      </Link>
      <IoDocumentTextOutline className="flex-shrink-0" />
    </div>
  );
};

export default PDFLink;
