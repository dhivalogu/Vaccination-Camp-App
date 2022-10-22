import Ember from 'ember';

export default Ember.Controller.extend({
    service:Ember.inject.service('common-service'),
    fromDate:"",
    toDate:"",
    address:"",
    cityID:"",
    actions:{
        test()
        {
            let requestJSON=JSON.stringify({
                address:this.get('address'),
                beginDate:this.get('fromDate'),
                endDate:this.get('toDate')
            });
            let requestURL=this.get('service').getRequestURL()+"/cities/"+this.get('cityID')+"/camps";
            console.log(requestURL);
            $.post(
                requestURL,
                requestJSON,
                (data,status)=>
                { 
                   console.log(data);
                   let response=JSON.parse(data);
                   console.log(response['status-code']);
                   
                }
            )
        },
        setCity(cityID)
        {
            console.log(cityID);
            this.set('cityID',cityID);
        }
    }
});
