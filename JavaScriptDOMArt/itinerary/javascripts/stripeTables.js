function stripetables() {
    if (!document.getElementsByTagName) { return false; }
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].style.backgroundColor = "#ffffcc";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

addLoadEvent(stripetables);