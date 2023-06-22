import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState([
        { title: 'My New Blog', body: 'lorum ipsum....', author: 'Hamza', id: 1},
        { title: 'Welcome Party!', body: 'lorum ipsum....', author: 'Mateen', id: 2},
        { title: 'Web Devs Top tips', body: 'lorum ipsum....', author: 'Hamza', id: 3}
    ]);

    const [randName, setRandName] = useState('Hamza');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Affected");
    }, [randName]);

    // const handleClick = () => {
    //     setName('Mehmood');
    //     setAge(25);
    // }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Blog List" handleDelete={handleDelete} />
            <button onClick={() => setRandName('Mateen')}>Change Name</button>
            <p>{randName}</p>
        </div>
     );
}
 
export default Home;