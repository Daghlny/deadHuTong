
function adjust_panel_height()
{
    var content_panel_height = $("#real-panel").height();
    $("#side-panel").css({'height':content_panel_height+160+'px'});
}