const express = require('express')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const request = require('request');
const transform = require("node-json-transform").transform;

express()
  .use(cors())
  .options('*', cors())
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .get('/', (req, res, next) => {
    res.send('SERVER RUNNING!')
  })
  /** Get method to fetch tweets based on params
   * @param {string} maxId - The max_id value, will returs values less than this one, '0' by app default
   * @param {number} c - The amount of results, 5 by app default
   * @param {string} q - The query input
   * @param {string} rt - The result_type, specifies the type of results, 'popular' by app default
   * @param {string} tm - The tweet_mode, specifies if the tweet will be truncated or not, 'extended' by app default
   */
  .get('/:maxId/:q/:c/:rt/:tm', async (req, res) => {
    const maxId = req.params.maxId
    const q = req.params.q
    const rt = req.params.rt
    const c = req.params.c
    const tm = req.params.tm
    // * json-transform utilities
    const tweetsMap = {
      item: {
        full_text: "full_text",
        screen_name: "user.screen_name",
        verified: "user.verified",
        profile_image_url: "user.profile_image_url",
        url: "entities.media",
        urls: "entities.urls",
        hashtags: "entities.hashtags",
        user_mentions: "entities.user_mentions",
      },
      operate: [{
          run: function (ary) {
            return transform(ary, user)
          },
          on: "user_mentions"
        },
        {
          run: function (ary) {
            return transform(ary, hashtag)
          },
          on: "hashtags"
        },
        {
          run: function (ary) {
            return transform(ary, url)
          },
          on: "url"
        },
        {
          run: function (ary) {
            return transform(ary, url)
          },
          on: "urls"
        },
      ],
      // TODO transform plain url into html href tags
      each: function (item) {
        // merging [url] with [urls]
        item.urls = [...item.url, ...item.urls]
        // deleting [url]
        delete item.url
        // replacing doble new line
        item.full_text = item.full_text.replace(/\n\n/g, '<br/ >')
        // replacing single new line
        item.full_text = item.full_text.replace(/\n/g, '<br/ >')
        // adding links to the urls
        item.urls.map(({
          url,
          display_url
        }) => {
          item.full_text = item.full_text.replace(`${url}`, `<a href="${url}" target="_blank" class="url">${display_url.startsWith("pic.twitter") || display_url.startsWith("twitter.com") ? url : display_url}</a>`)
        })
        // adding links to the hashtags
        item.hashtags.map((hashtag) => {
          item.full_text = item.full_text.replace(`#${hashtag}`, `<a href="https://twitter.com/hashtag/${hashtag}" target="_blank" class="hashtag">#${hashtag}</a>`)
        })
        // adding links to the mentions
        item.user_mentions.map((mention) => {
          item.full_text = item.full_text.replace(`@${mention}`, `<a href="https://twitter.com/${mention}" target="_blank" class="mention">@${mention}</a>`)
        })
        // item.full_text = item.full_text.replace("\n", "<br />")
        return item;
      }
    }
    const hashtag = {
      item: "text",
    }
    const user = {
      item: "screen_name",
    }
    const url = {
      item: {
        url: "url",
        display_url: "display_url",
      }
    }
    const metaMap = {
      item: {
        completed_in: "completed_in",
        max_id: "next_results",
        query: "query",
        count: "count",
      },
      operate: [{
        run: function (val) {
          return val && val.length ? val.slice(val.indexOf('=') + 1, val.indexOf('&')) : val
        },
        on: "max_id"
      }]
    }
    const getAllHashtags = (tweets) => {
      return tweets.reduce((prev, tweet) => {
        return [...prev, ...tweet.hashtags]
      }, [])
    }
    // * request action
    const requestOptions = {
      url: `https://api.twitter.com/1.1/search/tweets.json?max_id=${maxId}&q=${q}&count=${c}&result_type=${rt}&tweet_mode=${tm}`,
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG'
      }
    }

    try {
      request(requestOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const obj = JSON.parse(body)
          var tweets = transform(obj.statuses, tweetsMap)
          var meta = transform(obj.search_metadata, metaMap)
          var hashtags = getAllHashtags(tweets)
          res.send({
            hashtags: hashtags,
            tweets: tweets,
            meta: meta
          })
          // res.send(body);
        } else {
          console.log(error)
        }
      })
    } catch (error) {
      console.log(error);
    }

  })
  .listen(PORT, () => console.log(`Twitter Proxy listening on ${ PORT }`))