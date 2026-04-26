interface ImagePlaceholderProps {
  filename: string;
  className?: string;
}

export default function ImagePlaceholder({
  filename,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-cream flex items-center justify-center text-stone text-sm font-sans ${className}`}
    >
      <span className="px-4 py-2 text-center opacity-60">{filename}</span>
    </div>
  );
}
