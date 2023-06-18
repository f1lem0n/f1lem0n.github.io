// HEADERS

class HeaderEN extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header-container">
                <div class="logo">
                    <h1><a href="/en/home.html">Filip Hajdyła</a></h1>
                    <!-- <img src="../assets/img/fh.jpg" alt="logo" /> -->
                </div>
                <p>Data analysis and visualization</p>
            </div>
            `
    }
}

customElements.define('header-en', HeaderEN);


class HeaderPL extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header-container">
                <div class="logo">
                    <h1><a href="/pl/home.html">Filip Hajdyła</a></h1>
                    <!-- <img src="../assets/img/fh.jpg" alt="logo" /> -->
                </div>
                <p>Analiza danych i wizualizacja</p>
            </div>
            `
    }
}

customElements.define('header-pl', HeaderPL);


// SIDE PANEL

class SidePanelEN extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="side-panel">
            <div class="side-panel-content">
                <h3>Menu</h2>
                <ul class="menu">
                    <li><a href="/en/home.html">Home</a></li>
                    <li><a href="/en/about.html">About me</a></li>
                    <li><a href="/en/portfolio.html">Portfolio</a></li>
                    <li><a href="https://forms.gle/wZZiPWteh5HEKDPu9" target="_blank">Request analysis</a></li>
                </ul>
                <ul class="lang">
                    <hr>
                        <li><a href="/en/home.html">EN</a></li>
                        <li><a href="/pl/home.html">PL</a></li>
                    <hr>
                </ul>
                <ul class="media">
                    <li>
                        <a href="https://github.com/f1lem0n" target="_blank">
                            <i class="bi bi-github" alt="GitHub"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/filip-hajdyla/" target="_blank">
                            <i class="bi bi-linkedin" alt="LinkedIn"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@filem0n1" target="_blank">
                            <i class="bi bi-medium" alt="Medium"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hajdylaf@gmail.com" target="_blank">
                            <i class="bi bi-envelope" alt="Gmail"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `
    }
}

customElements.define('side-panel-en', SidePanelEN);


class SidePanelPL extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="side-panel">
            <div class="side-panel-content">
                <h2>Menu</h2>
                <ul class="menu">
                    <li><a href="/pl/home.html">Strona Główna</a></li>
                    <li><a href="/pl/about.html">O mnie</a></li>
                    <li><a href="/pl/portfolio.html">Portfolio</a></li>
                    <li><a href="https://forms.gle/cp2EDBtC6ZAbWQHx8" target="_blank">Poproś o analizę</a></li>
                </ul>
                <ul class="lang">
                    <hr>
                        <li><a href="/en/home.html">EN</a></li>
                        <li><a href="/pl/home.html">PL</a></li>
                    <hr>
                </ul>
                <ul class="media">
                    <li>
                        <a href="https://github.com/f1lem0n" target="_blank">
                            <i class="bi bi-github" alt="GitHub"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/filip-hajdyla/" target="_blank">
                            <i class="bi bi-linkedin" alt="LinkedIn"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@filem0n1" target="_blank">
                            <i class="bi bi-medium" alt="Medium"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hajdylaf@gmail.com" target="_blank">
                            <i class="bi bi-envelope" alt="Gmail"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `
    }
}

customElements.define('side-panel-pl', SidePanelPL);


// TODO FOOTER

class FooterEN extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer-container">
                <div class="legal-info">
                    <i class="bi bi-quote"></i>
                    <p>
                    <i class="bi bi-c-circle"></i>
                    2021 Filip Hajdyła All Rights Reserved
                    </p>
                </div>
                <ul class="media">
                    <li>
                        <a href="https://github.com/f1lem0n" target="_blank">
                        GitHub
                        <i class="bi bi-github" alt="GitHub"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/filip-hajdyla/" target="_blank">
                        LinkedIn
                        <i class="bi bi-linkedin" alt="LinkedIn"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@filem0n1" target="_blank">
                        Medium
                        <i class="bi bi-medium" alt="Medium"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hajdylaf@gmail.com" target="_blank">
                        E-mail
                        <i class="bi bi-envelope" alt="Gmail"></i>
                        </a>
                    </li>
                </ul>
            </div>
            `
    }
}

customElements.define('footer-en', FooterEN);

class FooterPL extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer-container">
                <div class="legal-info">
                    <i class="bi bi-quote"></i>
                    <p>
                    <i class="bi bi-c-circle"></i>
                    2021 Filip Hajdyła Wszelkie Prawa Zastrzeżone
                    </p>
                </div>
                <ul class="media">
                    <li>
                        <a href="https://github.com/f1lem0n" target="_blank">
                        GitHub
                        <i class="bi bi-github" alt="GitHub"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/filip-hajdyla/" target="_blank">
                        LinkedIn
                        <i class="bi bi-linkedin" alt="LinkedIn"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@filem0n1" target="_blank">
                        Medium
                        <i class="bi bi-medium" alt="Medium"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hajdylaf@gmail.com" target="_blank">
                        E-mail
                        <i class="bi bi-envelope" alt="Gmail"></i>
                        </a>
                    </li>
                </ul>
            </div>
            `
    }
}

customElements.define('footer-pl', FooterPL);