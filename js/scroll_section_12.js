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
    


    if(Y > 2600) {
        textColor1.classList.add ('text_color_active');
        textColor1.classList.remove ('hidden');
    } else {
        textColor1.classList.remove ('text_color_active');
        textColor1.classList.add ('hidden');
    }

    if(Y > 3100) {
        textColor2.classList.add ('text_color_active');
        textColor2.classList.remove ('hidden');
    } else {
        textColor2.classList.remove ('text_color_active');
        textColor2.classList.add ('hidden');
    }

    if(Y > 3600) {
        textColor3.classList.add ('text_color_active');
        textColor3.classList.remove ('double_color_text');
        textColor31.classList.remove ('hidden');
    } else {
        textColor3.classList.remove ('text_color_active');
        textColor31.classList.add ('hidden');
    }

    if(Y > 4100) {
        textColor11.classList.add ('hidden');
        textColor21.classList.add ('hidden');
        textColor31.classList.add ('hidden');
        textColor1.classList.add ('pink_color_letter');
        textColor2.classList.add ('pink_color_letter');
        textColor3.classList.add ('pink_color_letter');
    } else {
        textColor11.classList.remove ('hidden');
        textColor21.classList.remove ('hidden');
        textColor1.classList.remove ('pink_color_letter');
        textColor2.classList.remove ('pink_color_letter');
        textColor3.classList.remove ('pink_color_letter');
  }
    
}

console.log("2");

