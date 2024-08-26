"use client";
import React from "react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const pdfAnimation = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const PDFLink = ({ text, link, textColor, hoverColor }) => {
  return (
    <motion.div
      className={`${textColor} underline flex flex-row gap-2 lg:gap-3 ${hoverColor} items-center`}
      variants={pdfAnimation}
      initial="start"
      whileInView="end"
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <Link href={link} target="_blank">
        {text}
      </Link>
      <IoDocumentTextOutline className="flex-shrink-0" />
    </motion.div>
  );
};

export default PDFLink;
