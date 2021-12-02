import React, {useRef, useState} from 'react';
import Button from '../button/button'
import styles from './card_add_form.module.css'

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [file, setFile] = useState({fileName: null, fileURL: null})

  const onFileChange = file => {
    console.log(file)
    setFile({
      fileName: file.name,
      fileURL: file.url
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || ''
    }
    formRef.current.reset()
    setFile({fileName: null, fileURL: null})
    onAdd(card)
  }
  return (
    <form ref={formRef} className={styles.form}>
      <input className={styles.input} type="text" ref={nameRef} name="name" placeholder='name'/>
      <input className={styles.input} type="text" ref={companyRef} name="company" placeholder='company'/>
      <select className={styles.select} ref={themeRef} name="theme" placeholder='theme'>
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" ref={titleRef} name="title" placeholder='title'/>
      <input className={styles.input} type="text" ref={emailRef} name="email" placeholder='email'/>
      <textarea className={styles.textarea} ref={messageRef} name="message" placeholder='message'></textarea>
      <div className={styles.fileInput}>
        <FileInput naem={file.fileName} onFileChange={onFileChange}/>
      </div>
      <Button name='Add' onClick={onSubmit}/>
    </form>
  )
}

export default CardAddForm;