# Coin Game

A simple browser-based collection game where you control an avatar using arrow keys to collect coins.

## Description

This is an interactive game built with vanilla HTML, CSS, and JavaScript. Move your orange avatar around the screen to collect the blue coins. Each time you successfully collect a coin, it repositions to a new random location on the screen.

## Features

- **Keyboard Controls**: Use arrow keys to move the avatar
- **Collision Detection**: Automatic detection when avatar touches the coin
- **Random Coin Placement**: Coins spawn at random positions within the viewport
- **Responsive**: Works on any screen size

## How to Play

1. Open `index.html` in your web browser
2. Use the arrow keys to move the orange avatar:
   - **↑** Arrow Up - Move up
   - **↓** Arrow Down - Move down
   - **←** Arrow Left - Move left
   - **→** Arrow Right - Move right
3. Move the avatar to touch the blue coin
4. The coin will automatically move to a new random position
5. Keep collecting!

## Installation

No installation required! Simply clone the repository and open the HTML file:

```bash
git clone https://github.com/sonuram553/coin-game.git
cd coin-game
open index.html
```

Or double-click `index.html` to open it in your default browser.

## Project Structure

```
coin-game/
├── index.html    # Main HTML file
├── index.css     # Styling
├── index.js      # Game logic
└── README.md     # This file
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## How It Works

### Collision Detection
The game uses bounding box collision detection with `getBoundingClientRect()` to check if the avatar and coin overlap.

### Random Positioning
Coins are positioned randomly within the viewport boundaries using `Math.random()` combined with `window.innerWidth` and `window.innerHeight`, ensuring the coin always stays fully visible.

### Event Handling
The game listens for `keydown` events to capture arrow key presses and updates the avatar's position accordingly.

## Future Enhancements

- Add score tracking
- Implement timer
- Add difficulty levels (faster coin collection required)
- Add sound effects
- Create multiple coins
- Add obstacles

## License

MIT

## Author

Sonu Ram
