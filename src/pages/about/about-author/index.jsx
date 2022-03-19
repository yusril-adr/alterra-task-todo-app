// Package Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AboutAuthor = () => (
  <div className="flex justify-center items-center mt-6">
    <Card sx={{ minWidth: '50%' }}>
      <CardContent>
        <Typography>
          <h1 className="text-4xl font-bold mb-6">About the Author</h1>

          <p>
            This app was a development by <a className="text-blue-500" href="https://github.com/yusril-adr/" target="_blank" rel="noreferrer">Yusril A. P.</a>
          </p>

          <p className="mt-4">
            You can visit my website on <a className="text-blue-500" href="https://yusril-adr.github.io/" target="_blank" rel="noreferrer">here</a>.
          </p>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default AboutAuthor;
