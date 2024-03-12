# 📝 note-taker
This is the Challenge 11 related to Express.js

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
This project, Note-Taker, is a full-stack application that provides a seamless interface for users to manage their notes. It leverages Express.js on the backend to handle HTTP requests for creating, updating, retrieving, and deleting notes. The frontend, built with HTML, CSS, and JavaScript, interacts with the backend through these requests, providing a user-friendly way to manage notes. This project serves as a practical example of how frontend and backend can work together in a cohesive application. Developers can use tools like Postman to test each endpoint and ensure they are working as expected.

## Website-Appearance

Link to the live application:  
🔗[Note-Taker](https://note-taker-1-trsz.onrender.com)

The following image shows the web application's appearance and functionality:
![APPEARANCE-APPLICATION](./Assets/11-express-homework-demo.gif)

## Table of Contents
- [📝 note-taker](#-note-taker)
  - [Description](#description)
  - [Website-Appearance](#website-appearance)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
    - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

To use this repository, follow these steps:

1. Clone this repository to your local machine.
2. Follow the `Usage` steps described below.
  
## Usage

The usage of this application is to provide a user-friendly interface for creating, updating, retrieving, and deleting notes. This application serves as a practical example of a full-stack project, demonstrating the connection between frontend and backend operations. It's an excellent tool for users who need a simple and effective way to manage their notes, and a valuable resource for developers looking to understand how frontend and backend can work together in a cohesive application.

This is a step-by-step guide on how to use this application:
1. **Install the application:** Clone or download the application to your local machine. Then, navigate to the application directory in your terminal, go to the Develop folder and run npm install to install the necessary dependencies, including Express.js and the uuid library for generating unique identifiers for notes.
  > npm install
  > npm install uuid

1. **Run the application:** In the terminal, run the command **node server.js** to start the application. This will start the server on your local machine.
   > node server.js

2. **Answer the prompts:** The application will prompt you with a series of questions about specific details for the logo, such as the color, shape, and any text they want to include.

3. **Access the application:** Open your web browser and go to http://localhost:5501  
   You should see the Note-Taker application.

4. **Add a new note:** Click on the 'New Note' button, enter the title and text for your note, then click on the 'Save' button. Your note will be saved and displayed in the list of notes.
   
5. **Delete a note:** Click on the 'Delete' button next to a note to delete it. The note will be removed from the list.
   
6. **Update a note:** To update a note, you'll need to use a tool like Postman.(refer to helpers postman_collection). Send a PUT request to http://localhost:5501/api/notes/:id, replacing :id with the ID of the note you want to update. Include the updated title and text in the request body.
   
7. **Test the endpoints:** You can also use Postman to test the other endpoints of the application. For example, you can send a GET request to http://localhost:5501/api/notes to retrieve all notes, or a DELETE request to http://localhost:5501/api/notes/:id to delete a note.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

[Toptal](https://www.toptal.com/developers/gitignore) Used to create .gitignore file.

### Acknowledgements

- **Express.js:** Used for handling HTTP requests and building the backend server.
- **Node.js:** Environment for running JavaScript on the server-side.
- **Postman:** Used for testing API endpoints during development.
- **uuid library:** Utilized for generating unique identifiers for notes.

## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [MIT License.](https://opensource.org/licenses/MIT) : Expat License.


## Features

+ **Note Management:** Users can create, update, retrieve, and delete notes. This allows for full control over the note-taking process.

+ **Persistent Storage:** Notes are stored in a `db.json` file, allowing for persistence of notes between server restarts.

+ **Unique Identifiers:** Each note is assigned a unique identifier using the `uuid` library, ensuring that each note can be accurately targeted for updates or deletion.

+ **Express.js Backend:** The backend server is built with Express.js, providing a robust framework for handling HTTP requests and routing.

+ **Frontend Interaction:** The frontend is built with HTML, CSS, and JavaScript, and interacts with the backend through API calls, providing a seamless user experience.

+ **Testing with Postman:** Developers can use Postman to test each endpoint and ensure they are working as expected.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

n/a

## Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com
LinkedIn 👩🏻‍💻: [SilviaReyes](https://www.linkedin.com/in/silvia-reyes-2b907123b/)

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



***Thanks for stopping!***