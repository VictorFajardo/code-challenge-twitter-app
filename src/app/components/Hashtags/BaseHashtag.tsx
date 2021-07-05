import styled from 'styled-components'

const Hashtag = styled.a`
    margin-right: 0.7rem;
    margin-bottom: 0.55rem;
    background-color: #e7f3fa;
    padding: 6px 17px;
    display: inline-block;
    border-radius: 17px;
    box-sizing: border-box;
    cursor: pointer;
    color: #377ab5;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      background-color: #d9ecf7;
    }
  `

interface Props {
  text: string,
}

const BaseHashtag = (props: Props) => {
  const { text } = props

  return (
    <Hashtag href={`https://twitter.com/hashtag/${text}`} className="List-tweet-hashtag" target="_blank" rel="noreferrer" title={`#${text}`}>#{text}</Hashtag>
  )
}

export default BaseHashtag
