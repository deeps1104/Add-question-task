import { Box } from "@mui/material";
import React from "react";
import { FiMinusCircle } from "react-icons/fi";
const MinusBtn = ({ form, removeincreaseNumbData, index, type }) => {
  return (
    <div>
      {form[type].length > 1 && (
        <Box
          sx={{
            fontSize: "24px",
          }}
          onClick={() => removeincreaseNumbData(index, type)}
        >
          <FiMinusCircle style={{ cursor: "pointer" }} />
        </Box>
      )}
    </div>
  );
};

export default MinusBtn;
