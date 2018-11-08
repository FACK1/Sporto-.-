
# Sporto
Sprto is an app using API from Sports DB allowing users to search about their fav footbal players and Teams.

# Site Link : https://fack1.github.io/Sporto-.-/html/index.html

# User journey :
In Our App You can find info about Your fav players or team :
  - In Our Basic page we Have tow card 
      - Search about player : if you click on this card you will go in a section in out page , by this page you will find a 
        search box , enter your player name then will see info about him .
      - Search about team player : if you click on this card you will go in a section in out page , by this page you will             find a search box , enter team name you want then will see name and images players in this team.
  
# Site design :

# Architecture : 
- File structure
  - html
    - index.html
  - css
    - style.css
  - js
    - index.js
  - images
  - Readme

- Module structure

- HTML structure
Have three sections : Main , Section1 and Section 2 ,
Main has a basic page to show name of app, what this app do, have a 2 cards to choose whcih info user need to search by team name or search team players.

- To do list for Wednesday:
  - Create a design 
  - connect dom with html element 
  - git the information from api 

- A bit of psuedo code:
  - choose search for a player by name cards .
  - go to searching player section 
  - put in searching box name of player like : Danny Welbeck
  - make request to GIT API for sport palyers
  - make a request to DB to get link to page (and image) MAKEREQUEST
  - git info from api
  - connect data with dom element 
  - view to user information .


# First API : 
https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=
By this API we will Search for all players from team By team name to view :
- Team name
- Players name with images.

# Second API :
https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=
By this API we will Search for players by name and view to user :
- Player name
- ID_Score
- Str Team 
- Pic
- Str Wage
- Str Nationality

# Team_Member:

- Al Moutaz 
- Hadeel Salamin
- Sama Amro
- Fidaa Hersh

