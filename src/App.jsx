import {} from 'react';
import './App.css';

function App() {
  return (
    <div className="all">
      <header>
        <div className="head">Vivo</div>
        <nav>
          <ul>
            <li><a href="#about">О мне</a></li>
            <li><a href="#services">Что я могу тебе сделать</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn">Связаться со мной</a>
      </header>

      <section id="hero">
        <h1>Добро пожаловать</h1>
        <p>Я Vivo</p>
      </section>

      <section id="about">
        <h2>Обо мне</h2>
        <p>Я Vivo по крайней мере в тг в жизни я гений милардер филонтроп)) Кста факт я люблю програмировать сылка на GitHub https://github.com/vivo605. Мои друзья в тг: @Camp_V, @ToplyonokXD, @Meow14_26 
        они не давалии согласиия.</p>
      </section>

      <section id="services">
        <h2>Что я могу)</h2>
        <ul>
          <li>Поговориить</li>
          <li>Показать мою любимую музыку)</li>
          <li>Програмировать)</li>
          <li>А дальше я хз)))</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Контакты</h2>
        <p>Телефон: <a href="tel:+71234567890">+7 911 609 73 25</a></p>
        <p>Email: <a href="telegram">@Mz0lf</a></p>
      </section>

      <footer>
        <p>&copy; 2023 Vivo. Все права защищены. Это я защищаю)</p>
      </footer>
    </div>
  );
}

export default App;
