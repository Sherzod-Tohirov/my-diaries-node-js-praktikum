# Express Handlebars Application

A Node.js web application using Express and Handlebars template engine.

## Features

- Express web server
- Handlebars templating with custom helpers
- Environment variable configuration
- MVC architecture

## Installation

```bash
# Clone the repository
git clone [your-repository-url]

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
```

## Available Handlebars Helpers

The application includes several custom Handlebars helpers:

- `ifeq`: Compare two values for equality
- `formatDate`: Format date to locale string
- `json`: Convert object to JSON string

Example usage in templates:

```handlebars
{{ifeq value1 value2}}
{{formatDate dateValue}}
{{json objectValue}}
```

## Project Structure

```
├── helpers/
│   └── hbs.helpers.js
├── routes/
│   └── diary.route.js
├── views/
├── .env
├── index.js
└── README.md
```

## Running the Application

```bash
npm start
```

The server will start on the configured port (default: 3000).

## License

MIT
