function addTopic() {

    const notes = document.querySelector(".notes")

    notes.insertAdjacentHTML('beforeend', `
              <div class="note">

                <div class="title-section">

                    <div class="title-section__left">
                      <div class="topic-title">
                        <span class="topic-title__unckecked"></span>
                        <div class="topic-title__ckecked hidden">
                          <i class="fa-solid fa-circle-check"></i>
                        </div>
                      </div>
                      <h2 class="topic-title__title">1. Topic 1</h2>
                    </div>

                    <div class="title-section__right">
                      
                      <div class="options default">
                        <i class="collapsed-note__ellipsis fa-solid fa-ellipsis"></i>
                      </div>
                      
                      <button type="button" class="accordion default">
                        <i class="collapsed-note__angle fa-solid fa-angle-down default"></i>
                      </button>

                      <div class="topic-icons">
                      </div>

                    </div>

                </div>

                <div class="open-note__note-section">
                      
                      <div class="overview-section">
                        <h3 class="overview-section__title">Overview</h3>
                        <p class="overview-section__description">text</p>
                      </div>

                      <div class="my-note-frame">
                        <h3 class="my-note-frame__frame">My notes</h3>
                      </div>

                      <div class="my-note-editor main-stroke">

                        <div class="note-section-icons">
                          <i class="note-section-icons__icon fa-solid fa-italic"></i>
                          <i class="note-section-icons__icon fa-solid fa-list-ul"></i>
                        </div>

                      </div>
                  
                    </div>

                </div>  

                <div class="divider">
                  <span class="line"></span>
                </div>
    `
    )
}
