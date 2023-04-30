# Learning_MVC-Node-Express
Started learning MVC with Node&amp;Express, this repository contains all the work i done. A kind of backup.

# What is MVC?
MVC stands for Model View Controller.
MVC is a Applicaton designing Architecture used to standerize an application for production level, by using MVC your application becomes more easy to develop with a team.
MVC is a industry standard and a Best Practise.

![](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes/mvc_express.png)


## Model
Model handles the database part of an application, its main task is to interact with a database/storage and read/write data to it, a model is accessible by Controller.

The model determines how a database is structured, defining a section of the application that interacts with the database. This is where we will define the properties of a user that will be store in our database.

## View
View handles the presentation part of an applicaion, its main task it to create presentation for the user using the data provided by the controller, it used a template for this process.

The view is where end users interact within the application. Simply put, this is where all the HTML template files go.

## Controller
The controller interacts with the model and serves the response and functionality to the view. When an end user makes a request, it’s sent to the controller which interacts with the database.

You can think of the controller as a waiter in a restaurant that handles customers’ orders, which in this case is the view. The waiter then goes to the kitchen, which is the model/database, and gets food to serve the customers, which is the controller handling the request.

## Routes
Route folder contain routes for diffrent endpoints of an application.

# Work-Flow.
The whole flow is described in the index.js file of an app, it is the entry point for any MVC application.
Firstly the request is handles by the routes, routes is an index file that handles all request sent to the server,
Then the routes pass the request to the appropriate controller.
Contoller then uses its internal logics to process the request,it interacts with the model.
Model is uses to fetch and send back information to the database.,and then to controller.
Controller then processed the information and sends it to views.
Views create a presentation for that information.and sends the presentation (HTML) back to the controller,
And at last, the controller shows the information back to the user.
This is the working flow of a MVC application.

# Implementation in Express&Node.
A Standarized MVC Application looks like this-
[ the repo 😂]

The requests can be sent to this server/app,
* send a GET request to localhost:3000/users to get all users.
* send a POST request to localhost:3000/users to add a new user.
* send a DELETE request to localhost:3000/users to delete a user.

## Flow in our Application-
* Server is started from index.js, then index.js tells routes to handle upcoming requests,
* Routes handles types of request and tells the respective controller to process the request,
* Contoller handles the request and uses diffrent models to manipulate the data,
* Models works with database(inbuilt here) & gives response to controller,
* Views (router again here) makes presentation & gives response to controller.
* Controller sends the presentation back to user using routes.

# Notes-
1. Any middleware required/imported on the main index.js page, will be availble to any page which will have instance to main page.
eg- the express.json allows to pass the request body(req.body.anyJsonKeyName).
without it we wont be able to parse it, in the controller page, we needed it, but we didnt required it, it worked out of the box. more on that page.
2. The app.route(...) chainable handler & the express.Router() class can be chained together, to make chainable request handler and exported simultaneously.
as done it routes.

### This is what i learnt about MVC in a day, remained confused for a while about MVC before today, but after implementing it today, everything is crystal clear✨
## Hope it helps.😉🚀