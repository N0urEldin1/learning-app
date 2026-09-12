// const checkMark = document.querySelector('.topic-title__check');

// // const gray = document.querySelectorAll('.gray');

// console.log(checkMark)

// function makeGreen() {
//     if (checkMark.classList.contains('gray')) {
//             checkMark?.classList.remove('gray')
//         } else {
//             checkMark?.classList.add('gray')
//         }    
// }

// checkMark.addEventListener('click', makeGreen);


document.querySelector('.notes')?.addEventListener('click', function(e) {
    
    const target = e.target

    if (target.matches('.topic-title__check')) {
        if (target.classList.contains('gray')) {
            target.classList.remove('gray')
        } else {
            target.classList.add('gray')}  
    }
})