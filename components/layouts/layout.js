import Link from 'next/link'
const Layout = ({children}) => (

    <div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/user?name=julius" as="/user/julius"><a>User</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/json?name=test" as="/json/test"><a>JSON</a></Link>
        {children}
    </div>

)

export default Layout;