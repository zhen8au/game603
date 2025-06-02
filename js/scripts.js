/*!
* Start Bootstrap - Grayscale v7.0.1 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function 導航列效果
    //滾動頁面時讓導航列（#mainNav）縮小，當回到頁面頂部時，導航列恢復原狀。

    //用法備註
    var navbarShrink = function () {
        //navbarCollapsible：選取了頁面上的HTML元素（#mainNav）--網頁的導航列。
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        //window.scrollY：網頁滾動的距離
        // scrollY為當前頁面向下滾動的像素數。如果是 0，就表示頁面沒有滾動（在頂部）。
        if (window.scrollY === 0) {
            //navbarCollapsible.classList.add('navbar-shrink')：當頁面滾動時，這行代碼會給導航列添加navbar-shrink這個CSS，通常這個類會讓導航列縮小。
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            //navbarCollapsible.classList.remove('navbar-shrink')：當頁面回到頂部時，會移除這個類，使導航列恢復正常大小。
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };


    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


    // Activate Bootstrap scrollspy滾動導航偵測 on the main nav element
    // ScrollSpy：它會讓導航列自動更新，顯示當前頁面所在的區塊。
    // 滾動頁面時，對應的導航項目會變得高亮，告訴用戶他們現在位於頁面的哪個部分。

    //new bootstrap.ScrollSpy()：Bootstrap功能，監控頁面的滾動，並根據當前的滾動位置更新導航欄。
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            //告訴 ScrollSpy監控的導航欄是 #mainNav
            target: '#mainNav',
            //offset: 滾動偏移量，告訴 ScrollSpy，當滾動到離頁面頂部 74 像素的位置時，開始檢查滾動效果。
            offset: 74,
        });
    };


});


// 關閉所有 checkbox

  function closeAllTabs() {
    document.querySelectorAll('.tab-check').forEach(cb => cb.checked = false);
  }

