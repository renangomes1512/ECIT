import style from "./Footer.module.css";

export function Footer(){
    return(
        <footer>
            <div className={style.footerContent}>
                <div className={style.cards}>
                    <h3>Escola Lisboa</h3>
                    <p>Educação de excelência, formando cidadãos do futuro.</p>
                </div>
                <div className={style.cards}>
                    <h3>Contato</h3>
                    <p>Email: contato@escolalisboa.com</p>
                    <p>Telefone: (83) 1234-5678</p>
                    <p>Endereço: Rua Exemplo, 123 - João Pessoa/PB</p>
                </div>
                <div className={style.cards}>
                    <h3>Horário</h3>
                    <p>Segunda a Sexta: 7h30 às 17h</p>
                </div>
            </div>
            <p>&copy; 2026 Escola Lisboa. Todos os direitos reservados.</p>
        </footer>
    )
}