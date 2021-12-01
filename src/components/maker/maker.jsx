import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Nangyung',
      compony: 'Kakao',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'namgyung.kim@gmail.com',
      message: 'hello',
      fileName: 'namgyung',
      filURL: null
    },
    {
      id: '2',
      name: 'Nangyung',
      compony: 'Kakao',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'namgyung.kim@gmail.com',
      message: 'hello2',
      fileName: 'namgyung',
      filURL: null
    },
    {
      id: '3',
      name: 'Nangyung',
      compony: 'Kakao',
      theme: 'light',
      title: 'Software Engineer',
      email: 'namgyung.kim@gmail.com',
      message: 'hello3',
      fileName: 'namgyung',
      filURL: null
    }
  ])
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        navigate('/')
      }
    })
  })

  const addCard = (card) => {
    const updated = [...cards, card]
    setCards(updated)
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  )
}

export default Maker;