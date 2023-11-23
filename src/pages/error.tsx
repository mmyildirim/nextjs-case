import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const ErrorPage: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Bir Hata Oluştu
      </Typography>

      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Anasayfaya Git
        </Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
