import Link from "next/link"
import Layout from "../components/Layout"
import Error from '../_error'
import slug from "../../helpers/slug"
import PodcastListWithClick from "../components/PodcastListWithClick"
import ChannelGrid from '../components/ChannelGrid'
import PodcastPlayer from '../components/PodcastPlayer'

export async function getServerSideProps({ query, res }) {
    try {
        let idChannel = query.id

        let [ reqChannel, reqAudios, reqSeries ] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
        ])
        
        if (reqChannel.status >= 404) {
            res.statusCode = reqChannel.status
            return { props: {channel: null, audioClips: null, series: null, statusCode: 404} }
        }

        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        let dataAudios = await reqAudios.json()
        let audioClips = dataAudios.body.audio_clips

        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels


        return { props: { channel, audioClips, series, statusCode: 200 } }
    } catch (e) {
        res.statusCode = 503
        return { props: { channel: null, audioClips: null, series: null, statusCode: 503 } }
    }
}

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openPodcast: null,
        }
    }


    openPodcast = ( event, podcast ) => {
        event.preventDefault()
        this.setState({
            openPodcast: podcast
        })
    }

    closePodcast = (event) => {
        event.preventDefault()
        this.setState({
            openPodcast: null
        })
    }

    render() {
        const { channel, audioClips, series, statusCode } = this.props
        const { openPodcast } = this.state

        if (statusCode != 200) {
            return <Error statusCode={ statusCode } />
        }

        return <Layout title={ channel.title } >
            <h1>{channel.title}</h1>

            { openPodcast && <div className="modal">
                <PodcastPlayer clip={openPodcast} onClose={this.closePodcast} />
            </div>}


            <img src={channel.urls.banner_image.original} alt="Banner" className="banner"/>

            <h2>Últimos podcasts</h2>
            <PodcastListWithClick podcasts={ audioClips } onClickPodcast={ this.openPodcast } />
  
            <h2>Series</h2>
            <ChannelGrid channels={series} />

            <style jsx>{`

                .banner {
                width: 100%;
                // padding-bottom: 25%;
                // background-position: 50% 50%;
                // background-size: cover;
                // background-color: #aaa;
                }

                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 9999;
                    background: black;
                }

            `}</style>

          </Layout>
        
    }
}