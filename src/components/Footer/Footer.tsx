import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"30px"}
      bgcolor={"primary.main"}
      marginTop={"auto"}
      sx={{ color: "#fff" }}
    >
      ©2023 Case Shop
    </Box>
  );
};

export default Footer;
