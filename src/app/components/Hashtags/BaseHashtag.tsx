const BaseHashtag = (props:any) => {
  const { text, i } = props
  return (
    <a href={`https://twitter.com/hashtag/${text}`} role="button" key={i} className="List-tweet-hashtag" target="_blank" rel="noreferrer">#{text}</a>
  )
}

export default BaseHashtag
