# TrendSpire

**TrendSpire** is an e-commerce platform tailored for fashion enthusiasts. This application allows users to explore the latest fashion trends and purchase items. It also features **Ivy**, a chatbot that provides fashion-related advice, helping users stay trendy.

## Features

- **Fashion Products**: Browse through a curated list of fashion products and accessories.
- **Ivy Chatbot**: Get fashion-related advice in real-time. Ivy is trained to offer only fashion-specific insights.
- **User Authentication**: Secure login and registration system for personalized shopping experiences.
- **Add to Cart**: Users can add products to their cart for a streamlined checkout process.
- **Checkout Page**: A dedicated page for reviewing and completing purchases.
- **Favorites**: Save favorite items for future browsing.

## Project Structure

This repository is split into two main directories:

1. **project/**: Contains the main e-commerce application.
   - **server/**: Backend logic for handling user authentication, product browsing, order processing, cart, and favorite functionalities.
   - **client/**: Frontend built with modern web technologies for a smooth user experience.

2. **chatbot/**: 
    - **server/**: Contains Ivy's chatbot server, providing real-time fashion advice.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/riya-rjha/TrendSpire.git
   cd TrendSpire
   ```

2. Navigate to the **project** directory to install dependencies for the e-commerce platform:

   ```bash
   cd project
   cd server
   npm install
   ```

   ```bash
   cd project
   cd client
   npm install
   ```


3. Navigate to the **chatbot** directory to install dependencies for the Ivy chatbot:

   ```bash
   cd ../chatbot
   cd server
   npm install
   ```

### Running the Application

#### E-commerce Platform

1. Start the backend server:

   ```bash
   cd project/server
   npm start
   ```

2. Start the frontend client:

   ```bash
   cd ../client
   npm run dev
   ```

#### Ivy Chatbot

1. Start the chatbot server:

   ```bash
   cd chatbot/server
   npm start
   ```

The chatbot will be running, and you can integrate it into the frontend client.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Chatbot**: Node.js, Open AI API

