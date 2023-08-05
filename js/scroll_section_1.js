window.onscroll = () => {
    const textStart = document.querySelector ('.text_start');
    const text1 = document.querySelector ('.text_1');
    const text2 = document.querySelector ('.text_2');
    const text3 = document.querySelector ('.text_3');
    const section1 = document.querySelector ('.section_1');
    const section2 = document.querySelector ('.section_2');
    const section3 = document.querySelector ('.section_3');
    const section4 = document.querySelector ('.section_4');
    const section41 = document.querySelector ('.section_4_1');
    const section41Mobile = document.querySelector ('.section_4_1_mobile');
    //const section41Mobile = document.querySelector ('.section_4_1_mobile');
    const section5 = document.querySelector ('.section_5');
    const section6 = document.querySelector ('.section_6');
    const section7 = document.querySelector ('.section_7');
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
    const text52 = document.querySelector ('#text_2_section_5');
    const text16 = document.querySelector ('.text_1_section_6');
    const text26 = document.querySelector ('.text_2_section_6');
    const text36 = document.querySelector ('.text_3_section_6');
    const text46 = document.querySelector ('.text_4_section_6');
    const text56 = document.querySelector ('.text_5_section_6');
    const text17 = document.querySelector ('.text_1_section_7');
    const text27 = document.querySelector ('.text_2_section_7');
    const text37 = document.querySelector ('.text_3_section_7');
    const text47 = document.querySelector ('.text_4_section_7');
    const text18 = document.querySelector ('.text_1_section_8');
    const text28 = document.querySelector ('.text_2_section_8');
    const text38 = document.querySelector ('.text_3_section_8');
    const pinkColorWord1 = document.querySelector ('#pink_color_word_1');
    const pinkColorWord2 = document.querySelector ('#pink_color_word_2');
    const pinkColorWord3 = document.querySelector ('#pink_color_word_3');
    const progressDayStudy = document.querySelector ('.progress_day_study');
    const progressWordStudy = document.querySelector ('.progress_word_study');
    const img2Section3 = document.querySelector ('.img_2_section_3');
    const text63 = document.querySelector ('.text_6_section_3');
    const titileSectionCustom  = document.querySelector ('.titile_section_custom');
    const blockWatch = document.querySelector ('.block_watch');
    const blockPhone = document.querySelector ('.block_phone');
    const blockLaptop = document.querySelector ('.block_laptop');
    const Y = window.scrollY;

    
    if(Y >= 500) {
        textStart.classList.add ('not_active_text_section_1');
    } else {
        textStart.classList.remove ('not_active_text_section_1');
    }

    if(Y >= 501 && Y <= 1000) {
    text1.classList.remove ('not_active_text_section_1');
    } else {
        text1.classList.add ('not_active_text_section_1');
    }


    if(Y >= 1001 && Y <= 1500) {
    text2.classList.remove ('not_active_text_section_1');
    } else {
        text2.classList.add ('not_active_text_section_1');
    }
   

    if(Y >= 1501) {
    text3.classList.remove ('not_active_text_section_1');
    } else {
        text3.classList.add ('not_active_text_section_1');
    }

    if (Y >= 2200) {
        section1.classList.add ('custom_bg_black');
    } else {
        section1.classList.remove ('custom_bg_black');
    }

    if(Y >= 2600) {
        textColor1.classList.add ('text_color_active');
        textColor1.classList.remove ('hidden');
    } else {
        textColor1.classList.remove ('text_color_active');
        textColor1.classList.add ('hidden');
    }

    if(Y >= 3100) {
        textColor2.classList.add ('text_color_active');
        textColor2.classList.remove ('hidden');
    } else {
        textColor2.classList.remove ('text_color_active');
        textColor2.classList.add ('hidden');
    }

    if (Y >= 3600) {
        textColor3.classList.add ('text_color_active');
        textColor3.classList.remove ('double_color_text');
        textColor31.classList.remove ('hidden');
    } else {
        textColor3.classList.remove ('text_color_active');
        textColor31.classList.add ('hidden');
    }

    if (Y >= 4100) {
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

    if (Y >= 5000) {
        section2.classList.add ('custom_bg');
        textColor2.classList.remove ('pink_color_letter', 'text_color_active');
        textColor3.classList.remove ('pink_color_letter');
        textColor2.classList.add ('hidden');
        textColor3.classList.add ('double_color_text');
       
    } else {
        section2.classList.remove ('custom_bg');
    }

    if(Y >= 5000) {
        text13.classList.remove ('hidden');
        progressDayStudy.textContent = "0"
        progressWordStudy.textContent = "0"
        } else {
            text13.classList.add ('hidden');
        }
    
    if(Y >= 5200) {
        text23.classList.remove ('hidden_all');
        progressDayStudy.textContent = "10";
        progressWordStudy.textContent = "100";
        } else {
            text23.classList.add ('hidden_all');
        }

    if(Y >= 5400) {
        text33.classList.remove ('hidden_all');
        progressDayStudy.textContent = "50";
        progressWordStudy.textContent = "500";
        } else {
            text33.classList.add ('hidden_all');
        }

    if(Y > 5600) {
        text43.classList.remove ('hidden_all');
        progressDayStudy.textContent = "100";
        progressWordStudy.textContent = "1000";
        text63.classList.remove ('hidden_all');
        img2Section3.classList.remove ('hidden_all');
        } else {
            text43.classList.add ('hidden_all');
            text63.classList.add ('hidden_all');
            img2Section3.classList.add ('hidden_all');
        }

    if(Y >= 6900) {
        section3.classList.add ('custom_bg_pink');
        } else {
            section3.classList.remove ('custom_bg_pink');
        }

    if(Y >= 6900 && Y <= 7300) {
        titileSectionCustom.classList.remove ('hidden_all');
        
        } else {
            titileSectionCustom.classList.add ('hidden_all');
          
        }

    if(Y >= 7700) {
        section4.classList.add ('custom_bg_white');
        } else {
            section4.classList.remove ('custom_bg_white');
        }

   // if(Y > 8500) {
     //   section41.classList.add ('custom_bg_black');
       // } else {
         //   section41.classList.remove ('custom_bg_black');
    //    }

    if(Y > 8500) {
        section41.classList.add ('custom_bg_black', 'text_color_bg_black');
        blockWatch.classList.add ('cards_bg');
        blockPhone.classList.add ('cards_bg');
        blockLaptop.classList.add ('cards_bg');
    } else {
        section41.classList.remove ('custom_bg_black', 'text_color_bg_black');
        blockWatch.classList.remove ('cards_bg');
        blockPhone.classList.remove ('cards_bg');
        blockLaptop.classList.remove ('cards_bg');
    }
    

    if(Y >= 9500) {
        text52.classList.remove ('text_2_section_5');
        text52.classList.add ('text_color_active');
        } else {
            text52.classList.remove ('text_color_active');
            text52.classList.add ('text_2_section_5');
        }

    if(Y >= 10300) {
        section5.classList.add ('custom_bg_yellow');
        } else {
            section5.classList.remove ('custom_bg_yellow');
        }

    if(Y >= 10400) {
        text16.classList.remove ('hidden_all');
        //text16.classList.add ('text_color_custom_white');
        } else {
            text16.classList.add ('hidden_all');
        }

    

    if(Y >= 10600) {
        text26.classList.remove ('hidden_all');
        } else {
            text26.classList.add ('hidden_all');
        }

    
    if(Y >= 10800) {
        text36.classList.remove ('hidden_all');
        } else {
            text36.classList.add ('hidden_all');
        }

    if(Y >= 11000) {
        text46.classList.remove ('hidden_all');
        } else {
            text46.classList.add ('hidden_all');
        }

    if(Y >= 11200) {
        text56.classList.remove ('hidden_all');
        } else {
            text56.classList.add ('hidden_all');
        }

    if(Y >= 12000) {
        section6.classList.add ('custom_bg_white');
        section6.classList.remove ('custom_bg_yellow');
        }  else {
            section6.classList.remove ('custom_bg_white');
            section6.classList.add ('custom_bg_yellow');
        }

    if(Y >= 12100) {
        pinkColorWord1.classList.add ('pink_color_word');
        pinkColorWord2.classList.add ('pink_color_word');
        pinkColorWord3.classList.add ('pink_color_word');
        }  else {
            pinkColorWord1.classList.remove ('pink_color_word');
            pinkColorWord2.classList.remove ('pink_color_word');
            pinkColorWord3.classList.remove ('pink_color_word');
        }

    if(Y >= 12300) {
        text17.classList.remove ('hidden_all');
        } else {
            text17.classList.add ('hidden_all');
        }

    if(Y >= 12500) {
        text27.classList.remove ('hidden_all');
        } else {
            text27.classList.add ('hidden_all');
        }

    if(Y >= 12700) {
        text37.classList.remove ('hidden_all');
        } else {
            text37.classList.add ('hidden_all');
        }

    if(Y >= 12900) {
        text47.classList.remove ('hidden_all');
        } else {
            text47.classList.add ('hidden_all');
        }

    if(Y >= 13600) {
        section7.classList.add ('custom_bg_blue');
        text18.classList.remove ('hidden_all');
        } else {
            text18.classList.add ('hidden_all');
            section7.classList.remove ('custom_bg_blue');
        }

    if(Y >= 13800) {
        text28.classList.remove ('hidden_all');
        } else {
            text28.classList.add ('hidden_all');
        }

    if(Y >= 14000) {
        text38.classList.remove ('hidden_all');
        } else {
            text38.classList.add ('hidden_all');
        }

    
    

}


const line = document.querySelector('.progress_line-item');

const progressAnimation = () => {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;

    let procentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
    console.log(procentageProgress);

    line.style.width = `${procentageProgress}%`;
}

window.addEventListener('scroll', () => {
    progressAnimation();
});



