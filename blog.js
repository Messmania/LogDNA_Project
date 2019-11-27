

const submitMessage = () => {
    console.log("Clicked!")
    let input = document.getElementById('msg');
    console.log(input.value);
    let p = fetch("https://localhost:3000", {
        method: 'POST',
        body: JSON.stringify(input.value)
    });
    p.then(
        (success) => {
            // console.log("Success!:", success);
            input.value="";
        },
        (err) => {
            // console.log("Error!", err);
            let errorComp= document.getElementById('errorText');
            errorComp.innerHTML = err;
            document.getElementById('error').style.visibility = 'visible';
        });
}

const closeNotif = (event) => {
    // console.log("CLosed!");
    document.getElementById('error').style.visibility='hidden';
}

const checkMessageLength = (event) =>{
    console.log(event.target.value);
    if(event.target.value.length){
        document.getElementsByClassName('submitButton')[0].disabled = false;
    }else{
        document.getElementsByClassName('submitButton')[0].disabled = true;
    }
}
