function addTopic() {

    const notes = document.querySelector(".notes")

    notes.insertAdjacentHTML('beforeend', `
              <div class="note">

                <div class="title-section">

                    <div class="title-section__left">
                      <div class="topic-title">
                        <span class="topic-title__unckecked checkmark"></span>
                        <div class="topic-title__ckecked checkmark hidden">
                          <i class="fa-solid fa-circle-check"></i>
                        </div>
                      </div>
                      <h2 class="topic-title__title">1. Topic 1</h2>
                    </div>

                    <div class="title-section__right">
                      
                      <button type="button" class="options default">
                        <i class="collapsed-note__ellipsis fa-solid fa-ellipsis"></i>
                      </button>
                      
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
                        <div contenteditable="true" spellcheck="true" data-placeholder="Write a quick overview" class="overview-section__description" name="" id=""></div>
                      </div>

                      <div class="my-note-frame">
                        <h3 class="my-note-frame__frame">My notes</h3>
                      </div>

                      <div class="my-note-editor main-stroke">

                        <div contenteditable="true" spellcheck="true" data-placeholder="Start typing your notes..." class="my-note-editor__content" name="" id=""></div>

                      </div>
                  
                    </div>

                </div> 

                <div class="divider">
                  <span class="line"></span>
                </div>
    `
    )
}
