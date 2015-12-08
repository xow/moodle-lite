app.controller('AppCtrl', function($scope, $mdSidenav) {
    $scope.toggleLeftMenu = function() {
        $mdSidenav('left').toggle();
    };

    $scope.toggleRightMenu = function() {
        $mdSidenav('right').toggle();
    };

    $scope.me = {
        fullname: "Ryan Wyllie",
        image: "me.jpg"
    }
});
app.controller('MessageCentreCtrl', function($scope) {
    $scope.messageCentre = {
        isOpen: false,
        chats: [
            {
                fullname: "John Okely",
                image: "you.jpg",
                messages: [
                    {
                        incoming: 1,
                        text: "How are you? 1"
                    },
                    {
                        incoming: 1,
                        text: "How are you? 2"
                    },
                    {
                        incoming: 0,
                        text: "How are you? 3"
                    },
                    {
                        incoming: 0,
                        text: "How are you? 4"
                    },
                    {
                        incoming: 1,
                        text: "How are you? 5"
                    },
                    {
                        incoming: 0,
                        text: "How are you? 6"
                    }
                ]
            },
            {
                fullname: "Greg Smith",
                image: "you2.jpg",
                messages: [
                    {
                        incoming: 1,
                        text: "Hello there"
                    },
                    {
                        incoming: 1,
                        text: "What's happening?"
                    },
                    {
                        incoming: 0,
                        text: "Not much!"
                    }
                ]
            },
        ]
    };
});
