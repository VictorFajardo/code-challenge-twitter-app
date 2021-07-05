import { useAppSelector } from '../../common/hooks';
import { selectHashtags } from '../../features/hashtags/hashtagsSlice'
import { selectFilter } from '../../features/filter/filterSlice'
import FilterHashtag from './Hashtags/FilterHashtag'
import site from '../../data/site'
import styled from 'styled-components'

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
  padding: 9px 12px;
`
const Title = styled.h2<{ hashtags: number}>`
  padding: 11px 4px;
  font-size: 19px;
  margin: 0;
  margin-bottom: ${({ hashtags }) => hashtags > 0 ? '8px' : 0};
  @media all and (min-width: 860px) {
    font-size: 16px;
    padding: 4px 3px 0px;
    margin-bottom: ${({ hashtags }) => hashtags > 0 ? '25px' : 0};
  }
`

const Filter = () => {
  const { filter: { title } } = site
  const hashtags = useAppSelector(selectHashtags)
  const filter = useAppSelector(selectFilter)

  return (
    <Wrapper>
      <Container>
        <Title hashtags={hashtags.length}>{title}</Title>
        {hashtags.length > 0 && hashtags.map((hashtag: string, i: number) => {
          return (
            <FilterHashtag key={i} text={hashtag} status={filter.includes(hashtag.toLocaleLowerCase()) ? true : false} />
          )
        })
        }
      </Container>
    </Wrapper>
  )
}

export default Filter