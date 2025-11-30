const chatConfig = {
  showTimestamps: true,
  autoScroll: true,
  input: {
    maxRows: 4,
    placeholder: 'Type your message...',
    enableSendButton: true,
  },
  errorMessages: {
    networkError: 'No response from server. Please check your connection.',
    serverError: 'Server error occurred. Please try again.',
    timeoutError: 'Request timed out. Please try again.',
    defaultError: 'An error occurred. Please try again.',
  },
};

export default chatConfig;
