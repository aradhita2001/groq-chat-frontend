import React from 'react';
import {
  Paper,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';

const ChatMessage = ({ message, isUserMessage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isError = message.error;

  if (isError) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          mb: 2,
          px: { xs: 1, sm: 2 },
        }}
      >
        <Alert
          severity="error"
          sx={{
            maxWidth: { xs: '90%', sm: '70%', md: '60%' },
            borderRadius: 2,
          }}
        >
          <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
            {message.response}
          </Typography>
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUserMessage ? 'flex-end' : 'flex-start',
        mb: 2,
        px: { xs: 1, sm: 2 },
      }}
    >
      <Paper
        elevation={1}
        sx={{
          maxWidth: { xs: '85%', sm: '70%', md: '60%' },
          p: { xs: 1.5, sm: 2 },
          backgroundColor: isUserMessage
            ? theme.palette.primary.main
            : theme.palette.mode === 'dark'
            ? '#424242'
            : '#e0e0e0',
          color: isUserMessage ? 'white' : theme.palette.text.primary,
          borderRadius: 2,
          wordBreak: 'break-word',
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
          {message.response}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 0.5,
            opacity: 0.7,
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
          }}
        >
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Typography>
      </Paper>
    </Box>
  );
};

export default React.memo(ChatMessage);
