import React from 'react';
import style from './layout.module.css'

const stickiesArray = [
    {title: 'Lack of communication', column: 'improvements', event: 'sprint 5', user: '12bjyu93h2', status: 'public'},
    {title: 'Good team vibe', column: 'positive', event: 'sprint 5', user: '12bjyu93h2', status: 'private'},
    {title: 'Great design', column: 'positive', event: 'sprint 5', user: '12bjyu93h2', status: 'public'},
    {title: 'New team members', column: 'positive', event: 'sprint 5', user: '12bjyu93h2', status: 'private'},
    {title: 'Internet connection drops', column: 'improvements', event: 'sprint 5', user: '12bjyu93h2', status: 'public'},
]


const PageLayout = () => {
    const stickiesCollection = {
        improvements: [],
        positive: [],
        mood: [],
        actions: [],
    }

    stickiesArray.forEach(item => {
        stickiesCollection[item.column].push(item)
    })

    const stickies = () => {
        let stickies = []
        for (const column in stickiesCollection) {
            console.log('Column: ', column)
            let columnArray = stickiesCollection[column].map(item => {
                return <div className={style.sticky}>{item.title}</div>
            })
            stickies.push(<div className={style.stickiesColumItem}><h2>{column}</h2>{columnArray}</div>)
        }
        return stickies
    }
    
    return (
        <main className={style.layout}>
            <header className={style.header}>Header</header>
            <aside className={style.sidebar}>Aside</aside>
            <section className={style.stickies}>
                <h1>Stickies</h1>
                <div className={[style.stickiesColumns, style.stickiesColumnsDefault].join(' ')}>

                    {stickies()}
                    
                    <div className={style.stickiesColumItem}>Mood</div>
                    <div className={style.stickiesColumItem}>Positive</div>
                    <div className={style.stickiesColumItem}>Improvements</div>
                    <div className={style.stickiesColumItem}>Action points</div>
                </div>
            </section>
            <footer className={style.footer}>Footer</footer>
        </main>
    )

}

export default PageLayout