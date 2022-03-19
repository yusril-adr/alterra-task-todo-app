import {
  Outlet, useLocation,
} from 'react-router-dom';

// Package Components
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FaceIcon from '@mui/icons-material/Face';

// Global Components
import TodoAppBar from './AppBar';

const Layout = () => {
  const location = useLocation();

  const pages = [
    {
      name: 'Home',
      path: '/',
      icon: <HomeIcon />,
    },
    {
      name: location.pathname.startsWith('/about') ? 'About App' : 'About',
      path: location.pathname.startsWith('/about') ? '/about/about-app' : '/about',
      icon: <InfoIcon />,
    },
  ];

  if (location.pathname.startsWith('/about')) {
    pages.push({
      name: 'About Author',
      path: '/about/about-author',
      icon: <FaceIcon />,
    });
  }

  return (
    <>
      <TodoAppBar pages={pages} />

      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
