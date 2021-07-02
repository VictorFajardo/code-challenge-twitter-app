import { useEffect, useState } from 'react'
import { useAppDispatch } from '../common/hooks'
import { addFilter, deleteFilter } from '../features/filter/filterSlice'
import '../sass/hashtag.css'

const Hashtag = (props: any) => {
  const { text, status } = props
  const dispatch = useAppDispatch()
  const [selected, onSelected] = useState(status)

  useEffect(() => {
    onSelected(status)
    return () => {
    }
  }, [status])

  const handleOnClick = () => {
    if (selected) {
      dispatch(deleteFilter(text.toLocaleLowerCase()))
    } else {
      dispatch(addFilter(text.toLocaleLowerCase()))
    }
    onSelected(!selected)
  }

  return (
    <span onClick={() => handleOnClick()} className={`Hashtag ${selected ? 'active' : ''}`}>#{text}</span>
  )
}

export default Hashtag
