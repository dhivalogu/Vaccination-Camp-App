import Ember from 'ember';

export default Ember.Controller.extend({
    service:Ember.inject.service('common-service'),
    id:"",
    password:"",
    errorMessage:"",
    isError:false,
    isCredentialValid()
    {
        let idRegex= new RegExp("[a-z\d]{5,12}");
        let passwordRegex= new RegExp("[a-zA-Z0-9]{8,12}");
        console.log(passwordRegex.test(this.get('password')));
        if(idRegex.test(this.get('id'))&& passwordRegex.test(this.get('password'))) return true;
        else return false;
        
    },
    actions:
    {
        authenticate()
        {
            if(this.isCredentialValid())
            {
            let requestJSON=JSON.stringify({username:this.id,password:this.password});
            console.log(requestJSON)
            $.post(
                this.get('service').getRequestURL()+"/accounts/authentication",
                requestJSON,
                (data)=>
                {
                    let response=JSON.parse(data);
                    console.log(response);
                    if(response.accessLevel=='2')
                    {
                        this.transitionToRoute('admin');
                    }
                    else if(response.accessLevel=='1')
                    {
                        this.transitionToRoute('user');
                    }
                    else
                    {
                        this.set('errorMessage',"Wrong User ID/Password")
                        this.set('isError',true);
                    }
                    localStorage.setItem("user_id",response.username);
                }
            )
            }
            else{
                this.set('isError',true);
                this.set('errorMessage',"Enter a valid User ID & Password")
            }
        }
        
    }
    
});