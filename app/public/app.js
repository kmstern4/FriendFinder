var newFriend;

$("#submit").on("click", function(event) {
    event.preventDefault();
    newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        score: [
            $("#one").val(), $("#two").val(), $("#three").val(), $("#four").val(), $("#five").val(), $("#six").val(), $("#seven").val(), $("#eight").val(), $("#nine").val(), $("#ten").val()
        ]
    };
    console.log(newFriend);
    $.ajax({ url: "/api/friends", method: "GET" })
    .then(function(friendData) {
        var dataArr = [];
        for (var i=0; i < friendData.length; i++) {
            dataArr.push(friendData[i].score);
        };
        for (var i=0; i < dataArr.length; i++) {
            
        }
    })
});

