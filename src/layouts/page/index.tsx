import './style.css'


const PageLayout = ({title, children} : {title:string, children:React.ReactNode}) =>{


  return (
    <div className="wrapper">
        <header className="header">
            <ul>
                <li><a href="/">Головна</a></li>
                <li><a href="/page1">Сторінка 1</a></li>
                <li><a href="/page2">Сторінка 2</a></li>
            </ul>
        </header>
        <main className="content">
            <h1>{title}</h1>
            {children}
        </main>
        <footer className="footer">
            Футер завжди внизу!
        </footer>
    </div>
  )
}


export default PageLayout
