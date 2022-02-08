import React, { useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = ({onSearch}) => { //검색이라는 이벤트가 발생하면 내가 전달해주는 이 콜백함수를 불러
    const inputRef = useRef();
    const handleSearch=()=>{
        const value = inputRef.current.value;
        console.log(value)
        onSearch(value); //검색하는것을 prop으로 받아와야한다.

    }
    const onClick =()=>{
        handleSearch();
        // console.log('onClick')
    }
    const onKeyPress =(event)=>{
        if(event.key ==='Enter'){handleSearch();}
        console.log('onKeyPress')

    }
     return (
         <header className={styles.header}>
             <div className={styles.logo}>
             <img className={styles.img} src="/images/logo.png" alt="logo" />
             <h1 className={styles.title}>Youtube</h1>
             </div>
             <input ref={inputRef} className={styles.input} type="search" placeholder='Search..' onKeyPress={onKeyPress}/>
             <button className={styles.button} type='submit'>
                 <img className={styles.buttonImg} src="/images/search.png" alt="search" onClick={onClick}/>
             </button>
         </header>
     )
    };

export default SearchHeader;