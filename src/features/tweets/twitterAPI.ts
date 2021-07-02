import axios from 'axios'
import config from '../../data/config'
const { base_url, count, result_type, tweet_mode } = config

const fetchData = async (query: string, max_id: number) => {
  const response = await axios.get(`${base_url}/${max_id}/${query}/${count}/${result_type}/${tweet_mode}`)
  return response
}

export default fetchData
