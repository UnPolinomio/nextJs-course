import Layout from './components/Layout'
import ChannelGrid from './components/ChannelGrid'
import Error from './_error'
import useSWR from 'swr'
import { render } from 'nprogress'

async function getChannels() {
    try {
        let req = await fetch('https://api.audioboom.com/channels/recommended')
        let { body: channels } = await req.json()

        return { error: null, channels}
    } catch(error) {
        return { error, channels: []}
    }
}

export async function getStaticProps() {
    const { error, channels } = await getChannels()
    let props = {
        channels,
    }
    props.statusCode = error ? 503 : 200

    return {
        props,
    }
}

export default ({ channels, statusCode }) => {
    let loadDataError = null
    try {
        document // Are we in client navigator?

        const { error, data } = useSWR('getChannels', getChannels)
        loadDataError = error
        if (!error) {
            channels = data.channels
        }
    } catch {}

    if ( (statusCode != 200) || (loadDataError) ) {
        return <Error statusCode={ loadDataError ? 404 : statusCode } />
    }

    return <Layout title="Inicio">
        <ChannelGrid channels={ channels } />
    </Layout>
}
