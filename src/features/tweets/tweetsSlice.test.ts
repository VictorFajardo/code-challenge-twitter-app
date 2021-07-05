import tweetsReducer, {
  TweetsState,
  cleanTweets,
} from './tweetsSlice';

describe('tweets reducer', () => {
  const initialState: TweetsState = {
    value: [
      {
        full_text: "This is my first Tweet!",
        screen_name: "Writer123",
        verified: true,
        profile_image_url: "url/image",
        urls: [
          {
            url: "https://",
            display_url: "pic.twitter.com/"
          },
        ],
        hashtags: [
        ],
        user_mentions: [
        ]
      }
    ],
    status: 'idle',
  };

  it('should handle initial state', () => {
    expect(tweetsReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle',
    });
  });

  it('should handle cleanTweets', () => {
    const actual = tweetsReducer(initialState, cleanTweets());
    expect(actual.value).toEqual([]);
  });

});
