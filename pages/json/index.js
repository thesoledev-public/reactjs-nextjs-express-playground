import React, {Component} from 'react' 
import Layout from '../../components/layouts/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class Json extends Component{

    static async getInitialProps(){

        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        
        const data = await res.json()
        return {repos:data}
    }


    render() {
        return(
        <Layout>
            <ul>
                {
                    this.props.repos.map(repo => (
                        <li><Link href={`/json/comments/${repo.name}`}><a>{repo.name}</a></Link></li>
                    ))
                }
            </ul>
        </Layout>
        )

    }
}