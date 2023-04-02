import React from "react";
import s from './info.module.css';
import one from '../img/clock_time_5025.png';
import two from '../img/mbricash_99554.png';
import tree from '../img/3289577-fast-run-running_107103.png';
import gg from '../img/award_scholarships_sports_icon_220628.svg';
import light from '../img/lightbulbon_121975.png';
import prot from '../img/locked_security_lock_protected_icon_220558.png';
import net from '../img/network_connection_communication_icon_220555.png';


const Info = () =>{
    return(
        <div className={s.info}>
            <h2 className={s.h_info}>Преимущества</h2>
            <div className={s.poz_info_main}>
                <div  className={s.poz_info}>
                    <div className={s.block_info}>
                        <img src={tree} alt="" className={s.png_o}/>
                        <p className={s.text_info}>Качественно</p>
                    </div>
                    <div className={s.block_info}>
                        <img src={one} alt="" className={s.png_o}/>
                        <p className={s.text_info}>Быстро</p>
                    </div>
                    <div className={s.block_info}>
                        <img src={two} alt="" className={s.png_o}/>
                        <p className={s.text_info}>Недорого</p>
                    </div>
                </div>
                <div className={s.poz_info}>
                    <div className={s.block_info}>
                        <img src={light} alt="" className={s.png_o}/>
                        <p className={s.text_info}>Профессионально</p>
                    </div>
                    <div className={s.block_info}>
                        <img src={prot} alt="" className={s.png_o}/>
                        <p className={s.text_info}>Конфиденциально</p>
                    </div>
                    <div className={s.block_info}>
                        <img src={net} alt="" className={s.png_o}/>
                        <p className={s.text_info}>Удалённо</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info