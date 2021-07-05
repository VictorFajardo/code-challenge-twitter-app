import { useEffect, useLayoutEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../common/hooks'
import { selectQuery } from '../../features/query/querySlice';
import { fetchTweets, selectTweets } from '../../features/tweets/tweetsSlice'
import { selectMaxId } from '../../features/meta/metaSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import styled from 'styled-components'
import Tweet from './Tweets/Tweet'
import site from '../../data/site'

const Wrapper = styled.section`
  margin-top: 20px;
  @media all and (min-width: 860px) {
    margin: 10px;
  }
`
const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .05);
  border-radius: 4px;
`
const Tweets = styled.ul`
  font-family: 'Lato', sans-serif;
  font-size: 14.5px;
  letter-spacing: -0.3px;
  width: -webkit-fill-available;
  margin: 0;
  padding: 0;
`
const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
`
const CTA = styled.span`
  cursor: pointer;
  color: #377ab5;
  display: inline-block;
  border-radius: 17px;
  padding: 8px 15px;
`

interface Props {
  setHeight(height: number): any,
}

const List = (props: Props) => {
  const { setHeight } = props
  const { list: { cta } } = site
  const basicHeight = 82
  const refList = useRef<HTMLElement>(null)
  const tweets = useAppSelector(selectTweets)
  const query = useAppSelector(selectQuery)
  const maxId = useAppSelector(selectMaxId)
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleResize= () => {
      setHeight(refList.current?.offsetHeight ? Math.round(refList.current?.offsetHeight + 1) + basicHeight : basicHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setHeight])

  useLayoutEffect(() => {
    console.log('change');
    setHeight(refList.current?.offsetHeight ? Math.round(refList.current?.offsetHeight + 1) + basicHeight : basicHeight)
  }, [setHeight, tweets, filter])

  return (
    <Wrapper ref={refList}>
      {tweets.length > 0 &&
        <Container>
          <Tweets>
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
                  <Tweet key={i} full_text={full_text} hashtags={hashtags} profile_image_url={profile_image_url} screen_name={screen_name} />
                )
              })
            }
          </Tweets>
          <Footer>
            {(tweets.length > 0 && maxId) &&
              <CTA role="button" onClick={() => dispatch(fetchTweets({ query: query, max_id: maxId }))}>{cta}</CTA>
            }
          </Footer>
        </Container>
      }
    </Wrapper>
  )
}

export default List