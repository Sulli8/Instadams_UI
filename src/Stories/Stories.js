import './Stories.css';


function Stories(props) {
 
  const listStories = props.stories.map((story,i) => <div style={{
    backgroundImage: `url(${story.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center"
  }}
  key={i} className="story"></div>);
  return (
    <div className="storiesBox">
      {listStories}
    </div>
  );
}

export default Stories;
