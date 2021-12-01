import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor />
        <Preview/>
      </div>
      <Footer />
    </section>
  )
}

export default Maker;