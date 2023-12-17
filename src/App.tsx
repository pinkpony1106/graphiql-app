import { Box, Typography } from '@mui/material';
import GraphlPage from './Pages/GraphlPage/GraphlPage';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Hello world!
      </Typography>
      <GraphlPage />
    </Box>
  );
}

export default App;
