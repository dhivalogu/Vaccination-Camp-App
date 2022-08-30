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
                    let responseJSON=JSON.parse(data);
                    console.log(responseJSON.ID)
                    if(responseJSON.ID==this.get('aadharID'))
                    {
                        const modal=document.getElementById('registration-modal-container');
                        modal.style.display='flex';
                    }
                }
                
            )
        }
    }
});
