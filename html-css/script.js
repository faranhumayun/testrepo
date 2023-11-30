function getVal() {
  //   var fname = document.getElementById("name").value;
  //   var email = document.getElementById("email").value;
  //   var password = document.getElementById("password").value;

  //   const fruits = ['apple', 'banana', 'orange']

  //   let fr = fruits.at(1);
  //   console.log(fr);

//   const checkbox = document.querySelectorAll('#checks')


    document.querySelector('#signup').addEventListener("submit", (e) => {
        e.preventDefault();
        form = e.target;
        
        const user_name = form.name
        const user_email = form.email

        let name = user_name.value;
        let email = user_email.value;
        

        let favColor = user_color.value;

        console.log("name", name)
        console.log("email", email)
        console.log("checkbox", checkbox)
        console.log("color", favColor)
    });
}
