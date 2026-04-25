import { useEffect, useRef, useState } from 'react';
import style from './Header.module.css';
import menuIcon from "../assets/menu.svg";

export function Header() {
    // Estado para controlar a visibilidade do menu lateral
    const[aberto, setAberto] = useState(false);
    const toggleMenu = () => {
        setAberto(!aberto);
        if(form.sidebar()){
            if(!aberto){
                form.sidebar()!.style.display = 'flex';
            }else{
                form.sidebar()!.style.display = 'none';
            }
        }
    }
    // clique fora do menu para fechar
    const sidebarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function clickFora(event: MouseEvent){
            if(sidebarRef.current && !sidebarRef.current.contains(event.target as Node)){
                setAberto(false);
                if(form.sidebar()){
                    form.sidebar()!.style.display = 'none';
                }
            }
        }
        document.addEventListener('mousedown', clickFora)

        return () => {
            document.removeEventListener('mousedown', clickFora)
        }
    }, [])

    const toggleColor = () => {
        if(form.colorLink()){
            form.colorLink()
        }
    }

    const form = {
        sidebar: () => document.getElementById('sidebar'),
        colorLink: () => document.getElementById('colorLink')
    }
    
    return (
        // JSX para o cabeçalho do site
        <>
        <header>
            <div className={style.cabeçalho}>
                <div>
                    <h1><a href="/ECIT"  className={style.logo} >Escola lisboa</a></h1>
                </div>
                {/* Navegação principal do site */}
                <nav className={style.lista}>
                    <ul className={style.menu} ref={toggleColor}>
                        <li className={style.hideMobile}><a href="/ECIT" id='colorLink'>Início</a></li>
                        <li className={style.hideMobile}><a href='/ECIT/sobre' id='colorLink'>Sobre</a></li>
                        <li className={style.hideMobile}><a href="/ECIT/blog">Blog</a></li>
                        <li className={style.hideMobile}><a href="#">Galeria</a></li>
                        <li className={style.hideMobile}><a href="#">Pré-matrícula</a></li>
                        <img onClick={toggleMenu} src={menuIcon} className={style.hideDesktop} alt="menu" />
                    </ul>
                    
                    <div ref={sidebarRef} className={style.sidebar} id='sidebar'>
                        <ul className={style.menu}>
                            <li><a href="/ECIT">Início</a></li>
                            <li><a href='/ECIT/sobre'>Sobre</a></li>
                            <li><a href="/ECIT/blog">Blog</a></li>
                            <li><a href="#">Galeria</a></li>
                            <li><a href="#">Pré-matrícula</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}
