import { IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

export const CopyButton = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Tooltip title="Скопировать">
      <IconButton onClick={handleCopy}>
        <ContentCopy />
      </IconButton>
    </Tooltip>
  );
};
