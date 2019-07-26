import Layout from '../../components/layouts/layout'
import React, {Component} from 'react' 


export default class User extends Component{

    static async getInitialProps({query}){
        return query
    }

    constructor(props){
        super(props)
    }

    render() {
        return(
        <Layout>
            <h1>I am User {this.props.name}</h1>
        </Layout>
        )

    }
}