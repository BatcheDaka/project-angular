# CREATING EVENTS SITE USING ANGULAR

| Contents
|---
| [Application Structure](#application)
| [General](#general)
| [Other](#other)
| [Authentication](#authentication)

## 1.Application Structure

The application have:
*	Public Part (Accessible without authentication)
*	Private Part (Available for Registered Users)
### 1.1 Public Part
The public part is visible without authentication. This is the list of all events and venues created on the site. There is option to find the events or venues searching by name or filtering by price range.
### 1.2 Private Part (User Area)
Registered users can add venues and events in the site. They alos can add venues in their favourite list. Users can acces the application after succesful login or after creating new account using email and password.


## General

* Dynamic pages - Venues, Events, Favourites
* Views - Venues, Events (all items), Favourites (specific for logged in user)
* Logged user can add, update or delete events and venues. They can favourite venues.


### Authentication

The service is initialized with 1 user, which can be used for immediate testing:
* dakata@gmail.com : 123456

Additional users can be added via the Register link.

* Register - register wit e-mail and password
* Login - login with existing e-mail and password
* Logout - viewing the site as guest


#### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
