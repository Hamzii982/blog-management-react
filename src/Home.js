import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogss')
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch the data for that resource.");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
    }, []);

    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading....</div> }
            { blogs && <BlogList blogs={blogs} title="Blog List" /> }
        </div>
     );
}
 
export default Home;