var app = angular.module('controllers.hextoui', ['ngRoute', 'ui.bootstrap']);

app.controller("HexToUICtrl", function($scope, $filter) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    $scope.title = "HEX to UIColor Converter";

    // Roll Tide
    $scope.hexValid = true;
    $scope.alphaValid = true;
    $scope.alpha = "1.0";


    function convertHexToRgb(hex) {
        hex = hex.replace('#','');
        var r = (parseInt(hex.substring(0,2), 16)/255).toFixed(2);
        var g = (parseInt(hex.substring(2,4), 16)/255).toFixed(2);
        var b = (parseInt(hex.substring(4,6), 16)/255).toFixed(2);

        console.log(hex);

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            var tempHex = "#" + hex;
            $scope.style =  { bgColor: tempHex };

            $scope.hexValid = true;
            $scope.uiColor = {
                "r": r,
                "g": g,
                "b": b,
            };
            console.log(r);
            console.log(g);
            console.log(b);
        } else {
            $scope.hexBgColor = {'background-color':'#FFF'};
            $scope.hexValid = false;
            console.log("Invalid.");
        }

        console.log("--------------");
    }

    $scope.hexToRgb = function(hex) {
        if ($scope.hex.length == 3) {
            var tempHex = hex + hex.charAt(2) + hex.charAt(1) + hex.charAt(0);
            convertHexToRgb(tempHex);
        } else if ($scope.hex.length == 6) {
            convertHexToRgb($scope.hex);
        } else {
            $scope.hexValid = false;
        }
    };

    $scope.alphaChanged = function(alpha) {
        // alpha = $filter('number')(alpha, 1);
        if (!isNaN(alpha)) {
            if ((alpha >=0) && (alpha <=1)) {
                console.log("Yes");
                $scope.alphaValid = true;
                $scope.alpha = alpha;
            } else {
                console.log("ERROR");
                $scope.alpha = "1.0";
                $scope.alphaValid = false;
            }
        } else {
            $scope.alpha = "1.0";
            $scope.alphaValid = false;
        }


    };

});