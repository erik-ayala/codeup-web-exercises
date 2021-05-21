addButtonEvent()


function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {
    let blogpost = document.getElementById('blog-container');
    let paragraph = document.createElement("p");
    let blogDiv = document.getElementById('user-input');
    blogpost.appendChild(paragraph)
    paragraph.innerText = blogDiv.value

}
