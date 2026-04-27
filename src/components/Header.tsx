import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import style from './Header.module.css';
import { menu } from "../assets"

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

    const form = {
        sidebar: () => document.getElementById('sidebar')
    }
    
    return (
        // JSX para o cabeçalho do site
        <>
        <header>
            <div className={style.cabeçalho}>
                <div className={style.cabeçalhoLogo}>
                    <h1><a href="/ECIT"  className={style.logo} >Escola lisboa</a></h1>
                </div>
                {/* Navegação principal do site */}
                <nav>
                    <ul className={style.menu}>
                        <li className={style.hideMobile}><NavLink to="/ECIT" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Início</NavLink></li>
                        <li className={style.hideMobile}><NavLink to='/ECIT/Sobre' end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Sobre</NavLink></li>
                        <li className={style.hideMobile}><NavLink to="/ECIT/Blog" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Blog</NavLink></li>
                        <li className={style.hideMobile}><NavLink to="#" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Galeria</NavLink></li>
                        <li className={style.hideMobile}><NavLink to="#" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Pré-matrícula</NavLink></li>
                        <img onClick={toggleMenu} src={menu} className={style.hideDesktop} alt="menu" />
                    </ul>
                    {/*navegação mobile*/}
                    <div ref={sidebarRef} className={style.sidebar} id='sidebar'>
                        <ul className={style.menu}>
                            <li><NavLink to="/ECIT" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Início</NavLink></li>
                            <li><NavLink to='/ECIT/Sobre' end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Sobre</NavLink></li>
                            <li><NavLink to="/ECIT/Blog" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Blog</NavLink></li>
                            <li><NavLink to="#" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Galeria</NavLink></li>
                            <li><NavLink to="#" end style={({ isActive }) => ({color: isActive ? "#1c60fc" : "black", fontWeight: isActive ? "bold" : "", textDecoration: "none"})}>Pré-matrícula</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}
