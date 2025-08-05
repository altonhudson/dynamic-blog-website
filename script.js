const blogData = [
    {
        id: 1,
        title: "The Future of Web Development",
        authour: {
            id: 100,
            name: "Alton Hudson",
            avatar: "https://plus.unsplash.com/premium_photo-1674586421941-da5144495376?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet?",
        snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet",
        tags: ["Web Development", "AI", "Lorem"],
        blogArt: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "04-08-2025",
        blogArtAlt: "image description",  
        readingTime: "6 mins",
        comments: [
            {
                id: 200,
                author: "Jane Doe",
                content: "Wow So Cool",
                timestamp: "04-08-2025"
            }
        ],
        isPosted: true,
        views: 123,
        likes: 100   
    },
        {
        id: 2,
        title: "Career Crashout",
        authour: {
            id: 101,
            name: "Suban Osman",
            avatar: "https://plus.unsplash.com/premium_photo-1674586421941-da5144495376?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet?",
        snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet",
        tags: ["Career", "Job Market", "Lorem"],
        blogArt: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogArtAlt: "image description",
        timestamp: "04-08-2025",
        readingTime: "10 mins",
        comments: [
            {
                id: 200,
                author: "John Derry",
                content: "I disagree",
                timestamp: "04-08-2025"
            }
        ],
        isPosted: true,
        views: 456,
        likes: 188   
    },
    {
        id: 3,
        title: "Animals in Tech",
        authour: {
            id: 101,
            name: "Yoshi",
            avatar: "https://plus.unsplash.com/premium_photo-1674586421941-da5144495376?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet?",
        snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit fugiat alias dolorum quaerat expedita cupiditate sequi exercitationem quas eaque, eveniet necessitatibus doloremque! Non illum cumque provident tempora repellat amet",
        tags: ["Pets", "Animals", "Lorem"],
        blogArt: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogArtAlt: "image description",
        timestamp: "04-08-2025",
        readingTime: "15 mins",
        comments: [
            {
                id: 200,
                author: "Mochi Mohamed",
                content: "Cats Rule",
                timestamp: "04-08-2025"
            }
        ],
        isPosted: true,
        views: 1382,
        likes: 800   
    },
    
]

const blogContainer = document.querySelector(".blog-container");

if (localStorage.getItem('posts')){
document.addEventListener("DOMContentLoaded", () => {
    const getData = localStorage.getItem("posts")
    const loadData = JSON.parse((getData))

    loadData.forEach(data => {
        const blogPostContainer = document.createElement("div");
        blogPostContainer.classList.add("blog-post-container");
        blogContainer.appendChild(blogPostContainer)

        const blogImage = document.createElement("img");
        blogImage.src = data.blogArt;
        blogImage.alt = data.blogArtAlt;
        blogImage.classList.add("blog-image");
        blogPostContainer.appendChild(blogImage);

        const blogBlurbContainer = document.createElement("div");
        blogBlurbContainer.classList.add("blog-blurb-container");
        blogPostContainer.appendChild(blogBlurbContainer)


        const blogTitle = document.createElement("h4")
        blogTitle.textContent = data.title;
        blogTitle.classList.add('blog-title');
        blogBlurbContainer.appendChild(blogTitle)

        const blogAuthourContainer = document.createElement("div");
        blogAuthourContainer.classList.add("blog-authour-container");
        blogBlurbContainer.appendChild(blogAuthourContainer)

        const blogAuthourImage = document.createElement("img");
        blogAuthourImage.src = data.authour.avatar;
        blogAuthourImage.classList.add("blog-authour-image");
        blogAuthourContainer.appendChild(blogAuthourImage);

        const blogAuthour = document.createElement("h6")
        blogAuthour.textContent = data.authour.name;
        blogAuthour.classList.add('blog-authour');
        blogAuthourContainer.appendChild(blogAuthour)


        const blogSnippet = document.createElement("p")
        blogSnippet.textContent = data.snippet;
        blogSnippet.classList.add('blog-snippet');
        blogBlurbContainer.appendChild(blogSnippet)

        const blogLink = document.createElement("a")
        blogLink.textContent = "Read More!";
        blogLink.href = "post.html"
        blogLink.classList.add('blog-detail-link');
        blogBlurbContainer.appendChild(blogLink)
        let blogid = data.id

        blogLink.addEventListener("click", (e) => {
            localStorage.setItem("blogID", blogid)
        })
    })
    
})
} else {
    localStorage.setItem("posts", JSON.stringify(blogData))

    document.addEventListener("DOMContentLoaded", () => {
    const getData = localStorage.getItem("posts")
    const loadData = JSON.parse((getData))

    loadData.forEach(data => {
        const blogPostContainer = document.createElement("div");
        blogPostContainer.classList.add("blog-post-container");
        blogContainer.appendChild(blogPostContainer)

        const blogImage = document.createElement("img");
        blogImage.src = data.blogArt;
        blogImage.alt = data.blogArtAlt;
        blogImage.classList.add("blog-image");
        blogPostContainer.appendChild(blogImage);

        const blogBlurbContainer = document.createElement("div");
        blogBlurbContainer.classList.add("blog-blurb-container");
        blogPostContainer.appendChild(blogBlurbContainer)


        const blogTitle = document.createElement("h4")
        blogTitle.textContent = data.title;
        blogTitle.classList.add('blog-title');
        blogBlurbContainer.appendChild(blogTitle)

        const blogAuthourContainer = document.createElement("div");
        blogAuthourContainer.classList.add("blog-authour-container");
        blogBlurbContainer.appendChild(blogAuthourContainer)

        const blogAuthourImage = document.createElement("img");
        blogAuthourImage.src = data.authour.avatar;
        blogAuthourImage.classList.add("blog-authour-image");
        blogAuthourContainer.appendChild(blogAuthourImage);

        const blogAuthour = document.createElement("h6")
        blogAuthour.textContent = data.authour.name;
        blogAuthour.classList.add('blog-authour');
        blogAuthourContainer.appendChild(blogAuthour)


        const blogSnippet = document.createElement("p")
        blogSnippet.textContent = data.snippet;
        blogSnippet.classList.add('blog-snippet');
        blogBlurbContainer.appendChild(blogSnippet)

        const blogLink = document.createElement("a")
        blogLink.textContent = "Read More!";
        blogLink.href = "post.html"
        blogLink.classList.add('blog-detail-link');
        blogBlurbContainer.appendChild(blogLink)
        let blogid = data.id

        blogLink.addEventListener("click", (e) => {
            localStorage.setItem("blogID", blogid)
        })
    })
    
})
}








