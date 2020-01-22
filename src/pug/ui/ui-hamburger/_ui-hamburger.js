const ham = document.querySelector('.js-ham'),
      nav = document.querySelector('.c-header__nav'),
      hamCallback = function(e) {
          e.preventDefault();
          this.classList.toggle("is-active");
          nav.classList.toggle("is-active");
      };

ham.addEventListener('click', hamCallback);