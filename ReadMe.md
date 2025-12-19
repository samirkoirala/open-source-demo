# 🚀 Open Source Contributors Demo

<div align="center">

![Open Source](https://img.shields.io/badge/Open%20Source-💚-green)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)
![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

**A beginner-friendly open-source project where you can make your first contribution!**

[View Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributors](#contributors)

---

## 🎯 About The Project

This is a simple, beginner-friendly open-source project designed to help newcomers make their first contribution to open source. The project displays a beautiful gallery of contributors who have added their profiles to the project.

Perfect for:
- 🌟 Making your first open-source contribution
- 📚 Learning Git and GitHub workflows
- 🤝 Joining a welcoming community
- 💡 Understanding pull requests and code reviews

---

## ✨ Features

- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes (theme preference saved)
- 👥 **Contributors Gallery** - Showcase all contributors with their profiles
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Easy to Contribute** - Simple JSON-based contribution system
- 💾 **LocalStorage** - Remembers your theme preference

---

## 🚀 Getting Started

### Prerequisites

You only need a web browser! No installations required.

### Running Locally

1. **Fork this repository**
   
   Click the "Fork" button at the top right of this page.

2. **Clone your forked repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/open-source-demo.git
   cd open-source-demo
   ```

3. **Open the project**

   Simply open `index.html` in your web browser:
   
   ```bash
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   
   # Windows
   start index.html
   ```

   Or use a local server (optional):
   
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open http://localhost:8000
   ```

---

## 🤝 How to Contribute

We welcome contributions from everyone! Here's how you can add your profile:

### Step 1: Fork and Clone

1. Fork this repository
2. Clone your forked repository to your local machine

### Step 2: Create a New Branch

```bash
git checkout -b add-your-name
```

### Step 3: Add Your Profile

Open `contributors.json` and add your profile information:

```json
{
  "name": "Your Name",
  "role": "Your Role (e.g., Developer, Designer)",
  "bio": "A short bio about yourself",
  "github": "your-github-username",
  "twitter": "your-twitter-handle",
  "linkedin": "your-linkedin-username",
  "website": "https://yourwebsite.com",
  "avatar": "https://github.com/your-username.png",
  "contributions": ["code", "documentation", "design"]
}
```

**Note:** Add your entry at the end of the contributors array, before the closing `]`.

#### Available Contribution Types:
- `"code"` - Code contributions
- `"documentation"` - Documentation improvements
- `"design"` - UI/UX design
- `"review"` - Code reviews
- `"bug"` - Bug reports/fixes
- `"ideas"` - Feature ideas

### Step 4: Commit Your Changes

```bash
git add contributors.json
git commit -m "Add [Your Name] to contributors"
```

### Step 5: Push to GitHub

```bash
git push origin add-your-name
```

### Step 6: Create a Pull Request

1. Go to your forked repository on GitHub
2. Click on "Compare & pull request"
3. Add a descriptive title: `Add [Your Name] to contributors`
4. Submit the pull request

### Step 7: Wait for Review

Your pull request will be reviewed and merged if everything looks good! 🎉

---

## 📁 Project Structure

```
open-source-demo/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling with dark mode support
├── script.js           # JavaScript for dynamic content loading
├── contributors.json   # Contributors data (add your profile here!)
├── README.md          # Project documentation
├── CONTRIBUTING.md    # Detailed contribution guidelines
└── CODE_OF_CONDUCT.md # Community code of conduct
```

---

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with CSS Variables for theming
- **JavaScript** - Dynamic content and interactivity
- **Font Awesome** - Icons
- **LocalStorage API** - Theme persistence

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Contributors

Thanks to all the amazing people who have contributed to this project! ❤️

<div align="center">
  <a href="https://github.com/YOUR-USERNAME/open-source-demo/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=YOUR-USERNAME/open-source-demo" />
  </a>
</div>

---

## 🌟 Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

## 📞 Contact

Have questions? Feel free to reach out:

- Create an [Issue](../../issues)
- Start a [Discussion](../../discussions)

---

<div align="center">

**Made for open source beginners**

[⬆ Back to Top](#-open-source-contributors-demo)

</div>
