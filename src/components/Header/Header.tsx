"use client";
import { useEffect, useState } from "react";
import { getTotalQuantity } from "@/utils/CartUpdate";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface IHaderProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Anasayfa", url: "/" },
  { name: "Kategori", url: "/products" },
];

const Header: React.FC<IHaderProps> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [totalQuantity, setTotalQuantity] = useState<number>();

  const { state } = useCart();
  useEffect(() => {
    if (state.items.length > 0) {
      const quantity = getTotalQuantity(state.items);
      setTotalQuantity(quantity);
    } else {
      setTotalQuantity(0);
    }
  }, [state.items]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link style={{ textDecoration: "none" }} href="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          Case Shop
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link style={{ textDecoration: "none" }} href={item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Box
          sx={{
            display: { xs: "flex", sm: "block" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/"
                >
                  Case Shop
                </Link>
              </Typography>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
              >
                <Box>
                  {navItems.map((item, index) => (
                    <Link href={item.url} key={index}>
                      {item.name !== "Anasayfa" && (
                        <Button sx={{ color: "#fff" }}>{item.name}</Button>
                      )}
                    </Link>
                  ))}
                </Box>
                <Box>
                  <Link href="/cart">
                    <Badge badgeContent={totalQuantity} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </Box>
          <Box
            margin={2}
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
            }}
          >
            <Link href="/cart">
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Box>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
