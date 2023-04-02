import React from 'react';
import s from './services.module.css';
import lo from '../img/electronic_learning_e_icon_220641.png';
import l1 from '../img/next_right_forward_icon_220677.png';
import l2 from '../img/list_task_icon_218076.png';
import l3 from '../img/education_degree_diploma_certificate_icon_220633.png';
import l4 from '../img/asking_faq_questions_and_answers_icon_220638.png';

const Block_main = (props) =>{
    return(
        <div className={s.block_main}>
            <img src={props.img} alt="" className={s.img}/>
            <p className={s.text_div}>{props.name}</p>
        </div>
    )
}

const Services = (props) => {
    return(
        <main>
            <h2 className={s.h_ser}>Услуги</h2>
            <div className={s.poz}>
                <div className={s.one}>
                    <Block_main name="Ведение бухгалтерского, налогового, кадрового учета" img={lo}/>
                    <Block_main name="Подготовка и сдача отчетности" img={l2}/>
                </div>
                <div className={s.one}>
                    <Block_main name="Оптимизация налогообложения" img={l1}/>
                    <Block_main name="Восстановление бухгалтерского и налогового учета" img={l3}/>
                </div>
                <div className={s.one}>
                    <Block_main name="Всё пройдёт онлайн" img={l4}/>
                </div>
            </div>
        </main>
    );
};

export default Services;