const blogData = [
    {
        id: 1,
        title: "The Future of Web Development",
        authour: {
            id: 100,
            name: "Alton Hudson",
            avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        content: "Web development is evolving rapidly with new frameworks, AI-driven tools, and more interactive web apps. In 2025, developers are increasingly focusing on accessibility, performance, and progressive web apps (PWAs) to meet modern user expectations. This article explores the top trends shaping the future of web development and what skills developers need to stay ahead.",
        snippet: "Discover the top trends in web development for 2025, including AI-driven tools, accessibility improvements, and progressive web apps.",
        tags: ["Web Development", "AI", "PWAs"],
        blogArt: "https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "08-13-2025",
        blogArtAlt: "Futuristic web development concept",
        readingTime: "6 mins",
        comments: [
            {
                id: 200,
                author: "Jane Doe",
                content: "Great insights! Really excited about AI in web dev.",
                timestamp: "08-13-2025"
            }
        ],
        isPosted: true,
        views: 1234,
        likes: 210
    },
    {
        id: 2,
        title: "Navigating Tech Career Paths in 2025",
        authour: {
            id: 101,
            name: "Suban Osman",
            avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop"
        },
        content: "The tech industry is constantly changing, and career paths are evolving. From software engineering to UX design, understanding growth areas and emerging roles is crucial. This article breaks down key opportunities, salary expectations, and skills to focus on for a successful tech career in 2025.",
        snippet: "Explore evolving tech career paths, emerging roles, and skills needed to succeed in 2025.",
        tags: ["Career", "Tech Jobs", "Industry Trends"],
        blogArt: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2696&auto=format&fit=crop",
        blogArtAlt: "Tech career concept illustration",
        timestamp: "08-10-2025",
        readingTime: "10 mins",
        comments: [
            {
                id: 201,
                author: "John Derry",
                content: "Helpful guide! This clarified a lot about different tech roles.",
                timestamp: "08-11-2025"
            }
        ],
        isPosted: true,
        views: 987,
        likes: 176
    },
    {
        id: 3,
        title: "How AI is Changing Everyday Life",
        authour: {
            id: 102,
            name: "Yoshi Tanaka",
            avatar: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        content: "Artificial Intelligence is no longer just a futuristic concept. From smart assistants to AI-powered healthcare, AI is transforming how we live, work, and interact with technology. This post examines practical AI applications in 2025 and what we can expect in the near future.",
        snippet: "AI is transforming our daily lives—from healthcare to smart assistants. Learn how it impacts us in 2025.",
        tags: ["AI", "Technology", "Innovation"],
        blogArt: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1620&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogArtAlt: "AI futuristic concept",
        timestamp: "08-12-2025",
        readingTime: "8 mins",
        comments: [
            {
                id: 202,
                author: "Mochi Mohamed",
                content: "Amazing overview! AI is everywhere these days.",
                timestamp: "08-12-2025"
            }
        ],
        isPosted: true,
        views: 1450,
        likes: 325
    }
];

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








