var hasContentEditableSupport = function(){
    return(document.getElementById("edit_profile_link").contentEditable != null)
};

if(hasContentEditableSupport()){
    $("#edit_profile_link").hide();
    var status = $("#status");
    $("span[contenteditable]").blur(function(){
        var field = $(this).attr("id");
        var value = $(this).text();  
    
        var resourceURL = $(this).closest("ul").attr("data-url");
    
        $.ajax({
            url: resourceURL, 
            dataType: "json",
            method: "PUT",
            data: field + "=" + value,
            success: function(data){
                status.html("The record was saved.");
            },
            error: function(data){
                status.html("The record failed to save.");
            }
        });  
    });
}