import React from 'react'

const Form = () => {
    return (
        <div className="section">
            <form action="">
                <h5 className="gray-text">New Note</h5>

                    <div class="input-field">
                        <input id="note_title" type="text" class="validate" />
                        <label class="active" for="note_title">Note Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="note_content" class="materialize-textarea"></textarea>
                        <label for="note_content">Note Content</label>
                    </div>

            </form>
        </div>
    )
}

export default Form
