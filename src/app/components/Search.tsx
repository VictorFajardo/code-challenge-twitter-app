import { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../common/hooks'
import { updateQuery, selectQuery } from '../../features/query/querySlice'
import { cleanTweets, fetchTweets } from '../../features/tweets/tweetsSlice'
import { cleanFilter } from '../../features/filter/filterSlice'
import { cleanHashtags } from '../../features/hashtags/hashtagsSlice'
import { store } from '../../store';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import MagnifyingGlass from '../../img/magnifying-glass.svg';
import site from '../../data/site'


const Wrapper = styled.section`
  margin: 10px 16px;
  @media all and (min-width: 860px) {
    margin: 10px;
  }
`
const Container = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.2);
  background-color: #fff;
  box-sizing: border-box;
`
const Icon =  styled.div`
  // TODO change into flex
  display: table-cell;
  padding: 16px 10px 10px;
  vertical-align: middle;
  @media all and (min-width: 860px) {
    padding: 12px 10px 6px;
  }
  > img {
    width: 18px;
  }
`
const Input = styled.div`
  display: table-cell;
  letter-spacing: -0.3px;
  width: 100%;
  @media all and (min-width: 860px) {
    width: 500px;
  }
  > input {
    width: 96%;
    font-family: 'Lato', sans-serif;
    font-size: 14.5px;
    line-height: 48px;
    letter-spacing: -0.3px;
    color: rgb(83, 100, 113);
    border: none;
    @media all and (min-width: 860px) {
      line-height: 38px;
    }
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
`

const Search = () => {
  const query = useAppSelector(selectQuery)
  const dispatch = useAppDispatch()
  const { search: { placeholder } } = site

  const debouncedChangeHandler  = useMemo(() => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateQuery(e.target.value))
    }
    return debounce(changeHandler, 300)
  }, [dispatch])

  useEffect(() => {
    console.log(store.getState());
    return () => {
      // cleanup
    }
  })

  useEffect(() => {
    dispatch(cleanTweets())
    dispatch(cleanHashtags())
    dispatch(cleanFilter())
    if (query.length) {
      dispatch(fetchTweets({query: query, max_id: '0'}))
    }
    return () => {
      // ! development
      // console.log(store.getState());
    }
  }, [dispatch, query])

  return (
    <Wrapper className="Search">
      <Container>
        <Icon>
          <img src={MagnifyingGlass} alt="Magnifying Glass" />
        </Icon>
        <Input>
          <input
            className="Search-input"
            onChange={debouncedChangeHandler}
            placeholder={placeholder}
          />
        </Input>
      </Container>
    </Wrapper>
  )
}

export default Search
