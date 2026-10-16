// 1
const showUsers=document.getElementById("userList") as HTMLDivElement;

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

async function fetchUsers(): Promise<void>{
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error('Something bad happened.');
        }
        let data: User[] = await response.json();
        data.forEach((user: User)=>{
            const para = document.createElement("p");
            para.textContent = `Name: ${user.name}, Email: ${user.email}`;
            showUsers.appendChild(para);
        })
        
    }catch(err){
        console.log(err);
    }
}
// fetchUsers();


// 2.

const userName =document.getElementById("username") as HTMLInputElement
const password =document.getElementById("password") as HTMLInputElement;
const buttonSave =document.getElementById("buttonSave") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;
const formSubmit = document.getElementById("formSubmit") as HTMLFormElement;



formSubmit.addEventListener("submit",(e:SubmitEvent)=>{
    e.preventDefault()

    localStorage.setItem("username",userName.value);
    localStorage.setItem("password",password.value);
    alert("Data submited Succesully")
    formSubmit.clear();
});


// export{}

// 3. 











