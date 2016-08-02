var app = angular.module('Portfolio', []);

app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);
});

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
            main: "3bN_wOYm9ck",
            img: "img/portfolio/project01/",
            imgs: [
                "placeholder.png",
                "placeholder.png",
                "placeholder.png"
            ]
        },
        {
            name: "Project",
            description: "Description of the project and what it was about.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            main: "3bN_wOYm9ck",
            img: "img/portfolio/project01/",
            imgs: [
                "placeholder.png",
                "placeholder.png",
                "placeholder.png"
            ]
        }
    ];

    $scope.getIframeSrc = function (src) {
        return 'https://www.youtube.com/embed/' + src;
    };

//    UIkit.domObserve('uk-slider', function (element) {
//      UIkit.component.boot('slider');
//      UIkit.init(element);
//    });
});