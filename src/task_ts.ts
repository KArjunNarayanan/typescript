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
const load =document.getElementById("load") as HTMLButtonElement;
const dele =document.getElementById("dele") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;
const formSubmit = document.getElementById("formSubmit") as HTMLFormElement;



formSubmit.addEventListener("submit",(e:SubmitEvent)=>{
    e.preventDefault()

    localStorage.setItem("username",userName.value);
    localStorage.setItem("password",password.value);
    alert("Data submited Succesully")
    formSubmit.reset();
});




// 3. 

function loadName(): void{
    result.textContent = ""
    let res = localStorage.getItem("username");
    result.textContent = `Name: ${res}`;
}

load.addEventListener("click",()=>{
    loadName();
});


//4. 
function deleteName(): void{
    localStorage.removeItem("username")
    alert("Deleted Successfully!")
}
dele.addEventListener("click",()=>{
    result.textContent = ""
    deleteName();
});


//5.
const studentForm = document.getElementById("studentForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLSelectElement;
const studentInfo = document.getElementById("studentInfo") as HTMLDivElement;

interface Student {
    name: string;
    age: number;
    email: string;
    phone: string;
    course: string;
}
function displayStudent(): void {
    studentInfo.textContent = "";
    const savedData = localStorage.getItem("student");
    if (savedData === null) {
        studentInfo.textContent = "No student register found";
        return;
    }
    const student: Student = JSON.parse(savedData);
    const namePara = document.createElement("p");
    namePara.textContent = `Name: ${student.name}`;
    const agePara = document.createElement("p");
    agePara.textContent = `Age: ${student.age}`;
    const emailPara = document.createElement("p");
    emailPara.textContent = `Email: ${student.email}`;
    const phonePara = document.createElement("p");
    phonePara.textContent = `Phone: ${student.phone}`;
    const coursePara = document.createElement("p");
    coursePara.textContent = `Course: ${student.course}`;
    studentInfo.append(
        namePara,
        agePara,
        emailPara,
        phonePara,
        coursePara
    );
}
studentForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const student: Student = {
        name: nameInput.value.trim(),
        age: Number(ageInput.value),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        course: courseInput.value
    };
    localStorage.setItem("student", JSON.stringify(student));
    alert("Student registered successfully!");
    studentForm.reset();
    displayStudent();
});
displayStudent();

// export {}





















