import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Box,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import chatService from '../services/chatService';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (message) => {
    // Add user message to chat
    const userMessage = {
      response: message,
      timestamp: Date.now(),
      isUserMessage: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Get response from API
    const apiResponse = await chatService.sendMessage(message);

    // Add bot response to chat
    const botMessage = {
      ...apiResponse,
      isUserMessage: false,
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  }, []);

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 1.5, sm: 2 },
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center',
          borderRadius: 0,
        }}
      >
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          sx={{
            fontWeight: 'bold',
            letterSpacing: 0.5,
          }}
        >
          Chat Assistant
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, opacity: 0.9 }}>
          Powered by AI
        </Typography>
      </Paper>

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          p: { xs: 1, sm: 2 },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fafafa',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.palette.primary.main,
            borderRadius: '4px',
            '&:hover': {
              background: theme.palette.primary.dark,
            },
          },
        }}
      >
        {messages.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              textAlign: 'center',
              color: theme.palette.text.secondary,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              👋 Welcome to Chat Assistant
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: '300px' }}>
              Start a conversation by typing a message below. I'm here to help!
            </Typography>
          </Box>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg}
              isUserMessage={msg.isUserMessage}
            />
          ))
        )}

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <CircularProgress size={32} />
          </Box>
        )}

        <div ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </Box>
  );
};

export default ChatContainer;
