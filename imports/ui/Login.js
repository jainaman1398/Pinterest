import React,{Component} from "react";
import Table from "./Table";

export default class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state={token:"",input:"",arr:[]};
    }

    search()
    {
        window.PDK.me('pins',function (response) {
            console.log(response);
        })
    }

    login()
    {
        let that=this;
        window.PDK.login({ scope : 'read_public,write_public,read_relationships'}, function(response){
            if (!response || response.error) {
                alert('Error occurred');
            } else {
                console.log(response.session);

                that.setState({token:response.session.accessToken});
            }
        });
    }

    boardsearch()
    {
        Meteor.call("Board_search",this.state.input,this.state.token,(err,res)=>{
            if(err)
                throw err;
            else {
                console.log(res);
                this.setState({arr:res});
            }
        })
    }

    board(event)
    {
        console.log(event.target.value);
        this.setState({input:event.target.value})
    }

    logout()
    {
        window.PDK.logout(function (response) {
            console.log(response);
        })
    }



    render()
    {
        return(
            <div>
            <button className="btn btn-success" onClick={this.login.bind(this)}>Login</button>
            <button className="btn btn-success" onClick={this.search.bind(this)}>search</button>
            <button className="btn btn-success" onClick={this.logout.bind(this)}>logout</button>
                <input value={this.state.input} type="text" placeholder="Enter Username/board" onChange={this.board.bind(this)}/>
                <button onClick={this.boardsearch.bind(this)} >Search</button>
                <Table data={this.state.arr}/>
            </div>

        )
    }
}