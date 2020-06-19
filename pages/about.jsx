import Layout from './components/Layout'

export default class extends React.Component {
    render() {
        return <Layout>
            <h4>Created by Hector</h4>
            <p><a target='_blank' href="https://github.com/hectorfranc">@HectorFranc</a> at Github</p>

            <style jsx>{`
                h4 {
                    font-size: 35px;
                    text-align: center;
                    text-align: center;
                }
                p {
                    font-size: 25px;
                    text-align: center;
                    text-align: center
                }
                }
                p a{
                    text-decoration: none;
                }
            `}</style>
        </Layout>
    }
}