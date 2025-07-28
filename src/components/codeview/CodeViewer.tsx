import React from "react";
import { highlightSyntax } from "./HighLightSyntax";

interface CodeViewerProps {
  content: string;
}

interface CodeViewerProps {
  content: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ content }) => {
  const highlighted = highlightSyntax(content);

  return (
    <pre className="bg-zinc-900 p-4 rounded-md overflow-auto text-sm font-mono text-white">
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
};

export default CodeViewer;
