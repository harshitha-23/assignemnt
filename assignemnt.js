$(document).ready(function(){

    console.log("entering...");
    var ADD_YOUR_TEXT = "";
    var EDIT_YOUR_CONTENT = "";

    var UPDATE_FONT_STYLE = "";
    var UPDATE_FONT_SIZE = "";
    var UPDATE_FONT_COLOR = "";

    $("#text_input").change(function(){
        ADD_YOUR_TEXT = $("#text_input").val();
        console.log("ADD_YOUR_TEXT : ",ADD_YOUR_TEXT);
    })


    const generate_text_content = (name) => {

        var list = <p class="text-center cursor-pointer" id="text_content">${name}</p>;

        return (list);
    
    }


    const callfortextContent = () => {

        $("#append_text_content").empty();

        $("#append_text_content").append(generate_text_content(ADD_YOUR_TEXT))   

        $("#text_content").click(function(){
            EDIT_YOUR_CONTENT = $("text_content").text();
            console.log("EDIT_YOUR_CONTENT : ",EDIT_YOUR_CONTENT);

            $("#edit_content_name").html(ADD_YOUR_TEXT);
            $("#replace_text").html(ADD_YOUR_TEXT)
        })   

    }


    $("#submit_button").click(function(){

        //$("#text_content").html(ADD_YOUR_TEXT); 

        EDIT_YOUR_CONTENT = $("text_content").text();
        console.log("EDIT_YOUR_CONTENT : ",EDIT_YOUR_CONTENT);

        $("#edit_content_name").html(ADD_YOUR_TEXT);
        $("#replace_text").html(ADD_YOUR_TEXT)

        callfortextContent(); 

    })


    $("#update_style").change(function(){
        UPDATE_FONT_STYLE = $("#update_style").val();
        console.log("UPDATE_FONT_STYLE : ",UPDATE_FONT_STYLE);
    })

    $("#update_size").change(function(){
        UPDATE_FONT_SIZE = $("#update_size").val();
        console.log("UPDATE_FONT_SIZE : ",UPDATE_FONT_SIZE);
    })

    $("#update_color").change(function(){
        UPDATE_FONT_COLOR = $("#update_color").val();
        console.log("UPDATE_FONT_COLOR : ",UPDATE_FONT_COLOR);
    })

    $("#replaced_text").change(function(){
        ADD_YOUR_TEXT = $("#replaced_text").val();
        console.log("ADD_YOUR_TEXT : ",ADD_YOUR_TEXT);

    })

    const generate_update_text_content = (ADD_YOUR_TEXT,UPDATE_FONT_STYLE,UPDATE_FONT_SIZE,UPDATE_FONT_COLOR) => {

        var list = <p class="text-center cursor-pointer" style="font-style: ${UPDATE_FONT_STYLE}; font-size: ${UPDATE_FONT_SIZE}px; color: ${UPDATE_FONT_COLOR};" id="text_content">${ADD_YOUR_TEXT}</p>;

        return (list);

    }

    const callforUpdateContent = () => {

        $("#append_text_content").empty();

        $("#append_text_content").append(generate_update_text_content(ADD_YOUR_TEXT,UPDATE_FONT_STYLE,UPDATE_FONT_SIZE,UPDATE_FONT_COLOR))   


        alert("Congratulations. Your details are Updated Successfully");  

        $("#text_content").click(function(){
            EDIT_YOUR_CONTENT = $("text_content").text();
            console.log("EDIT_YOUR_CONTENT : ",EDIT_YOUR_CONTENT);

            $("#edit_content_name").html(ADD_YOUR_TEXT);
            $("#replace_text").html(ADD_YOUR_TEXT)
        }) 

    }


    $("#update_details").click(function(){

        $("#edit_content_name").html("");
        $("#replace_text").html("");

        callforUpdateContent();

    })


    
    $("#undo_update").click(function(){

        callfortextContent();    

    })

    $("#redo_update").click(function(){

        $("#edit_content_name").html("");
        $("#replace_text").html("");

        callforUpdateContent(); 

    })

})