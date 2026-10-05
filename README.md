# ♠️ Solitaire

A classic Solitaire (Klondike) game built from scratch using **HTML, CSS and JavaScript**.

This project was created as a learning project to practice JavaScript, DOM manipulation, event handling and building game logic.

## 🎮 Features

* Classic 52-card deck
* 7 tableau columns
* Draw pile
* Waste pile
* 4 foundation piles
* Face-down and face-up cards
* Moving cards between columns
* Moving cards to foundation piles
* Validation of legal moves
* Empty-column handling
* Only Kings can be placed in empty columns
* Dark mode
* Visual card selection

## 🧠 How It Works

The entire game was built from scratch. The main goal of the project was to understand how **HTML, CSS and JavaScript work together** to create an interactive application.

### 🃏 Card System

Each card is represented by a number from `1` to `52`.

The cards are divided into four suits:

```text
1–13   → Spades
14–26  → Clubs
27–39  → Diamonds
40–52  → Hearts
```

The card number is used to determine its suit and value.

This allowed me to manage the entire deck without creating a separate object for every card.

### 🏗️ Board Structure

The game board consists of several main areas:

* 7 tableau columns
* Draw pile
* Waste pile
* 4 foundation piles

Each area has its own HTML element, allowing JavaScript to find and manipulate the appropriate part of the board.

### 🔢 Game State

The game keeps track of information about the cards and their current state.

For example, I use:

```javascript
opisKolumn
opisPolKoncowych
czyOdkryte
```

to store information about the cards in different areas and whether cards are currently face-up or face-down.

### 👁️ Revealing Cards

When a face-up card is moved away from a tableau column, the game can reveal the card underneath it.

The state of the card is updated and its appearance changes accordingly.

## ♟️ Move Logic

One of the main parts of the project is checking whether a move is legal.

Before moving a card, the program checks things such as:

* whether the card can be placed on the selected card,
* whether the correct card order is maintained,
* whether the colors alternate,
* whether a card can be moved to a foundation,
* whether a card can be placed in an empty column.

For an empty tableau column, only a **King** can be placed there.

## 🏆 Foundation Piles

There are four foundation piles:

```text
poleP1
poleP2
poleP3
poleP4
```

Each foundation is used for one suit.

Cards must be placed in ascending order, starting with the Ace and ending with the King.

The game checks whether the card being moved is the correct next card for that foundation.

## 🌙 Dark Mode

The game also includes a dark mode.

The current mode is stored using:

```javascript
trybCiemny
```

JavaScript changes the appropriate classes and elements to switch between the available visual modes.

## 🛠️ Technologies

* **HTML5** — page structure
* **CSS3** — styling and layout
* **JavaScript** — game logic and user interaction

No JavaScript frameworks were used.

## 📁 Project Structure

```text
Solitare-js/
│
├── Pasjans.html
├── Pasjans.css
├── Pasjans.js
└── README.md
```

## ▶️ Running the Project

No additional libraries or dependencies are required.

Simply clone the repository and open:

```text
Pasjans.html
```

in a web browser.

## 📚 What I Learned

While building this project, I learned and practiced:

* DOM manipulation
* Event handling
* JavaScript functions
* Arrays
* Loops
* Conditional statements
* Managing application state
* Building game logic
* Validating user actions
* Debugging JavaScript
* Organizing a larger JavaScript project
* Using Git and GitHub

## 🚀 About the Project

Solitaire was one of my first larger programming projects.

Instead of creating only small JavaScript exercises, I wanted to build something with real game logic, state management and user interaction.

The project helped me understand how JavaScript can be used to create a complete interactive web application and gave me a foundation for building more complex projects in the future.

---

**Author:** Maciej Wiewióra
**Technologies:** HTML • CSS • JavaScript

