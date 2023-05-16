import "./Footer.css";

const Footer = () =>{

    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://github.com/Angel-ChS">
                <img src="/img/facebook.png" alt="FacebooK"/>
            </a>
            <a href="https://github.com/Angel-ChS">
                <img src="/img/twitter.png" alt="Twitter"/>
            </a>
            <a href="https://github.com/Angel-ChS">
                <img src="/img/instagram.png" alt="instagram"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="Logo ORG" />
        <strong>Desarrollado por Angel Chan</strong>  
    </footer>

}

export default Footer