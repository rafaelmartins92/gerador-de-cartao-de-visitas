# Business Card Generator

This project is a fictional Business Card Generator application developed for RD Station. The app allows users to fill out a form to create a personalized digital business card. This README provides an overview of the project, including installation steps, features, and the technology stack used.

## 📝 Brief

The Business Card Generator is a responsive application that allows users to create digital business cards by filling out a form. After submission, the user is presented with a preview of their business card, including their name, phone number, and email. The form includes validation rules to ensure the data is entered correctly.

## 🎯 Features

- **Responsive Design:** Fully responsive for devices with screen widths of 360px (mobile) to 1440px (desktop)
- **Form Validation:** Validates name, email, and phone number with specific formats
- **Business Card Preview:** Generates a business card with the user’s information from the form
- **Reset Form:** Clears all form inputs when navigating back to the form page
- **External Links:** Includes a link to RD Station’s sign-up page and privacy policy
- **Download Button:** Disabled button for the business card download option

## 🚀 Technologies Used

- **React:** Component-based architecture and React Hooks
- **SCSS (Sass):** For styling and ensuring responsive design
- **JavaScript (ES6):** For functionality and validations
- **HTML5:** Semantic markup for SEO and accessibility
- **PropTypes:** For type-checking React props

## 📂 Project Structure

```bash
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── styles
│   ├── App.jsx
│   ├── main.jsx
│   └── main.scss
├── index.html
├── package.json
└── vite.config.js
````

## 🖥️ How to Run the Project

1. Clone this repository:
```bash
    git clone https://github.com/rafaelmartins92/gerador-de-cartao-de-visitas
````

2.  Navigate to the project folder:
```bash
    cd gerador-de-cartao-de-visitas
```

3.  Install the dependencies:
```bash
    npm install
```

4.  Run the project:
```bash
    npm run dev
```
## 🌐 Check the Live Demo

You can check out the live version of the project by visiting the link below:

🔗 [Business Card Generator - Live Demo](https://gerador-de-cartao-de-visitas.vercel.app/)

Explore the features and see how the project behaves across different devices and screen sizes.

## 🛠️ Technical Challenges

One of the main challenges was ensuring the form validation covered all edge cases, including validation for phone numbers with different formats. Additionally, maintaining responsiveness across all screen sizes required detailed attention to layout and spacing adjustments.

## 🚀 Features

- Real-time generation of business cards based on user input
- Full form validation for name, email, and phone fields
- Responsive design adapting to different screen sizes
- Keyboard accessibility for all interactive elements
- Download button (disabled) for future functionality
- Clear form button resets all user input

## 🤝 Contribution

Feel free to contribute with improvements or new features. Just fork this repository and open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
