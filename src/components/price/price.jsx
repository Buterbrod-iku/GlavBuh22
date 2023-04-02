import React from 'react';
import s from './price.module.css';
import lot from '../img/status_file_positive_icon_220279.png';

const Price = (props) => {
    return(
        <div className={s.b_pr}>
            <h2 className={s.h_ser}>Примерная стоимость бухгалтерских услуг</h2>
            <h3 className={s.hh_ser}>Индивидуальная работа с каждым руководителем, гибкая ценовая политика</h3>
            <div className={s.poz}>
                <div className={s.block_main}>
                    <h3 className={s.numd_h}>1</h3>
                    <div className={s.poz_poz}>
                        <p className={s.text_div}>Нулевая отчетность и деятельность не ведется</p>
                        <div className={s.price}>1000 руб.</div>
                        <div className={s.trs}></div>
                    </div>
                </div>
                <div className={s.block_main}>
                    <h3 className={s.numd_h}>2</h3>
                    <div className={s.poz_poz}>
                        <p className={s.text_div}>ИП (УСН 6%, патент, без сотрудников)</p>
                        <div className={s.price}>от 2 000 руб.</div>
                        <div className={s.trs}></div>
                    </div>
                </div>
                <div className={s.block_main}>
                    <h3 className={s.numd_h}>3</h3>
                    <div className={s.poz_poz}>
                        <p className={s.text_div}>ИП (УСН 6%, 15%, патент, с сотрудниками)</p>
                        <div className={s.price}>от 3000 руб.</div>
                        <div className={s.trs}></div>
                    </div>
                </div>
                <div className={s.block_main}>
                    <h3 className={s.numd_h}>4</h3>
                    <div className={s.poz_poz}>
                        <p className={s.text_div}>ООО на УСН в зависимости от количества сотрудников</p>
                        <div className={s.price}>от 5000 руб.</div>
                        <div className={s.trs}></div>
                    </div>
                </div>
                <div className={s.block_main}>
                    <h3 className={s.numd_h}>5</h3>
                    <div className={s.poz_poz}>
                        <p className={s.text_div}>ООО на ОСНО в зависимости от количества сотрудников</p>
                        <div className={s.price}>от 7000 руб.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;