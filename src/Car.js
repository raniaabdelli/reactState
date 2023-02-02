import React from "react";
import './Car.css'
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "rania",
        bio: "robot lab",
        imgSrc:
          "https://th.bing.com/th/id/OIP.LSXD1bPd5DcA_UIJ2QeDewHaEK?pid=ImgDet&rs=1",
        profession: "trainer",
        shows:true,
        mountingTime:0,
      },
    };
  }
  componentDidMount() {
    setInterval(()=>{
      this.setState({mountingTime:this.state.mountingTime+=1})
    },1000)
  }

 // componentDidMount() {
   // this.setState({ brand: "peugot" });
  //}
  componentDidUpdate() {
    console.log("hello");
  }
   change=()=>{
    this.setState({shows:!this.state.shows})
    this.setState({mountingTime:0})
  }
  render() {
    return (
      <div className="check">
        {this.state.shows?<><h2 style={{ color: "#408080" }}>Hello i'm : {this.state.Person.fullName}</h2>
            <h3 style={{ color: "bisque" }}>My bio is : {this.state.Person.bio}</h3>
            <h3 style={{ color: "bisque" }}>My last profession is : {this.state.Person.profession}</h3>
            <img src={this.state.Person.imgSrc}></img>
            <h3>Time:{this.state.mountingTime}</h3>
            </>:null}
          <button onClick={this.change}>show</button>
      </div>
    );
  }
}
export default Car;
