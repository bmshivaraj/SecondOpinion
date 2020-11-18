SecondOpinion is a sample project to learn Angular, Hibernate, Spring boot application, REST API and JWT token authentication.

Building the project:
1. Clone entire source code to local folder (say C:\SecondOpinion) via 
  "git clone https://github.com/bmshivaraj/SecondOpinion.git" command
2. You will notice folder structure as 
      backend
      MySecretDiary
      README.md
    in which backend folder has backend side code
    MySecretDiary folder has frontend side code
3. Open backend in eclipse/IntelliJ and run below command to compile the code
      "C:\SecondOpinion\backend\secopi-data>mvn clean install -Dmaven.test.skip=true"
4. Open frontend side code in visual studio Code and open a terminal and type below commands
    npm install -g npm@latest
    npm install -g @angular/cli
    ng serve -o
    
    This will open up home page in browser.
   
