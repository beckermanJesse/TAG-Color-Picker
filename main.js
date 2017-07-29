function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
};

function myFunction() {
    $('#myPopup').fadeIn(500);
    $('#myPopup').delay(1000);
    $('#myPopup').fadeOut(500);
}