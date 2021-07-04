import { useAppSelector, useAppDispatch } from '../../common/hooks'
import { selectQuery } from '../../features/query/querySlice';
import { fetchTweets, selectTweets } from '../../features/tweets/tweetsSlice'
import { selectMaxId } from '../../features/meta/metaSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import Tweet from './Tweets/Tweet'
import site from '../../data/site'
import '../../sass/list.css'

const List = () => {
  const { list: { cta } } = site
  const tweets = useAppSelector(selectTweets)
  const query = useAppSelector(selectQuery)
  const maxId = useAppSelector(selectMaxId)
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  return (
    <section className="List">
      {tweets.length > 0 &&
        <div className="List-container">
          <ul className="List-ul">
            {tweets
              .filter((tweet) => {
                if (filter.length) {
                  return tweet.hashtags
                    .some((hashtag: string) => {
                      return filter.includes(hashtag.toLocaleLowerCase())
                    })
                }
                return true
              })
              .map(({ full_text, screen_name, profile_image_url, hashtags }: { full_text: string, screen_name: string, profile_image_url: string, hashtags: Array<string> }, i: number) => {
                return (
                  <li key={i} className="List-li">
                    <Tweet full_text={full_text} hashtags={hashtags} profile_image_url={profile_image_url} screen_name={screen_name} />
                  </li>
                )
              })
            }
          </ul>
          <div className="List-footer">
            {(tweets.length > 0 && maxId > 0) &&
              <span role="button" className="List-button" onClick={() => dispatch(fetchTweets({ query: query, max_id: maxId }))}>{cta}</span>
            }
          </div>
        </div>
      }
    </section>
  )
}
export default List