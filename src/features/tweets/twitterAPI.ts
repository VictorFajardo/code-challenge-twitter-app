import axios from 'axios'
import config from '../../data/config'
const { base_url, count, result_type, tweet_mode } = config

/**
 * Async function to fecth the data from the proxy server
 * @param {string} q - The query input from the app
 * @param {string} maxId - The max_id value, the search will returs id values less than this one, app default value: '0'
 * @returns {Object} An object with a list of tweets, hashtags and metadata
 */
const fetchData = async (query: string, max_id: string) => {
   /**
   * Promise with the proxy server response data
   * @param {string} base_url - The proxy base url
   * @param {string} maxId - The max_id value, the search will returs id values less than this one, app default value: '0'
   * @param {string} query - The query input from the app
   * @param {number} count - The amount of results, app default value: 5
   * @param {string} result_type - The result_type, specifies the type of results, app default value: 'popular'
   * @param {string} tweet_mode - The tweet_mode, specifies if the tweet will be truncated or not, app default value: 'extended'
   * @returns {Promise} A promise to be fulfilled
   */
  const response = await axios.get(`${base_url}/${max_id}/${query}/${count}/${result_type}/${tweet_mode}`)
  return response
}

export default fetchData
