import { useState } from "react";
import { RequestAlreadySentError } from "web3";


export const Register = () => {
    const [user,setUser]=useState({
      username:" ",
      email:"",
      phone:"",
      password:"",
    });
    
    //handling input values 
    const handleInput=(e)=>{
      console.log(e);
      let name=e.target.name;
      let value=e.target.value;

      setUser({
        ...user,   //... is spread operator any old values will be reetained
        [name]:value,  // [name] bcux name is dynamic usernmae phone email..
      });
    };

      //handling form submission
      const handleSubmit=(e)=>{
        e.preventDefault();
      console.log(user);
      //alert(user);
      };
    
    
    return <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="regitration-image">
                <img src="/images/customer-service.jpg" alt="image" height="500" width="400"/>

            </div>
            {/* Registration form */}
            <div className="registrstion-form">
              <h1 className="main-heading mb-3">register form</h1>
              <br/>
              <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" 
                  placeholder="username" id="username"
                  required autoComplete="off"
                  value={user.username}
                  onChange={handleInput} // variable nanme decalred above
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="text" name="email" 
                  placeholder="enter ur email" id="email"
                  required autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" 
                  placeholder="enter ur number" id="phone"
                  required autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" 
                  placeholder="enter ur password" id="password"
                  required autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  />
                </div>
                <br/>
                <button type="submit" className="btn btn-submit">Register Now</button>
              </form >
            </div>
          </div>
        </div>
      </main>
    </section>
    
    </>
  };