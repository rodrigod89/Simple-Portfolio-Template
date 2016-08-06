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
            name: "Project 1",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png",
            video: "3bN_wOYm9ck",
            img: "img/portfolio/project01/",
            imgs: [
                "screenshot01.png",
                "screenshot02.png",
                "screenshot03.png"
            ],
            links: [
                {
                    icon: "external-link",
                    url: "http://www.goldenfrogstudios.com/"
                },
                {
                    icon: "youtube-play",
                    url: "https://youtu.be/diEgroqiHeA"
                }
            ]
        },
        {
            name: "Project 2",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png",
        },
        {
            name: "Project 3",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png",
        },
        {
            name: "Project 4",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png",
        },
        {
            name: "Project 5",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png",
        }
    ];

    $scope.getIframeSrc = function (src) {
        return 'https://www.youtube.com/embed/' + src;
    };
});