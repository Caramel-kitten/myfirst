function BlogPost(post) {


  return (
    <div>
      <p>Author: {post.Author}</p>
      <p>Titlt :{post.title}</p>
      <p>Description: {post.description}</p>
    </div>
  )
}

export default BlogPost