import "./App.css";

function App() {
  const hymn = `Polycrusaders, en avant, en avant,<br>
À la nuit de l'info, on débarque, triomphant.<br>
Open source, notre bannière, notre éclat,<br>
Avec nos codes, nos rêves, nous voguons sur les datas.<br><br>
(Couplet 1)<br>
Sous la lueur de la lune, les claviers résonnent,<br>
Les dev vaillants, les guerriers de l'open source,<br>
Polycrusaders, une équipe de légende,<br>
À la conquête du code, notre quête s'étend.<br><br>
(Refrain)<br>
Polycrusaders, en avant, en avant,<br>
À la nuit de l'info, on débarque, triomphant.<br>
Open source, notre bannière, notre éclat,<br>
Avec nos codes, nos rêves, nous voguons sur les datas.<br><br>
(Couplet 2)<br>
Les lignes de code, tels des runes sacrées,<br>
Sur nos écrans s'affichent, créant la voie tracée.<br>
La catgirl agile, danse entre les algorithmes,<br>
Sa grâce, notre atout, notre arme suprême.<br><br>
(Refrain)<br>
Polycrusaders, en avant, en avant,<br>
À la nuit de l'info, on débarque, triomphant.<br>
Open source, notre bannière, notre éclat,<br>
Avec nos codes, nos rêves, nous voguons sur les datas.<br><br>
(Couplet 3)<br>
Les pierres d'opale brillent dans la nuit,<br>
Leur éclat guide nos doigts, source de pouvoir intuitif.<br>
Les dev forgeant des logiciels robustes,<br>
Polycrusaders, l'armée du futur, audacieuse.<br><br>
(Refrain)<br>
Polycrusaders, en avant, en avant,<br>
À la nuit de l'info, on débarque, triomphant.<br>
Open source, notre bannière, notre éclat,<br>
Avec nos codes, nos rêves, nous voguons sur les datas.<br><br>
(Pont)<br>
Sur le réseau, nos paquets comme des émissaires,<br>
Diffusent la passion, l'amour de l'ère numérique.<br>
Polycrusaders, une fraternité de codeurs,<br>
Nous avançons ensemble, portés par la ferveur.<br><br>
(Refrain)<br>
Polycrusaders, en avant, en avant,<br>
À la nuit de l'info, on débarque, triomphant.<br>
Open source, notre bannière, notre éclat,<br>
Avec nos codes, nos rêves, nous voguons sur les datas.<br><br>
(Fin)<br>
Que la nuit de l'info soit témoin de notre quête,<br>
Polycrusaders, ensemble, pour l'open source, notre fête.<br>
Que nos lignes de code résonnent comme un hymne,<br>
À la gloire de la programmation, que l'aventure anime.`;

  return (
    <>
      <div>
        <h1>PolyCrusader</h1>
        <h3>PHP lovers</h3>
      </div>
      <div>
        <p>
          On est les plus gros fans de PHP au monde. Le js c'est vraiment trop
          nul, et le typescript n'en parlons pas. On aime pas les frameworks
          trop nuls comme React, Angular ou Vue. On préfère utiliser des
          frameworks PHP comme Symfony ou Laravel, c'est tellement mieux.
        </p>
      </div>
      <div>
        <h1>Notre hymne :</h1>
        <p dangerouslySetInnerHTML={{ __html: hymn }}></p>
      </div>
      <div>
        <h1>Notre équipe :</h1>
        <div>
         
          <img
            src="../public/3dgifmaker00730.gif"
          />
          <img
            src="../public/3dgifmaker08792.gif"
          />
          <img
            src="../public/3dgifmaker33234.gif"
          />
          <img
            src="../public/3dgifmaker90156.gif"
          />
          <img
            src="../public/3dgifmaker24199.gif"
          />
          <img
            src="../public/3dgifmaker49872.gif"
          />
          <img
            src="../public/3dgifmaker67736.gif"
          />
          <img
            src="../public/3dgifmaker54870.gif"
          />
           <img
            src="../public/3dgifmaker46049.gif"
          />
          <img
            src="../public/3dgifmaker52768.gif"
          />
          et d'autres mais j'ai pas les photos
        </div>
      </div>
    </>
  );
}

export default App;
