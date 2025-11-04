import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
 

function Footer ()  {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0d1117",
        color: "#fff",
        py: 3,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Resume Builder
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Create your professional resume with ease.
      </Typography>
      <Divider sx={{ bgcolor: "#555", my: 2, width: "80%", mx: "auto" }} />

      <Typography variant="body2" sx={{ mb: 1 }}>
        Built using React & Formik | Styled with Material UI
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="#"
          underline="hover"
          sx={{ color: "#58a6ff", mx: 1 }}
        >
          Privacy Policy
        </Link>
        |
        <Link
          href="#"
          underline="hover"
          sx={{ color: "#58a6ff", mx: 1 }}
        >
          Terms of Service
        </Link>
        |
        <Link
          href="#"
          underline="hover"
          sx={{ color: "#58a6ff", mx: 1 }}
        >
          Contact
        </Link>
      </Box>

      <Typography variant="caption" display="block" sx={{ mt: 2, color: "#aaa" }}>
        © {new Date().getFullYear()} Resume Builder. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
