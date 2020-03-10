var jsPrintAll = function () {
    setTimeout(function () {
        window.print();
    }, 500);
}


function printDiv(elementId) {
    var a = document.getElementById('printing-css').value;
    var b = document.getElementById(elementId).innerHTML;
    window.frames["print_frame"].document.title = document.title;
    
    window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
}
function getTime() {
    const dateText = document.querySelector('#dataInvoice');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var min = String(today.getMinutes()).padStart(2, "0");
    var hours = new Date().getHours();
    var mid = 'am';
    if (hours == 0) { //At 00 hours we need to show 12 am
        hours = 12;
    } else if (hours > 12) {
        hours = hours % 12;
        mid = 'pm';
    }
    today = mm + '-' + dd + '-' + yyyy + '-' + hours + ':' + min + mid;
    dateText.textContent = today;
};


getTime()