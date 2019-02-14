import React from 'react';
import style from './layout.module.css'

const PageLayout = () => {

    return (
        <main className={style.layout}>
            <header className={style.header}>Header</header>
            <aside className={style.sidebar}>Aside</aside>
            <section className={style.stickies}>
                <h1>Stickies</h1>
            </section>
            <footer className={style.footer}>Footer</footer>
        </main>
    )

}

export default PageLayout