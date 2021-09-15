$(document).ready(function(){

    var editing = false;


    $(".details").on('click',"button", function(){
    

        let parent = $(this).parent();
        let me = $(this);

        if (editing == false)           //fields are not being edited        
        {
            let content = parent.children("span").html();
            let type = parent.data('type');

            parent.children("span").hide();
            parent.children("b").hide();


            me.html("Update");

            parent.append(
                $("<input/>", {
                    value : content,
                    class : "form-control col-8",
                    name: "editing",
                    type: type,
                    id : "new"
                }
            ));
            editing = true;
        }
        else{                           //press update button
            let newContent = $("#new").val();
            let input = parent.children("input");
            input.remove();
            console.log(newContent);
            parent.children("span").html(newContent);
            parent.children("span").show();
            parent.children("b").show();
            me.html("Edit");

            editing = false;
            

        }
    
    });
});

