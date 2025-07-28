import { useEffect, useState, useCallback } from "react";

interface FileNode {
  path: string;
  type: "file" | "folder";
  children?: FileNode[];
}

interface GitHubTreeItem {
  path: string;
  type: "blob" | "tree";
}

interface GitHubTreeResponse {
  tree: GitHubTreeItem[];
}

const GITHUB_API = "https://api.github.com";

export const useGitHubRepo = (owner: string, repo: string, branch: string = "main") => {
  const [fileTree, setFileTree] = useState<FileNode[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFileTree = useCallback(async () => {
    try {
      const res = await fetch(
        `${GITHUB_API}/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
      );
      const data: GitHubTreeResponse = await res.json();
      if (!data.tree) throw new Error("Invalid tree response");

      const files = data.tree.filter((item) => item.type === "blob");

      const root: FileNode[] = [];
      const pathMap: Record<string, FileNode> = {};

      files.forEach((item) => {
        const parts = item.path.split("/");

        parts.forEach((_, index) => {
          const fullPath = parts.slice(0, index + 1).join("/");
          if (!pathMap[fullPath]) {
            const node: FileNode = {
              path: fullPath,
              type: index === parts.length - 1 ? "file" : "folder",
              children: [],
            };
            pathMap[fullPath] = node;

            if (index === 0) {
              root.push(node);
            } else {
              const parentPath = parts.slice(0, index).join("/");
              pathMap[parentPath]?.children?.push(node);
            }
          }
        });
      });

      setFileTree(root);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }, [owner, repo, branch]);

  const fetchFileContent = async (filePath: string): Promise<string> => {
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`
      );
      return await res.text();
    } catch {
      return "// Failed to load file content";
    }
  };

  useEffect(() => {
    fetchFileTree();
  }, [fetchFileTree]);

  return { fileTree, fetchFileContent, isLoading, error };
};
