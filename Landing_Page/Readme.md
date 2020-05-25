# [Codepen Link](https://codepen.io/alokmishra051298/full/mdeoWoy)

# Build the navigation menu.
This will dynamically create a navigation menu based on the sections of the page. This can be a particularly useful trick when you begin working with content management systems or APIs when you are uncertain of where the items will be.
* Are you listening for an event for the navigation to build?
* Where are you placing the navigation?
* Where is the text for each navigation item coming from and where are you anchoring to?
* How are you going to add each navigation item to your menu? (Hint: there are several ways to do this. Do some research to figure out which makes the most sense for your situation. Performance? Clarity?).

# Add functionality to distinguish the section in view.
While navigating through the page, the section that is active in the viewport/closest to the top should be distinguished from the other sections.
* Are you listening for an event for sections to become active?
* How are you going to test which section should be highlighted?
* How can we use classList methods to change the CSS being displayed? What about removing that CSS?
* Check the HTML and CSS files to ensure that what you chose is updated in the other locations.

# Add the functionality to scroll to sections.
Clicking on a navigation item should scroll to the appropriate section of the page.
* Which event are you listening for (hint: you were just reading it)?
* There is a default event occurring that we need to stop. How?
* If you don’t recall how HTML page anchors work, [read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Examples) to figure out which variables you should set.
* There are several javascript methods for scrolling. Which seems like it may be the most simple?
