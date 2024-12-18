import React from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
        border:'2px solid',
        borderColor:props.mode==='dark'?'white':'#042743'
    }
  return (
    <div className="container" >
        <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>ABOUT US</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>TextUtils is a powerful and easy-to-use tool designed to help you analyze and manipulate your text with just a few clicks. Whether you're working on an essay, social media post, or any other writing task, TextUtils offers the following features:
                        Word Counter: Quickly count the number of words in your text to stay within limits for documents, articles, and more.
                        Character Counter: Track the number of characters in your text, helping you meet character-based requirements for messaging or content.
                        Uppercase to Lowercase: Effortlessly convert all uppercase text to lowercase with one click, making your writing more accessible.
                        Lowercase to Uppercase: Convert lowercase text to uppercase instantly, perfect for emphasizing important information.
                        With its straightforward interface, TextUtils ensures your text is always optimized for the task at hand.</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong> Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>TextUtils is a free and easy-to-use tool designed to help you manage and optimize your text. Whether you're editing a document or preparing content for social media.Completely free to use, TextUtils is your go-to tool for quick and efficient text analysis and manipulation.</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatiable</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>TextUtils is a browser-compatible, free-to-use tool designed to streamline text management tasks. Accessible directly from your browser.No downloads required—just open your browser, paste your text, and start using TextUtils today!</strong>
            </div> 
            </div>
        </div>
        </div>
    </div>
  )
}
