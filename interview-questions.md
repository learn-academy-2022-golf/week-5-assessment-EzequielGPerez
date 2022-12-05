# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: 
Calling a super will make it so the sub class can use its attributes. BUT you need to indicate which attributes you want to use in the sub class for them to be available for use. 

Researched answer: 
You need to use initialize method to invoke the super. Ruby will then send a message to the superclass looking for the method called initialize. Instance variables are local to the specific class they are in. Using super allows you to use the instance variables.

2. What is a gem?

Your answer:
Gems are already put together code to help other developers. There is a library to choose from. 

Researched answer:
Gems come from a Ruby package manager. The name of it is RubyGems. This is an open source library. Some gems are stand-alone programs. Make sure you require it at the top of your file. 

3. What is a relational database? Are there other kinds of databases?

Your answer: I don't know too much on how to define it. A relational database is a place that has data all organized with related information attached to each other. 

Researched answer:
A relational database is like a spreadsheet with information organized in rows and columns. Each row has an ID key to easily identify the data. Columns have the attributes. Many large business use this database type for its convenience. "Relational databases are used to track inventories, process ecommerce transactions, manage huge amounts of mission-critical customer information, and much more." 

source: https://www.oracle.com/database/what-is-a-relational-database/

4. What are primary keys? Why are they important?

Your answer: If I remember correctly, a primary key is a unique ID usually a number given to each piece of data. This is done so for example, if you have 2 Jason's and you don't know which one is which, you then give a primary key, 1 of them would be Jason 1 and the other Jason 2, that way you can differentiate between the 2. 

Researched answer: 
Each row has its own primary key, ID. Each ID is unique so there is no confusion with the data. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I am actually not sure what this is so I will have to give you a researched answer, sorry 

Researched answer:
HTTP verbs are request methods. They request a certain action to be done. These verbs can be safe, idempotent, or cacheable. It is safe when it doesn't change anything. It is read only. The R in CRUD. GET, HEAD and OPTIONS are safe http methods. Idemponent is when the request has the same effect over and over again. PUT and DELETE are idemponent. Casheable is when a response can be stored and used later on. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Standards used in a lot of languages to make reausable routes. They use HTTP methods and CRUD. It is a naming pattern. 

2. Ruby on Rails: Open source framework. It is useful because of its speed and easiness. 

3. Database migrations: Moving data from one source to another. It can change format too. We do this sometimes so shcemas can change as needed depending on the circumstances. 

4. Params: It is short for a parameters method. Usually work with GET or POST. This is a way a user can send info to the web app. There are 3 ways, a query parameter, submitting a form, and the URL. 

5. ERB: Stands for embedded ruby. Lets you create text, from templates. They are easy to write and maintain. It is a template engine. 
