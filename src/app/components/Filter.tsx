import { useAppSelector } from '../../common/hooks';
import { selectHashtags } from '../../features/hashtags/hashtagsSlice'
import { selectFilter } from '../../features/filter/filterSlice'
import Hashtag from './Hashtag'
import site from '../../data/site'
import '../sass/filter.css'

const Filter = () => {
  const { filter: { title } } = site
  const hashtags = useAppSelector(selectHashtags)
  const filter = useAppSelector(selectFilter)

  return (
    <section className="Filter">
      <div className="Filter-container">
        <h2 className={`Filter-container-title ${hashtags.length ? 'active': ''}`}>{title}</h2>
        {hashtags.length > 0 && hashtags.map((hashtag: string, i: number) => {
          return (
            <Hashtag key={i} text={hashtag} status={filter.includes(hashtag.toLocaleLowerCase()) ? true: false}/>
          )
        })
        }
      </div>
    </section>
  )
}

export default Filter