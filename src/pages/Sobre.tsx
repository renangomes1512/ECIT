import { lisboa } from "../assets"
import style from "./Sobre.module.css";

export function Sobre(){
    return(
        <>
        <main>
            <div className={style.sobre}>
                <div className={style.sobreMain}>
                    <div className={style.sobreLisboa}>
                        <h1>Sobre a Escola Lisboa</h1>
                        <p>Com mais de 30 anos de história, a Escola Lisboa é referência em educação de qualidade</p>
                    </div>
                </div>
                <div className={style.historia}>
                    <h1>Nossa história</h1>
                    <div className={style.container}>
                        <div>
                            <img src={lisboa} alt="" />
                        </div>
                        <div>
                            <p>
                                A <strong>ECIT Manoel Lisboa de Moura</strong>, em João Pessoa, era antes a <strong>Escola Estadual Presidente Costa e Silva</strong>. Em <strong>28 de março de 2016</strong>, uma lei estadual mudou oficialmente o nome da escola para <strong>Escola Estadual de Ensino Fundamental e Médio Manoel Lisboa de Moura</strong>.
                                <br />
                                Depois disso, o Governo da Paraíba anunciou a construção de uma nova unidade para substituir a estrutura antiga. Em <strong>2017</strong>, foi assinada a ordem de serviço para a nova escola, e a notícia oficial diz que a unidade antiga era a “antiga Escola Presidente Costa e Silva”.
                                <br />
                                A nova estrutura foi <strong>entregue em setembro de 2018</strong>, no bairro <strong>Costa e Silva</strong>, em João Pessoa. Segundo o jornal oficial A União, foram investidos <strong>mais de R$ 6,7 milhões</strong>, a unidade passou a atender cerca de <strong>1.400 estudantes</strong>, e o prédio novo recebeu <strong>12 salas de aula, ginásio poliesportivo e quatro laboratórios</strong>. A mesma reportagem informa que a escola antiga tinha sido construída na <strong>década de 1970</strong> e já não tinha mais condições adequadas de funcionamento.
                                <br />
                                Também foi nessa nova fase que a escola passou a funcionar dentro do modelo de <strong>Escola Cidadã Integral Técnica (ECIT)</strong>, fortalecendo a proposta de ensino médio integrado à formação técnica. Em registros oficiais mais recentes da rede estadual, a escola aparece ofertando cursos técnicos como <strong>Logística e Inforrmática</strong>.
                                <br />
                                Sobre o nome da escola: <strong>Manoel Lisboa de Moura</strong> foi um militante político brasileiro que atuou contra a ditadura militar. O nome dele foi escolhido para substituir a antiga denominação ligada ao marechal <strong>Costa e Silva</strong>, presidente do regime militar. A troca foi formalizada pela lei estadual de 2016.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}