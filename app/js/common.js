function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}


helloConsole();

let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


//animations scroll
let preloaderBlock = [...document.querySelectorAll('.preloader')];

function loadPreloader() {
    if (!preloaderBlock.length) {

    } else {
        // document.body.classList.add('no-scroll');
        document.body.scrollTo(0, 0);
        preloaderBlock.forEach((block) => {
            let svg = block.querySelector('svg');
            let spanText = block.querySelector('.pre-text span');
            let spanTextBl = block.querySelector('.pre-text');
            let bar = block.querySelector('.bar-1');
            let kLet = block.querySelector('.let-k');
            let fLet = block.querySelector('.let-f');
            let tLet = block.querySelector('.let-t');
            let leftPol = block.querySelector('.pol-l');
            let rightPol = block.querySelector('.pol-r');
            startCountdown(100, spanText, spanTextBl);
            setTimeout(() => {
                kLet.classList.add('animed');
                bar.style.width = '15%';
            }, 600);
            setTimeout(() => {
                tLet.classList.add('animed');
                bar.style.width = '30%';
            }, 800);
            setTimeout(() => {
                fLet.classList.add('animed');
                bar.style.width = '50%';
            }, 1200);
            setTimeout(() => {
                leftPol.classList.add('animed');
                rightPol.classList.add('animed');
                bar.style.width = '75%';
            }, 2800);
            setTimeout(() => {
                block.classList.add('animed');
                bar.style.width = '82%';
            }, 4000);
            setTimeout(() => {
                bar.style.width = '100%';
            }, 5000);
            setTimeout(() => {
                block.classList.add('over');
                // document.body.classList.remove('no-scroll');
            }, 5000);
        })
    }
}

function startCountdown(seconds, span, block) {
    let startNumber = 1;
    let counter = seconds;
    let interV = 4300 / seconds;
    const interval = setInterval(() => {
        console.log(counter);
        startNumber++;
        span.innerHTML = startNumber;
        if (startNumber === 100 ) {
            clearInterval(interval);
            block.classList.add('animed');
            console.log('Ding!');
        }
    }, interV);
}
loadPreloader();

let jsAnimBlocks = [...document.querySelectorAll('.js-anim')];
var Visible3 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top + 90,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                target.classList.add('anim-start');
            }, 60)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimBlocks.forEach((el, k) => {
        setTimeout(() => {
            Visible3(el);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimBlocks.forEach((el, k) => {
    setTimeout(() => {
        Visible3(el);
    }, k * 30)
});

function animateValue(el, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    if (end > 2000) {
        start = 1500;
    } else if (end > 1000) {
        start = 800;
    } else {
        start = 0;
    }
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = duration;
    var obj = el;
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

let jsCountBlocks = [...document.querySelectorAll('.rec-stats')];
let startedCount = 0;
var Visible4 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top + 350,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                [...document.querySelectorAll('.single-stat > span span')].forEach((numb,k) => {
                    if (startedCount === 0) {
                        let endNumb = numb.innerHTML;
                        let dur = 2;
                        let str = Math.floor(endNumb / (5 - k));
                        console.log(str + ' str');
                        console.log(k);
                        console.log(dur);
                        animateValue(numb, str, endNumb, dur);

                        if (k === ([...document.querySelectorAll('.single-stat > span span')].length - 1)) {
                            startedCount = 1;
                        }
                    } else {

                    }


                })
            }, 60)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsCountBlocks.forEach((el, k) => {
        setTimeout(() => {
            Visible4(el);
        }, k * 70)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsCountBlocks.forEach((el, k) => {
    setTimeout(() => {
        Visible4(el);
    }, k * 60)
});
//animations scroll


let subMenus = [...document.querySelectorAll('.menu-item-has-children > a')];

function openSubMenus() {
    if (!subMenus.length) {

    } else {
        subMenus.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth > 1023) {

                } else {
                    e.preventDefault();
                    btn.closest('li').classList.toggle('active');
                }

            })
        })
    }
}

openSubMenus();
$(".go-up").click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top
    }, 600);
});

let burgerBtn = [...document.querySelectorAll('.burger-btn')];

function openMobileMenu() {
    if (!burgerBtn.length) {

    } else {
        burgerBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                document.querySelector('.mobile-menu').classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            })

        })
    }
}

openMobileMenu();

//sliders

let taskList = [...document.querySelectorAll('.js-slider.task-list')];

function tasksSlider() {
    if (!taskList.length) {

    } else {
        taskList.forEach((sld) => {
            let sldCont = sld.querySelector('.task-list__container');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                speed: 600,
                spaceBetween: 5,
                grid: {
                    rows: 2,
                },

                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    440: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                        grid: {
                            rows: 2,
                        },
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                        grid: {
                            rows: 1,
                        },
                    },
                    900: {
                        spaceBetween: 2,
                        slidesPerView: 3,
                        grid: {
                            rows: 1,
                        },

                    },
                    // when window width is >= 640px
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 2,
                        grid: {
                            rows: 1,
                        },
                    },
                    1700: {
                        spaceBetween: 2,
                        slidesPerView: 5,
                        grid: {
                            rows: 1,
                        },

                    }
                }
            });
        })
    }
}

tasksSlider();


let companySld = [...document.querySelectorAll('.js-slider.about-company')];

function companySlider() {
    if (!companySld.length) {

    } else {
        companySld.forEach((sld) => {
            let sldCont = sld.querySelector('.company-slides');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

companySlider();

let casesSld = [...document.querySelectorAll('.js-slider.our-cases')];

function casesSlider() {
    if (!casesSld.length) {

    } else {
        casesSld.forEach((sld) => {
            let sldCont = sld.querySelector('.our-cases__content');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

casesSlider();


let seoSld = [...document.querySelectorAll('.js-slider.seo-block')];

function seoSlider() {
    if (!seoSld.length) {

    } else {
        seoSld.forEach((sld) => {
            let sldCont = sld.querySelector('.img-slider');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 800,
                spaceBetween: 10,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                autoplay: {
                    delay: 4500,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

seoSlider();

let teamSld = [...document.querySelectorAll('.js-slider.our-team')];

function teamSlider() {
    if (!teamSld.length) {

    } else {
        teamSld.forEach((sld) => {
            let sldCont = sld.querySelector('.team-slider');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 800,
                spaceBetween: 10,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    480: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,

                    },
                },


            });
        })
    }
}

teamSlider();


let procSld = [...document.querySelectorAll('.js-slider.about-process')];

function procSlider() {
    if (!procSld.length) {

    } else {
        procSld.forEach((sld) => {
            let mainSlides = sld.querySelector('.process-slider__nav-container');
            let thumbsSlides = sld.querySelector('.process-slider__thumbs-container');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');


            var swiperThumb = new Swiper(thumbsSlides, {
                spaceBetween: 8,
                slidesPerView: 3,
                freeMode: false,
                watchSlidesProgress: true,
                // centeredSlides: true,
                // loop: true,
                draggable: false,
                breakpoints: {
                    // when window width is >= 320px
                    320: {},
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 4,
                    },
                    769: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 640px
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    }
                }
            });
            var swiper2 = new Swiper(mainSlides, {
                spaceBetween: 10,
                slidesPerView: 1,
                // loop: true,
                thumbs: {
                    swiper: swiperThumb,
                },
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

            });
        })
    }
}

procSlider();

//sliders

let faqHead = [...document.querySelectorAll('.faq-head')];

function openFaq() {
    if (!faqHead.length) {

    } else {
        faqHead.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })
    }
}

openFaq();


let btnOpenForm = [...document.querySelectorAll('.btn--form')];

function openModalForm() {
    if (!btnOpenForm.length) {

    } else {
        btnOpenForm.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__request').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}

openModalForm();

let modalWindows = [...document.querySelectorAll('.modal-window')];

function modalClosing() {
    if (!modalWindows.length) {

    } else {
        modalWindows.forEach((mdl) => {
            mdl.addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
            mdl.querySelector('.modal-container').addEventListener('click', (e) => {
                e.stopPropagation();
            });
            mdl.querySelector('.close-modal').addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        })
    }
}

modalClosing();