import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return(
    <React.Fragment>
    <h1 className="text-capitalize text-center text-danger my-5">Welcome to React Bootstrap</h1>
  <div className="container">
    <div className="row">
      <div className="col-sm">
        <div class="card">
  <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <a href="#" class="btn btn-primary">Click Here</a>
  </div>
</div>
      </div>
      <div className="col-sm">
        <div class="card">
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <a href="#" class="btn btn-primary">Click Here</a>
  </div>
</div>
      </div>
      <div className="col-sm">
        <div class="card">
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <a href="#" class="btn btn-primary">Click Here</a>
  </div>
</div>
      </div>
    </div>
  </div>
    </React.Fragment>
  )
}

export default App;
