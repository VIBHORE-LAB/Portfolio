import { File } from "lucide-react";

interface CodeHeaderProps {
  selectedFile: string | null;
}

const CodeHeader = ({ selectedFile }: CodeHeaderProps) => {
  return (
    <div className="bg-white/5 border-b border-white/10 px-4 py-2">
      <div className="flex items-center">
        <File className="h-4 w-4 mr-2 text-code-comment" />
        <span className="text-sm text-code-foreground">
          {selectedFile ? selectedFile.split("/").pop() : "No file selected"}
        </span>
      </div>
    </div>
  );
};

export default CodeHeader;
