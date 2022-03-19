// Package Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AboutApp = () => (
  <div className="flex justify-center items-center mt-6">
    <Card sx={{ minWidth: '50%' }}>
      <CardContent>
        <Typography>
          <h1 className="text-4xl font-bold mb-6">About App</h1>

          <p>
            An App that will help you to maintain your day-to-day tasks or
            list everything that we have to do.
          </p>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default AboutApp;
