(function () {

    angular.module('bpmEr', [])
        .controller('bpmController', bpmController);
    bpmController.$inject = ['$scope'];
    function bpmController($scope) {
        var masterButton1 = "off";
        var masterButton2 = "off";
        var inputBpm1;
        var inputBpm2;
        var bpmResult;
        var masterBpm;
        var bpmAdj1;
        var bpmAdj2;
        $scope.masterToggle1 = function () { //function to give master bpm to button1
            document.getElementById('masterButton2').style.backgroundColor = 'white';
            document.getElementById('masterButton1').style.backgroundColor = 'deeppink';
            masterButton1 = "on";
            masterButton2 = "off";
            if (masterButton1 === "on") {
                masterBpm = $scope.inputBpm1;
            }
            else if (masterButton1 === "off") {
                masterBpm = $scope.inputBpm2;
            }
        };
        $scope.masterToggle2 = function () {//function to give master bpm to button2
            document.getElementById('masterButton1').style.backgroundColor = 'white';
            document.getElementById('masterButton2').style.backgroundColor = 'deeppink';
            masterButton2 = "on";
            masterButton1 = "off";
            if (masterButton1 === "on") {
                masterBpm = $scope.inputBpm1;
            }
            else if (masterButton1 === "off") {
                masterBpm = $scope.inputBpm2;
            }
        };
        $scope.masterBpmToggle = function () { //function to assign master the rootbpm attr, to be used in future iteration
            if (masterButton1 === "on") {
                masterBpm = $scope.inputBpm1;
            }
            else if (masterButton1 === "off") {
                masterBpm = $scope.inputBpm2;
            }
        };
        $scope.goButton = function () {
            if (masterButton1 === "on") {
                inputBpm1 = $scope.inputBpm1;
                inputBpm2 = $scope.inputBpm2;
                result = bpmMath(inputBpm1, inputBpm2);
            }
            else if (masterButton1 === "off") {
                inputBpm1 = $scope.inputBpm1;
                inputBpm2 = $scope.inputBpm2;
                result = bpmMath(inputBpm2, inputBpm1);
            }
        };
        function bpmMath(track1, track2) {
            if (masterButton1 === "on") {
                x = track1 * 100;
                y = track2;
                bpmResult = x / y;
                if (bpmResult > 100) {
                    bpmResult = Math.round(100 * bpmResult) / 100;
                    bpmResultFinal = bpmResult - 100;
                    bpmResultFinal = bpmResultFinal.toFixed(2);
                    $scope.bpmAdj2 = "+" + bpmResultFinal + "%";
                    $scope.bpmAdj1 = "+" + 0 + ".00" + "%";
                }

                else {
                    bpmResult = Math.round(100 * bpmResult) / 100;
                    bpmResultFinal = bpmResult - 100;
                    bpmResultFinal = bpmResultFinal.toFixed(2);
                    $scope.bpmAdj2 = /*"+" + */bpmResultFinal + "%";
                    $scope.bpmAdj1 = "+" + 0 + ".00" + "%";
                }
            }
            else {
                if (masterButton2 === "on") {
                    x = track1 * 100;
                    y = track2;
                    bpmResult = x / y;
                    if (bpmResult > 100) {
                        bpmResult = Math.round(100 * bpmResult) / 100;
                        bpmResultFinal = bpmResult - 100;
                        bpmResultFinal = bpmResultFinal.toFixed(2);
                        $scope.bpmAdj1 = "+" + bpmResultFinal + "%";
                        $scope.bpmAdj2 = "+" + 0 + ".00" + "%";
                    }

                    else {
                        bpmResult = Math.round(100 * bpmResult) / 100;
                        bpmResultFinal = bpmResult - 100;
                        bpmResultFinal = bpmResultFinal.toFixed(2);
                        $scope.bpmAdj1 = bpmResultFinal + "%";
                        $scope.bpmAdj2 = "+" + 0 + ".00" + "%";
                    }

                }
            }
            
        }
    }


  })();
