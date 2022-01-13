# tretton37-project

## Project Name & Pitch

Meet The Employees

An application used to show data form employee list of Tretton37 company

## Project Technologies

- react version '17.0.0'
- react hook
- material ui
- node version '14.0.0'
- jest

## Installation and Setup Instructions

- Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:`npm install`
run project: `npm run start`
To Run Test Suite: `npm test`
To Visit App:`http://localhost:3000`

or

- you can use docker and see result.
  Clone the repo
  Go to docker directory -> `cd docker`
  In terminal -> `docker-compose up` OR `docker-compose up -d`
  After docker build completed, you can access the web app at port 3001 -> `http://localhost:3001`

  ## useful Hints

  - All the environment variables resided in .env file in root directory.
  - because of CORS API issue ( do not know which port is open), please follow as blow to run api
    - go to browsers and use this URL `https://cors-anywhere.herokuapp.com/https://api.1337co.de/v3/employees/`
    - click on the following button `Request temporary access to the demo server`

## Project Functionalities

- user can see employees with short Description and read more.
- Users can filter employees by name and see visual data representation.
- User can choose office and see the employees who work on it.
- users can change the format of view (Grid view or list view).
- user can search employees by alphabet.

## responsive Design

- in this Project I used material ui Grid and tested in mobile, tablet and desktop

## accessability

the things which I did for accessability:

- Utilize colors and symbols
- Underline links
- Add text labels
- user border and change background color when hover on grid.
- Color combinations to avoid (for example Green with black)
- Use role for tags
- ...

  --- there is one file attachment in the mail which I explain more about each items.
