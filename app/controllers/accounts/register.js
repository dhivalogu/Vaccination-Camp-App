import Ember from 'ember';

export default Ember.Controller.extend({
    service:Ember.inject.service('common-service'),
    aadharID:"",
    mobile:"",
    firstName:"",
    lastName:"",
    dob:"",
    dosageCount:"",
    actions:{

        

        register()
        {
            
            
            let requestJSON=JSON.stringify({

                AADHAR:this.get('aadharID'),
                firstName:this.get('firstName'),
                lastName:this.get('lastName'),
                DOB:this.get('dob'),
                mobile:this.get('mobile'),
                dosageCount:"",
                
    
            });
            $.post(
                this.get('service').getRequestURL()+"/people",
                requestJSON,
                (data,status)=>
                {
                    console.log(data);
                    console.log(status);
                }
                
            )
        }
    }
});
