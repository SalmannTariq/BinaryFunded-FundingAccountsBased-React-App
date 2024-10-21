import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
export const handleSendData = async (name, email, password) => {
    try {
        createUserWithEmailAndPassword(auth,email,name,password);
        console.log("Account created");
    } catch (err) {
        console.log(err)
    }
    console.log("password = ",password);
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/JSON"
        },body:JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json();
    if(data.status === 401 || !data){
        console.log("Error")
    }
    else{
        console.log("Email send successfully");
    }
    console.log(password)
}