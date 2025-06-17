if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('my-blog-link')) {
  document.getElementById('my-blog-link').addEventListener('click', () => {
    document.getElementById('my-blog-section').scrollIntoView({behavior: "smooth"})
  })
}