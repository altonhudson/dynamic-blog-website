let getBlogId = localStorage.getItem("blogID")
let getPosts = localStorage.getItem("posts")
let posts = JSON.parse(getPosts)

document.addEventListener("DOMContentLoaded", () => {
    const postTitle = document.querySelector(".post-title");
    const postImg = document.querySelector(".post-image")
    const postContent = document.querySelector(".post-content")
    const postTags = document.querySelector(".post-tags")
    const blogTitleLabel = document.querySelector(".blog-title-label")
    const blogTagLabel = document.querySelector(".blog-tag-label")
    const blogTextarea = document.querySelector(".post-content")

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == getBlogId) {
            postTitle.textContent = posts[i].title
            postImg.src = posts[i].blogArt;
            postImg.alt = posts[i].blogArtAlt
            postContent.textContent = posts[i].content
            postTags.textContent = posts[i].tags.join(", ")
            blogTitleLabel.textContent = `Current Title: ${posts[i].title}`
            blogTagLabel.textContent = `Current Tags: ${posts[i].tags.join(", ")}`

        }
    }
})

let backBtn = document.querySelector(".back-btn")
backBtn.addEventListener("click", (e) => {
    window.location.href = 'index.html'
})

let editPostBtn = document.querySelector(".edit-post")
let postContainer = document.querySelector(".post-container")
let editPostContainer = document.querySelector(".edit-post-container")
editPostBtn.addEventListener("click", (e) => {
    editPostContainer.classList.toggle("display-content")
    postContainer.classList.toggle("hide-content")
})

let deletePost = document.querySelector(".delete-post");
deletePost.addEventListener("click", (e) => {
    let removepost = posts.filter(post => post.id != getBlogId);

    localStorage.setItem("posts", JSON.stringify(removepost))

    window.location.href = 'index.html'
})

let cancelpostBtn = document.querySelector('.cancel-post')
cancelpostBtn.addEventListener("click", (e) => {
    editPostContainer.classList.toggle("display-content")
    postContainer.classList.toggle("hide-content")
})


let confirmEdit = document.querySelector('.confirm-edit')
confirmEdit.addEventListener("click", (e) => {
    let editPostTitle = document.querySelector('.edit-post-title')
    let editPostContent = document.querySelector('.edit-post-content')
    let editPostTag = document.querySelector('.edit-post-tags')
    let editBlogImg = document.querySelector('#imageUpload')
    const postTitle = document.querySelector(".post-title");
    const postImg = document.querySelector(".post-image")
    const postContent = document.querySelector(".post-content")
    const postTags = document.querySelector(".post-tags")

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == getBlogId) {
            posts[i].title = editPostTitle.value
            postTitle.innerHTML = editPostTitle.value
            posts[i].content = editPostContent.value
            postContent.textContent = editPostContent.value
            posts[i].tags = editPostTag.value.split(', ');
            postTags.textContent = editPostTag.value.split(',');
            let blogImg = editBlogImg.files[0]

            function saveAndRedirect() {
                localStorage.setItem("posts", JSON.stringify(posts));
                window.location.href = "post.html";
            }

            if (blogImg) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageUploaded = e.target.result;
                    posts[i].blogArt = imageUploaded;
                    postImg.src = imageUploaded;
                    saveAndRedirect();
                };
                reader.readAsDataURL(blogImg);
            } else {
                saveAndRedirect();
            }
            break; 
        }

    }
})

