import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NavLink from './NavLink';

const TodoAppBar = ({ pages = [] }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'warning.light' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              To Do App
            </Typography>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: '1rem' }}>
              <IconButton
                size="large"
                aria-label="Toggle Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              To Do App
            </Typography>
            <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
              {pages.map(({ name, path }) => (
                <NavLink to={path} key={path}>
                  <Button
                    sx={{
                      py: 2, color: 'white', display: 'block', textTransform: 'unset',
                    }}
                  >
                    {name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {pages.map(({ name, path, icon }) => (
              <NavLink to={path} key={path}>
                <ListItem button key={path}>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>

                  <ListItemText primary={name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TodoAppBar;
