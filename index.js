console.log(`Hello`)

let message = document.querySelector('#message')

function deleteMovie(e){
    e.target.parentNode.remove()
    message.textContent = 'Movie removed'
}

function crossOffMovie(e){
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }

}

function addMovie(e){
    e.preventDefault()

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)


    document.querySelector('ul').appendChild(movie)
    document.querySelector('form').reset()
}


document.querySelector('form').addEventListener('submit', addMovie)