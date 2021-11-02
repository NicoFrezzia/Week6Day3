$('#submitButton').on('click', function (){
    let name = $("#displayName").val();
    let comment = $("#comment").val();
    $("#contentBox").append(`
    <div class="comment">
            <div class="mainComment">
                <div class="leftBox">
                    <div class="profile">
                        
                    </div>
                    <div class="userQ">
                        <div class="userName">
                            ${name}
                        </div>
                        <div class="question">
                            ${comment}
                        </div>
                    </div>
                </div>
                <div class="rightBox">
                    <div class="editDel">
                        <div id="edit">
                            edit   
                        </div>
                        <div id="del">
                            delete
                        </div>
                    </div>
                </div>
            </div>
            <div class="fakeComment noDisplay">
                <div class="inputComment">
                    <input id="comment" placeholder=" comment">
                </div>
                <div id="fakeSubmitButton">Submit</div>
            </div>
        </div>
    `)
})
$("#contentBox").on("click", "#del" , function (){
    let parent = $(this).parents()[3];
    $(parent).remove()
})
$("#contentBox").on("click", "#edit" , function(){
    let parent = $(this).parents()[3];
    let nextPost = $(parent).children()[1]
    $(nextPost).toggleClass('noDisplay')
})
$("#contentBox").on("click", "#fakeSubmitButton" , function (){
    console.log("dfsdf")
    let parent = $(this).parents()
    let child = $(parent).children()[3]
    let child1 = $(child).children()[0]
    let child2 = $(child1).children()[0]
    let editComment = $(child2).val()
    let child3 = $(editComment).parents()
    let child4 = $(parent).children()[2]
    let child5 = $(child4).children()[0]
    let child6 = $(child5).children()[1]
    let child7 = $(child6).children()[1]
    let child8 = $(child7).text(editComment)
})