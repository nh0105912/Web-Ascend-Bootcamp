import { useParams } from "react-router-dom"

function Contact (){ 
    const {name} = useParams()
    return ( 
        <>
        {name ? (
            <>
            <h1>The Contact {name} pages is open with prams</h1>
            <p>Now your can msg to {name} from using prams </p>
            </>
        ):(
            <>
            <h1>React routing contact page</h1>
            <p>try again  <code>/contact/noor</code></p>
            </>
        )}
        </>
    )
}
export default Contact