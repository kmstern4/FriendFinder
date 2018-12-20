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
    // $.ajax({ url: "/api/friends", method: "GET" })
    // .then(function(friendData) {
    //     for (var j=0; j < friendData.length; j++) {
    //         var scoreDiff = 0;
    //         for (var i=0; i < friendData[j].score.length; i++) {
    //             scoreDiff += friendData[j].score[i] + newFriend.score[i];
    //             console.log(`Current Score Difference: ${scoreDiff}`);
    //         }
    //         console.log(`Score difference for Friend ${j}`);
    //     };
    // })
});

