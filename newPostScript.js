
const newPostBtn = document.querySelector(".submit-post") 
const newPostTitle = document.querySelector(".new-post-title")
const newPostContent = document.querySelector(".new-post-content")
const newPostTag = document.querySelector(".new-post-tags")
const newPostImage = document.querySelector("#imageUpload")

newPostBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let postTitle = newPostTitle.value
    let postContent = newPostContent.value
    let postTags = newPostTag.value
    let postImage = newPostImage.files[0]

    const reader = new FileReader();

    reader.onload = function (e) {
       const imageUploaded = e.target.result;
        
        const newPostDetails = {
            title: postTitle,
            content: postContent,
            tag: postTags,
            image: imageUploaded
        }
        localStorage.setItem("new-post", JSON.stringify(newPostDetails))
    }
    
    

    if (postTitle == "" || postContent == "" || postTags == "") {
        alert("Please fill out all fields to submit form.")
        return false
    }

     reader.readAsDataURL(postImage);
}) 
