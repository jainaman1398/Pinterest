import React,{Component} from "react";

export default class Table extends Component{

    constructor(props){
        super(props);

    }


    getdata(data){
        console.log("map",data);
        data=data||[];

        return data.map((task, key) => {
            return(
                <tr className="alert alert-dark" key={key}>
                    <th>{task.note}</th>
                    <th>{task.url}</th>
                    <th>{task.counts.saves}</th>
                    <th>{task.counts.comments}</th>
                    <img src={task.image.original.url} alt="" border="3" height="100" width="100" />
                    <hr/>
                </tr>
            )
        })
    }

    render(){


        return(
            <table className="table table-bordered">
                <tr className="alert alert-success">
                    <th>note</th>
                    <th>link</th>
                    <th>saves</th>
                    <th>comments</th>
                    <th>LOGO</th>
                </tr>
                {this.getdata(this.props.data)}
            </table>
        )
    }

}

