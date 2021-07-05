import hashtagsReducer, {
  HashtagsState,
  cleanHashtags,
} from './hashtagsSlice'

describe('hashtags reducer', () => {
  const initialState: HashtagsState = {
    value: [
      'summer',
      'food',
      'drinks'
    ],
  }
  it('should handle initial state', () => {
    expect(hashtagsReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
    })
  })

  it('should handle cleanHashtags', () => {
    const actual = hashtagsReducer(initialState, cleanHashtags())
    expect(actual.value).toEqual([])
  })
})
