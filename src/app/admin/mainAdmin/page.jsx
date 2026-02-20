"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ViewAdmin from "../viewAdmin/page";
import CareerAdmin from "../careerAdmin/page";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} role="tabpanel" {...other}>
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 6 }}>

      {/* 🔹 Tabs Container (Small Width Centered) */}
      <Box sx={{ maxWidth: 500, mx: "auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
              },
              "& .Mui-selected": {
                color: "#2563eb",
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: 2,
              },
            }}
          >
            <Tab label="Blog Admin" />
            <Tab label="Job Admin" />
          </Tabs>
        </Box>
      </Box>

      {/* 🔹 Content Section (Full Width) */}
      <Box sx={{ width: "100%", mt: 4, backgroundColor: "#f9fafc" }}>
        <CustomTabPanel value={value} index={0}>
          <ViewAdmin/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <CareerAdmin/>
        </CustomTabPanel>
      </Box>

    </Box>
  );
}
