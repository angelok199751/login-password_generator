import { IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

export const CopyButton = ({ text, id}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Tooltip title="Скопировать">
      <IconButton 
      id={id} 
      onClick={handleCopy}>
        <ContentCopy />
      </IconButton>
    </Tooltip>
  );
};
