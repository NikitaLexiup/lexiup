"use strict";
window.onscroll = () => {
    const textStart = document.querySelector ('.text_start');
    const text1 = document.querySelector ('.text_1');
    const text2 = document.querySelector ('.text_2');
    const text3 = document.querySelector ('.text_3');
    const textColor1 = document.querySelector ('.text_color_1');
    const textColor2 = document.querySelector ('.text_color_2');
    const textColor3 = document.querySelector ('.text_color_3');
    const textColor11 = document.querySelector ('.text_color_1_1');
    const textColor21 = document.querySelector ('.text_color_2_1');
    const textColor31 = document.querySelector ('.text_color_3_1');
    const text13 = document.querySelector ('.text_1_section_3');
    const text23 = document.querySelector ('.text_2_section_3');
    const text33 = document.querySelector ('.text_3_section_3');
    const text43 = document.querySelector ('.text_4_section_3');
    const progressDayStudy = document.querySelector ('.progress_day_study');
    const progressWordStudy = document.querySelector ('.progress_word_study');
    const img2Section3 = document.querySelector ('.img_2_section_3');
    const text63 = document.querySelector ('.text_6_section_3');
    const section4 = document.querySelector ('.section_4');
    const titileSectionCustom  = document.querySelector ('.titile_section_custom');
    const section41 = document.querySelector ('.section_4_1');
    const blockWatch = document.querySelector ('.block_watch');
    const blockPhone = document.querySelector ('.block_phone');
    const blockLaptop = document.querySelector ('.block_laptop');
    const Y = window.scrollY;
    
    if(Y > 500) {
        textStart.classList.add ('not_active_text_section_1');
    } else {
        textStart.classList.remove ('not_active_text_section_1');
    }
    
    if(Y > 501) {
    text1.classList.remove ('not_active_text_section_1');
    } else {
        text1.classList.add ('not_active_text_section_1');
    }

    if(Y > 1000) {
        text1.classList.add ('not_active_text_section_1');
    }

    if(Y > 1001) {
    text2.classList.remove ('not_active_text_section_1');
    } else {
        text2.classList.add ('not_active_text_section_1');
    }
    if(Y > 1500) {
        text2.classList.add ('not_active_text_section_1');
    }

    if(Y > 1501) {
    text3.classList.remove ('not_active_text_section_1');
    } else {
        text3.classList.add ('not_active_text_section_1');
    }
    
}

console.log("1");

