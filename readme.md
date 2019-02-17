Requirements:
1. Mongodb (https://docs.mongodb.com/manual/installation/)
2. node (https://nodejs.org/en/download/)
3. Mongoose (on the terminal type: npm install mongoose)

Step1: Open mongo in terminal by typing 'mongo' on the terminal
Step2: If there is no error mongo terminal will Open
Step3: Type the following code(s) to get the images or posts
        db.blogs.insert({"Title": "New Blog 2"},{"image": "https://images.unsplash.com/photo-1548535870-27d153886ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}, {"body": "This is a test blog"});
Step4: You can insert as much content as you want. Change the images etc..or even update the contents.

Step5: Open the app by using "node app.js" on the terminal(not in the mongo terminal, ofcourse!).
Step6: Open the browser and type localhost:"whatever the port number you defined on the app.listen() route" eg; localhost:8000

Step7: Sit back and enjoy tweaking the code and make it even better.
