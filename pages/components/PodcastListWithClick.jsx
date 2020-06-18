import Link from 'next/link'
import slug from '../../helpers/slug'

export default class extends React.Component {
  render() {
    const { podcasts, onClickPodcast } = this.props

    return <div>
      { podcasts.map((podcast) => (
          <Link  href='[channelSlug]/[podcastSlug]' as={`/${slug(podcast.channel.title)}/${slug(podcast.title)}?id=${podcast.id}`}>
            <a className='podcast' key={podcast.id}
            onClick={ (event) => onClickPodcast(event, podcast) }>
                <h3>{ podcast.title }</h3>
                <div className='meta'>
                    { Math.ceil(podcast.duration / 60) } minutes
                </div>
            </a>
          </Link>
      ) ) }

      <style jsx>{`
        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  }
}