import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";

const sections = [
  {
    eyebrow: "Présentation générale",
    paragraphs: [
      "J’ai 23 ans et je poursuis actuellement un mastère Expert de l’ingénierie logicielle. En parallèle, je suis en alternance chez Cikaba, une entreprise qui digitalise les processus QHSE. Cette double expérience, entre formation et travail en entreprise, me permet de progresser à la fois sur le plan technique et sur la compréhension des besoins concrets d’une organisation.",
      "Ce qui m’intéresse dans l’informatique ne se limite pas au fait de coder. J’aime surtout comprendre un contexte, analyser un besoin, puis chercher une solution claire, utile et cohérente. Pour moi, la technique a d’autant plus de valeur lorsqu’elle sert réellement un usage, simplifie un processus ou rend un outil plus facile à comprendre.",
      "Le développement front-end, le design d’interface et l’organisation des projets occupent une place importante dans mon parcours. Ce sont des domaines que j’apprécie parce qu’ils relient la logique, la clarté et la qualité de présentation. Une bonne interface ne doit pas seulement être agréable visuellement. Elle doit aussi être lisible, bien structurée et aider l’utilisateur à comprendre facilement ce qu’il a à faire.",
      "Au fil de mes expériences, j’ai compris qu’un bon informaticien ne se définit pas uniquement par ses compétences techniques. Il doit aussi savoir écouter, travailler avec méthode et faire évoluer son travail avec exigence. C’est cette manière de voir mon métier qui guide aujourd’hui ma progression et la suite de mon parcours.",
    ],
  },
  {
    eyebrow: "Mes valeurs",
    paragraphs: [
      "La rigueur fait partie des valeurs qui structurent le plus fortement ce parcours. Elle se retrouve dans la manière d'aborder un besoin, d'organiser le travail, de reprendre une interface jusqu'à la rendre plus juste ou de vérifier qu'un rendu tient réellement sur différents formats. Cette exigence n'a pas seulement une dimension technique : elle traduit aussi une forme de respect pour les personnes qui utiliseront, liront ou maintiendront le travail produit.",
      "Le sens des responsabilités s'est renforcé avec l'alternance chez Cikaba, dans un environnement où la digitalisation de processus QHSE demande de la précision, de la lisibilité et une compréhension sérieuse des besoins métier. Dans ce type de contexte, proposer une solution n'est pas seulement une question de fonctionnalité. Il faut aussi produire quelque chose de clair, fiable et suffisamment bien pensé pour s'intégrer à des usages professionnels concrets.",
      "Le respect du collectif et la qualité des échanges comptent tout autant. Travailler efficacement suppose d'écouter, de reformuler, d'accepter la critique utile et de faire avancer un sujet sans ajouter de complexité inutile. Une bonne dynamique de travail repose autant sur la qualité des interactions que sur la qualité technique du rendu final.",
      "Enfin, la volonté de produire un travail propre reste une ligne directrice constante. Qu'il s'agisse d'une interface, d'une structure de projet ou d'une page de présentation, l'objectif est de tendre vers un résultat lisible, cohérent et soigné. Cette recherche de qualité s'inscrit dans une démarche de progression sérieuse, avec l'idée de construire des bases solides plutôt que d'empiler des solutions rapides.",
    ],
  },
  {
    eyebrow: "Mes qualités humaines",
    paragraphs: [
      "La curiosité joue un rôle central dans la manière d'apprendre et de progresser. Elle pousse à explorer de nouveaux outils, à comparer différentes approches et à ne pas s'arrêter à la première solution fonctionnelle. Dans un domaine qui évolue vite, cette qualité permet de rester ouvert, de mieux comprendre ce que l'on fait et de construire une progression plus vivante.",
      "L'organisation est également une qualité importante. Travailler sur plusieurs sujets, faire le lien entre formation et alternance, tenir une logique de progression et produire quelque chose de propre demandent un cadre de travail structuré. Cela passe par la prise de notes, le découpage des tâches, la relecture, et une attention portée à la manière dont un sujet est traité dans le temps.",
      "L'autonomie s'exprime dans la capacité à chercher, tester, corriger et avancer sans attendre en permanence une validation extérieure. Elle ne signifie pas travailler isolément, mais être capable de prendre en main un problème, de construire un raisonnement et de faire progresser un projet avec méthode.",
      "À cela s'ajoute une forme de constance dans l'effort. La progression en informatique repose souvent sur des reprises, des corrections, de la patience et un travail régulier. Cette persévérance permet de ne pas se contenter d'une solution approximative et d'aller vers un rendu plus stable, plus clair et plus abouti.",
    ],
  },
  {
    eyebrow: "Mes centres d'intérêt",
    paragraphs: [
      "Le design d'interface occupe une place importante parmi les centres d'intérêt, parce qu'il permet d'observer comment une idée devient une expérience concrète. Analyser un site, comprendre pourquoi une page fonctionne bien, observer une hiérarchie visuelle ou réfléchir à la lisibilité d'un parcours nourrit directement la manière de concevoir des projets. Cette attention portée aux interfaces s'accompagne d'un intérêt réel pour la cohérence visuelle, la structure des écrans et la qualité perçue.",
      "La culture numérique au sens large compte aussi beaucoup : comprendre comment un produit se construit, comment des choix techniques influencent l'expérience utilisateur, ou comment une organisation peut gagner en clarté grâce à de meilleurs outils. L'environnement de Cikaba, centré sur la digitalisation de processus QHSE, renforce justement cet intérêt pour des solutions numériques qui ne sont pas seulement techniques, mais utiles dans leur impact concret.",
      "Les centres d'intérêt portent également sur la progression personnelle, l'amélioration continue et la découverte de nouvelles manières de travailler. Ce goût pour l'apprentissage dépasse la simple logique scolaire : il s'agit surtout de garder une dynamique d'évolution, de continuer à affiner son regard et de mieux comprendre la place du numérique dans des contextes professionnels variés.",
      "La culture geek et les jeux vidéo occupent aussi une vraie place dans mes centres d’intérêt. J’y retrouve à la fois de la curiosité pour les univers, de l’attention portée au design, aux interfaces et aux mécaniques, mais aussi un plaisir simple de découverte et de détente. Cet intérêt nourrit également mon regard sur les expériences numériques et sur la manière dont un produit peut capter l’attention, guider un utilisateur et créer une vraie cohérence d’ensemble.",
    ],
  },
  {
    eyebrow: "Projet professionnel et personnel",
    paragraphs: [
      "Le projet professionnel s'inscrit aujourd'hui dans une progression cohérente entre formation, expérience terrain et approfondissement des compétences numériques. Le développement front-end, la conception d'interfaces et la capacité à participer à des produits plus clairs et plus utiles constituent une direction forte. L'objectif n'est pas seulement de savoir produire, mais de devenir capable de contribuer à des projets bien structurés, bien pensés et techniquement crédibles.",
      "L'alternance chez Cikaba apporte dans cette trajectoire une dimension particulièrement importante : celle du lien entre solution numérique et réalité métier. Travailler dans une entreprise qui digitalise les processus QHSE permet de mieux comprendre comment un outil s'insère dans une organisation, comment il doit répondre à des besoins précis et pourquoi la qualité de conception compte autant que la qualité technique.",
      "À moyen terme, la progression recherchée porte sur une meilleure maîtrise des interfaces, de la structuration des projets et de la logique produit. Le BUT informatique réalisé à Clermont-Ferrand constitue à ce titre une base importante, à la fois pour consolider les fondamentaux et pour continuer à élargir les domaines de compétence, avant la poursuite actuelle en mastère.",
      "Sur le plan personnel, l'objectif reste de continuer à apprendre avec constance, de développer une culture technique et visuelle plus large, et de transformer chaque projet en occasion de progression réelle. Cette volonté d'évolution continue accompagne l'ensemble du parcours et donne une direction claire aux prochaines étapes.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <NavigationBar />

      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-4 sm:px-10 lg:px-12 lg:pb-20 lg:pt-6">
        <article className="overflow-hidden rounded-[36px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/6">
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              src="/images/about-banner.png"
              alt="Lucas Delanier"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/68 via-black/24 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/72">
                Présentation générale
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Lucas Delanier
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/84 sm:text-lg sm:leading-8">
                Étudiant en mastère Expert de l&apos;ingénierie logicielle,
                après un BUT informatique à Clermont, et alternant chez Cikaba
              </p>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.eyebrow}
                  className={`rounded-[30px]`}
                >
                  <p className="font-bold uppercase text-2xl tracking-wide text-black">
                    {section.eyebrow}
                  </p>
                  {section.title ? (
                  <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                    {section.title}
                  </h2>) : null
                  }
                  <div className="mt-5 space-y-5 text-[1.02rem] leading-8 text-black/68">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${section.eyebrow}-${paragraphIndex}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
