import React, { useState } from "react";
import { supabase } from "../supabase";
import { toast } from "react-toastify";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [fileURL, setFileURL] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      setUpload(true);
      if (!file) {
        alert("Please Select the File");
        return;
      }

      const fileExt = file.name.split(".").pop();
      const fileName = `Resume : ${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { data, error } = await supabase.storage
        .from("resumeFile")
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      const { data: url } = await supabase.storage
        .from("resumeFile")
        .getPublicUrl(filePath);

      setFileURL(url.publicUrl);
      toast.success("File Uploaded Successfully");
    } catch (error) {
      toast.error("Error in uploading File");
    } finally {
      setUpload(false);
    }
  };

  return (
    <>
      <div className="mt-40 mb-72 flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Upload Your Resume
          </h2>

          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all 
            ${
              isDragging ? "border-indigo-500 bg-indigo-100" : "border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="resume"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="resume"
              className="block text-sm font-bold mb-2 text-gray-700"
            >
              {file ? (
                <p>{file.name}</p>
              ) : (
                <>
                  <p className="text-gray-500">Drag & drop your resume here</p>
                  <p className="text-gray-400">or click to upload</p>
                </>
              )}
            </label>
          </div>

          {/* Upload button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleUpload}
              disabled={upload}
              className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              {upload ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
