var newFriend;
var diffArr = [];
var match;
var userName;
var userPhoto;

$("#submit").on("click", function(event) {
    event.preventDefault();
    newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#one").val(), $("#two").val(), $("#three").val(), $("#four").val(), $("#five").val(), $("#six").val(), $("#seven").val(), $("#eight").val(), $("#nine").val(), $("#ten").val()
        ]
    };
    console.log(newFriend);
    $.ajax({ url: "/api/friends", method: "GET" })
    .then(function(friendData) {
        for (var j=0; j < friendData.length; j++) {
            var scoreDiff = 0;
            for (var i=0; i < friendData[j].scores.length; i++) {
                scoreDiff = Math.abs((parseInt(friendData[j].scores[i]) - parseInt(newFriend.scores[i]))) + scoreDiff;
            }
            console.log(`Score difference for Friend ${j}: ${scoreDiff}`);
            diffArr.push(scoreDiff);
        };
        friendMatch(friendData);
        showModal();
    })
});

function friendMatch(data) {
    var smallestNum = Math.min(...diffArr);
    console.log(`Smallest Number is ${smallestNum}`);
    var smallIndex = diffArr.indexOf(smallestNum);
    console.log(`It occurs at index ${smallIndex}`);
    match = data[smallIndex].name;
    console.log(match);
    $("#captain-match").text(match);
};

function showModal() {
    $(".modal").css("display", "block");
   
    $("window").on("click", function() {
        $(".modal").style.display = "none";
    });
};
$(".close").on("click", function() {
    $(".modal").css("display", "none");
});