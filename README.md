#Authentication workshop:

###Where we are in the challenge.

We have managed to send authentication details from the form on the frontend to our node-server. We tried using the request module to send the info from our backend to github but encountered problems, 

```
error: ({"message":"Bad credentials","documentation_url":"https://developer.github.com/v3"})
```
this was not due to user input error
and are now about to switch methods to a standard https node request. 
There is a good example here: https://nodejs.org/api/http.html
