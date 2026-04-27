import style from './Home.module.css';
import { img1, img2, img3, book, graduation, group, trophy } from "../assets";
import { Link } from 'react-router';

export function Home(){
    return(
        <>
        <main>
            <aside>
                <div className={style.aside}>
                    <div className={style.card}>
                        <h1>Bem-vindo à Escola Lisboa</h1>
                        <p>Formando futuros líderes através de educação de qualidade e valores sólidos</p>
                        <div className={style.buttonGroup}>
                            <button className={style.btnBlue}>Faça sua Pré-matrícula</button>
                            <button className={style.btnWhite}>Conheça a Escola</button>
                        </div>
                    </div>
                </div>
                <div className={style.whyChoose}>
                    <h1>Por que escolher a Escola Lisboa?</h1>
                    <div className={style.cardsGroup}>
                        <div className={style.cardImg}>
                            <img src={graduation} alt="graduation" />
                            <h2>Excelência Acadêmica</h2>
                            <p>Currículo completo e professores qualificados para garantir o melhor aprendizado</p>
                        </div>
                        <div className={style.cardImg}>
                            <img src={group} alt="group" />
                            <h2>Comunidade Ativa</h2>
                            <p>Ambiente acolhedor onde todos participam do crescimento dos alunos</p>
                        </div>
                        <div className={style.cardImg}>
                            <img src={book} alt="book" />
                            <h2>Infraestrutura Moderna</h2>
                            <p>Biblioteca, laboratórios e recursos tecnológicos de ponta</p>
                        </div>
                        <div className={style.cardImg}>
                            <img src={trophy} alt="trophy" />
                            <h2>Atividades Extras</h2>
                            <p>Esportes, artes, música e muito mais para desenvolvimento completo</p>
                        </div>
                    </div>
                </div>
                <div className={style.containerNews}>
                    <div className={style.cardNews}>
                        <div className={style.news}>
                            <div>
                                <h1>Últimas notícias</h1>
                            </div>
                            <Link to="/ECIT/Blog">Ver todas</Link>
                        </div>
                    </div>
                    <div className={style.cardImgNews}>
                        <div className={style.newsImg}>
                            <Link to="/ECIT/Blog">
                                <img src={img1} alt="" className={style.img}/>
                                <p className={style.txtDate}>xx-xx-xxxx</p>
                                <h2>titulo</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere ipsum sequi adipisci deleniti. Nesciunt reiciendis doloremque, illo provident recusandae inventore ipsam, vel sint doloribus incidunt tenetur ea maxime blanditiis.</p>
                            </Link>
                        </div>
                        <div className={style.newsImg}>
                            <Link to="/ECIT/Blog">
                                <img src={img2} alt="" className={style.img} />
                                <p className={style.txtDate}>xx-xx-xxxx</p>
                                <h2>titulo</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit odit nesciunt eaque, quae tempora reprehenderit repudiandae laborum reiciendis temporibus rerum iure consectetur delectus alias deserunt facere porro blanditiis quia.</p>
                            </Link>
                        </div>
                        <div className={style.newsImg}>
                            <Link to="/ECIT/Blog">
                                <img src={img3} alt="" className={style.img}/>
                                <p className={style.txtDate}>xx-xx-xxxx</p>
                                <h2>titulo</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit odit nesciunt eaque, quae tempora reprehenderit repudiandae laborum reiciendis temporibus rerum iure consectetur delectus alias deserunt facere porro blanditiis quia.</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.cardReg}>
                    
                </div>
            </aside>
        </main>
        </>
    )
}
