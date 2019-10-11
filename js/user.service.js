
const url = "http://localhost:49205/api/users";

let UserService = {}

// gets called in userlist.js (?)  The userlist.js that call? is called by?
// ...the thing that ldfdj
//our user-specific jdkjf can get the data, call? the refresh metehod.
// now we have a user specific method that calls another user spcific method.
// the service is ?? specific, the serive?  doesn't know, doesn't HAVE to know, shouldn't know, the fjdfjfjljkj

// the call to $.getJON, to $.ajax, does jqXHR.  That's hard to understand.  
// the servie calls jfkdjfd      gets jqXHR, we can call done on IT.  

UserService.list = () => {
    return $.getJSON(url);
};
UserService.get = (id) => {
    return $.getJSON(`${url}/${id}`);
};
UserService.insert = (user) => {
    return $.ajax({     // next 6 lines:  One big JSON object
        method: "POST",
        url: url,   // no extra parameters needed here
        data: JSON.stringify(user),     // get quotes around strings.  Utility
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
    
}
UserService.update = (user) => {
    return $.ajax({
        method: "PUT",
        url: `${url}/${user.id}`,   
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
    
}

// pieced together from update, above
UserService.delete = (user) => {
    return $.ajax({    
        method: "DELETE",
        url: `${url}/${user.id}`,   
        data: JSON.stringify(user), 
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
    
}

// the page-specific are going to do the "done", "fail", etc., NOT the service

// what we'll need:
//1 html.  js page for each of 5 functins.  ONE servicde

// user service.  vendor servicee . product service.  
//WHAT?  


// what happened to "done", "fail", and "always"?  It turns out, .getJSON() is an object in itself,
// and it returns some data.  if you put it on the R. side of equals, it will set fjdlfjdl to an object, 
// and that object is, in jQuery terms, jqXHR
//jqXHR = $.getJSON();  ("getJSON returns jqXHR")
//and this jqXHR that has the done method, the fail method, the always method

// in C# terms: 
// var user = new user();
// var name = user.firstname;
//  Combine the two lines:  var name = (new User()).Firstname;
// this relates to jqXHR.  An analogy.