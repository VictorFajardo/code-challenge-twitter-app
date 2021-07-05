import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../common/hooks'
import { addFilter, deleteFilter } from '../../../features/filter/filterSlice'
import styled from 'styled-components'

const Hashtag = styled.span<{ selected: boolean }>`
  margin-right: 0.7rem;
  margin-bottom: 0.75rem;
  background-color: ${({selected}) => selected ? '#1a91da' : '#e7f3fa'};
  padding: 6px 17px;
  display: inline-block;
  border-radius: 17px;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  color: ${({selected}) => selected ? '#fff' : '#377ab5'};
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background-color: ${({selected}) => selected ? '#167dbc' : '#d9ecf7'};
  }
`
interface Props {
  text: string,
  status: boolean,
}

const FilterHashtag = (props:Props) => {
  const { text, status } = props
  const [selected, onSelected] = useState<boolean>(status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onSelected(status)
    return () => {
    }
  }, [status])

  const handleOnClick = () => {
    dispatch(selected ? deleteFilter(text.toLocaleLowerCase()) : addFilter(text.toLocaleLowerCase()))
    onSelected(false)
  }

  return (
    <Hashtag selected={selected} role="button" onClick={() => handleOnClick()} title={`#${text}`}>#{text}</Hashtag>
  )
}

export default FilterHashtag