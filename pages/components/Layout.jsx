import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start() );
Router.events.on('routeChangeComplete', () => NProgress.done() );
Router.events.on('routeChangeError', () => NProgress.done() ); 

export default class Layout extends React.Component {
    
    render() {
        const { children, title } = this.props

        return <>
        <Head>
            <title>Podcasts | { title }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <header>
            <div className="container">
                <h2><Link href="/"><a>Podcast</a></Link></h2>

                <nav>
                    <Link href="/about"><a>About</a></Link>
                </nav>
            </div>
        </header>
        <div className="container">
            {children}
        </div>

        <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
                font-size: 20px
            }
            header h2 {
                font-size: 1em;
            }
            
            header .container,
            header nav {
                display: flex;
                justify-content: space-between;

            }
            header nav a {
            }
            header a {
                color: #fff;
                text-decoration: none;
                line-height: 1.5em
            }

            div.container {
                width: 90%;
                margin: 0 auto;
            }

            @media screen and (min-width: 767px) {
                div.container {
                    width: 80%;
                }
            }
        `}</style>

        <style global jsx>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
            * {
                margin: 0;
                box-sixing: border-box;
            }

            /* Make clicks pass-through */
            #nprogress {
                pointer-events: none;
            }
  
            #nprogress .bar {
                background: #29d;
    
                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;
    
                width: 100%;
                height: 2px;
            }
    
            /* Fancy blur effect */
            #nprogress .peg {
                display: block;
                position: absolute;
                right: 0px;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                opacity: 1.0;
    
                -webkit-transform: rotate(3deg) translate(0px, -4px);
                    -ms-transform: rotate(3deg) translate(0px, -4px);
                        transform: rotate(3deg) translate(0px, -4px);
            }
    
            /* Remove these to get rid of the spinner */
            #nprogress .spinner {
                display: block;
                position: fixed;
                z-index: 1031;
                top: 15px;
                right: 15px;
            }
    
            #nprogress .spinner-icon {
                width: 18px;
                height: 18px;
                box-sizing: border-box;
    
                border: solid 2px transparent;
                border-top-color: #29d;
                border-left-color: #29d;
                border-radius: 50%;
    
                -webkit-animation: nprogress-spinner 400ms linear infinite;
                        animation: nprogress-spinner 400ms linear infinite;
            }
    
            .nprogress-custom-parent {
                overflow: hidden;
                position: relative;
            }
    
            .nprogress-custom-parent #nprogress .spinner,
            .nprogress-custom-parent #nprogress .bar {
                position: absolute;
            }
    
            @-webkit-keyframes nprogress-spinner {
                0%   { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }
            @keyframes nprogress-spinner {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
        </>
    }
}