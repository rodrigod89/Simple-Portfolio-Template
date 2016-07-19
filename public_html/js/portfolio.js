var app = angular.module('Portfolio', []);
app.controller('main', function ($scope) {
    $scope.name = "Name";
    $scope.profession = "Profession";
    $scope.intro = "This is the introduction of you and your portfolio, this section explains who you are and what you like in a very short paragraph.";
    
    $scope.porfolio = [
        {
            name: "Project",
            description: "Description of the project and what it was about.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            main: "https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&amp;showinfo=0",
            img: "img/portfolio/",
            imgs: [
                "placeholder.png",
                "placeholder.png",
                "placeholder.png"
            ]
        }
    ];
});