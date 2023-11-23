import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Aradığınız sayfa bulunamadı!
      </Typography>

      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Anasayfaya Git
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
