import React,{Component} from "react";
import ReactDOM from "react-dom";
import Login from "../../ui/Login"

export default class App extends Component{

    constructor(props)
    {
        super(props);
    }

    login()
    {
        window.pAsyncInit = function() {
            PDK.init({
                appId: "4959246979143055494",
                cookie: true,
            });
        };

        (function(d, s, id){
            var js, pjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//assets.pinterest.com/sdk/sdk.js";
            pjs.parentNode.insertBefore(js, pjs);
        }(document, 'script', 'pinterest-jssdk'));
    }

    componentDidMount(){
        this.login();
    }

    render() {

        return (
            <div>
              <Login />
            </div>
    )
    }
}


Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'));
})