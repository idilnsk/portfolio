import { useState } from "react";
import Image from "next/image";

interface CVViewerProps {
  imagePath?: string;
  downloadPath?: string;
  altText?: string;
}

const CVViewer: React.FC<CVViewerProps> = ({
  imagePath = "/Inshakov-FS-CV.jpg",
  downloadPath = "/Inshakov-FS-CV.pdf",
  altText = "My CV",
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="inline-block ml-4 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        View My CV
      </button>
      <a
        href="/Inshakov-FS-CV.pdf"
        download
        className="inline-block ml-4 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Download CV
      </a>
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal-content bg-white p-4 rounded shadow-lg  max-w-6xl w-[50%] max-h-[100vh] overflow-y-scroll relative">
            <button
              className="mb-4 absolute top-2 right-2 z-10"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
            <Image
              src="/Inshakov-FS-CV.jpg"
              alt="My CV"
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
