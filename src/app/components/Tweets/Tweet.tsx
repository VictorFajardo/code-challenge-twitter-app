import BaseHashtag from '../Hashtags/BaseHashtag'

const Tweet = (props: any) => {
  const { full_text, hashtags, profile_image_url, screen_name } = props
  return (
    <>
      <div className="List-avatar">
        <img src={profile_image_url} alt={`@${screen_name}`} />
      </div>
      <div className="List-tweet">
        <p className="List-tweet-name"><b>@{screen_name}</b></p>
        <p className="List-tweet-body" dangerouslySetInnerHTML={{ __html: full_text }} />
        {hashtags.length > 0 && hashtags.map((text: any, i: number) => {
          return (
            <BaseHashtag text={text} key={i} />
          )
        })}
      </div>
    </>
  )
}

export default Tweet
