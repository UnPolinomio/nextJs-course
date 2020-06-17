export default class extends React.Component {
    static async getInitialProps({ query }) {
        let idClip = query.id

        let reqAudio = await fetch('https://api.audioboom.com/audio_clips/7515960.mp3')
        let data = await reqAudio.json()
        let audio_clip = data.body.audio_clip

        return { audio_clip }
    }

    render() {
      const { audio_clip } = this.props
      console.log(audio_clip.urls.high_mp3)
      return <>
        <header>Podcast</header>
        <h2>{audio_clip.title}</h2>
        <p>{audio_clip.description}</p>
        <audio src={audio_clip.urls.high_mp3} controls autoPlay></audio>


        <style jsx>{`
            header {
              color: #fff;
              background: #8756ca;
              padding: 15px;
              text-align: center;
            }

            h2 {
              
            }


      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        `}</style>
      </>

    }
}