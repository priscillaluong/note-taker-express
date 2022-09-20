# note-taker-express

## Application Description

An application that uses Express.js back end to save, retrieve and delete note data from a JSON file (db.json). Application has been deployed to Heroku - link can be found at the [bottom](#link-to-deployed-application:) of this page. 

The application will be invoked by using the following command:

```bash
node server.js
```

I was given the below User Story and Acceptance Criteria:

User Story:

![User Story](/assets/images/user-story.png) 

Acceptance Criteria:

![Acceptance Criteria](/assets/images/acceptance.png) 

## Required modules / packages:

* Express package
* Node.js fs module
* Node.js path module 
* Route module

* Notes.js also uses a uuid.js module which gives each note a unique id when it is saved: 

![notes.js Screenshot](/assets/images/notesjs.png)
![uuid.js Screenshot](/assets/images/uuid.png)


# Application Interaction: 

* When application is invoked, users are directed to index.html:

![Application Start - index.html Screenshot](/assets/images/start.png)

* The 'Get Started' button then directs users to the notes.html:

![notes.html Screenshot](/assets/images/notes.png)

* New notes can be added by clicking on the '+' icon on the top right of the page, and saved by clicking on the 'save' icon:

![First Note Saved Screenshot](/assets/images/first-saved-note.png)

* Multiple notes can be saved and added. Previously saved notes can be retrieved in the left hand column:

![Saved Notes Screenshot](/assets/images/second-note.png)

![Saved Notes 2 Screenshot](/assets/images/more-notes.png)

* Saved notes can also be deleted by clicking on the 'trash can' icon next to the note you wish to delete. 

![Notes Delete Screenshot](/assets/images/delete.png)

# Link to Deployed Application:

[Click here](https://shrouded-anchorage-59962.herokuapp.com/)

### Final note:

*Any feedback to improve code or implement best practice would be appreciated* 😊