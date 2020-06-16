export default class extends React.Component {
    render() {
        return <>
            <h2>Created by Hector</h2>
            <p>Hello. I'm Hector</p>
            <img src="/static/platzi-logo.png" alt="Logo"/>

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

                img {
                    max-width: 25%;
                    text-align: center
                }

                @media screen and (max-width: 300px) {
                    img {
                        max-width: 75%;
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