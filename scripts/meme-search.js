// Based on https://github.com/aDu/meme-search
// NO LICENSE

function memesearch( keyword, ops ) {
    if (keyword) keyword = keyword.trim()

    ops.subreddit = ops.subreddit || 'memes'
    ops.sort = ops.sort || 'relevance'

    if (!keyword || keyword == "") keyword = "meme"

    // Generate the URI containing the meme posts from Reddit
    let uri = encodeURI(
        `https://www.reddit.com/r/${ops.subreddit}/search.json?q=${keyword}&restrict_sr=1&sort=${ops.sort}`
    )

    let request = new Request(uri);

    fetch(request)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(response => {
        // console.debug(response);
        let data = JSON.parse(response.body);
        let posts = data.data.children;
        let memes = [];
        
        for (var post of posts) {
            if (post.data.post_hint != "image") continue; // Ignore posts that aren't images
            memes.push({
                title: post.data.title,
                image_url: post.data.url
            });
        } 
        
        return memes;
      }).catch(error => {
        console.error(error);
      });
}
