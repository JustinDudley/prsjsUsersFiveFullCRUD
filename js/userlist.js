function refresh(users) {
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(var user of users) {
        // if(!user.isAdmin) {
        //     continue;
        // }
        var tr = "<tr>";
        tr += `<td>${user.id}</td>`
        tr += `<td>${user.username}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}

// what is this?  Is this a useful block?  Is this equivalent to the 
// two below?  It was the first thing there.  Doesn't look like it does much.
//  OH.  This is how it was yesterday.  Then we made today's modifications?
// const getUsers = () => {
//     userlist();
// }

// this block could be used in place of above.  It makes it more obvious.
// it's more steps, does the same thing.  Good for students.  
// //create variable, then make method call.  Unlikely a colleague will do this, too many steps:
// Wait, is this ALSO a version of yesterday's code?  Is this not functional with today's 
// changes to user.service.js?   Or does this block go along with the third block below?
// Or, none of the above?
// const getUsers = () => {
//     let jqXHR = UserService.list()
//     jqXHR.done( (res) => refresh(res) );
// }


//And here is another block.  Is this a THIRD way?? Does this even belong in
 //this file?  I think yes
const getUsers = () => {
    // let jsxHR = UserService.list)
    // something kjfkjfkjfkfjk
    UserService.list()
    .done( (res) => refresh(res) );
}