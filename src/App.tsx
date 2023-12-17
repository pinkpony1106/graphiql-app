import { Box, Typography } from '@mui/material';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '30px',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Hello world!
      </Typography>
      <MainPage />
    </Box>
  );
}

export default App;
