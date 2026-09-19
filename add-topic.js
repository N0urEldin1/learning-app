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
                      <div contenteditable="true" spellcheck="false" data-placeholder="Write the topic name" class="topic-title__title" name="" id=""></div>
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

                <div class="note-section"> <!-- note-section -->
                      
                      <div class="note-section__overview"> <!-- note-section__overview -->
                        <h3 class="overvirew__title">Overview</h3> <!-- overvirew__title -->
                        <div contenteditable="true" spellcheck="true" data-placeholder="Write a quick overview" class="overview__text" name="" id=""></div> <!-- overview__text -->
                      </div>

                      <div class="note-section__note"> <!-- note-section__note -->

                        <p class="note__tag">My notes:</p> <!-- note__title -->

                        <div class="note__frame main-stroke"> <!-- note__frame -->
                          
                          <!-- Text editor icons - Feuture feature -->
                          <!-- <div class="note-section-icons">
                            <i class="note-section-icons__icon fa-solid fa-italic"></i>
                            <i class="note-section-icons__icon fa-solid fa-list-ul"></i>
                          </div> -->
  
                          <div contenteditable="true" spellcheck="true" data-placeholder="Start typing your notes..." class="note__text" name="" id=""></div> <!-- note__text -->
                          
                          <!-- TipTap setup - Feuture feature -->
                          <!-- <div class="editor-container">
                            <div class="toolbar" id="toolbar">
                              <button id="bold-button" data-tiptap-button="bold">Bold</button>
                              <button data-tiptap-button="italic">Italic</button>
                              <button data-tiptap-button="strike">Strike</button>
                              <button data-tiptap-button="code">Code</button>
                              <button data-tiptap-button="h1">H1</button>
                              <button data-tiptap-button="h2">H2</button>
                              <button data-tiptap-button="bulletList">Bullet List</button>
                              <button data-tiptap-button="orderedList">Ordered List</button>
                              <button data-tiptap-button="blockquote">Blockquote</button>
                              <button data-tiptap-button="codeBlock">Code Block</button>
                            </div>
                            <div id="editor"></div>
                          </div> -->
  
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
