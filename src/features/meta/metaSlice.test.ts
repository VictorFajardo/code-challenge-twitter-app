import metaReducer, {
  MetaState,
  resetMeta,
} from './metaSlice'

describe('meta reducer', () => {
  const initialState: MetaState = {
    completed_in: 0.01,
    count: 5,
    max_id: '1234567890',
    query: 'christmas',
  }

  it('should handle initial state', () => {
    expect(metaReducer(undefined, { type: 'unknown' })).toEqual({
      completed_in: 0,
      count: 0,
      max_id: '0',
      query: '',
    })
  })

  it('should handle resetMeta', () => {
    const actual = metaReducer(initialState, resetMeta())
    expect(actual).toEqual({
      completed_in: 0,
      count: 0,
      max_id: '0',
      query: '',
    })
  })
})
