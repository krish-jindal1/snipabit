import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const content = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus."

function Home() {

  const [state, setState] = useState([])
  useEffect(() => {
        getData()
  }, [])

  const getData = async () => {
  fetch("http://localhost:9000/")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
      setState(json);
  })
  }

  const navigate = useNavigate();

  const toPost=(element)=>{
    navigate('/post',{state:{title: element.title, content: element.content}});
  }

  const toCompose = () => {
    navigate('/compose');
  }

  return(
      <div>
          <div id="homediv" className="p-5 mb-3 rounded-0">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Involve & Evolve</h1>
              <p className="col-md-7 fs-2"> {content} </p>
              {/* <form action="/" method="post"> */}
                  <button className="btn btn-dark btn-lg" type="submit" name="compbtn" onClick={() => toCompose()}>Insert bit</button>
              {/* </form> */}
            </div>
          </div>
        <h1 className="feedheading">
          blog posts
          <small className="text-muted"> by ėnvolve</small>
        </h1>
        { state.map((element) =>(
          
           <div className="card text-white bg-dark mb-3 homepostouterdiv" key={element._id}>
              <img src="/images/envolveYT.png" className="card-img-top" alt="..."/>
              <div className="card-body homepostcard">
                <h1 className="card-title">{ element.title }</h1>
                <p className="card-text">{ element.content.substring(0, 200) + "..." }</p>
                <a onClick={() => toPost(element)} className="btn btn-outline-light">Read More</a>
              </div>
            </div>
          ))
        };
              
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"         crossOrigin="anonymous"></script>
      </div>
  )
}

export default Home;