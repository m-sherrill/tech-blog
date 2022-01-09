$("#newPost").on("click", async function () {
    event.preventDefault();

    const blogTitle = $('#blog-title').val().trim();
    const blogContent = $('#blog-content').val().trim()

    if (blogTitle && blogContent) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ blogTitle, blogContent }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
            console.log("success", response)
        } else {
            console.log('Failed to create a new blog');
        }
    }
})


  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });
        