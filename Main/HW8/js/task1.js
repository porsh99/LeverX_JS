var data = [];

function start() {

    butGet();

}

function butGet(){
    clearTableData();
     if (getInfo()) {
         upDataToTable(data);
     }
}


function getInfo() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/TripPinServiceRW",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function butCount() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/TripPinServiceRW/?$select=value",
        success: function (_data) {
            
            show("GET COUNT - Load data sucsess" + _data);

            show(_data);
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function upDataToTable(_data) {
    var table = document.getElementById("table-data");
    for (var i = 0; i < _data.length; i++)
        table.appendChild(getRowToDataTable(_data[i]));

}

function getRowToDataTable(dataElement) {
    var row = document.createElement("tr");
    row.appendChild(getTD(dataElement.name));
    row.appendChild(getTD(dataElement.kind));
    row.appendChild(getTD(dataElement.url));

    return row;
}

function getTD(value) {
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
}


function show(value)
{
    console.log(value);
}

function clearTableData()
{
    var table = document.getElementById("table-data");

    while(table.childElementCount != 1)
    {
        table.removeChild(table.lastChild);
    }
}