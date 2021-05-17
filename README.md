# Hero's Rest

## Overview

All heroes require a place to relax after each campaign. With this application, users will be able to take their RPG characters and give them a place to exist outside of their game. Using their characters, users can post notes related to their campaign and make posts sharing their characters thoughts and feelings. The purpose is not only to give players a place to keep records of the goings-on in their games, but to foster a creative experience where users can inhabit their characters on a social media platform.

<br>

## MVP

### Planning

- Have a thoroughly developed README.md file. (Refer below to "Pitch Your Project Idea" for more.)
- Copy the raw markdown from the project planning template to get started.

### Server (Back End)

- Have a RESTful JSON API.
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Build a database with at least 3 tables:
  - There must be at least 1 association between your tables. (1:m or m:m)
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables
  - Note that if you choose to do Authentication, CRUD on your User table does not count toward this requirement.

### Client (Front End)

- Have a working, interactive React app, built using npx create-react-app.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional or class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use only React for DOM Manipulation.
- Consume data from your Ruby on Rails API, and render that data in your components.
- Utilize React Router, for client-side routing.
- Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.
  - Note that if you decide to implement Auth, your full CRUD actions must be covered amongst your non-User tables.

### Styling

- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow camelCase, snake_case, and kebab-case convention.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes and comments are okay).

### Deployment

- Deploy the fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.
- Deploy early and often(this will help to debug small issues before they become large issues)

### Procedural

- Initialize a git repo on Github, with a link to your hosted project.
- Have frequent commits, making a robust commit history at least every day. (75 commits minimum)
- Use effective and safe branching and merging processes.

<br>

### Libraries and Dependencies

|     Library      | Description                                            |
| :--------------: | :----------------------------------------------------- |
|      React       | _Render the front end of the application._             |
| React Router DOM | _Provide local routing/linking._                       |
|      Axios       | _Provide communication between backend and front end._ |
|      Devise      | _Authentication (Post-MVP)_                            |
|      Rails       | _Provide backend architecture/functionality._          |

<br>

### Client (Front End)

#### Wireframes

- Desktop

![Hero's Rest Desktop Wireframes](https://i.imgur.com/MtXj3lq.png)

- Tablet

![Hero's Rest Tablet Wireframes](https://i.imgur.com/UCqYRGk.png)

- Mobile

![Hero's Rest Mobile Wireframes](https://i.imgur.com/YR4y19n.png)

#### Component Tree

![Hero's Rest Component Tree](https://i.imgur.com/nCzyRkX.jpg)

#### Component Architecture

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Navigation/
          |__ Navbar.jsx
          |__ Navbar.css
      |__ SignUp/In/
          |__ SignUp.jsx
          |__ SignIn.jsx
          |__ Sign.css
      |__ Forms/
          |__ Character/
              |__ CreateCharacter.jsx
              |__ CreateCharacter.css
          |__ CampaignNotes/
              |__ CreateCampaignNote.jsx
              |__ CampaignNote.css
          |__ Posts/
              |__ CreatePost.jsx
              |__ CreatePost.css
          |__ Comments/
              |__ CreateComment.jsx
              |__ Comment.css
      |__ Footer/
          |__ Footer.jsx
          |__ Footer.css
|__ services/
      |__ apiConfig.js
      |__ user.js
      |__ character.js
      |__ posts.js

```

#### Time Estimates

| Task                               | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Back End Skeleton            |    H     |     1 hrs      |       3       |      3      |
| Create Back End Models/Seeds       |    H     |     1 hrs      |       5       |      5      |
| Create Back End Controllers/Routes |    H     |     3 hrs      |       6       |      6      |
| Setup Front End Skeleton           |    H     |     1 hrs      |       2       |      2      |
| Create Navbar/Footer               |    M     |     1 hrs      |       1       |      1      |
| Setup Back End -> Front End Comms  |    H     |     3 hrs      |      12       |     12      |
| Add SignUp/In Form                 |    M     |     2 hrs      |       3       |      3      |
| Add Character Form                 |    M     |     3 hrs      |       3       |      3      |
| Add Post Form                      |    M     |     3 hrs      |       3       |      3      |
| Add Comment Form                   |    M     |     2 hrs      |       0       |      0      |
| Styling                            |    M     |     4 hrs      |       6       |      6      |
| P-MVP Like System                  |    L     |     3 hrs      |       0       |      0      |
| P-MVP Authentication               |    L     |     4 hrs      |       0       |      0      |
| P-MVP Friend System                |    L     |     3 hrs      |       0       |      0      |
| P-MVP Messaging Functionality      |    L     |     5 hrs      |       0       |      0      |
| Polish                             |    L     |     3 hrs      |       2       |      2      |
| TOTAL                              |          |     48 hrs     |      46       |     46      |

<br>

### Server (Back End)

#### ERD Model

![Hero's Rest ERD](https://i.imgur.com/vGUHfT9.jpg)
<br>

---

## Post-MVP

- Authentication
- Add Like System
- Messaging functionality
- Friending System
- Campaign Notes

---

## Code Showcase

```
RUBY sample from seed.rb

@table_master = User.create!(username: 'Table_Master', email: 'thetablenator@mastery.com', password_digest: 'tabletabletabletabletable')
@serious36 = User.create!(username: 'Serious36', email: 'seriouslyguys@36ers.co.uk', password_digest: 's56g7[p_iaGhD2?sO=')
@bigbys_fan29 = User.create!(username: 'Bigbys_fan29', email: 'floatinghands@bigbyhome.deu', password_digest: 'BiGbYsMiGhTyHaNd2')
puts "#{User.count} users created!"
```

## Code Issues & Resolutions

- Database Reseeding Aborted: InvalidForeignKey and Unexpected Symbol Literal. This series of errors was related to an insufficient relational between two of my tables, where a foreign key wasn't present and the methods through which I went about fixing it broke syntax. The fix was creating relevant migrations to provide the tables with their respective references and modify syntax to reflect it.

- Object20%Object. This popped up throughout front-end development. Each time it did, it was when the forms were handling input data. Instead of passing through the data I wanted, it was passing it through as an object, and React reflected this in the console. The fix for this required a bit of retooling the apiConfig file as well as making small adjustments to the form-related functions such as handleChange and handleSubmit.
