import style from './Home.module.css';
import graduationIcon from '../assets/graduation.svg'
import groupIcon from '../assets/group.svg'
import bookIcon from '../assets/book.svg'
import trophyIcon from '../assets/trophy.svg'

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
                            <img src={graduationIcon} alt="graduation" />
                            <h2>Excelência Acadêmica</h2>
                            <p>Currículo completo e professores qualificados para garantir o melhor aprendizado</p>
                        </div>
                        <div className={style.cardImg}>
                            <img src={groupIcon} alt="group" />
                            <h2>Comunidade Ativa</h2>
                            <p>Ambiente acolhedor onde todos participam do crescimento dos alunos</p>
                        </div>
                        <div className={style.cardImg}>
                            <img src={bookIcon} alt="book" />
                            <h2>Infraestrutura Moderna</h2>
                            <p>Biblioteca, laboratórios e recursos tecnológicos de ponta</p>
                        </div>
                        <div className={style.cardImg}>
                            <img src={trophyIcon} alt="trophy" />
                            <h2>Atividades Extras</h2>
                            <p>Esportes, artes, música e muito mais para desenvolvimento completo</p>
                        </div>
                    </div>
                </div>
                <div className={style.cardNews}>
                    <div>
                        <h2>Últimas notícias</h2>
                        <a href="/Blog">Ver todas</a>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={style.cardReg}>
                    
                </div>
            </aside>
        </main>
        </>
    )
}
