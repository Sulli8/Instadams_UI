import './Post.css';
function Post(props) {
 
    const posts = props.posts.map((post,i) => 
        <div className="publication" key={i}>
            <div className="containerPublicationOne">
                <div className="profilPhoto"></div>
                <div className="descPublication">
                    <div className="username" >{post.username}</div>
                    <div className="description">{post.description}</div>
                </div>
            </div>

            <div className="containerPublicationTwo">

                <div className="post" style={{
                    backgroundImage: `url(${post.content})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 300
                }}>

                </div>
                <div>
                    <div className="like"></div>
                    <div className="nblike"></div>
                </div>
            </div>
        </div>
    )
    return (
        <div className="publicationMain">
            {posts}
        </div>
    );
}

export default Post;