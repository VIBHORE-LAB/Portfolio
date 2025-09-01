import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryOverlayProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export const ImageGalleryOverlay = ({
  images,
  startIndex,
  onClose,
}: ImageGalleryOverlayProps) => {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/90"
      style={{ zIndex: 2147483647 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-10 right-10 text-white hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X className="h-8 w-8" />
      </button>

      {/* Left arrow */}
      <button
        className="absolute left-6 text-white hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        title="Previous"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      {/* Current image */}
      <img
        src={images[current]}
        alt={`screenshot ${current + 1}`}
        className="max-w-[95%] max-h-[95%] object-contain rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Right arrow */}
      <button
        className="absolute right-6 text-white hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        title="Next"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 text-white text-sm">
        {current + 1} / {images.length}
      </div>
    </div>,
    document.body
  );
};
