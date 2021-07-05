import BaseHashtag from '../Hashtags/BaseHashtag'
import styled from 'styled-components'
import Verified from '../../../img/verified.svg'

const Wrapper = styled.li`
list-style-type: none;
&:nth-child(even) {
  background-color: #f8f9f9;
}
`
const Avatar = styled.div`
display: table-cell;
padding: 14px 12px 10px 16px;
@media all and (min-width: 860px) {
  padding: 16px 12px 10px 14px;
}
img {
  border-radius: 100%;
  width: 52px;
  @media all and (min-width: 860px) {
    width: 38px;
  }
}
`
const Body = styled.div`
  display: table-cell;
  padding: 15px 14px 6px 0;
  vertical-align: top;
  @media all and (min-width: 860px) {
    padding: 15px 14px 10px 0;
  }
`
const Name = styled.p`
  font-size: 16.5px;
  margin: 0;
  @media all and (min-width: 860px) {
    font-size: 14.5px;
    letter-spacing: -0.3px;
  }
  img {
    width: 16px;
    vertical-align: text-bottom;
  }
`
const Text = styled.p`
  margin: 10px 0 16px;
  @media all and (min-width: 860px) {
    margin: 1rem 0;
  }
`
interface Props {
  full_text: string,
  hashtags: Array<string>,
  profile_image_url: string,
  screen_name: string,
  verified: boolean,
}

const Tweet = (props: Props) => {
  const { full_text, verified, hashtags, profile_image_url, screen_name } = props

  return (
    <Wrapper>
      <Avatar>
        <a href={`https://twitter.com/${screen_name}`} target="_blank" rel="noreferrer" title={`@${screen_name}`}>
          <img src={profile_image_url} alt={`@${screen_name}`} />
        </a>
      </Avatar>
      <Body>
        <Name><a href={`https://twitter.com/${screen_name}`} target="_blank" rel="noreferrer" title={`@${screen_name}`}><b>@{screen_name}</b> {verified && <img src={Verified} alt="Verified" />}</a></Name>
        <Text dangerouslySetInnerHTML={{ __html: full_text }} />
        {hashtags.length > 0 && hashtags.map((text: string, i: number) => {
          return (
            <BaseHashtag key={i} text={text} />
          )
        })}
      </Body>
    </Wrapper>
  )
}

export default Tweet
