import React from "react";
import s from './footer.module.css';
import what from "../img/communication_message_chat_icon_219712.png";
import inst from "../img/vk_icon_196065.png";
import mail from "../img/letter_communication_message_email_icon_219715.png";

const Footer = () =>{
    return(
        <footer className={s.footer}>
            <p className={s.ny}>Бухгалтерские услуги для ООО и ИП</p>
            <div className={s.sd}>
                <p className={s.cont}>Контактная информация:</p>
                <div className={s.qwe}>
                    <p className={s.tel}>Тел. +7 963-579-6680</p>
                    <p className={s.mail}>E-mail: glav_buh_22@mail.ru</p>
                    <div className={s.poz}>
                        <a href="https://vk.com/id714891529" className={s.a_ico}><img src={inst} alt="" className={s.img_ico}/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;