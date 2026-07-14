function intro(Full_name,Age,Hobby,Goal){
    alert(`
        My name is ${Full_name}, and I am ${Age} years old. I enjoy reading books and learning new things. My favorite hobby is ${Hobby}, and I do it in my free time. In the future, I hope to become ${Goal}.
        `)
}
intro(
    prompt("Enter Your Full Name"),
    prompt("Enter Your Age"),
    prompt("Enter Your Hobby"),
    prompt("Enter Your Goal")
)
