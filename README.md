# Chat Assistant - React Application

A modern, responsive chatbot web application built with React and Material-UI. This application provides a user-friendly interface for interacting with a chat API using REST endpoints.

## Features

✨ **Key Features:**
- 💬 Real-time chat interface with message history
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- 🎨 Material-UI based modern UI with smooth animations
- 🔄 Axios integration for API communication
- ⚠️ Error handling with user-friendly error messages
- ⏱️ Message timestamps for conversation context
- 🔄 Auto-scrolling to latest messages
- 📝 Multi-line message input support
- 🎯 Loading indicators during API calls

## Tech Stack

- **Frontend Framework:** React 18
- **UI Library:** Material-UI (MUI) v5
- **HTTP Client:** Axios
- **Styling:** Emotion (MUI styling solution)
- **Icons:** Material-UI Icons

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Configure API endpoint:**
Edit the `.env` file and set your API URL:
```
REACT_APP_API_URL=http://localhost:8000/api
```

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

```
src/
├── components/
│   ├── ChatContainer.js      # Main chat container with message management
│   ├── ChatMessage.js        # Individual message display component
│   └── MessageInput.js       # Input field and send button component
├── services/
│   └── chatService.js        # Axios API service for chat interactions
├── App.js                    # Main application component with theme setup
├── App.css                   # Global styles and responsive breakpoints
├── index.js                  # React DOM entry point
└── index.css                 # Base styles
```

## API Integration

### Expected API Endpoint

The application sends POST requests to your API with the following structure:

**Endpoint:** `POST /chat`

**Request Body:**
```json
{
  "message": "User's message text"
}
```

**Expected Response (Success):**
```json
{
  "response": "Bot's response text",
  "message": "Alternative response field"
}
```

**Error Handling:**
- The app automatically handles network errors
- Server errors are displayed as formatted error messages in the chat
- Timeout errors are caught and displayed to the user

### Configure API URL

Update the `REACT_APP_API_URL` environment variable in `.env`:

```
# Development
REACT_APP_API_URL=http://localhost:8000/api

# Production
REACT_APP_API_URL=https://your-api-domain.com/api
```

## Responsive Design

The application is fully responsive and works seamlessly across all device sizes:

- **Mobile (< 600px):** Optimized touch interface, compact layouts
- **Tablet (600px - 960px):** Medium-sized displays with balanced spacing
- **Desktop (> 960px):** Full-featured interface with maximum content width

### Responsive Features:
- Adaptive font sizes
- Responsive padding and margins
- Mobile-optimized input controls
- Touch-friendly button sizes
- Flexible message bubbles

## Component Documentation

### ChatContainer
Main component managing chat state and API communication.
- Handles message sending and receiving
- Auto-scrolls to new messages
- Displays loading indicators during API calls

### ChatMessage
Displays individual messages with styling based on sender.
- User messages: Right-aligned with primary color
- Bot messages: Left-aligned with secondary color
- Error messages: Displayed as MUI Alert component
- Shows message timestamps

### MessageInput
Provides text input and send button functionality.
- Supports multi-line input (Enter+Shift)
- Single Enter sends message
- Disabled state during API calls
- Responsive sizing

## Error Handling

The application provides comprehensive error handling:

1. **Network Errors:** "No response from server. Please check your connection."
2. **Server Errors:** Displays the server's error message or status code
3. **Timeout Errors:** Handled gracefully with user-friendly message
4. **Invalid Responses:** Falls back to default message

Error messages are displayed as red alert boxes in the chat interface.

## Development Tips

### Adding New Features

1. **New API endpoints:** Extend `chatService.js`
2. **UI customization:** Modify theme in `App.js`
3. **New components:** Create in `src/components/`
4. **Styling:** Use MUI's `sx` prop or styled components

### Debugging

- Open browser DevTools (F12)
- Check Network tab for API calls
- Use Console for error messages
- Use React DevTools extension for component inspection

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Hosting

The built app can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

Ensure your backend API is properly configured for CORS if deploying to a different domain.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

## Performance Optimizations

- Message rendering optimized with React.memo
- Efficient scrolling with ref-based scroll management
- Lazy loading consideration for large message histories
- Minimal re-renders through proper state management

## Troubleshooting

### Messages not sending?
1. Check API URL in `.env`
2. Verify backend API is running
3. Check browser console for errors
4. Ensure API CORS is properly configured

### Styling issues?
1. Clear browser cache
2. Restart development server
3. Check if MUI is properly installed

### API connection issues?
1. Verify `REACT_APP_API_URL` is correct
2. Check network tab in DevTools
3. Verify API server is running and accessible

## License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

See the CRA documentation for more information on the underlying setup.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
