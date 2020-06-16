export default class extends React.Component {
    render() {
        return <>
            <h1>Hello, World</h1>
            <p>This is a <a href="#">test</a> page.</p>
            <img src="/static/platzi-logo.png" alt="Logo"/>

            <style jsx>{`
                h1 {
                    color: red;
                }
                p :global(a) {
                    color: green;
                    text-decoration: none;
                }
                img {
                    max-width: 25%;
                    margin: 0 auto;
                }
            `}</style>

            <style jsx global>{`
                body {
                    font-family: Ubuntu, sans-serif
                }
            `}</style>
        </>
    }
}