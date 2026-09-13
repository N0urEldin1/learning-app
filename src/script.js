document.querySelector('.notes').addEventListener('click', function(event) {
    
    const target = event.target

    const nextSibling = target.nextElementSibling;

    const parent = target.parentElement;

    const grandParent = parent.parentElement;

    const previuosParentSibling = grandParent.previousElementSibling;

    const previuosSibling = parent.previousElementSibling


    if (target.matches('.topic-title__unckecked')) {
        if (target.classList.contains('hidden')) {
            target.classList.remove('hidden')
            nextSibling.classList.add('hidden')
        } else {
            target.classList.add('hidden')
            nextSibling.classList.remove('hidden')
        }
    }

    if (target.matches('svg')) {
        if (parent.classList.contains('hidden')) {
            parent.classList.remove('hidden')
            previuosSibling.classList.add('hidden')
        } else {
            parent.classList.add('hidden')
            previuosSibling.classList.remove('hidden')
        }
    }
    
    if (target.matches('path')) {
        console.log(previuosParentSibling)
        if (previuosParentSibling.classList.contains('hidden')) {
            previuosParentSibling.classList.remove('hidden')
            grandParent.classList.add('hidden')
        } else {
            previuosParentSibling.classList.add('hidden')
            grandParent.classList.remove('hidden')
        }
    }

})