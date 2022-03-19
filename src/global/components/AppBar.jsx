import React from 'react';

// Package Components
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

class TodoAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.state = { open: false };
  }

  toggleDrawer(event) {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState(({ open }) => ({
      open: !open,
    }));
  }

  render() {
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
                  onClick={this.toggleDrawer}
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
                {this.props.pages?.map(({ name, path }) => (
                  <a href={path} key={path}>
                    <Button
                      sx={{
                        py: 2, color: 'white', display: 'block', textTransform: 'unset',
                      }}
                    >
                      {name}
                    </Button>
                  </a>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          anchor="left"
          open={this.state.open}
          onClose={this.toggleDrawer}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <List>
              {this.props.pages?.map(({ name, path, icon }) => (
                <a href={path} key={path}>
                  <ListItem button key={path}>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>

                    <ListItemText primary={name} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
  }
}

export default TodoAppBar;
