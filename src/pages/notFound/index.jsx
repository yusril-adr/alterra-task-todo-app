import { Link } from 'react-router-dom';

// Package Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// Files
import illustrationFile from '../../img/404.png';

const NotFound = () => (
  <div className="flex justify-center items-center mt-6">
    <Card sx={{ minWidth: '50%', maxWidth: { xs: '100%', lg: '50%' } }}>
      <CardContent>
        <Box sx={{ width: { xs: '100%', md: '50%' }, margin: 'auto' }}>
          <img src={illustrationFile} alt="Illustration" style={{ width: '100%' }} />
        </Box>

        <p className="text-center text-2xl md:text-3xl">Page Not Found</p>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to="/">
          <Button variant="contained">Go to Home page</Button>
        </Link>
      </CardActions>
    </Card>
  </div>
);

export default NotFound;
