# Interactive-Form

#### Project 3

###### This is my third of twelve projects for the Techdegree Full Stack JavaScript.

##### Adding form validation and functionality to a form without the use of jQuery, plugins or HTML5 built-in field validation.

* On page load, the cursor appears in the "Name" field, ready for a user to type.
* "Your job role" text field appears when user selects "Other" from the Job Role menu.
* “Color” drop down menu is hidden until a T-Shirt design is selected.
* T-shirt color options are revealed based on the design selected.
* User cannot select two activities that are at the same time.
* Total cost of selected activities is calculated and displayed below the list of activities.
* When user picks a payment option, the chosen payment section is revealed and the other payment sections are hidden.
* Form cannot be submitted until the following requirements have been met:
  * Name field isn't blank.
  * Email field contains validly formatted e-mail address as in *example@example.com*
  * At least one checkbox under "Register for Activities" section must be selected.
  * If "Credit Card" is the selected payment option, the three fields accept only numbers: 
    * 13 to 16 digit credit card numbers
    * 5 digit zip code
    * 3 number CVV value
* Email field displays a different error message when the email field is empty than it does when the email address is formatted incorrectly. *This is accomplished without the use of HTML-5's built-in field validation*  
* Name, Email, and Credit Card info fields display errors in real time.
* On submission, the form provides an error indication or message for each field that requires validation.
* Unobtrusive JavaScript: All information required to fill out the form is visible when JavaScript is disabled.
* Tested on Chrome (Version 59.0.3071.115 (Official Build) (64-bit)), Firefox (54.0.1 (64-bit), & Safari (Version 10.1.2 (12603.3.8)).
