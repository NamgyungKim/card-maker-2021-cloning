import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService}) => {
  const [cards, setCards] = useState({
    '1':{
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
    '2':{
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
    '3':{
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
  })

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

  const CreateOrupdateCard = (card) => {
    setCards(cards => {
      const updated = { ...cards }
      updated[card.id] = card
      return updated
    })
  }

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = { ...cards }
      delete updated[card.id]
      return updated
    })
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor 
          FileInput={FileInput} 
          cards={cards} 
          addCard={CreateOrupdateCard} 
          updateCard={CreateOrupdateCard} 
          deleteCard={deleteCard}
        />
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  )
}

export default Maker;