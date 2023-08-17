# Beauty_App
it is not allowed to delete files from this outline

# Structuring the project

1 - clone the project
2 - create a new branch with your git username.
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository

!!! It is categorically forbidden to deploy on the master or main branch !!!

3 - the structure of folders and files

 - src/
  - api/
     - Api.js
     - ApiContext.js
     - ApiUrl.js
  - app/ 
     - App.js
  - hooks/
     - useColor.js
     - useMap.js
     - useRating.js
  - layouts/
     - BrandCard.js
     - ColorsBlock.js
  - pages/
     - Home.js
  - style/
     - index.css
     - brandCard.module.css
     - rating.module.css

4 - after creating the maps and files deploy on git

# Contents of the files

Api.js - in it the context for the api is connected and useMap
ApiContext.js - connecting to api with fetch or axios
ApiUrl.js - api link

App.js - is connected the home page wrapped in the context 
useColor.js - checking if there are colors
useMap.js - displaying the data from the array with map
useRating.js - checking if there are rating

BrandCard.js - the structure of an information block
ColorsBlock.js - the structure of a color block

Home.js - inclusion of Api function

index.css - global styles
brandCard.module.css - styles of an information card
rating.module.css - styles for rating

# IMPORTANT push the results to git incrementally, on steps. DO NOT wait for completion.
# the api link http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
# official website http://makeup-api.herokuapp.com/
# final result http://beauty.southwebs.site/


 
