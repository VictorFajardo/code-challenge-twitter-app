import { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../common/hooks'
import { updateQuery, selectQuery } from '../../features/query/querySlice'
import { cleanTweets, fetchTweets } from '../../features/tweets/tweetsSlice'
import { cleanFilter } from '../../features/filter/filterSlice'
import { cleanHashtags } from '../../features/hashtags/hashtagsSlice'
import debounce from 'lodash.debounce';
import site from '../../data/site'
import '../../sass/search.css'
import MagnifyingGlass from '../../img/magnifying-glass.svg';
import { store } from '../../store';


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
    dispatch(cleanTweets())
    dispatch(cleanHashtags())
    dispatch(cleanFilter())
    if (query.length) {
      dispatch(fetchTweets({query: query, max_id: 0}))
    }
    return () => {
      console.log(store.getState());
    }
  }, [dispatch, query])

  return (
    <section className="Search">
      <div className="Search-icon">
        <img src={MagnifyingGlass} alt="Magnifying Glass" />
      </div>
      <div className="Search-input">
        <input
          className="Search-input"
          // TODO reviewing value={query} not working on debouncing
          // value={query}
          // onChange={changeHandler}
          onChange={debouncedChangeHandler}
          placeholder={placeholder}
        />
      </div>
    </section>
  )
}

export default Search
