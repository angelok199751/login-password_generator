import { IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { useId } from "react";

export const CopyButton = ({ text, id}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const generatedId = useId();
  const copiedButtonId = id || generatedId;
  return (
    <Tooltip title="Скопировать">
      <IconButton 
      id={copiedButtonId} 
      onClick={handleCopy}>
        <ContentCopy />
      </IconButton>
    </Tooltip>
  );
};
