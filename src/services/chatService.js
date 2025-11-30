import axiosInstance from './apiClient';
import apiConfig from '../config/api';

const CHAT_ENDPOINT = apiConfig?.endpoints?.chat || '/chat';

export const chatService = {
  /**
   * Send a message to the chatbot and get a response
   * @param {string} message - The user's message
   * @returns {Promise<{response: string, timestamp: number}>}
   */
  async sendMessage(message) {
    try {
      const payload = { body: message.trim() };
      const response = await axiosInstance.post(CHAT_ENDPOINT, payload);

      return {
        response: response.data.reply || 'No response received',
        timestamp: Date.now(),
        success: true,
        error: false,
      };
    } catch (error) {
      let errorMessage = 'Failed to get a response from the server';

      if (error.response) {
        // Server responded with error status
        errorMessage = error.response.data?.error || error.response.data?.message || `Error: ${error.response.status}`;
      } else if (error.request) {
        // Request made but no response received
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        // Error in request setup
        errorMessage = error.message || 'An error occurred';
      }

      return {
        response: errorMessage,
        timestamp: Date.now(),
        success: false,
        error: true,
      };
    }
  },
};

export default chatService;
