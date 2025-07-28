// src/components/codeview/FileExplorer.tsx
import { useState } from "react";
import { File, Folder, FolderOpen } from "lucide-react";

interface FileNode {
  path: string;
  type: "file" | "folder";
  children?: FileNode[];
}

interface FileExplorerProps {
  fileTree: FileNode[];
  selectedFile: string | null;
  onSelectFile: (path: string) => void;
}

const FileExplorer = ({ fileTree, selectedFile, onSelectFile }: FileExplorerProps) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const toggleFolder = (path: string) => {
    const newSet = new Set(expandedFolders);
    if (newSet.has(path)) newSet.delete(path);
    else newSet.add(path);
    setExpandedFolders(newSet);
  };

  const renderTree = (nodes: FileNode[], level = 0) => {
    return nodes.map((node) => {
      const isFolder = node.type === "folder";
      const isExpanded = expandedFolders.has(node.path);

      let icon;
      if (isFolder) {
        icon = isExpanded ? (
          <FolderOpen className="h-4 w-4 mr-2 text-code-foreground" />
        ) : (
          <Folder className="h-4 w-4 mr-2 text-code-foreground" />
        );
      } else {
        icon = <File className="h-4 w-4 mr-2 text-code-comment" />;
      }

      return (
        <div key={node.path}>
          <div
            className={`flex items-center py-1 px-2 cursor-pointer hover:bg-white/5 transition text-sm ${
              selectedFile === node.path ? "bg-white/10" : ""
            }`}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => {
              if (isFolder) toggleFolder(node.path);
              else onSelectFile(node.path);
            }}
          >
            {icon}
            <span>{node.path.split("/").pop()}</span>
          </div>
          {isFolder && isExpanded && node.children && (
            <div>{renderTree(node.children, level + 1)}</div>
          )}
        </div>
      );
    });
  };

  return <div className="py-2">{renderTree(fileTree)}</div>;
};

export default FileExplorer;
