import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [data, setData] = useState( [] );
  var [like, setLike] = useState( 0 );
  var [dislike, setDislike] = useState( 0 );
 
  
  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(result => setData(result.data))

  }, [])

  const OnClickComment = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(result => console.log(result.body))
  }
  
  return (
    <div className="container">
      
      {
        data.map(post => (
          <div>
            <div className="card-deck d-inline-block bg-light border border-secondary w-75 mb-4" key={post.id}>
              <h1 key={post.id} className="card-title "> {post.id}. {post.title} </h1>
              <h5 /*key={post.id}*/ className="card-subtitle"> {post.body} </h5> 
              <button href="#" type="button" className="card-link btn btn-light mb-2" onClick={OnClickComment}>Comment</button>
              <button href="#" type="button" className="card-link btn btn-light mb-2" onClick={() => setLike(like++)}>Like</button> {like}
              <button href="#" type="button" className="card-link btn btn-light mb-2" onClick={() => setDislike(dislike++)}>Dislike</button> {dislike}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;


