import { useState } from 'react';
import { Box, Typography, Button as MuiButton } from '@mui/material';

import { ScrollArea } from '../ui/ScrollArea';
import { useGitHubRepo } from './useGitHubRepo';
import FileExplorer from './FileExplorer';
import CodeViewer from './CodeViewer';
import CodeHeader from './CodeHeader';

interface CodeViewProps {
  owner: string;
  repo: string;
  branch?: string;
  onToggle?: () => void;
}

const CodeView = ({ owner, repo, branch = 'main', onToggle }: CodeViewProps) => {
  const { fileTree, fetchFileContent } = useGitHubRepo(owner, repo, branch);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string>('');

  const handleFileSelect = async (path: string) => {
    setSelectedFile(path);
    const content = await fetchFileContent(path);
    setFileContent(content || '// Unable to load file');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0e1012',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Back Button */}
      {onToggle && (
        <MuiButton
          onClick={onToggle}
          variant="contained"
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: '#1f1f1f',
            color: '#fff',
            zIndex: 10,
            textTransform: 'none',
          }}
        >
          ← Back to Portfolio
        </MuiButton>
      )}

      <Box sx={{ display: 'flex', height: '100vh', pt: 2 }}>
        {/* File Explorer */}
        <Box
          sx={{
            width: 320,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              File Explorer
            </Typography>
          </Box>
          <ScrollArea sx={{ flex: 1 }}>
            <FileExplorer
              fileTree={fileTree}
              selectedFile={selectedFile}
              onSelectFile={handleFileSelect}
            />
          </ScrollArea>
        </Box>

        {/* Code Viewer */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CodeHeader selectedFile={selectedFile} />
          <ScrollArea sx={{ flex: 1, px: 2, py: 1 }}>
            <CodeViewer content={fileContent} />
          </ScrollArea>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeView;
