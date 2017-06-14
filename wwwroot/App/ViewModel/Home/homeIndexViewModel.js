myApp.controller('homeController', function ($scope, $log, $http, $window, macroBitApiService) {

  
    var columnDefs = [
        { headerName: "name", field: "name" },
        { headerName: "id", field: "id" },
        { headerName: "last", field: "last" },
        { headerName: "lowestAsk", field: "lowestAsk" },
        { headerName: "highestBid", field: "highestBid" },
        { headerName: "percentChange", field: "percentChange" },
        { headerName: "baseVolume", field: "baseVolume" },
        { headerName: "quoteVolume", field: "quoteVolume" },
        { headerName: "isFrozen", field: "isFrozen" },
        { headerName: "high24hr", field: "high24hr" },
        { headerName: "low24hr", field: "low24hr" }
    ];

    $scope.gridOptionsAgGruid = {
        columnDefs: columnDefs,
        rowData: null,
        enableFilter: true,
        enableColResize: true,
        enableSorting: true
    };

    $scope.gridOptionsUIGrid = {
        data: null,
        columnDefs: columnDefs
    };

    macroBitApiService.getPoloniexData().then(function (response) {

        console.log(response.data);

        //Post treatment data
        var ar = [];
        for (item in response.data) {
            debugger;
            if (response.data[item] == undefined) continue;
            response.data[item].name = item; //add name in the object
            ar.push(response.data[item]);
        }

       

        //Bind data to UI-Grid
        $scope.gridOptionsUIGrid = {data: ar};

        //Bind data to Ag-Grid
        $scope.gridOptionsAgGruid.api.setRowData(ar);  

    }, function (error) { $log.error(error.message); });
});