import { Meteor } from "meteor/meteor";
import { HTTP } from 'meteor/http';


Meteor.methods({
    "Board_search"(input,token)
    {
        let ar=[];
        let url=`https://api.pinterest.com/v1/boards/${input}/pins/?limit=100&access_token=${token}&fields=id%2Clink%2Cnote%2Curl%2Ccounts%2Cattribution%2Cmedia%2Ccreated_at%2Cimage%2Cboard`;
        while(url) {
            let res = HTTP.call("get", url);
            let yo = res.data;
            if(yo.page&&yo.page.next) {
                url = yo.page.next;
                console.log(url);
                let s=yo.data.length;
                for(let i=0;i<s;i++)
                {
                    ar.push(res.data.data[i]);
                }
            }
            else
                url=undefined;
        }

       return ar;
    }
})