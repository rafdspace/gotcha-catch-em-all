import React, { useState } from "react";

const Test = () => {
  const [file, setFile] = useState<File | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://rafdspace-image-api.vercel.app/api/process-background-image",
        // "http://localhost:6060/api/process-background-image",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to process background image.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setResultImage(url);
    } catch (error) {
      const errMessage = error instanceof Error ? error.message : String(error);
      console.error(errMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit" disabled={loading || !file} onClick={handleSubmit}>
        {loading ? "Processing..." : "Remove Background"}
      </button>
      {resultImage && (
        <div>
          <h3>Processed Image:</h3>
          <img src={resultImage} alt="Result" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default Test;
