# Capstone Project
#### By Matthew Laude

## Description 🥊
This ice cream app is about adding your own flavors of ice cream. Users will be able to add their own flavors of ice cream. Users will be able to search for local ice cream shops or shops around a specified address. The user will be able to search and browse for ice cream and is able to purchase by placing different flavors in their shopping cart. 

## User Stories 🥊
As a user, I can 

## Components 🥊
- IceCream
- AllIceCreams
- SingleIceCream
- Form
- Modal
- Carousel
- Sandwich Menu
- App

## Technologies
Next.js, React, react-router-dom, react-icons, Sass
Potential: TypeScript, Tailwind

## Models
Ice Cream:
- flavor: string
- description: string
- image: string

## Backend Route Table 
| url | method | action |
|-----|--------|--------|
| /ices | get | getting all the ice creams (index)||
| /ices | post | posting a new ice cream (create) |
| /ices/:id | put | updating an ice cream (update) |
| /ices/:id | delete | delete an ice cream (destroy) |

## React Router Route Table
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all ice creams (index)||
| / | Index | post | posting a new ice cream (create) |
| /songs/:id | Show | put | updating an ice cream (update) |
| /songs/:id | Show | delete | delete an ice cream (destroy) |

## React Component Architecture
```
-> App
  -> Header
  -> Main |state: ice|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: ices|
      -> Route |path="/ice/:id|
        -> Show |Props: ice, updateIce, deleteIce|
```

## Bonus Features
TBD

## Challenges
TBD