import React from 'react';
import s from './header.module.css';
import what from '../img/communication_message_chat_icon_219712.png';
import inst from '../img/vk_icon_196065.png';
import mail from '../img/letter_communication_message_email_icon_219715.png';
import door from '../img/in_door_communication_enter_log_in_login_icon_191647.png';

const Header = () => {
    return(
        <div>
            <header className={s.header}>
                <p className={s.name}>Бухгалтерские услуги для ООО и ИП</p>
                <div className={s.contact}>
                    <p className={s.p_c}>+7 963-579-6680</p>
                    <div className={s.asd}>
                        <a href="https://vk.com/id714891529" className={s.a_ico}><img src={inst} alt="" className={s.img_ico}/></a>
                    </div>
                </div>
            </header>
            <div className={s.main_header}>
                <div className={s.main_text}>
                    <p className={s.slog}>Бухгалтерские услуги для ООО и ИП</p>
                    <div className={s.tr}></div>
                    <p className={s.mini_slog}>Бухобслуживание от 1 000 руб.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;