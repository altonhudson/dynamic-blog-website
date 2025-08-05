const newPostBtn = document.querySelector(".submit-post");
const newPostTitle = document.querySelector(".new-post-title");
const newPostAuthour = document.querySelector(".new-post-authour");
const newPostContent = document.querySelector(".new-post-content");
const newPostTag = document.querySelector(".new-post-tags");
const newPostImage = document.querySelector("#imageUpload");

newPostBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let postTitle = newPostTitle.value.trim();
  let postAuthor = newPostAuthour.value.trim();
  let postContent = newPostContent.value.trim();
  let postTags = newPostTag.value.trim();
  let postImage = newPostImage.files[0];

  if (!postTitle || !postContent || !postTags) {
    alert("Please fill out all fields to submit form.");
    return;
  }

  if (postImage && postImage.size > 2 * 1024 * 1024) { // 2MB limit
    alert("Please upload an image smaller than 2MB.");
    return;
  }

  function savePost(imageData) {
    const newPostDetails = {
      id: Math.floor(Math.random() * 900) + 1,
      title: postTitle,
      snippet: postContent,
      authour: {
        id: Math.floor(Math.random() * 100) + 1,
        name: postAuthor,
        avatar: "https://plus.unsplash.com/premium_photo-1674586421941-da5144495376?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      tag: postTags,
      blogArt: imageData || "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    let getPosts = localStorage.getItem("posts");
    let parsePosts = getPosts ? JSON.parse(getPosts) : [];
    parsePosts.push(newPostDetails);
    localStorage.setItem("posts", JSON.stringify(parsePosts));
    localStorage.setItem("new-post", JSON.stringify(newPostDetails));

    window.location.href = 'index.html';
  }

  if (postImage) {
    const reader = new FileReader();
    reader.onload = function (e) {
      savePost(e.target.result);
    };
    reader.readAsDataURL(postImage);
  } else {

    savePost(null);
  }
});
