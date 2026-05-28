# Random Joke Generator 🤣

A simple, elegant web application that fetches and displays random jokes using the **JokeAPI**.

## Features

✨ **Live Features:**
- 🎲 Generate random jokes with a single click
- 📋 Copy jokes to clipboard
- ⚡ Fast and responsive design
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Mobile-friendly interface
- ⚙️ Error handling with user-friendly messages
- 🔄 Loading states with spinner animation

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - No dependencies
- **JokeAPI** - External API for fetching jokes

## How to Use

1. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or deploy it to GitHub Pages or any static hosting

2. **Generate a Joke**
   - Click the "Get a Joke" button
   - The app will fetch a random joke from JokeAPI

3. **Copy a Joke**
   - Click the "Copy Joke" button to copy the current joke
   - The button will show "✓ Copied!" confirmation

## File Structure

```
joke-generator/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── script.js       # JavaScript logic
└── README.md       # Documentation (this file)
```

## API Details

This app uses the **JokeAPI** (https://jokeapi.dev/)

- **Endpoint**: `https://v2.jokeapi.dev/joke/Any`
- **Type**: `single` (returns single-line jokes)
- **Rate Limit**: 100 requests per minute (more than enough for this use case)
- **No Authentication Required**: Public API

## Features Explained

### Joke Types
- The API returns jokes with type information
- Currently filters for single-line jokes to keep it simple

### Error Handling
- Graceful error messages if the API is unavailable
- User-friendly notifications
- Disabled buttons during loading to prevent multiple requests

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Adapted button layout for smaller screens
- Touch-friendly button sizes

## Customization

### Add Programming Jokes Only
Change line in `script.js`:
```javascript
const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
```

### Add Knock-Knock Jokes
Change to include multiple types:
```javascript
const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=knock-knock');
```

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... more colors */
}
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Possible additions:
- [ ] Filter jokes by category
- [ ] Save favorite jokes
- [ ] Share jokes on social media
- [ ] Joke history
- [ ] Dark mode toggle
- [ ] Multiple language support

## License

This project is open source and available under the MIT License.

## Credits

- **API**: [JokeAPI](https://jokeapi.dev/) by Sv443
- **Icons**: Emoji from Unicode

---

**Enjoy laughs! 😄**