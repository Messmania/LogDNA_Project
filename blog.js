

const submitMessage = () => {
    let input = document.getElementById('msg');
    console.log(input.value);
    let p = fetch("http://localhost:3000", {
        method: 'POST',
        body: JSON.stringify(input.value)
    });
    p.then(
        (success) => {
            input.value="";

        },
        (err) => {
            let errorComp= document.getElementById('errorText');
            errorComp.innerHTML = err;
            document.getElementById('error').style.visibility = 'visible';
        });
}

const closeNotif = () => {
    document.getElementById('error').style.visibility='hidden';
}

const checkMessageLength = (event) =>{
    if(event.target.value.length){
        document.getElementsByClassName('submitButton')[0].disabled = false;
    }else{
        document.getElementsByClassName('submitButton')[0].disabled = true;
    }
}
