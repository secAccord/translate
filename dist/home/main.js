const languages = ['English', 'Polish', 'French', 'German'];
const sLang = ['en', 'pl', 'fr', 'de'];
let selectedLang = 'en';
function searchWord(word){
const words = fetch(`http://localhost:3000/data?lang=${selectedLang}&sword=${word}`).then(response => response.json())

words.then(data => {
    document.querySelector('#data').innerHTML = '';
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const fixLenght = data.length+1;
    const tr = document.createElement('tr');
    for(let i = 0; i < 4; i++){
        const th = document.createElement('th');
        th.innerHTML = `${languages[i]}`;
        tr.appendChild(th);


    }
    thead.appendChild(tr);
    table.appendChild(thead);
    data.forEach(word=>{
        const tr = document.createElement('tr');
        for(let i = 0; i < 4; i++){
            const td = document.createElement('td');
            td.innerHTML = `${word[sLang[i]]}`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    })
    const inputTr = document.createElement('tr');

    for(let i = 0; i < 4; i++){
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', `${languages[i]}`);
        input.setAttribute('name', `${sLang[i]}`);
        td.appendChild(input);
        inputTr.appendChild(td);
    }

    tbody.appendChild(inputTr);
    table.appendChild(tbody);
    document.querySelector('#data').appendChild(table);
})
}
const changeLanguage = lang => selectedLang = lang;

searchWord(document.querySelector('input[name="search"]').value)



function addWord(){

    const requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    let good = true;
    const data = []
    document.querySelector('#data').querySelectorAll('input').forEach(input => {

        if(input.value !== ''){
            data.push (input.value)

            }else{
                good = false;
            }

        })
    if(good) {
        console.log(data)

            fetch(`http://localhost:3000/add?pl=${data[1]}&en=${data[0]}&fr=${data[2]}&de=${data[3]}`,requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {console.error('Word already exists'); alert('Word already exists')});

        searchWord(document.querySelector('input[name="search"]').value)
    }else{
        alert('Fill all fields')
    }
}


