'use client';


import React from 'react';


interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFbuttonDownloadCV: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    <div className="flex inline">
    <a className="flex inline"
      href="https://1drv.ms/b/s!AtwrdbAMQIEEa-FLpIQUwCHHOmM?e=HrZoTv"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="flex inline" width="32" height="32" src="https://img.icons8.com/fluency/48/document.png" alt="document"/>
      View or Download
    </a>
    </div>
  );
};

export default PDFbuttonDownloadCV;