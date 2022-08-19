# In this repository you can find REST API for CRWN Project
- As you have seen in ZTM course, Yihua used firebase which was complicated for writing utils.js file

## How can I make a GET/POST:
> It works only in local machine with installed Mongo Client 

## /register - POST METHOD
> Example:
axios.post('http://localhost:5000/register', {username,password,email}, {withCredentials:true})
  .then(res => console.log(res.data));
  
> In this case you will see the data what you got from post method

## /login - POST METHOD
> Example:
axios.post('http://localhost:5000/login', {username,password}, {withCredentials: true})
  .then(res => console.log(res.data));
  
 > That method will work if you created an account stored into DB
 
 ## /categories - GET METHOD
 > Example:
 axios.get('http://localhost:5000/categories')
  .then(res => console.log(res.data));
  
 > Will output all data related to clothes
 
 ## /user - GET METHOD
 > Created for React state manager which will get data from cookie and set it to currentUser
