# Purrfect_Match

![PurrfectMatch](https://github.com/makeyourwon/Purrfect-Match-back-end/assets/149891853/7a1ffc3c-278d-4a94-a1af-3c9ebff69364)


# Overview
PurrfectMatch is built for helping animal adoption. You can view and add the furry friend to adoption list. You will be able to contact the shelter for further application.

# Wireframe
![Purrfection wireframe 1](https://github.com/makeyourwon/Purrfect-Match-back-end/assets/149891853/c027f639-ee29-4db1-8b3a-392d6cabd1d4)
![PurrfetMatch wireframe 2](https://github.com/makeyourwon/Purrfect-Match-back-end/assets/149891853/25e214bb-cd20-4166-bf84-029094d0fa94)


# Team
- Backend: Kia, Shan
- Frontend: Joshua, Kevin

# Technique
HTML, Django, React, Bootstrap, JWT

# User Stories
Registration and Login: 
- As a user, I would like the option to create an account, so that I can manage my favorites and possibly start the adoption application process directly through the app, making the entire experience more personalized and streamlined.
User Interface

- As a user, I would like a clean, user-friendly interface that allows me to easily navigate through the app, including a home page, search and filter options, animal listings, and detailed animal profiles, so that I can find the information I need quickly and efficiently.
  
Search and Filters: 
- As a user, I would like to have search and filter options that allow me to refine my search based on specific criteria such as animal type (dog, cat, etc.), breed, size, age, and location, so that I can find a pet that matches my preferences more easily.


Animal Listings: 
- As a user, I would like a dynamic section where animals available for adoption are displayed, including a picture, name, age, breed, and a short description for each, and by clicking on a listing, I can view a detailed profile of the animal, so that I can explore my options comprehensively.
  
Detailed Animal Profile: 
- As a user, I would like to see a detailed profile page for each animal, providing comprehensive information including multiple photos, a longer description, health and vaccination status, adoption requirements, and contact information for the shelter or rescue, so that I can make an informed decision about adopting them.
  
Favorites/Bookmarking: 
- As a user, I would like the ability to save or bookmark animals I am interested in, so that I can easily find these listings later and keep track of animals I may want to adopt.
  




# Component Hierarchy Diagram
![component hierarchey](https://github.com/makeyourwon/Purrfect-Match-back-end/assets/149891853/cdf3c040-d537-4627-a392-f6f6a0e20ed0)

# Routing Table

### Public Pages
| Page Type           | URL        | Description                                           |
|---------------------|------------|-------------------------------------------------------|
| Homepage            | /          | Introductory information and login/register options.  |
| Login Page          | /login     | For user login.                                       |
| Registration Page   | /register  | For new user registration.                            |
### Authenticated User Pages
| Page Type            | URL           | Description                            |
|----------------------|---------------|----------------------------------------|
| User's Profile Page  | /profile      | View and edit user profile details.    |
| Favorites Page       | /favorites    | Shows favorited animals.               |
| Animal Listings Page | /animals      | Lists all animals with filter options. |
| Animal Detail Page   | /animals/:id  | Detailed view of a specific animal.    |
### Backend API URL Paths
#### User Authentication, Registration, and Token Management
| Function              | URL                                  | Method    | Description                    |
|-----------------------|--------------------------------------|-----------|--------------------------------|
| User registration     | /purrmatch/user/register/            | POST      | User registration.             |
| User login            | /purrmatch/user/login/               | POST      | User login, returns tokens.    |
| Refresh access token  | /purrmatch/user/token/refresh/       | POST      | Refresh access token.          |
#### User Profile Management
| Function               | URL                                   | Method    | Description                   |
|------------------------|---------------------------------------|-----------|-------------------------------|
| Fetch profile details  | /purrmatch/user/profile/              | GET       | Fetch user's profile details. |
| Update profile information | /purrmatch/user/profile/update/   | PUT/PATCH | Update profile information.   |
#### Animal Listings and Filters
| Function             | URL                              | Method | Description                        |
|----------------------|----------------------------------|--------|------------------------------------|
| List all animals     | /purrmatch/animals/              | GET    | List all animals with filters.     |
| Animal details by ID | /purrmatch/animals/<int:id>/     | GET    | Animal details by ID.              |
#### Favorites Management
| Function                   | URL                                      | Method | Description                      |
|----------------------------|------------------------------------------|--------|----------------------------------|
| List favorited animals     | /purrmatch/favorites/                    | GET    | List user's favorited animals.   |
| Add an animal to favorites | /purrmatch/favorites/add/                | POST   | Add an animal to favorites.      |
| Remove an animal from favorites | /purrmatch/favorites/remove/<int:id>/ | DELETE | Remove an animal from favorites. |

# Trello
https://trello.com/b/VbdaIAZh/purrrfect-match

# Timeline

|Date | Todo |
|-----|------|
|2/9  | Create Proposal|
|2/12 | Complete Scaffolding|
|2/12 | Get API Key for 3rd party integration|
|2/12 | Test Routes BackEnd|
|2/13 | Test Authentication|
|2/14 | Deployment|
|2/15 | Style Project|


# Blockers
Deploying the front-end and having both deployments connect with each other

# Ice box
1. User reviews
2. List shelters nearby - may require google api
3. volunteering opportunities page for shelters
4. Donations page with link
5. Pet Care Tips for new owners
