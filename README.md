# screeningprofile

##Instructions to run the app on node server

   Download node js if you do not have node js from "https://nodejs.org/en/download/"

   if git not available Download and install git from https://git-scm.com/download/win

   Go to github url "https://github.com/RameshRav/screeningprofile" and click clone or download button to download as zip file.
  
   Extract zip contents and Run "cd screeningprofile-master" in command prompt to root folder where you can see package.json, bower.json, gulpfile.js.

   Run npm install -g bower (in case if you do not have bower)

   Run npm install -g gulp

   Run npm install

   Run bower install (select angular 1.5.11)

   Run gulp and all the files will be buit in to build folder

  Once the server starts hit the url http://localhost:8000


## To see unit test coverage report


Unit tests are under test folder. 

Run "npm test" to see unit test results

Coverage report will be under coverage/chrome../index.html
