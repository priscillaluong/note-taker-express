# note-taker-express

## Application Description

A Node.js command line application that takes in information about employeees in a team and generates a HTML webpage that displays summaries for each person (name, ID, email, job title etc.) Unit tests have also been written to ensure code is maintainable. 

[Jest](https://www.npmjs.com/package/jest) has been used for running the unit tests and [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user.

The application will be invoked by using the following command:

```bash
node index.js
```

I was given the below User Story and Acceptance Criteria:

User Story:

![User Story](/assets/images/user-story.png) 

Acceptance Criteria:

![Acceptance Criteria](/assets/images/acceptance.png) 

## Required modules / packages:

* Inquirer package
* Node.js fs module

# Application Interaction: 

* Navigate to the correct folder and run the following command: 
```bash
node index.js
```
* This will prompt the user with a series of questions about the employees in their team:

![Application Interaction Start Screenshot](/assets/images/command1.png)

![Application Prompts Screenshot](/assets/images/command2.png)

* Only numerical values can be entered for the ID number. 

* The user will also be given a choice to create a summary for an 'Engineer' or 'Intern', or to finish creating the webpage by selecting 'I have finished building the team'.

![Application Prompts Screenshot](/assets/images/command.png)

![Application Final Prompt Screenshot](/assets/images/command3.png)

* Once user has finished building their team, a message appears to let them know they have 'successfully created index.html!', which can be found in the 'dist' folder:

![HTML page successfully generated message screenshot](/assets/images/command4.png)

![Generated HTML Screenshot](/assets/images/generated-html.png)

## Screenshot of Deployed Application:

![Generated README sample Screenshot](/assets/images/browser1.png) 
![Generated README sample Screenshot](/assets/images/browser2.png) 

## Link to Deployed Application:

[Click here](https://github.com/priscillaluong/profile-generator-nodejs-oop/blob/main/dist/index.html)

### Final note:

*Any feedback to improve code or implement best practice would be appreciated* 😊