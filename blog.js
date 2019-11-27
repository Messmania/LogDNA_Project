
/** 
 * Button click handler
 * Makes a POST request to the server
 */
const submitMessage = () => {
    let input = document.getElementById('msg');
    if (input.value.length > 0) {
        let p = fetch("http://localhost:3000", {
            method: 'POST',
            body: JSON.stringify(input.value)
        });
        p.then(
            (success) => {
                input.value = "";
            },
            (err) => {
                let errorComp = document.getElementById('errorText');
                errorComp.innerHTML = err;
                document.getElementById('error').style.visibility = 'visible';
            });
    }
}

/**
 * Closes the notification bar
 */
const closeNotif = () => {
    document.getElementById('error').style.visibility = 'hidden';
}


