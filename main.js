

function getValue(){
    const name = document.getElementById('name').value
    localStorage.setItem('Name:', JSON.stringify(name))

}

document.getElementById('btn').addEventListener('click', () => {
    getValue()
})
