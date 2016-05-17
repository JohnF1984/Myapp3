#Assignment 2 - MEAN app.

Name: John Fitzpatrick

###Overview.
Based on the inspirational George Constanza (of Seinfeld fame) who became rich by creating an app that listed all the public toilets in New York City and where they were, I decided I wanted to do something similar for first time parents who want a one stop shop for all baby friendly locations in the area where they live. The source of this idea came from a family holiday last year in which we were travelling from Waterford to Westport but had to stop somewhere around Gort to feed our child. I thought at the time... Wouldn't it be wonderful if there was an application that would let me know where such a public amenty might be? 

This is an attempot at such an application. It has such a list of breastfeeding facilities available. (populated initially by a seed.js file). Here you can search by county/town or what's the most popular. Underlying information for each facility deals with on-site parking/directions and other baby friendly amenities close by. Parents can also recommend other breastfeeding locations that are not on the list.  

In addition, there is a also a community form for parents to leave feedback about various experiences they have had while out with their young children. Here you can search these experiences by type, town/county and most popular. 

NEW FOR ASSIGNMENT 2: As well as storing all the information above via mongodb (and so the backend in complete), there is an admin section, which is logged into via a firebase authorisation and allows a user to:
Delete posts/Delete breastfeeding locations sugestions/add breastfeeding locations/Delete breastfeeding locations/add breastfeeding locations details/ edit or delete Delete breastfeeding locations details/register new admin users.


###List of user features (excluding user registration and authentication)  
 
 + List of Breastfeeding facilities around Ireland - and to filter a search around these (static list stored in json data)
 + Feature to search these facilities by town/county and most popular and to upvote individual choices 
 + NEW - Ability (via an admin logon) to add or remove these facilities from the list
 + Ability to drill down to view each facility - includes information on parking/direction/other baby amenities (static data stored in json data)
 + NEW - Ability (via an admin logon) to add/remove or edit this information
 + Feature to suggest further breastfeeding facilities to be added to the above list
 + Feature to search these suggestions by town/county and most popular and to upvote individual choices 
 + NEW - Ability (via an admin logon) to remove this information from the app
 + Feature to create 'baby adventure story'.Basically a community form to share feedback with other parent
 + NEW - Ability (via an admin logon) to remove these posts from the app
 + Feature to search these stories by town/county/type and most popular and to upvote individual choices


###Installation requirements.
+ AngularJS 1.x
+ Bootstrap 3
+ Firebase
+ Node
+ Mongoose
+ Express

To view the application. Pull all files from this directory (Myapp3) and In a terminal redirect to that directory. Run the http-server and enter the following in the browser: http//locahost/8080/BabyAdventuresApp/#/home 

###Data Model Design.

All data for this app is stored on Mongodb. I am using four API's to move the data from mongodb and my application and visa versa. 

Here is a framework for how the data is stored using 4 API's

![][image2]

For further details on the individual API's please go to the API folder saved above. 

Here is a framework for how this data is then either created/removed or viewed by the different end user

![][image1]

The data is all relevent to what you might want to find for such an app

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image3]

Here is a diagram outlining the user interface

![][image4]

###UI Design.

Here is a diagram outlining the overall user interface

![][image4]

Here are screenshots of these pages:

Screenshot of /landing

![][image7]

Screenshot of /facilities:

![][image8]

Screenshot of /facilities/:id:

![][image9]

Screenshot of /add

![][image10]

Screenshot of /feedback

![][image11]

Screenshot of /about

![][image12]

Screenshot of /home

![][image13]

Screenshot of /adminmenu

![][image15]

Screenshot of /register

![][image16]

Screenshot of /addfacilities

![][image17]

Screenshot of /deletefacilities

![][image18]

Screenshot of /adddetails

![][image19]

Screenshot of /editdetails

![][image20]

Screenshot of /deleteposts

![][image21]

Screenshot of /deleteAdds

![][image22]


###Routing.

. . . . List each route supported and state the associated view . . . . . 
+ /landing - Home page
+ /about - Information about this app (the inspiration behind it etc)
+ /facilities - lists all breastfeeding facilities
+ /facilities/:id/{location} - information on that specific breastfeeding facility
+ /add - page that allows users to suggest additional facilities
+ /feedback - Page that allows users share their baby adventure experiences
+ /feedback/:id/comment - view/add comments on each specific post from the /feedback
+ /home - Admin Login page
+ /adminmenu - Menu page for admin user who has logged on
+ /addfacilities - front end page for adding new breastfeeding locations for admin user who has logged on
+ /deletefacilities - front end page for deleting breastfeeding locations for admin user who has logged on
+ /adddetails - front end page for adding breastfeeding location details for admin user who has logged on
+ /editdetails - front end page for editing/removing breastfeeding location details for admin user who has logged on
+ /deleteposts - front end page for deleting babyadventure posts for admin user who has logged on
+ /deleteAdds - front end page for deleting breastfeeding location suggestions for admin user who has logged on
+ /deletecomment - front end page for deleting comments for admin user who has logged on
+ /Register - Register page for new Admins


### Web API Endpoint Reference



As referenced above, I have 4 API's. 
.
+ FACILITY:
+ GET: /api/Facilities |return a list of breastfeeding locations |
| 
+ POST: /api/Facilities |add a new entry to the list of breastfeeding locations |
|
+ DELETE: Facility/api/Facilities/:id |Delete an entry from the list of breastfeeding locations |
|

+ DETAILS:
+ GET: /api/DETAILS |return all data from the drill down information for the breastfeeding locations |
| 
+ POST: /api/DETAILS |add data to the drill down information for the breastfeeding locations |
|
+ PUT: /posts/api/DETAILS/:id | edit data for the drill down information for the breastfeeding locations |
| 
+ DELETE: /posts/api/DETAILS/:id | delete data for the drill down information for the breastfeeding locations |

+ POSTS:
+ GET: /api/Posts |return a list of babyadventure posts |
| 
+ POST: /api/Posts |add a new babyadventure post |
|
+ DELETE: /posts/api/posts/:id | delete a babyadventure post|
+ DELETE: /posts/api/posts/:id/comment | delete a comment from a babyadventure post|

+ ADDS:
+ GET: /api/Adds |return a list of breastfeeding location suggestions |
| 
+ POST: /api/Adds |add a new entry to the list of breastfeeding location suggestions |
|
+ DELETE: /Adds/api/Adds/:id | delete a breastfeeding location suggestion |



###Extra features

All features used in the creation of this app came from or were extended from the activities developed in the labs for this course. These were amended in the following way:
Developed Phonecatalogue app:
+ Added upvotes to the list of statis data created from a jsaon file
+ changed the structure of the json file to make information more relavent
+ Added a link to the drill down page to leave feedback (which linked back to the feedback page)
+ Changed the search criteria in the sidebar to search by town, county and what was most popular
Developed hackerapp:
+ Resturctred page so that data was more relavent, including changing the appearence of the entry boxes and what the output was.
+ Added a drop down list to the data entry form
+ Changed the search criteria in the sidebar to search by type (from drop down), town, county and what was most popular
+ The search by type filter means that the app will only show posts that relate to the option chosen and not everything else in a specific order
+ Used this specific feature to create a second coment/post page that allows users reccommend additional breastfeeding facilities
Other pages:
Added a navbar to each page (via index)
+ Added Home and about pages with specific bootstrap conditioning. This included changing the background to stored inamges for improved appearence
+ User authentication - Added a firebase structured user authentication* This is only half done. As you can see, you can still freely move around the application - so the log on authentication is actually useless
NEW FEATURES FOR ASSIGNMENT 2
+ Developed the phone catalogue app using two API's for a MEAN application. This was not covered in the labs
+ Developed additional functionality around adding/removing/editing this information. While this was covered in the lads to a certain degree for hackernews and contacts app, there was added complexity here.
+ Developed an ADMIN USER functionality, so that certain users (who can be authorised via firebase) can now do additional tasks. this is all detailed above



###Independent learning.

I sure wished I had stored the url's of every stack overflow discussion page now. Here are a few of the sites searched for inspiration in trying to find out how to do the following:
+ How does Angular work
+ What is bootstrap
+ Form validation
+ How to create an interactive map with html (nice if I had time)
+ User authentication - How to add it
+ How to add a form with a drop down list
+ How to edit a json file and save the changes from the front end (its impossible you dummy)
+ how to style a webpage
+ how to hide a navbar for a particular page
+ how to use firebase to redirect all views to the login screen
+ how to use 2 API's to store information for an application
+ how to use create a table to show callback results from mongodb
+ how to use create array's in mongodb
+ how to use post nested information into mongodb
+ how to store pictures in mongodb


Links:
+ https://docs.angularjs.org/api/ng/directive/ngController
+ https://scotch.io/tutorials/angularjs-form-validation
+ http://viralpatel.net/blogs/angularjs-controller-tutorial/
+ http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
+ http://embed.plnkr.co/tg25kr/preview
+ http://stackoverflow.com/questions/30791458/username-and-password-validation-in-html
+ http://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link
+ http://dev.filkor.org/2013/04/14/create-an-interactive-map-using-javascript-and-html-5-canvas/
+ http://www.w3schools.com/css/css_font.asp
+ http://stackoverflow.com/questions/16261348/descending-order-by-date-filter-in-angularjs
+ http://v4-alpha.getbootstrap.com/components/input-group/
+ http://www.w3schools.com/html/html_forms.asp
+ http://www.w3schools.com/tags/att_input_type.asp
+ http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_time
+ http://www.w3schools.com/html/html_form_elements.asp 
+ http://www.w3schools.com/cssref/css_colors.asp
+ https://docs.mongodb.org/manual/reference/database-references/
+ https://www.quora.com/What-are-the-ways-to-insert-an-image-path-into-the-MySQL-database-and-save-it-in-the-folder-and-display-the-same-image-in-a-web-page-via-PHP
+ https://kraken.io/docs/integration-url
+ http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
+ http://stackoverflow.com/questions/15413630/what-is-the-proper-pattern-for-nested-schemas-in-mongoos
+ http://mongoosejs.com/docs/guide.html
+ http://stackoverflow.com/questions/17147821/how-to-make-a-whole-row-in-a-table-clickable-as-a-link
+ http://stackoverflow.com/questions/11922383/access-process-nested-objects-arrays-or-json
+ https://github.com/gwmccull/angular-phonecat-mean/blob/master/app/js/controllers.js
+ https://www.quora.com/How-to-insert-a-nested-JSON-string-into-mongodb





[image1]: ./image1.png
[image2]: ./image2.png
[image3]: ./image3.png
[image4]: ./image4.png
[image5]: ./image5.png
[image6]: ./image6.png
[image7]: ./image7.png
[image8]: ./image8.png
[image9]: ./image9.png
[image10]: ./image10.png
[image11]: ./image11.png
[image12]: ./image12.png
[image13]: ./image13.png
[image14]: ./image14.png
[image15]: ./image15.png
[image16]: ./image16.png
[image17]: ./image17.png
[image18]: ./image18.png
[image19]: ./image19.png
[image20]: ./image20.png
[image21]: ./image21.png
[image22]: ./image22.png
