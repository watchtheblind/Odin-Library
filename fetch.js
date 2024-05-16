document.querySelector("#bookForm").addEventListener('submit',e => {
    e.preventDefault();
    let form = document.querySelector("#bookForm");
    const data = new URLSearchParams();
    for(const p of new FormData(form)){
        data.append(p[0], p[1]);
    }
    fetch('database.php', {
        method: 'POST',
        body: data
    }).then(response => response.text()).then(response =>{

    }).catch(error => console.log(error));
});