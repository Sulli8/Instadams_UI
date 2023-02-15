import './Stories.css';


function Stories(props) {
 
  const listStories = props.stories.map((story) => <div style={{
    backgroundImage: `url(${story.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center"
  }}
  key={story.id} className="story"></div>);
  return (
    <div className="storiesBox">
      {listStories}
    </div>
  );
}

export default Stories;
