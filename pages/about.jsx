export default class extends React.Component {
    render() {
        return <>
            <h2>Created by Hector</h2>
            <p><a href="https://github.com/hectorfranc">@HectorFranc</a> at Github</p>

            <style jsx>{`
                h2 {
                    font-size: 20px;
                    color: white;
                    text-align: center;
                    text-align: center
                }
                p {
                    font-size: 25px;
                    color: #DDD;
                    text-align: center;
                    text-align: center
                }
                }
            `}</style>

            <style jsx global>{`
                body {
                    min-height: 100vh;
                    background-color: #003;
                }
            `}</style>
        </>
    }
}