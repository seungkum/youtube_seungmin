import React, { memo, useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = memo(
    ({onSearch}) => { //검색이라는 이벤트가 발생하면 내가 전달해주는 이 콜백함수를 불러
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
        }
);
// memo를 쓴다는것은 전달되는 props이 변경되지 않으면 re-render가 되지않고 prop이 바뀌면 다시 렌더링이된다.
//그말은 onSearch가 새로운것으로 업데이트가되면 searchHeader 렌더가 발생할수있다.

export default SearchHeader;