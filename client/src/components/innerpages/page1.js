import React, { Component } from 'react'

 class page1 extends Component {
    constructor(){
        super();
        this.state = {
            isLoading:true,
            users:[],
            error:''
        }
    }
     fetchData(){
         const url = `https://ghibliapi.herokuapp.com/films`;
         fetch(url)
            .then(res => {
                if(res.status === 200){
                    console.log('Success')
                    return res.json();
                }else if(res.status === 400){
                    console.log("Something Wrong");
                    return this.setState({
                        errFount:true
                    })
                }else if(res.status === 404) {
                    console.log("Not Found")
                    return this.setState({
                        errFount:true
                    })
                }
            })
            .then(data => 
                this.setState({
                    users:data,
                    isLoading:false                
                })    
            )
            .catch(error => 
               this.setState({
                   error,
                   isLoading:false
               })
            )
     }
     componentDidMount(){
         this.fetchData();
     }
  render() {
      const {error,users,isLoading, errFount} = this.state
      if(errFount){
          return(
              <p>Something went wrong</p>
          )
      }
    return (
      <div>
          {error ? <p>error.message</p> : ""}
          {!isLoading ? (
              users.map(user => {
                  const {id} = user
                  return (
                      <p key={id}>Id is : {id}</p>
                  )
              })
          ) : (
              <p>Loading</p>
          )}
      </div>
    )
  }
}

export default page1