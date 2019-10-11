let urlParms = {};

$().ready(() => {
    $("button").click(() => {
        getUser();
    });
});

const refresh = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#pname").text(user.firstname + " " + user.lastname);
    $("#previewer").text(user.isReviewer ? "Yes" : "No");
    $("#padmin").text(user.isAdmin ? "Yes" : "No");
}

const getUser = () => {
    let id = $("#xid").val(); // get the id to display
    //userdetail(id);  // the old version
    UserService.get(id)  // this method is found in the user.service.js file
        .done( (res) => {       // res = response, fred variable
            console.log("User:", res);
            refresh(res);
        });
};