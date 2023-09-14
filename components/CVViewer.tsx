import { useState } from "react";
import Image from "next/image";

interface CVViewerProps {
  imagePath?: string;
  downloadPath?: string;
  altText?: string;
}

const CVViewer: React.FC<CVViewerProps> = ({
  imagePath = "/CV-INSHAKOV.jpg",
  downloadPath = "/CV-INSHAKOV.pdf",
  altText = "My CV",
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="font-mukta gradient-button"
                  >
          View CV
        </button>
        <a
          href={downloadPath}
          download
          className="font-mukta gradient-button"        >
          Download CV
        </a>
      </div>
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal-content bg-white p-4 rounded shadow-lg  max-w-6xl w-[50%] max-h-[100vh] overflow-y-scroll relative">
            <button
              className="font-mukta mb-4 absolute top-2 right-2 z-10"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
            <Image
              src={imagePath}
              alt={altText}
              layout="responsive"
              width={900}
              height={1270}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CVViewer;
