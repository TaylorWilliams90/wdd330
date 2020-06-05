
// A the code that is responsible to get and 
//set data for a part of the application is often 
//called a model. I've used that terminology here.

//commentModel

class CommentModel {
    constructor(type){
        this.type = type;

        this.comments = []
    }

    addComent(commentName, comment){
        const newComment = {
            name: commentName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newComment);

    }



    // add html to details page

    const commentUI = `<div class="addComment">
    <h2>Add a comment</h2>
    <imput type="text" id="commentEntry"/>
    <button id="commentSubmit">Comment</button>
    </div>
    <h2>Comments</h2>
    <ul class="comments"></ul>`;
    //function for the view
    function renderCommentList(e, comments) {
        // clear
        e.innerHTML = '';
        // add 
        comments.forEach(el => {
            let item = document.createElement('li');
            item.innerHTML = `${el.name}: ${el.comment}`;
            e.appendChild(item);
        });
    }
}