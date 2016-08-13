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
    $scope.email = "youremail@email.com";
    $scope.twitter = "username";
    $scope.facebook = "username";
    $scope.telephone = "+0000 000 000 000";
    $scope.intro = "This is the introduction of you and your portfolio, this section explains who you are and what you like in a very short paragraph.";
    $scope.about = "Here you can talk in a bit more detail about the stuff you have done for the past years, what you like to do in general, where you want to do later on and even your work philosophy. \n\
\n\
The main idea is to give the reader a sense of who you are and where are you heading to. This should be a bit more space since well... we have it, thus we should be using it as much as we can.",
    $scope.techSkills = [
        "Skill A",
        "Skill B", 
        "Skill C", 
        "Skill D"
    ];
    $scope.personalSkills = [
        "Skill A",
        "Skill B",
        "Skill C",
        "Skill D"
    ];
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
            name: "Project 3",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png"
        },
        {
            name: "Project 4",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png"
        },
        {
            name: "Project 5",
            description: "Here you describe what the project you worked on was about and what's intersting about it,also if you have space you can explain what you did that might matter to whoever is reading.",
            role: "Role 1, Role 2...",
            technology: "Technology 1, Technolog 2...",
            platform: "Android, IOS...",
            members: "Name A, Name B....",
            teaser_image: "img/portfolio/placeholder.png"
        }
    ];
    $scope.showProject = function (project) {
        
        var images = new Array();
        project.imgs.forEach(function (e){
            images.push({ 'source' : project.img + e, 'type': 'image' });
        });
        
        var lightbox = UIkit.lightbox.create(images);
        lightbox.show();
    };
    $scope.getIframeSrc = function (src) {
        return 'https://www.youtube.com/embed/' + src;
    };
});