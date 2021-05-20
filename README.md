# Whodunit!

## Features
Detective Sheet
- Mark which clues you've gotten and eliminated
- Keep track of which clues you've found in which location
    - Customize the orientation of locations based on which side of the board you're viewing
- Extra space for miscellaneous notes

## Access
1. Download the project from GitHub:  
   ```git clone https://github.com/c-loh/Whodunit.git```
2. Open the project in IntelliJ and use Local Tomcat run configuration
    - Get IntelliJ [here](https://www.jetbrains.com/idea/download/)
    - Download Tomcat [here](https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.31/bin/)
    - Make sure you have the Tomcat plugin for IntelliJ
    - Add a new run configuration in IntelliJ:
      - Go to Run --> Edit Configurations
      - Click + --> Tomcat Server --> Local
      - Click Configure, set the Application Server's path to be where you downloaded Tomcat
      - Choose the Whodunit:war artifact for deployment
    - Click the Run button to start the application
3. Go to link: ```http://[your IP address]:8080/whodunit/```
    - Find IP address on Mac: go to System Preferences > Network, it should be listed under the part where it shows connection status
    
## To Do
- Make it look nicer on mobile
- Maybe an info button saying to use landscape on mobile and any other info?
- Location/color labels for each section of the Detective Sheet
- Autocomplete for the location labels?
- Game board?