const promisesData = [
  // === ABONDANCE ===
  {
    reference: "Proverbes 3:9-10",
    text: "Honore l'Eternel avec tes biens, et avec les prémices de tout ton revenu, alors tes greniers seront remplis d'abondance, et tes cuves regorgeront de moût.",
    category: "Abondance",
    weight: 1.0
  },
  {
    reference: "Malachie 3:10",
    text: "Apportez à la maison du trésor toutes les dîmes, afin qu'il y ait de la nourriture dans ma maison; mettez-moi de la sorte à l'épreuve, dit l'Eternel des armées, et vous verrez si je n'ouvre pas pour vous les écluses des cieux, si je ne répands pas sur vous la bénédiction en abondance.",
    category: "Abondance",
    weight: 1.0
  },
  {
    reference: "Jean 10:10",
    text: "Le voleur ne vient que pour dérober, égorger et détruire; moi, je suis venu afin que les brebis aient la vie, et qu'elles l'aient en abondance.",
    category: "Abondance",
    weight: 1.0
  },
  {
    reference: "2 Corinthiens 9:8",
    text: "Et Dieu peut vous combler de toutes ses grâces, afin que, possédant toujours en toutes choses de quoi satisfaire à tous vos besoins, vous ayez encore en abondance pour toute bonne œuvre.",
    category: "Abondance",
    weight: 1.0
  },

  // === AMOUR DE DIEU ===
  {
    reference: "Ésaïe 54:10",
    text: "Quand les montagnes s'éloigneraient, quand les collines chancelleraient, mon amour ne s'éloignera point de toi, et mon alliance de paix ne chancellera point, dit l'Eternel, qui a compassion de toi.",
    category: "Amour de Dieu",
    weight: 1.0
  },
  {
    reference: "Romains 5:5",
    text: "Or, l'espérance ne trompe point, parce que l'amour de Dieu est répandu dans nos cœurs par le Saint-Esprit qui nous a été donné.",
    category: "Amour de Dieu",
    weight: 1.0
  },
  {
    reference: "Romains 8:38-39",
    text: "Car j'ai l'assurance que ni la mort ni la vie, ni les anges ni les dominations, ni les choses présentes ni les choses à venir, ni les puissances, ni la hauteur, ni la profondeur, ni aucune autre créature ne pourra nous séparer de l'amour de Dieu manifesté en Jésus-Christ notre Seigneur.",
    category: "Amour de Dieu",
    weight: 1.0
  },

  // === BONHEUR ===
  {
    reference: "Deutéronome 5:29",
    text: "Oh! s'ils avaient toujours ce même cœur pour me craindre et pour observer tous mes commandements, afin qu'ils soient heureux à jamais, eux et leurs enfants!",
    category: "Bonheur",
    weight: 1.0
  },
  {
    reference: "Psaume 25:12-13",
    text: "Quel est l'homme qui craint l'Eternel? L'Eternel lui montre la voie qu'il doit choisir. Son âme reposera dans le bonheur, et sa postérité possédera le pays.",
    category: "Bonheur",
    weight: 1.0
  },
  {
    reference: "Ésaïe 66:10-11",
    text: "Réjouissez-vous avec Jérusalem, faites d'elle le sujet de votre allégresse, vous tous qui l'aimez; tressaillez avec elle de joie, vous tous qui menez deuil sur elle; afin que vous soyez nourris et rassasiés, du lait de ses consolations, afin que vous savouriez avec bonheur la plénitude de sa gloire.",
    category: "Bonheur",
    weight: 1.0
  },
  {
    reference: "Matthieu 5:3-11",
    text: "Heureux les pauvres en esprit, car le royaume des cieux est à eux! Heureux les affligés, car ils seront consolés! Heureux les humbles de cœur, car ils hériteront la terre! Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés!",
    category: "Bonheur",
    weight: 1.0
  },
  {
    reference: "Éphésiens 6:2-3",
    text: "Honore ton père et ta mère (c'est le premier commandement avec une promesse), afin que tu sois heureux et que tu vives longtemps sur la terre.",
    category: "Bonheur",
    weight: 1.0
  },
  {
    reference: "Jacques 1:12",
    text: "Heureux l'homme qui supporte patiemment la tentation; car, après avoir été éprouvé, il recevra la couronne de vie, que le Seigneur a promise à ceux qui l'aiment.",
    category: "Bonheur",
    weight: 1.0
  },
  {
    reference: "Jacques 1:25",
    text: "Mais celui qui aura plongé les regards dans la loi parfaite, la loi de la liberté, et qui aura persévéré, n'étant pas un auditeur oublieux, mais se mettant à l'œuvre, celui-là sera heureux dans son activité.",
    category: "Bonheur",
    weight: 1.0
  },

  // === CHEMIN À SUIVRE ===
  {
    reference: "Psaume 32:8",
    text: "Je t'instruirai et te montrerai la voie que tu dois suivre; je te conseillerai, j'aurai le regard sur toi.",
    category: "Chemin à suivre",
    weight: 1.0
  },
  {
    reference: "Ésaïe 30:21",
    text: "Tes oreilles entendront derrière toi la voix qui dira, Voici le chemin, marchez-y!",
    category: "Chemin à suivre",
    weight: 1.0
  },
  {
    reference: "Ésaïe 42:16",
    text: "Je ferai marcher les aveugles sur un chemin qu'ils ne connaissent pas, Je les conduirai par des sentiers qu'ils ignorent; Je changerai devant eux les ténèbres en lumière, Et les endroits tortueux en plaine, Voilà ce que je ferai, et je ne les abandonnerai point.",
    category: "Chemin à suivre",
    weight: 1.0
  },

  // === CHRIST EN MOI ===
  {
    reference: "Galates 2:20",
    text: "J'ai été crucifié avec Christ; et si je vis, ce n'est plus moi qui vis, c'est Christ qui vit en moi; si je vis maintenant dans la chair, je vis dans la foi au Fils de Dieu, qui m'a aimé et qui s'est livré lui-même pour moi.",
    category: "Christ en moi",
    weight: 1.0
  },

  // === CONSOLATION ===
  {
    reference: "Ésaïe 51:12",
    text: "C'est moi, c'est moi qui vous console. Qui es-tu, pour avoir peur de l'homme mortel, et du fils de l'homme, pareil à l'herbe?",
    category: "Consolation",
    weight: 1.0
  },
  {
    reference: "Jean 16:7",
    text: "Cependant je vous dis la vérité, il vous est avantageux que je m'en aille, car si je ne m'en vais pas, le consolateur ne viendra pas vers vous; mais, si je m'en vais, je vous l'enverrai.",
    category: "Consolation",
    weight: 1.0
  },
  {
    reference: "2 Corinthiens 1:5",
    text: "Car, de même que les souffrances de Christ abondent en nous, de même notre consolation abonde par Christ.",
    category: "Consolation",
    weight: 1.0
  },

  // === CRAINTE DE L'ETERNEL ===
  {
    reference: "Proverbes 10:27",
    text: "La crainte de l'Eternel augmente les jours, mais les années des méchants sont abrégées.",
    category: "Crainte de l'Eternel",
    weight: 1.0
  },
  {
    reference: "Proverbes 14:27",
    text: "La crainte de l'Eternel est une source de vie, pour détourner des pièges de la mort.",
    category: "Crainte de l'Eternel",
    weight: 1.0
  },
  {
    reference: "Proverbes 22:4",
    text: "Le fruit de l'humilité, de la crainte de l'Eternel, C'est la richesse, la gloire et la vie.",
    category: "Crainte de l'Eternel",
    weight: 1.0
  },

  // === DÉSIRS DU CŒUR ===
  {
    reference: "2 Samuel 23:5",
    text: "N'en est-il pas ainsi de ma maison devant Dieu, puisqu'il a fait avec moi une alliance éternelle, en tous points bien réglée et offrant pleine sécurité? Ne fera-t-il pas germer tout mon salut et tous mes désirs?",
    category: "Désirs du cœur",
    weight: 1.0
  },
  {
    reference: "Psaume 37:4",
    text: "Fais de l'Eternel tes délices, et il te donnera ce que ton cœur désire.",
    category: "Désirs du cœur",
    weight: 1.0
  },

  // === ÉPREUVES ===
  {
    reference: "Jacques 1:2-4",
    text: "Mes frères, regardez comme un sujet de joie complète les diverses épreuves auxquelles vous pouvez être exposés, sachant que l'épreuve de votre foi produit la patience. Mais il faut que la patience accomplisse parfaitement son œuvre, afin que vous soyez parfaits et accomplis, sans faillir en rien.",
    category: "Épreuves",
    weight: 1.0
  },

  // === EXAUCEMENT ===
  {
    reference: "Jérémie 33:3",
    text: "Invoque-moi, et je te répondrai; je t'annoncerai de grandes choses, des choses cachées, que tu ne connais pas.",
    category: "Exaucement",
    weight: 1.0
  },
  {
    reference: "Matthieu 7:7-8",
    text: "Demandez, et l'on vous donnera; cherchez, et vous trouverez; frappez, et l'on vous ouvrira. Car quiconque demande reçoit, celui qui cherche trouve, et l'on ouvre à celui qui frappe.",
    category: "Exaucement",
    weight: 1.0
  },
  {
    reference: "Matthieu 21:22",
    text: "Tout ce que vous demanderez avec foi par la prière, vous le recevrez.",
    category: "Exaucement",
    weight: 1.0
  },
  {
    reference: "Matthieu 18:19-20",
    text: "Je vous dis encore que, si deux d'entre vous s'accordent sur la terre pour demander une chose quelconque, elle leur sera accordée par mon Père qui est dans les cieux. Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.",
    category: "Exaucement",
    weight: 1.0
  },
  {
    reference: "Jean 15:7",
    text: "Si vous demeurez en moi, et que mes paroles demeurent en vous, demandez ce que vous voudrez, et cela vous sera accordé.",
    category: "Exaucement",
    weight: 1.0
  },
  {
    reference: "1 Jean 5:14-15",
    text: "Nous avons auprès de lui cette assurance que si nous demandons quelque chose selon sa volonté, il nous écoute. Et si nous savons qu'il nous écoute, nous savons que nous possédons la chose que nous lui avons demandée, quelle qu'elle soit.",
    category: "Exaucement",
    weight: 1.0
  },

  // === FAIBLESSE ===
  {
    reference: "2 Corinthiens 12:9",
    text: "Et il m'a dit, « Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse. » Je me glorifierai donc bien plus volontiers de mes faiblesses, afin que la puissance de Christ repose sur moi.",
    category: "Faiblesse",
    weight: 1.0
  },

  // === FINIR BIEN ===
  {
    reference: "Proverbes 4:18",
    text: "Le sentier des justes est comme la lumière resplendissante, dont l'éclat va croissant jusqu'au milieu du jour.",
    category: "Finir bien",
    weight: 1.0
  },
  {
    reference: "Romains 8:28",
    text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
    category: "Finir bien",
    weight: 1.0
  },
  {
    reference: "Philippiens 1:6",
    text: "Je suis persuadé que celui qui a commencé en vous cette bonne œuvre la rendra parfaite pour le jour de Jésus-Christ.",
    category: "Finir bien",
    weight: 1.0
  },
  {
    reference: "Jude 24-25",
    text: "Or, à celui qui peut vous préserver de toute chute et vous faire paraître devant sa gloire irréprochables et dans l'allégresse, à Dieu seul, notre Sauveur, par Jésus-Christ notre Seigneur, soient gloire, majesté, force et puissance, dès avant tous les temps, et maintenant, et dans tous les siècles! Amen!",
    category: "Finir bien",
    weight: 1.0
  },

  // === FORCE ===
  {
    reference: "Juges 5:31",
    text: "Ceux qui l'aiment sont comme le soleil, quand il paraît dans sa force.",
    category: "Force",
    weight: 1.0
  },
  {
    reference: "Ésaïe 40:31",
    text: "Mais ceux qui se confient en l'Eternel renouvellent leur force. Ils prennent leur vol comme les aigles; ils courent, et ne se lassent point, ils marchent, et ne se fatiguent point.",
    category: "Force",
    weight: 1.0
  },
  {
    reference: "Psaume 84:6-8",
    text: "Heureux ceux qui placent en toi leur appui! Ils trouvent dans leur cœur des chemins tout tracés. Lorsqu'ils traversent la vallée de Baca, ils la transforment en un lieu plein de sources, et la pluie la couvre aussi de bénédictions. Leur force augmente pendant la marche, et ils se présentent devant Dieu à Sion.",
    category: "Force",
    weight: 1.0
  },

  // === FRUIT ===
  {
    reference: "Psaume 92:13-15",
    text: "Les justes croissent comme le palmier, ils s'élèvent comme le cèdre du Liban. Plantés dans la maison de l'Eternel, ils prospèrent dans les parvis de notre Dieu; ils portent encore des fruits dans la vieillesse, ils sont pleins de sève et verdoyants.",
    category: "Fruit",
    weight: 1.0
  },
  {
    reference: "Jérémie 17:7-8",
    text: "Béni soit l'homme qui se confie dans l'Eternel, et dont l'Eternel est l'espérance! Il est comme un arbre planté près des eaux, et qui étend ses racines vers le courant; il n'aperçoit point la chaleur quand elle vient, et son feuillage reste vert; dans l'année de la sécheresse, il n'a point de crainte, et il ne cesse de porter du fruit.",
    category: "Fruit",
    weight: 1.0
  },
  {
    reference: "Jean 12:24",
    text: "En vérité, en vérité, je vous le dis, si le grain de blé qui est tombé en terre ne meurt, il reste seul; mais, s'il meurt, il porte beaucoup de fruit.",
    category: "Fruit",
    weight: 1.0
  },
  {
    reference: "Jean 15:5",
    text: "Je suis le cep, vous êtes les sarments. Celui qui demeure en moi et en qui je demeure porte beaucoup de fruit, car sans moi vous ne pouvez rien faire.",
    category: "Fruit",
    weight: 1.0
  },
  {
    reference: "Jean 15:16",
    text: "Ce n'est pas vous qui m'avez choisi; mais moi, je vous ai choisis, et je vous ai établis, afin que vous alliez, et que vous portiez du fruit, et que votre fruit demeure, afin que ce que vous demanderez au Père en mon nom, il vous le donne.",
    category: "Fruit",
    weight: 1.0
  },
  {
    reference: "1 Corinthiens 15:58",
    text: "Ainsi, mes frères bien-aimés, soyez fermes, inébranlables, travaillant de mieux en mieux à l'œuvre du Seigneur, sachant que votre travail ne sera pas vain dans le Seigneur.",
    category: "Fruit",
    weight: 1.0
  },

  // === GLOIRE / HONNEUR ===
  {
    reference: "Jean 12:26",
    text: "Si quelqu'un me sert, qu'il me suive; et là où je suis, là aussi sera mon serviteur. Si quelqu'un me sert, le Père l'honorera.",
    category: "Gloire / Honneur",
    weight: 1.0
  },
  {
    reference: "2 Corinthiens 3:18",
    text: "Nous tous dont le visage découvert reflète la gloire du Seigneur, nous sommes transformés en la même image, de gloire en gloire, par l'Esprit du Seigneur.",
    category: "Gloire / Honneur",
    weight: 1.0
  },
  {
    reference: "2 Corinthiens 4:17-18",
    text: "Car nos légères afflictions du moment présent produisent pour nous, au-delà de toute mesure, un poids éternel de gloire, parce que nous regardons, non point aux choses visibles, mais à celles qui sont invisibles; car les choses visibles sont passagères, et les invisibles sont éternelles.",
    category: "Gloire / Honneur",
    weight: 1.0
  },
  {
    reference: "Colossiens 3:3-4",
    text: "Car vous êtes morts, et votre vie est cachée avec Christ en Dieu. Quand Christ, votre vie, paraîtra, alors vous paraîtrez aussi avec lui dans la gloire.",
    category: "Gloire / Honneur",
    weight: 1.0
  },

  // === GUÉRISON / SANTÉ ===
  {
    reference: "Psaume 103:2-4",
    text: "C'est lui qui pardonne toutes tes iniquités, qui guérit toutes tes maladies; c'est lui qui délivre ta vie de la fosse, qui te couronne de bonté et de miséricorde.",
    category: "Guérison / Santé",
    weight: 1.0
  },
  {
    reference: "Proverbes 3:7-8",
    text: "Ne sois point sage à tes propres yeux, crains l'Eternel, et détourne-toi du mal, ce sera la santé pour tes muscles, et un rafraîchissement pour tes os.",
    category: "Guérison / Santé",
    weight: 1.0
  },
  {
    reference: "Ésaïe 53:4-5",
    text: "Cependant, ce sont nos souffrances qu'il a portées, c'est de nos douleurs qu'il s'est chargé; et nous l'avons considéré comme puni, frappé de Dieu, et humilié. Mais il était blessé pour nos péchés, brisé pour nos iniquités; le châtiment qui nous donne la paix est tombé sur lui, et c'est par ses meurtrissures que nous sommes guéris.",
    category: "Guérison / Santé",
    weight: 1.0
  },
  {
    reference: "Malachie 4:2",
    text: "Mais pour vous qui craignez mon nom, se lèvera le soleil de la justice, et la guérison sera sous ses ailes; vous sortirez, et vous sauterez comme les veaux d'une étable.",
    category: "Guérison / Santé",
    weight: 1.0
  },
  {
    reference: "Romains 8:11",
    text: "Et si l'Esprit de celui qui a ressuscité Jésus d'entre les morts habite en vous, celui qui a ressuscité Christ d'entre les morts rendra aussi la vie à vos corps mortels par son Esprit qui habite en vous.",
    category: "Guérison / Santé",
    weight: 1.0
  },
  {
    reference: "Jacques 5:14-16",
    text: "Quelqu'un parmi vous est-il malade? Qu'il appelle les anciens de l'Eglise, et que les anciens prient pour lui, en l'oignant d'huile au nom du Seigneur; la prière de la foi sauvera le malade, et le Seigneur le relèvera; et s'il a commis des péchés, il lui sera pardonné.",
    category: "Guérison / Santé",
    weight: 1.0
  },

  // === GUÉRISON DU PAYS ===
  {
    reference: "2 Chroniques 7:14",
    text: "Si mon peuple sur qui est invoqué mon nom s'humilie, prie, et cherche ma face, et s'il se détourne de ses mauvaises voies, -je l'exaucerai des cieux, je lui pardonnerai son péché, et je guérirai son pays.",
    category: "Guérison du pays",
    weight: 1.0
  },

  // === HUMILITÉ ===
  {
    reference: "Jacques 4:10",
    text: "Humiliez-vous devant le Seigneur, et il vous élèvera.",
    category: "Humilité",
    weight: 1.0
  },
  {
    reference: "1 Pierre 5:5-6",
    text: "De même, vous qui êtes jeunes, soyez soumis aux anciens. Et tous, dans vos rapports mutuels, revêtez-vous d'humilité; car Dieu résiste aux orgueilleux, mais il fait grâce aux humbles. Humiliez-vous donc sous la puissante main de Dieu, afin qu'il vous élève au temps convenable.",
    category: "Humilité",
    weight: 1.0
  },

  // === JOIE ===
  {
    reference: "Psaume 16:11",
    text: "Tu me feras connaître le sentier de la vie; il y a d'abondantes joies devant ta face, des délices éternelles à ta droite.",
    category: "Joie",
    weight: 1.0
  },
  {
    reference: "Psaume 34:6",
    text: "Quand on tourne vers lui les regards, on est rayonnant de joie, et le visage ne se couvre pas de honte.",
    category: "Joie",
    weight: 1.0
  },
  {
    reference: "Ésaïe 65:17-18",
    text: "Car je vais créer de nouveaux cieux et une nouvelle terre; on ne se rappellera plus les choses passées, elles ne reviendront plus à l'esprit. Réjouissez-vous plutôt et soyez à toujours dans l'allégresse, à cause de ce que je vais créer; car je vais créer Jérusalem pour l'allégresse, et son peuple pour la joie.",
    category: "Joie",
    weight: 1.0
  },

  // === JUSTICE ===
  {
    reference: "Psaume 37:5-6",
    text: "Recommande ton sort à l'Eternel, mets en lui ta confiance, et il agira. Il fera paraître ta justice comme la lumière, et ton droit comme le soleil à son midi.",
    category: "Justice",
    weight: 1.0
  },
  {
    reference: "Romains 8:33-34",
    text: "Qui accusera les élus de Dieu? C'est Dieu qui justifie! Qui les condamnera? Christ est mort; bien plus, il est ressuscité, il est à la droite de Dieu, et il intercède pour nous!",
    category: "Justice",
    weight: 1.0
  },
  {
    reference: "1 Corinthiens 1:30",
    text: "Or, c'est par lui que vous êtes en Jésus-Christ, qui par la volonté de Dieu, a été fait pour nous sagesse, justice, sanctification et rédemption.",
    category: "Justice",
    weight: 1.0
  },

  // === LUMIÈRE ===
  {
    reference: "Jean 8:12",
    text: "Jésus leur parla de nouveau, et dit, Je suis la lumière du monde; celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie.",
    category: "Lumière",
    weight: 1.0
  },

  // === MIRACLES ===
  {
    reference: "Marc 16:17-18",
    text: "Voici les miracles qui accompagneront ceux qui auront cru, en mon nom, ils chasseront les démons; ils parleront de nouvelles langues; ils saisiront des serpents; s'ils boivent quelque breuvage mortel, il ne leur fera point de mal; ils imposeront les mains aux malades, et les malades, seront guéris.",
    category: "Miracles",
    weight: 1.0
  },
  {
    reference: "Jean 14:12",
    text: "En vérité, en vérité, je vous le dis, celui qui croit en moi fera aussi les œuvres que je fais, et il en fera de plus grandes, parce que je m'en vais au Père.",
    category: "Miracles",
    weight: 1.0
  },

  // === OBSTACLES ===
  {
    reference: "Proverbes 3:6",
    text: "Reconnais-le dans toutes tes voies, et il aplanira tes sentiers.",
    category: "Obstacles",
    weight: 1.0
  },
  {
    reference: "Matthieu 21:21-22",
    text: "Jésus leur répondit, Je vous le dis en vérité, si vous aviez de la foi et que vous ne doutiez point, non seulement vous feriez ce qui a été fait à ce figuier, mais quand vous diriez à cette montagne, Ote-toi de là et jette-toi dans la mer, cela se ferait. Tout ce que vous demanderez avec foi par la prière, vous le recevrez.",
    category: "Obstacles",
    weight: 1.0
  },

  // === PAIX ===
  {
    reference: "Jean 14:27",
    text: "Je vous laisse la paix, je vous donne ma paix. Je ne vous donne pas comme le monde donne. Que votre cœur ne se trouble point, et ne s'alarme point.",
    category: "Paix",
    weight: 1.0
  },
  {
    reference: "Philippiens 4:6-7",
    text: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
    category: "Paix",
    weight: 1.0
  },

  // === PARDON ===
  {
    reference: "Ésaïe 1:18",
    text: "Venez et plaidons! dit l'Eternel. Si vos péchés sont comme le cramoisi, ils deviendront blancs comme la neige; s'ils sont rouges comme la pourpre, ils deviendront comme la laine.",
    category: "Pardon",
    weight: 1.0
  },
  {
    reference: "Matthieu 26:28",
    text: "Car ceci est mon sang, le sang de l'alliance, qui est répandu pour beaucoup, pour le pardon des péchés.",
    category: "Pardon",
    weight: 1.0
  },
  {
    reference: "Actes 10:43",
    text: "Tous les prophètes rendent de lui le témoignage que quiconque croit en lui reçoit par son nom le pardon des péchés.",
    category: "Pardon",
    weight: 1.0
  },

  // === PERSÉCUTION ===
  {
    reference: "Matthieu 5:11-12",
    text: "Heureux serez-vous, lorsqu'on vous outragera, qu'on vous persécutera et qu'on dira faussement de vous toute sorte de mal, à cause de moi. Réjouissez-vous et soyez dans l'allégresse, parce que votre récompense sera grande dans les cieux; car c'est ainsi qu'on a persécuté les prophètes qui ont été avant vous.",
    category: "Persécution",
    weight: 1.0
  },

  // === PERSÉVÉRANCE ===
  {
    reference: "Luc 21:17-19",
    text: "Vous serez haïs de tous, à cause de mon nom. Mais il ne se perdra pas un de vos cheveux; par votre persévérance vous sauverez vos âmes.",
    category: "Persévérance",
    weight: 1.0
  },
  {
    reference: "Galates 6:9",
    text: "Ne nous lassons pas de faire le bien; car nous moissonnerons au temps convenable, si nous ne nous relâchons pas.",
    category: "Persévérance",
    weight: 1.0
  },
  {
    reference: "Hébreux 6:12",
    text: "En sorte que vous ne vous relâchiez point et que vous imitiez ceux qui, par la foi et la persévérance, héritent des promesses.",
    category: "Persévérance",
    weight: 1.0
  },
  {
    reference: "Hébreux 10:36",
    text: "Car vous avez besoin de persévérance, afin qu'après avoir accompli la volonté de Dieu, vous obteniez ce qui vous est promis.",
    category: "Persévérance",
    weight: 1.0
  },

  // === PROTECTION / SÉCURITÉ ===
  {
    reference: "Psaume 91:9-12",
    text: "Tu fais du Très-Haut ta retraite. Aucun malheur ne t'arrivera, aucun fléau n'approchera de ta tente. Car il ordonnera à ses anges de te garder dans toutes tes voies; ils te porteront sur les mains, de peur que ton pied ne heurte contre une pierre.",
    category: "Protection / Sécurité",
    weight: 1.0
  },
  {
    reference: "Psaume 91:14-16",
    text: "Puisqu'il m'aime, je le délivrerai; je le protégerai, puisqu'il connaît mon nom. Il m'invoquera, et je lui répondrai; je serai avec lui dans la détresse, je le délivrerai et je le glorifierai. Je le rassasierai de longs jours, et je lui ferai voir mon salut.",
    category: "Protection / Sécurité",
    weight: 1.0
  },
  {
    reference: "Proverbes 18:10",
    text: "Le nom de l'Eternel est une tour forte; le juste s'y réfugie, et se trouve en sûreté.",
    category: "Protection / Sécurité",
    weight: 1.0
  },
  {
    reference: "Ésaïe 54:17",
    text: "Toute arme forgée contre toi sera sans effet; et toute langue qui s'élèvera en justice contre toi, tu la condamneras. Tel est l'héritage des serviteurs de l'Eternel, tel est le salut qui leur viendra de moi, dit l'Eternel.",
    category: "Protection / Sécurité",
    weight: 1.0
  },
  {
    reference: "Luc 10:19",
    text: "Voici, je vous ai donné le pouvoir de marcher sur les serpents et les scorpions, et sur toute la puissance de l'ennemi; et rien ne pourra vous nuire.",
    category: "Protection / Sécurité",
    weight: 1.0
  },

  // === PROVISION ===
  {
    reference: "Psaume 34:10-11",
    text: "Craignez l'Eternel, vous ses saints! Car rien ne manque à ceux qui le craignent. Les lionceaux éprouvent la disette et la faim, mais ceux qui cherchent l'Eternel ne sont privés d'aucun bien.",
    category: "Provision",
    weight: 1.0
  },
  {
    reference: "Matthieu 6:32-33",
    text: "Ne vous inquiétez donc point, et ne dites pas, Que mangerons-nous? que boirons-nous? de quoi serons-nous vêtus? Car toutes ces choses, ce sont les païens qui les recherchent. Votre Père céleste sait que vous en avez besoin. Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.",
    category: "Provision",
    weight: 1.0
  },
  {
    reference: "Philippiens 4:19",
    text: "Et mon Dieu pourvoira à tous vos besoins selon sa richesse, avec gloire, en Jésus-Christ.",
    category: "Provision",
    weight: 1.0
  },

  // === RÉDEMPTION ===
  {
    reference: "Job 19:25-26",
    text: "Mais je sais que mon Rédempteur est vivant, et qu'il se lèvera le dernier sur la terre. Quand ma peau sera détruite, il se lèvera; après que ma peau aura été détruite, moi-même je contemplerai Dieu.",
    category: "Rédemption",
    weight: 1.0
  },

  // === REPOS ===
  {
    reference: "Jérémie 6:16",
    text: "Ainsi parle l'Eternel, placez-vous sur les chemins, regardez, et demandez quels sont les anciens sentiers, quelle est la bonne voie; marchez-y, et vous trouverez le repos de vos âmes!",
    category: "Repos",
    weight: 1.0
  },
  {
    reference: "Matthieu 11:28-30",
    text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. Prenez mon joug sur vous et recevez mes instructions, car je suis doux et humble de cœur; et vous trouverez le repos pour vos âmes. Car mon joug est doux, et mon fardeau léger.",
    category: "Repos",
    weight: 1.0
  },

  // === RESSEMBLER À JÉSUS ===
  {
    reference: "Romains 8:29",
    text: "Car ceux qu'il a connus d'avance, il les a aussi prédestinés à être semblables à l'image de son Fils, afin que son Fils soit le premier-né de plusieurs frères.",
    category: "Ressembler à Jésus",
    weight: 1.0
  },
  {
    reference: "1 Jean 3:2-3",
    text: "Bien-aimés, nous sommes maintenant enfants de Dieu, et ce que nous serons n'a pas encore été manifesté; mais nous savons que, lorsqu'il paraîtra, nous serons semblables à lui, parce que nous le verrons tel qu'il est. Quiconque a cette espérance en lui se purifie, comme lui-même est pur.",
    category: "Ressembler à Jésus",
    weight: 1.0
  },

  // === RICHESSE / TRÉSOR ===
  {
    reference: "Proverbes 10:22",
    text: "C'est la bénédiction de l'Eternel qui enrichit, et il ne la fait suivre d'aucun chagrin.",
    category: "Richesse / Trésor",
    weight: 1.0
  },
  {
    reference: "1 Timothée 6:18-19",
    text: "Recommande-leur de faire du bien, d'être riches en bonnes œuvres, d'avoir de la libéralité, de la générosité, et de s'amasser ainsi pour l'avenir un trésor placé sur un fondement solide, afin de saisir la vie véritable.",
    category: "Richesse / Trésor",
    weight: 1.0
  },

  // === SAGESSE ===
  {
    reference: "Jacques 1:5",
    text: "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.",
    category: "Sagesse",
    weight: 1.0
  },

  // === SAINT-ESPRIT ===
  {
    reference: "Luc 11:13",
    text: "Si donc, méchants comme vous l'êtes, vous savez donner de bonnes choses à vos enfants, à combien plus forte raison le Père céleste donnera-t-il le Saint-Esprit à ceux qui le lui demandent.",
    category: "Saint-Esprit",
    weight: 1.0
  },
  {
    reference: "Jean 7:37-39",
    text: "Le dernier jour, le grand jour de la fête, Jésus, se tenant debout, s'écria, Si quelqu'un a soif, qu'il vienne à moi, et qu'il boive. Celui qui croit en moi, des fleuves d'eau vive couleront de son sein, comme dit l'Ecriture. Il dit cela de l'Esprit que devaient recevoir ceux qui croiraient en lui…",
    category: "Saint-Esprit",
    weight: 1.0
  },
  {
    reference: "Actes 1:8",
    text: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.",
    category: "Saint-Esprit",
    weight: 1.0
  },

  // === SALUT ===
  {
    reference: "Psaume 27:1",
    text: "L'Eternel est ma lumière et mon salut, de qui aurais-je crainte? L'Eternel est le soutien de ma vie, de qui aurais-je peur?",
    category: "Salut",
    weight: 1.0
  },
  {
    reference: "Ésaïe 45:22",
    text: "Tournez-vous vers moi, et vous serez sauvés, Vous tous qui êtes aux extrémités de la terre! Car je suis Dieu, et il n'y en a point d'autre.",
    category: "Salut",
    weight: 1.0
  },
  {
    reference: "Ésaïe 51:6",
    text: "Levez les yeux vers le ciel, et regardez en bas sur la terre! Car les cieux s'évanouiront comme une fumée, la terre tombera en lambeaux comme un vêtement, et ses habitants périront comme des mouches; mais mon salut durera éternellement, et ma justice n'aura point de fin.",
    category: "Salut",
    weight: 1.0
  },
  {
    reference: "Romains 1:16",
    text: "Car je n'ai point honte de l'Evangile, c'est la puissance de Dieu pour le salut de quiconque croit.",
    category: "Salut",
    weight: 1.0
  },
  {
    reference: "Romains 10:10",
    text: "Car c'est en croyant du cœur qu'on parvient à la justice, et c'est en confessant de la bouche qu'on parvient au salut, selon ce que dit l'Ecriture.",
    category: "Salut",
    weight: 1.0
  },

  // === SANCTIFICATION ===
  {
    reference: "1 Thessaloniciens 5:23-24",
    text: "Que le Dieu de paix vous sanctifie lui-même tout entiers, et que tout votre être, l'esprit, l'âme et le corps, soit conservé irréprochable, lors de l'avènement de notre Seigneur Jésus-Christ! Celui qui vous a appelés est fidèle, et c'est lui qui le fera.",
    category: "Sanctification",
    weight: 1.0
  },
  {
    reference: "Hébreux 10:14",
    text: "Car, par une seule offrande, il a amené à la perfection pour toujours ceux qui sont sanctifiés.",
    category: "Sanctification",
    weight: 1.0
  },

  // === SECOURS ===
  {
    reference: "Psaume 34:18-21",
    text: "Quand les justes crient, l'Eternel entend, et il les délivre de toutes leurs détresses. L'Eternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement. Le malheur atteint souvent le juste, mais l'Eternel l'en délivre toujours. Il garde tous ses os, aucun d'eux n'est brisé.",
    category: "Secours",
    weight: 1.0
  },
  {
    reference: "Psaume 50:14-15",
    text: "Offre pour sacrifice à Dieu des actions de grâces, et accomplis tes vœux envers le Très-Haut. Et invoque-moi au jour de la détresse; je te délivrerai, et tu me glorifieras.",
    category: "Secours",
    weight: 1.0
  },

  // === SOUCIS ===
  {
    reference: "1 Pierre 5:7",
    text: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.",
    category: "Soucis",
    weight: 1.0
  },

  // === SOUFFRANCE ===
  {
    reference: "1 Pierre 5:10",
    text: "Le Dieu de toute grâce, qui vous a appelés en Jésus-Christ à sa gloire éternelle, après que vous aurez souffert un peu de temps, vous perfectionnera lui-même, vous affermira, vous fortifiera, vous rendra inébranlables.",
    category: "Souffrance",
    weight: 1.0
  },
  {
    reference: "Apocalypse 21:3-4",
    text: "J'entendis du trône une forte voix qui disait, Voici le tabernacle de Dieu avec les hommes! Il habitera avec eux, et ils seront son peuple, et Dieu lui-même sera avec eux. Il essuiera toute larme de leurs yeux, et la mort ne sera plus; il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu.",
    category: "Souffrance",
    weight: 1.0
  },

  // === SOUTIEN ===
  {
    reference: "2 Chroniques 16:9",
    text: "Car l'Eternel étend ses regards sur toute la terre, pour soutenir ceux dont le cœur est tout entier à lui.",
    category: "Soutien",
    weight: 1.0
  },
  {
    reference: "Psaume 55:23",
    text: "Remets ton sort à l'Eternel, et il te soutiendra, Il ne laissera jamais chanceler le juste.",
    category: "Soutien",
    weight: 1.0
  },
  {
    reference: "Proverbes 14:26",
    text: "Celui qui craint l'Eternel possède un appui ferme, et ses enfants ont un refuge auprès de lui.",
    category: "Soutien",
    weight: 1.0
  },

  // === SUCCÈS / RÉUSSITE ===
  {
    reference: "Josué 1:8",
    text: "Que ce livre de la loi ne s'éloigne point de ta bouche; médite-le jour et nuit, pour agir fidèlement selon tout ce qui y est écrit; car c'est alors que tu auras du succès dans tes entreprises, c'est alors que tu réussiras.",
    category: "Succès / Réussite",
    weight: 1.0
  },
  {
    reference: "Psaume 1:1-3",
    text: "Heureux l'homme qui ne marche pas selon le conseil des méchants, qui ne s'arrête pas sur la voie des pécheurs, et qui ne s'assied pas en compagnie des moqueurs, mais qui trouve son plaisir dans la loi de l'Eternel, et qui la médite jour et nuit! Il est comme un arbre planté près d'un courant d'eau, qui donne son fruit en sa saison, et dont le feuillage ne se flétrit point, tout ce qu'il fait lui réussit.",
    category: "Succès / Réussite",
    weight: 1.0
  },
  {
    reference: "Proverbes 16:3",
    text: "Recommande à l'Eternel tes œuvres, et tes projets réussiront.",
    category: "Succès / Réussite",
    weight: 1.0
  },

  // === TENTATION ===
  {
    reference: "1 Corinthiens 10:13",
    text: "Aucune tentation ne vous est survenue qui n'ait été humaine, et Dieu, qui est fidèle, ne permettra pas que vous soyez tentés au-delà de vos forces; mais avec la tentation il préparera aussi le moyen d'en sortir, afin que vous puissiez la supporter.",
    category: "Tentation",
    weight: 1.0
  },

  // === TOUT ===
  {
    reference: "Romains 8:32",
    text: "Lui qui n'a point épargné son propre Fils, mais qui l'a livré pour nous tous, comment ne nous donnera-t-il pas aussi toutes choses avec lui?",
    category: "Tout",
    weight: 1.0
  },
  {
    reference: "Éphésiens 1:3",
    text: "Béni soit le Dieu et Père de notre Seigneur Jésus-Christ, qui nous a bénis de toute bénédiction spirituelle dans les lieux célestes en Christ!",
    category: "Tout",
    weight: 1.0
  },
  {
    reference: "Colossiens 2:9-10",
    text: "Car en lui habite corporellement toute la plénitude de la divinité. Vous avez tout pleinement en lui, qui est le chef de toute domination et de toute autorité.",
    category: "Tout",
    weight: 1.0
  },

  // === VÉRITÉ ===
  {
    reference: "Jean 16:13",
    text: "Quand le consolateur sera venu, l'Esprit de vérité, il vous conduira dans toute la vérité; car il ne parlera pas de lui-même, mais il dira tout ce qu'il aura entendu, et il vous annoncera les choses à venir.",
    category: "Vérité",
    weight: 1.0
  },

  // === VICTOIRE ===
  {
    reference: "1 Jean 5:4",
    text: "Car tout ce qui est né de Dieu triomphe du monde; et la victoire qui triomphe du monde, c'est notre foi.",
    category: "Victoire",
    weight: 1.0
  },
  {
    reference: "Romains 8:37",
    text: "Mais dans toutes ces choses nous sommes plus que vainqueurs par celui qui nous a aimés.",
    category: "Victoire",
    weight: 1.0
  },

  // === VICTOIRE SUR SATAN ===
  {
    reference: "Jacques 4:7",
    text: "Soumettez-vous donc à Dieu; résistez au diable, et il fuira loin de vous.",
    category: "Victoire sur Satan",
    weight: 1.0
  },
  {
    reference: "Apocalypse 12:11",
    text: "Ils l'ont vaincu à cause du sang de l'Agneau et à cause de la parole de leur témoignage, et ils n'ont pas aimé leur vie jusqu'à craindre la mort.",
    category: "Victoire sur Satan",
    weight: 1.0
  },

  // === VIE ÉTERNELLE ===
  {
    reference: "Psaume 16:10",
    text: "Car tu ne livreras pas mon âme au séjour des morts, Tu ne permettras pas que ton bien-aimé voie la corruption.",
    category: "Vie éternelle",
    weight: 1.0
  },
  {
    reference: "Matthieu 19:29-30",
    text: "Et quiconque aura quitté, à cause de mon nom, ses frères, ou ses sœurs, ou son père, ou sa mère, ou sa femme, ou ses enfants, ou ses terres, ou ses maisons, recevra le centuple, et héritera la vie éternelle.",
    category: "Vie éternelle",
    weight: 1.0
  },
  {
    reference: "Jean 4:14",
    text: "Celui qui boira de l'eau que je lui donnerai n'aura jamais soif, et l'eau que je lui donnerai deviendra en lui une source d'eau qui jaillira jusque dans la vie éternelle.",
    category: "Vie éternelle",
    weight: 1.0
  },
  {
    reference: "Jean 8:51",
    text: "En vérité, en vérité, je vous le dis, si quelqu'un garde ma parole, il ne verra jamais la mort.",
    category: "Vie éternelle",
    weight: 1.0
  },
  {
    reference: "Jean 11:25-26",
    text: "Jésus lui dit, Je suis la résurrection et la vie. Celui qui croit en moi vivra, même s'il meurt; et quiconque vit et croit en moi ne mourra jamais.",
    category: "Vie éternelle",
    weight: 1.0
  },
  {
    reference: "Philippiens 1:21",
    text: "Christ est ma vie, et la mort m'est un gain.",
    category: "Vie éternelle",
    weight: 1.0
  },

  // === VIEILLESSE ===
  {
    reference: "Psaume 92:13-16",
    text: "Les justes croissent comme le palmier, ils s'élèvent comme le cèdre du Liban. Plantés dans la maison de l'Eternel, ils prospèrent dans les parvis de notre Dieu; ils portent encore des fruits dans la vieillesse, ils sont pleins de sève et verdoyants, pour faire connaître que l'Eternel est juste.",
    category: "Vieillesse",
    weight: 1.0
  },
  {
    reference: "Psaume 103:5",
    text: "C'est lui qui rassasie de biens ta vieillesse, qui te fait rajeunir comme l'aigle.",
    category: "Vieillesse",
    weight: 1.0
  },
  {
    reference: "Ésaïe 46:4",
    text: "Jusqu'à votre vieillesse je serai le même, jusqu'à votre vieillesse je vous soutiendrai; je l'ai fait, et je veux encore vous porter, vous soutenir et vous sauver.",
    category: "Vieillesse",
    weight: 1.0
  }
];