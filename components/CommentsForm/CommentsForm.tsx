import React, { useState, useEffect, useRef } from "react";
import { NextPage } from "next";

interface CommentsFormWidgets {
  slug: any;
}

const CommentsForm: NextPage<CommentsFormWidgets> = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentElement = useRef();
  const nameElement = useRef();
  const emailElement = useRef();
  const storeDataElement = useRef();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4"></h3>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
    </div>
  );
};

export default CommentsForm;
