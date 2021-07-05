import filterReducer, {
  FilterState,
  addFilter,
  deleteFilter,
  cleanFilter,
} from './filterSlice'

describe('filter reducer', () => {
  const initialState: FilterState = {
    value: [
      'eurocup 2020',
      'copa america 2021'
    ],
  }
  it('should handle initial state', () => {
    expect(filterReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
    })
  })

  it('should handle addFilter', () => {
    const actual = filterReducer(initialState, addFilter('tokyo2020'))
    expect(actual.value).toEqual(['eurocup 2020','copa america 2021','tokyo2020'])
  })

  it('should handle deleteFilter', () => {
    const actual = filterReducer(initialState, deleteFilter('copa america 2021'))
    expect(actual.value).toEqual(['eurocup 2020'])
  })

  it('should handle cleanFilter', () => {
    const actual = filterReducer(initialState, cleanFilter())
    expect(actual.value).toEqual([])
  })
})
