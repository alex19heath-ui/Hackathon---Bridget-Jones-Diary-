
# Hackathon: Bridget Jones Diary

This is a private, locally-hosted diary application for viewing and creating diary entries.


## Installation

To install the required dependencies for this project, follow these steps:

1. Clone into this repository using ```git clone```
1. Ensure you have Docker, Node and NPM installed.
1. In your terminal, go to the ```Server/``` folder of this repository and run ```npm i``` to install the required dependencies.

### Creating a container for your local postgres database

1. Open Docker Desktop in the background
1. In the ```Server/``` folder, navigate to the ```.env``` file and check you are happy with the variables e.g. the ```PORT``` number
1. In your terminal, in the ```Server/``` folder, run ```docker compose up -d```
1. Navigate to Docker Desktop and you should see that a container has been created. Run this container.

### Setting up your new database
1. In your terminal, in the ```Server/``` folder, run ```npm run db:migrate```

### Accessing the application
1. In your terminal, in the ```Server/``` folder, run ```npm start```
1. In your browser, go to http://127.0.0.1:3001/Frontend/home.html 



## Features

- Read diary entries. Diary entries are shown by newest first.
- Create diary entries