import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import navConfig from "./Common/NavConfig";
import { ListItem, ListItemButton, Typography } from "@mui/material";
import Logo from "/itbd.svg";
import Navbar from "./Navbar";
const drawerWidth = 280;
import "./Scrollbar.css";

function Sidebar(props) {
  // eslint-disable-next-line
  const { window } = props;
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Style Configuration Start //
  const linkStyle = {
    textDecoration: "none",
    fontWeight: 600,
    borderRadius: "4px",
  };
  const ListItemSx = {
    borderRadius: "8px",
    width: "100%",
    height: "44px",
    mb: "4px",
    display: "flex",
  };
  const ListItemButtonSx = {
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "4px",
    width: "100%",
    padding: "8px 16px",
    height: "44px",
    // ,
  };

  // Style Configuration End //

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          p: "16px",
        }}
      >
        <Box sx={{ ml: "32px" }}>
          <img src={Logo} alt="logo" width="48px" height="48px" />
        </Box>
        <List>
          {navConfig({ pathname }).map((section) => (
            <Box key={section.title}>
              <Box sx={{ p: "16px 8px 8px 12px" }}>
                <Typography variant="overline" color="text.primary">
                  {section.title}
                </Typography>
              </Box>
              {section.items.map((item) => (
                <Link to={item.link} style={linkStyle} key={item.title}>
                  <ListItem
                    disablePadding
                    sx={{
                      ...ListItemSx,
                      background:
                        pathname === item.link && "rgba(0 ,174, 96, 0.12)",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        ...ListItemButtonSx,
                        color: pathname === item.link ? "#00AE60" : "#918EAF",
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <Typography
                        sx={{
                          fontWeight: pathname === item.link ? 600 : 500,
                          fontSize: "14px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#F9FAFB",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#F9FAFB",
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
