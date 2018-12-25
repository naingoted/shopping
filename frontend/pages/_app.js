import App, {Container} from 'next/app';
import Page from '../components/Page';
import withData from '../lib/withData'; // joining page and graphql endpoint
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
    static async getInitialProps({ Component, ctx}) {
        let pageProps = {};
        if( Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        //  expose query to user
        pageProps.query = ctx.query;
        return {pageProps}
    }
    render() {
        const { Component, apollo, pageProps } = this.props; // destructuring 
    
    return (
        <Container>
            <ApolloProvider client={apollo}>
                <Page> 
                <Component {...pageProps}/> 
                </Page>
            </ApolloProvider>
        </Container>
    )
    }
}

export default withData(MyApp);