# URL Shortener Frontend

This is a simple URL shortener web application built with React and TypeScript. The application allows users to input URLs they want to shorten and displays the shortened URL.

## Project Structure

```
url-shortener-frontend
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── App.tsx            # Main application component
│   ├── components
│   │   └── UrlShortenerForm.tsx # Form component for URL shortening
│   ├── types
│   │   └── index.ts       # TypeScript types and interfaces
│   ├── index.tsx          # Entry point for the React application
│   └── styles
│       └── App.css        # CSS styles for the application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd url-shortener-frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Enter a URL in the input field and submit the form to get a shortened URL.
- The shortened URL will be displayed below the form.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.