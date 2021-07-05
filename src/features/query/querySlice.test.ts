import queryReducer, {
  QueryState,
  updateQuery,
} from './querySlice'

describe('query reducer', () => {
  const initialState: QueryState = {
    value: 'none',
  }

  it('should handle initial state', () => {
    expect(queryReducer(undefined, { type: 'unknown' })).toEqual({
      value: '',
    })
  })

  it('should handle updateQuery', () => {
    const actual = queryReducer(initialState, updateQuery('nvidia'))
    expect(actual.value).toEqual('nvidia')
  })
})
