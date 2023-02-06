import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';


function Email() {

  const [isSend, setIsSend] = useState('')
  const [clickCount, setClickCount] = useState(0)

  let username = useRef()
  let email = useRef()
  let text = useRef()
  let form = useRef()
  

  let onSend = async() => {
    let inputUsername = username.current.value
    let inputEmail = email.current.value
    let inputText = text.current.value
    console.log(inputUsername)
    console.log(inputEmail)
    console.log(inputText)


    if(!inputText.length || !inputUsername.length || !inputEmail.length){
      setIsSend("field cannot be blank")
    }else if(!inputEmail.includes('@')){
      setIsSend("email must be using @")  
    } else{
      setIsSend('Message is sent')
    }



    emailjs.sendForm('service_5j08z8q', 'template_85a982z', form.current, 'c_6sks-DUNUknWkPC')
    .then((result) => {
        console.log(result.text);
        console.log("masuk")
    }, (error) => {
        console.log(error.text);
    });

    setTimeout(() => {
      username.current.value = ''
      email.current.value = ''
      text.current.value = ''
      setIsSend('')
    }, 2000)

    if(clickCount >= 2) return;
    setClickCount(clickCount + 1)
    
}


  return (
    <>
    <div className="parent w-full flex-nowrap">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form ref={form}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3  
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
              name="username"
              ref={username}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
              name="email"
              ref={email}
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
              name="text"
              ref={text}
            ></textarea>
          </div>
          <div className='green-500'>{isSend}</div>
          <button
            type="button"
            className="
      w-full
      px-6
      py-2.5
      my-bg-main 
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
        hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        disabled={clickCount >= 2}
        onClick={() => onSend()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Email;
