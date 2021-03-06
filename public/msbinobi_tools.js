
var university_path = "http://www.u-bordeaux.fr/formation/2015/PRMABS_121/master-recherche-professionnel-mention-biologie-sante-specialite-bioinformatique/enseignement/";

var course_data = {

/**********************************************
Semester 7:
Anglais	                                                3   30h	
Projet tutoré : réalisation logicielle	                3   27h		
Approches expérimentales en biologie	                6	26h 28h	
Biomodélisation et simulation de processus biologiques	9	27h		
Algorithmique et Programmation                          9	27h
**********************************************/

    'B1BS7M06' : {
        'id'        : "B1BS7M06",
        'acronym'   : "Anglais",
        'ects'      : 3,
        'semester'  : 7, // semester 7 and 8 = M1 			"<li>9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'visible', // <visible|hidden>     
        'title'     : "Anglais",
        'contents'  : {
            'fr':
                "<ul>"+
                "<li>Construire une communication scientifique orale en anglais à partir de l’analyse de documents "+
                "de divers genres scientifiques et répondre en anglais aux questions sur ce travail.</li>"+
                "<li>Prendre la parole et interagir dans des situations diverses.</li>"+
                "<li>Renforcer la compréhension écrite et orale.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul>"+
                "<li>développer les compétences de communication scientifique pertinentes aux contextes "+
                "professionnels de la recherche. Renforcer les quatre compétences langagières (compréhension "+
                "et production de l’anglais, orale et écrite).</li></ul>"+
                "<h3>Compétences acquises</span></h3>"+
                "<ul><li>Compétences langagières en anglais : à partir et en fonction du niveau initial vers "+
                "le niveau B2 et au delà selon les critères du Cadre Européen Commun de Référence.</li>"+
                "<li>Techniques de compréhension de l’anglais scientifique</li>"+
                "<liCommunication scientifique orale et écrite en anglais.</li>"+
                "</ul>",
            'en':
                "",
        },
        'html'      : "ENB1BS7M06_01/anglais",
    },
    
    'F1BS7201' : {
    	"id": "F1BS7201",
        "acronym"   : "ProjLog",
        "title"     : "Projet tutoré: réalisation logicielle",
        "ects"      : 3,
        "semester"  : 7,
        "students"  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'visible', // <visible|hidden>     
       "contents": {
            'fr': 
                "<ul><li>Mise à niveau notions et principes de base."+
                "<ul>"+
                "<li>Le système d'exploitation."+
                "</li>"+
				"<li>Les interpréteurs de commandes.</li>"+
                "</ul>"+
                "</li>"+
				"<li>Réseau et archivage</li>"+
				"<li>la veille "+
                "scientifique: utilisation de mots-clefs, méta-analyse des banques de données d’informations et "+
                "des brevets.</li>"+
				"<li>élaboration d'un projet scientifique: de l'idée à la formalisation du projet.</li>"+
                "</ul>",
            'en': ""
        },
        'html'      : "ENF1BS7201_01/projet-tutore-realisation-logicielle",    
    },

    
    'F6BS7M02' : {
        'id'        : "F6BS7M02", // F6BS7M02 ou KM1BS10U
        'acronym'   : "AEB",
        'ects'      : 6,
        'semester'  : 7, // semester 7 and 8 = M1  9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'hidden', // <visible|hidden>     
        'title'     : "Approches Expérimentales en Biologie",
        'contents'  : {
            'fr': 
                "<h2>Programme</h2>"+
                "<h3>Les Omics (30 h)</h3>"+
                "<ul>"+
                "<li>Génome: Approche de sequençage haut débit et exploitation des données</li>"+
                "<li>Transcriptome: Étude des transcriptomes : les différentes technologies d’exploration "+
                "(méthode SAGE, Puces à ADN) et les méthodes d’analyse des données.</li>"+
                "<li>Protéome: Étude des protéomes: séparation (chromatographie, électrophorèse monodimensionnelle, "+
                "bidimensionnelle, Blue Native SDS-PAGE) et identification des protéines (séquençage d’Edman, "+
                "spectrométrie de masse, puces protéines).</li>"+
                "<li>Métabolome: Etude du métabolome en 6 points : design expérimental, méthodes d’extractions, "+
                "variétés et complémentarité des méthodes analytiques, traitement des données, outils de visualisation "+
                "pour l’exploitation des données, intégration des données.</li>"+
                "</ul>"+
                "<h3>Statistiques pour la biologie (14 h)</h3>"+
                "<ul>"+
                "<li>Evaluation des connaissances pré-requises: maîtrise du langage statistique (fréquence, "+
                "effectif, variable, diagramme de dispersion…), les méthodes univariées (tests d’hypothèse paramétriques), "+
                "la construction et la gestion de grands tableaux de données.</li>"+
                "<li>Analyse multidimensionnelle des données: régression linéaire, analyse de variance, analyse des "+
                "variables quantitatives en composantes principales (ACP), la classification.</li>"+
                "<li>La formation est faite en reprenant les notions de théorie indispensable à la compréhension et en "+
                "s’appuyant sur des exemples pédagogiques réels. Les deux tiers des enseignements seront réalisés sous "+
                "forme de travaux dirigés et pratiques dans une salle équipée du logiciel libre R et autres logiciels "+
                "accessibles en ligne.</li>"+
                "</ul>"+
                "<h3>Exploitation des bases de données (16 h)</h3>"+
                "<ul>"+
                "<li>Contenu des bases de données en biologie. Méthodes bioinformatiques.</li>"+
                "<li>Comparaison et analyse des séquences biologiques.</li>"+
                "<li>Prédictions de structure et de fonction (y compris structure 3D).</li>"+
                "</ul>",
            'en':
                "<h2>Omics (30 h)</h2>"+
                "<ul>"+
                "<li>Genomics: High throughput sequencing and data analysis.</li>"+
                "<li>Transcriptomics</li>"+
                "<li>Proteomics</li>"+
                "<li>Metabolomics</li>"+
                "</ul>"+
                "<h2>Statistics in biology (14 h)</h2>"+
                "<ul>li>Evaluation des connaissances pré-requises: maîtrise du langage statistique (fréquence, "+
                "effectif, variable, diagramme de dispersion…), les méthodes univariées (tests d’hypothèse paramétriques), "+
                "la construction et la gestion de grands tableaux de données.</li>"+
                "<li>Multidimensional analysis  of data: linear regression, variance analysis, analysis des "+
                "variables quantitatives en principal components (PCA), classification.</li>"+
                "<li>La formation est faite en reprenant les notions de théorie indispensable à la compréhension et en "+
                "s’appuyant sur des exemples pédagogiques réels. Les deux tiers des enseignements seront réalisés sous "+
                "forme de travaux dirigés et pratiques dans une classroom equipped du logiciel libre R et other softwares "+
                "available on-line.</li></ul>"+
                "<h2>Exploitation of databases (16 h)</h2>"+
                "<ul><li>Contenu des bases de données en biologie. Méthodes bioinformatiques.</li>"+
                "<li>Comparaison et analyse des séquences biologiques.</li>"+
                "<li>Prédictions de structure et de fonction (y compris structure 3D).</li></ul>",          
        },
        'html'      : "ENF6BS7M02_01/approches-experimentales-en-biologie",
    },
    'F6BS7M02-Omics' : {
        'id'                : "F6BS7M02-Omics",
        'acronym'           : "AEB-Omics",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Stats' : {
        'id'                : "F6BS7M02-Stats",
        'acronym'           : "AEB-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Info' : {
        'id'                : "F6BS7M02-Info",
        'acronym'           : "AEB-Info",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    
    'J1BS7M01' : {
        'id'        : "J1BS7M01",
        'acronym'   : "BioMod",
        'ects'      : 9,
        'semester'  : 7, // semester 7 and 8 = M1 			"<li>9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'hidden', // <visible|hidden>     
        'title'     : "Biomodélisation, simulation de processus biologiques",
        'contents'  : {
            'fr': "<h2>Programme</h2>"+
                "<h3>Statistiques</h3>"+
                "<ul>"+
			    "<li>Mise en œuvre d'une analyse statistique – utilisation d’un logiciel tel que R et élaboration de programme.</li>"+
			    "<li>Analyse descriptive : analyse des fréquences, des moyennes, analyse de "+
			    "variance, régression linéaire et corrélations, tests non paramétriques, analyse multi-variée.</li>"+
                "</ul>"+
			    "<h3>Programmation</h3>"+
                "<ul>"+
			    "<li>Développement de programmes en langage Python.</li></ul>"+
                "<h3>Imagerie</h3>"+
                "<ul><li>Partie théorique</li>"+
        			"<ul>"+
        			"<li>Image numérique. Formats d'images. Espaces de couleurs.</li>"+
        			"<li>Amélioration d'images et de traitements (filtrations en espace réel, en espace fréquentiel).</li>"+
        			"<li>Analyse des images: Mesures, Reconnaissance de formes.</li>"+
        			"<li>Notion de programmation en vue de l'automatisation de tâches pour le traitement et l'analyse de vidéos.</li>"+
        			"</ul>"+
                "<li>Partie pratique"+
                    "<ul>"+
        			"<li>Application à des images de microscopie optique et électronique et des vidéos.</li>"+
			        "<li>Utilisation d'ImageJ, installation de greffons (plugins).</li>"+
			        "<li>Programmation de Macros/Scripts.</li></ul>"+
			     "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<span style=\"font-weight: bold;\">Objectifs pédagogiques</span>"+
                "<ul><li>Donner les éléments nécessaires pour l'analyse et le traitement de données biologiques dans les domaines de:</li>"+
			        "<ul>"+
			            "<li>biostatistiques</li>"+
			            "<li>réalisation de programme de traitement de données.</li>"+
			            "<li>traitement et analyse d'images scientifiques.</li>"+
			        "</ul>"+
			     "</ul>"+
                "<span style=\"font-weight: bold;\">Compétences acquises</span>"+
			    "<ul><li>Modélisation: Elaborer un modèle pour les données biologiques et sa mise en oeuvre informatique.</li>"+
			    "<li>Programmation: Maitrise du langage Python.</li>"+
			    "<li>Imagerie: Appréhender les divers moyens d'amélioration des images scientifiques dans les "+
			    "domaines des microscopies (optique et électronique) en vue de leur analyse.</li>"+
                "<li>Imagerie: Savoir utiliser une librairie de traitement d'images.</li>"+
                "</ul>",			
            'en': ""
        },
        'html'      : "ENJ1BS7M01_01/biomodelisation-et-simulation-de-processus-biologiques",

    },
     'J1BS7M01-Prog' : {
        'id'                : "J1BS7M01-Prog",
        'acronym'           : "BioMod-Prog",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Imag' : {
        'id'                : "J1BS7M01-Imag",
        'acronym'           : "BioMod-Imag",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Stats' : {
        'id'                : "J1BS7M01-Stats",
        'acronym'           : "BioMod-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    
    "J1BS7202" : {
        "id": "J1BS7202",
        "acronym": "AlgoProg",
        "title": "Algorithmique et Programmation",
        "ects": 9,
        "semester": 7,
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[required]',
        'visibility': 'visible', // <visible|hidden>     
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Algorithmique de base, structures itératives et prédicats.</li>"+
                "<li>Les tableaux : parcours, recherches séquentielle et dichotomique, tris.</li>"+
                "<li>Complexité : quelques notions à partir d'exemples</li>"+
				"<li>Programmation : "+
                "Mise en application des différents concepts vues en algorithmique : structures de contrôle, "+
                "tests logiques, boucles.</li>"+
				"<li>Traitement des accès fichiers séquentiels : lecture /écriture</li>"+
                "<li>Bases de la modélisation orientée objet : élaboration de classes, utilisation de bibliothèques "+
                "ou de modules prédéfinis.</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>"+
                "<h3>Objectifs pédagogiques</h3></li>"+
                "<li>Analyser un problème donné et concevoir l'algorithme correspondant.</li>"+
                "<li>Apprentissage de la programmation au travers de différents langages classiques ou orientés objet.</li>"+
                "<li>Conception de modules de traitement pour les données biologiques.</li>"+
				"<li>"+
                "<h3>Compétences acquises</h3></li>"+
                "<li>Convertir un problème concret en une suite d'instructions programmables.</li>"+
                "<li>Maitrise des concepts essentiels d'un langage de programmation.</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENJ1BS7202_01/algorithmique-et-programmation"
    },


/**********************************************
Semester 8:

Enseignements obligatoires                                                  ECTS	CM	TD	TP
Initiation à la Recherche et/ou Développement	 F1BS8201                   12		45h	
Méthodes et outils pour la biologie des systèmes	J1BS8203                9	27h		

Choix 1 UE de 9 ECTS                                                        ECTS	CM	TD	TP
Informatique appliquée à la biologie: modélisation et ima	C0BS8M01  KM2BS04U      9	10h	5h	
Programmation orienté objet                             	                9	27h		

**********************************************/

    "F1BS8201" : {
        "id": "F1BS8201",
        "acronym": "InitR&D",
        "title": "Initiation à la Recherche et/ou Développement",
        "ects": 12,
        "semester": 8,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
                "<p>Ce module - réalisé sous la supervision d'un maître de stage - consiste en une réalisation informatique "+
                "d'un logiciel de taille importante.</p>"+
                "<p>Elle sera suivie d'un rapport écrit et d'une soutenance.</p>",
            "en": ""
        },
        "html": "ENF1BS8201_01/initiation-a-la-recherche-et-ou-developpement"
    },
    
    "J1BS8203" : {
        "id": "J1BS8203",
        "acronym": "MOBioS",
        "title": "Méthodes et outils pour la biologie des systèmes",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul>"+
                "<li>Récursivité, structures linéaires, structures arborescentes.</li>"+
                "<li>Arbre binaire, arbre binaire de recherche, tas, graphes: algorithme de parcours.</li>"+
                "<li>Approfondissements des notions statistiques vues dans l'UE <b>Approches expérimentales en biologie</b></li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Nécessaire:</h3>"+
                "<p>Avoir acquis les concepts de base des UE programmation et algorithmique du semestre 1</p>",
            "en": ""
        },
        "html": "ENJ1BS8203_01/methodes-et-outils-pour-la-biologie-des-systemes"
    },

    "C0BS8M01" : {
        "id": "C0BS8M01",
        "acronym": "InfoApp",
        "title": "Informatique appliquée à la biologie: modélisation et imagerie",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "hidden",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<h3>Modélisation</h3>"+
                "<ul>"+
                "<li>Introduction générales sur les neurosciences computationnelles : modélisation, intérêt et principes de base en neurosciences</li"+
                "<li>Principes et modélisation des systèmes dynamiques, applications aux neurosciences</li>"+
                "<li>Dynamique des réseaux corticaux</li>"+
				"<li>Codage et décodage du signal neuronal</li>"+
                "<li>Modélisation de l’excitabilité neuronale (modèles ioniques, modèle de Hodgkin-Huxley, modèles cinétiques)</li>"+
                "<li>Les modèles \"integrate and fire\" et apparentés et les modèles de grands réseaux</li>"+
                "<li>Des données expérimentales à la construction d’un modèle : préparer l’un pour l’autre.</li>"+
                "<li>Modifications des propriétés intrinsèques et synaptiques : modéliser la plasticité</li>"+
                "<li>Interaction synaptiques au sein de réseaux simples</li>"+
                "<li>Neuro-ingénierie (interfaces cerveau-machine, Neuro-électronique, Neuro-prothèses)</li>"+
                "<li>Implémentation d'un miniprojet de modélisation (contrôle continu)</li>"+
                "<li>Synthèse sur un article de recherche en neurosciences computationnelles (examen)</li>"+
                "</ul>"+
                "<h3>Imagerie</h3>"+
                "<h4>Partie théorique</h4>"+
                "<ul><li>Image numérique. Vidéos.</li>"+
                "<li>Amélioration d'images et de traitements (débruitage, correction luminosité/contraste et défaut d'illumination).</li>"+
                "<li>Analyse des images: Mesures, Reconnaissance de formes. Suivi de formes.</li>"+
                "<li>Notion de programmation en vue de l'automatisation de tâches pour le traitement et l'analyse de vidéos.</li>"+
                "</ul>"+
                "<h4>Partie pratique:</h4>"+
                "<ul><li>Application à des vidéos (suivi du chemin d'une souris dans un labyrinthe, "+
                "croissance d'un neurone en vidéomicroscopie à fluorescence,etc.).</li>"+
                "<li>Utilisation d'ImageJ, installation de greffons (plugins).</li>"+
                "<li>Programmation de Macros/Scripts.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<h4>Modélisation</h4>"+
                "<ul><li>Comprendre et savoir mettre en œuvre les principes et outils logiciels utilisés pour modéliser la biologie du "+
                "système nerveux, de l'échelle de la cellule à celle du réseau</li>"+
				"<li>Acquérir les bases des sciences théoriques appliquées "+
                "à la compréhension de la dynamique du système nerveux</li></ul>"+
                "<h4>Imagerie</h4>"+
                "<ul><li>Donner les éléments nécessaires du point de vue des outils informatiques</li></ul>"+
                "<h3>Compétences acquises</h3>"+
                "<h4>Modélisation</h4>"+
                "<ul><li>Compréhension des méthodes et principes de base de la modélisation en biologie</li>"+
                "<li>Maîtrise des outils et logiciels dédiés à la modélisation en neuroscience</li>"+
                "<li>Compréhension des méthodes en Neurosciences Théoriques et Computationnelles</li>"+
                "<li>Connaissance de l’apport des Neurosciences Théoriques en Neurosciences Fondamentales "+
                "et dans le domaine de la Neuro-ingénierie.</li>"+
                "</ul>"+
                "<h4>Imagerie</h4>"+
                "<ul><li>Appréhender les divers moyens d'amélioration des images scientifiques en vue de leur analyse.</li>"+
                "<li>Savoir utiliser des fonctions simples de programmation (scripting) pour traiter des vidéos.</li>"+
                "<li>Utilisation du logiciel ImageJ.</li></ul>",
        "en": ""
        },
        "html": "ENC0BS8M01_01/informatique-appliquee-a-la-biologie-modelisation-et-ima"
    },
    
    'C0BS8M01-Model' : {
        'id'                : "C0BS8M01-Model",
        'acronym'           : "InfoApp-Model",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "C0BS8M01"
    },
    'C0BS8M01-Imag' : {
        'id'                : "C0BS8M01-Imag",
        'acronym'           : "InfoApp-Imag",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "C0BS8M01"
    },

    "J1BS8202" : {
        "id": "J1BS8202",
        "acronym": "POO",
        "title": "Programmation orientée objet",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                    "<ul>"+
                    "<li>Modélisation objet:"+
                    "<ul><li>Héritage simple.</li>"+
                    "<li>Héritage complexe.</li>"+
                    "<li>Classes abstraites.</li>"+
                    "</ul>"+
                "</li>"+
                "<li>Traduction en langages C++, java.</li>"+
                "<li>Gestion dynamique: exceptions</li>"+
                "<li>Modèles de classes templates.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>Maîtriser les concepts de la programmation objet.</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>Développer une application en langage objet.</li></ul>",
            "en": ""
        },
        "html": "ENJ1BS8202_01/programmation-oriente-objet"
    },
    
/**********************************************
Semester 9:
Enseignements obligatoires                                                  ECTS	CM	TD	TP
Modélisation des systèmes biologiques	                                    3		15h	
Communication et conception d'un projet de recherche et/ou développement	9			
Connaissance de l'entreprise	                                            3		15h	
Visualisation de la Structure de Proteines	                                3			
Classification des données issues des banques de données biologiques	    3		15h	

Choix 1 UE de 3 ECTS                                                        ECTS	CM	TD	TP
Anglais	                                                                    3		60h	
Architecture du génome	                                                    3	10h	10h	
Génétique Humaine	                                                        3	10h	10h	
Division et cycle cellulaire	                                            3	10h	10h	
Algorithmique pour la bio-informatique et graphe	                        3		15h	

Choix 1 UE de 6 ECTS                                                        ECTS	CM	TD	TP
Programmation Objet Avancée	                                                6		30h	
Approche objet	                                                            6	28h	30h	
Outils d'indexation et de classification de l'information	                6		24h	
Systemes Autonomes	                                                        6		24h	
**********************************************/

    "J1BS9204" : {
        "id": "J1BS9204",
        "acronym": "ClassData",
        "title": "Classification des données issues des banques de données biologiques",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Data mining : introduction du concept d'extraction de connaissances à partir de données brutes.</li>"+
                "<li>Algorithmes de classification (bayesienne et par arbres de décision) et étude des problèmes de regroupement (clustering).</li>"+
                "<li>Algorithmique des mots et des arbres : applications aux structures macromoléculaires.Présentation des méthodes et algorithmes "+
                "de base pour le traitement algorithmique des mots et des arbres, et leurs applications dans les problèmes de comparaison et "+
                "d'alignement de séquences, de repliement de séquences (structures secondaires).</li>"+
                "<li>Traitement des graphes et visualisation des grands jeux de données.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<p>Apprentissage des techniques avancées de traitement de données biologiques de la génomique à la métabolomique.</p>"+
                "<h3>Compétences acquises</h3>"+
                "<ul>"+
                "<li>Méthode de fouille de données</li>"+
                "<li>Méthodes de classification</li>"+
                "<li>Recherche de motifs</li>"+
                "<li>Etiquetage</li>"+
                "<li>Analyse de séquences à grande échelle</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENJ1BS9204_01/classification-des-donnees-issues-des-banques-de-donnees-b"
    },

    "F1BS9201" : {
        "id": "F1BS9201",
        "acronym": "CommPR&D",
        "title": "Communication et conception d'un projet de recherche et/ou développement",
        "ects": 9,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<p>Programme des enseignements théoriques</p>"+
                "<ul><li>Méthodes d'analyse et de conception des systèmes informatiques:</li>"+
                "<li>UML</li>"+
                "<li>Design Patterns</li>"+
                "<li>Etude de la mise en oeuvre d'un cahier des charges, de la définition des besoins, de techniques de gestion de configuration.</li>"+
                "<li>Formalisation de connaissances, outils de structuration de données langage de type XML pour la biologie.</li>"+
                "</ul>"+
                "<p>Programme des enseignements dirigés</p>"+
                "<p>Les étudiants appliqueront les techniques de génie logiciel dans le cadre d'un projet comportant la conception "+
                "et la mise en oeuvre d'une application informatique.</p>"+
                "<p>Contenu générique pour cette UE commune</p>"+
                "<ul>"+
                "<li>Présentation des principales phases du processus dans un projet scientifique et/ou de développement (définition "+
                "stratégique, opérationnelle, réalisation et suivi, évaluation)</li>"+
                "<li>Présentation des liaisons vertueuses \"Méthodologie du projet et démarche qualité\" avec une introduction à l'assurance "+
                "qualité au laboratoire, en système de production, cahiers de laboratoire, bonnes pratiques de laboratoire, etc.</li>"+
                "<li>Introduction aux brevets et régimes juridiques associés</li>"+
                "<li>Projet tutoré de veille technologique et/ou d'analyse bibliographique ciblées sur des sujets d'actualité (rapport écrit "+
                "et oral).</li>"+
                "<li>Mise en place d'une formation pratique sur la valorisation et le transfert technologique</li>"+
                "<li>Utilisation d'un ensemble d'outils informatiques (logiciels, bases de données, réseau WEB, progiciel, etc.) pour élaborer un "+
                "rapport, une veille technologique</li>"+
                "<li>Suivi d'une série de conférences organisées avec des chercheurs, des professionnels du secteur des biotechnologies</li>"+
                "<li>Rencontre de professionnels porteurs de projets pour illustrer et documenter la création d'entreprises à partir d'un concept, "+
                "d'une idée scientifique (notion de jeunes pousses)</li>"+
                "<li>Visite d'entreprises, de laboratoires d'excellences ou de plateformes technologiques</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENF1BS9201_01/communication-et-conception-d-un-projet-de-recherche-et-ou-developpement"
    },

    "F6BS9202" : {
        "id": "F6BS9202",
        "acronym": "Entreprise",
        "title": "Connaissance de l'entreprise",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<p>Découverte du secteur et les métiers de la bioinformatique industrielle.</p>"+
                "<p>Programme détaillé</p>"+
                "<ul><li>L'enseignement théorique comprend d'une part des cours présentant les principes de la conduite de projet en "+
                "milieu industriel et une série de conférences au cours desquelles des industriels viendront présenter leurs entreprises "+
                "et métiers et répondre aux questions des étudiants concernant les perspectives de carrière offertes.</li>"+
                "<li>L'enseignement dirigé se fait sous forme de projets réalisés individuellement ou en groupe. </li>"+
                "<li>Les projets individuels comportent :"+
                    "<ul>"+
                        "<li>la recherche d'information sur une entreprise de bioinformatique "+
                        "et débouche sur la remise d'un rapport et la présentation d'un exposé ;</li>"+
                        "<li>la recherche d'une offre d'emploi conduisant à la simulation d'une procédure de recrutement "+
                        "(écriture d'un CV, d'une lettre de motivation et entretien).</li>"+
                        "<li>Les projets de groupe portent sur l'installation et l'évaluation d'un logiciel de bioinformatique commercial "+
                        "et se font en collaboration avec les entreprises (qui sont sollicitées pour mettre à disposition une licence "+
                        "gratuite du logiciel). Ces débouchent également sur l'écriture d'un rapport (remis aux entreprises partenaires "+
                        "si elles le souhaitent) et la présentation d'un exposé.</li>"+
                    "</ul>"+
                "</li></ul>"+
                "<p>Des intervenants issus du secteur industriel seront invités dans cette UE comme par exemple des utilisateurs "+
                "d'outils bioinformatiques (Sanofi Aventis, Biomérieux, etc.) et des producteurs de logiciels (GenoMining, Biomax "+
                "Informatics AG, etc.).</p>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Pré-requis</h3>"+
                "<ul><li>Connaître les banques de données et logiciels de bioinformatique. Etre capable d'installer et configurer un "+
                "logiciel dans un environnement UNIX ou WIndows.</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENF6BS9202_01/connaissance-de-l-entreprise"
    },

    "C1BS9205" : {
        "id": "C1BS9205",
        "acronym": "ModSysBio",
        "title": "Modélisation des systèmes biologiques",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<h3>Programme des enseignements théoriques</h3>"+
                "<ul><li>Aperçu du métabolisme cellulaire</li>"+
                "<li>Structure des réseaux métaboliques. Matrice de stoechiométrie. Modes élémentaires</li>"+
                "<li>Théorie du contrôle du métabolisme.</li>"+
				"<li>Les réseaux de régulation.</li>"+
                "<li>Modélisation du métabolisme et des réseaux de régulation.</li>"+
                "<li>Les outils de modélisation (Equations différentielles, Réseaux de Petri, Systèmes multi-agents,...)</li>"+
                "</ul>"+
                "<h3>Programme des enseignements dirigés et pratiques.</h3>"+
                "<ul>"+
                "<li>Sous forme d'analyse approfondie d'articles</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul>"+
                "<li>Acquisition de la maitrise des outils d'appréhension des réseaux métaboliques</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul>"+
                "<li>Capacité à réaliser une analyse de réseaux biologiques depuis les données expérimentales "+
                "jusqu'à la modélisation</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENC1BS9205_01/modelisation-des-systemes-biologiques"
    },

    "J1BS9203" : {
        "id": "J1BS9203",
        "acronym": "Prot3D",
        "title": "Visualisation de la Structure de Protéines",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
            "<h2>Programme</h2>"+
            "<p>Initier les étudiants à la visualisation et à l'exploration des structures 3D.</p"+
            "><p>Programme des enseignements théoriques</p><ul><li>Organisation structurale des macromolécules biologiques.</li>"+
            "<li>Banques de données structurales (Protein Data Bank, SCOP,etc.).</li>"+
            "<li>Format de fichier PDB (Protein Data Bank)</li>"+
            "<li>Principes de la représentation graphique d'un objet 3D avec OpenGL.</li>"+
            "<li>Algorithmes utilisés pour les divers types de représentation graphique.</li>"+
            "</ul><p>Programme des enseignements dirigés et pratiques</p>"+
            "<ul><li>Les enseignements pratiques et dirigés seront tous dispensés devant ordinateur.</li>"+
            "<li>Extraction des informations structurales à partir des banques de données.</li>"+
            "<li>Initiation à l'utilisation de la librairie OpenGL versions 3.x et supérieures pour la visualisation des structures protéiques 3D au format PDB.</li>"+
            "</ul>"+
            "<h2>Objectifs et compétences</h2>"+
            "<h3>Pré-requis</h3>"+
            "<p>Notion de programmation acquises en master 1 de bioinformatique</p>",
            "en": ""
        },
        "html": "ENJ1BS9203_01/visualisation-de-la-structure-de-proteines"
    },
    
    "B0BS9319" : {
        "id": "B0BS9319",
        "acronym": "AnglaisM2",
        "title": "Anglais",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Conférences scientifiques et débats par des scientifiques anglophonesAnalyses d'articles scientifiques "+
                "ou de rapport en anglais</li>"+
                "<li>Initiation a la rédaction de productions scientifiques en anglais</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENB0BS9319_01/anglais"
    },
    
    "C6SB9M02" : {
        "id": "C6SB9M02",
        "acronym": "ArchiGen",
        "title": "Architecture du génome",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Architecture du génome : centromère, télomère et topologie de la chromatine</li>"+
                "<li>Organisation des génomes : séquences répétées, familles multigéniques et domaines répétés</li>"+
                "<li>Plasticité des génomes eucaryotes, éléments transposables</li>"+
                "<li>Architecture nucléaire : domaines nucléaires spécialisés (nucléole, corps de Cajal), territoires chromosomiques</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>L'objectif est de décrire l'architecture nucléaire et l'organisation des génomes eucaryotes et d'évoquer certains "+
                "éléments impliqués dans l'évolution des génomes.</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>Connaissances relatives à l'architecture nucléaire, l'architecture des génomes et leur évolution</li></ul>",
            "en": ""
        },
        "html": "ENC6SB9M02_01/architecture-du-genome"
    },
    
    "C6SB9M03" : {
        "id": "C6SB9M03",
        "acronym": "GenHuman",
        "title": "Génétique Humaine",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Génome humain </li>"+
                "<li>Génétique médicale et conseil génétique</li>"+
                "<li>Neurogénétique</li>"+
                "<li>Oncogénétique</li>"+
                "<li>Maladies mitochondriales</li>"+
                "<li>Génétique du développement</li>"+
                "<li>Approches thérapeutiques</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<p>Du génome humain à la physiopathologie et aux applications en génétique médicale.</p>"+
                "<h3>Compétences acquises</h3>"+
                "<p>Connaissances et savoir en génétique humaine ; aspects physiopathologiques.</p>",
            "en": ""
        },
        "html": "ENC6SB9M03_01/genetique-humaine"
    },
    
    "C6SB9M04" : {
        "id": "C6SB9M04",
        "acronym": "DivCell",
        "title": "Division et cycle cellulaire",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Machinerie du cycle cellulaire et check points. </li>"+
                "<li>Le contrôle du cycle cellulaire chez les eucaryotes. </li>"+
                "<li>Les points de contrôle en phase G1, G2 et à la sortie de mitose. </li>"+
                "<li>Le contrôle de séparation des chromosomes. </li>"+
                "<li>Les modèles KO des cyclines et des kinases cycline dépendantes chez la souris. </li>"+
                "<li>Le cycle cellulaire chez les plantes.</li>"+
                "<li>L'influence des voies de signalisation sur la régulation du cycle cellulaire.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>Approfondir les connaissances sur le cycle cellulaire chez les eucaryotes inférieurs et supérieurs.</li></ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>La régulation du cycle cellulaire. Les molécules qui interviennent dans cette régulation et les liens entre "+
                "les fonctions de ces molécules et le développement de maladies néoplastiques.</li></ul>",
            "en": ""
        },
        "html": "ENC6SB9M04_01/division-et-cycle-cellulaire"
    },
    
    "J1BS9207" : {
        "id": "J1BS9207",
        "acronym": "AlgoGraph",
        "title": "Algorithmique pour la bio-informatique et graphe",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Traitement automatique et analyse d'objets biologiques arborescents (structures secondaires d'ARNs, "+
                "architecture de plantes, etc.): "+
                "<ul><li>comparaison d'arborescences, </li>"+
                "<li>distance d'édition (opérations structurelles élémentaires, opérations d'édition).</li>"+
                "</ul></li>"+
                "<li> Formulation en termes de problème d'optimisation, "+
                "<ul><li>algorithmes efficaces en temps et en espace, </li>"+
                "<li>solutions incrémentales, </li>"+
                "<li>programmation dynamique. </li></ul>"+
                "</li>"+
				"<li>Réseaux d'interactions et métaboliques, voies métaboliques. </li>"+
				"<li>Exploration des relations du type \"guilt by association\", recherche de chemins et sous-graphes indiquant des voies de signalisation, "+
				"recherche de modes élémentaires.</li></ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Objectifs pédagogiques</h3>"+
				"<p>Présenter les méthodes informatiques d'exploitation de grandes masses de données, dont la bioinformatique est l'un des domaines "+
				"d'application. On présentera en particulier les algorithmes sur les mots et sur les arbres pour traiter des données biologiques.</p>"+
				"<h3>Compétences acquises</h3>"+
				"<ul><li>Modéliser un problème bio-informatique en termes de structures de données (mots, arbres, graphes). </li>"+
				"<li>Utilisation des principaux algorithmes, méthodes et heuristiques développées en bio-informatique ou dans des domaines "+
				"de l'informatique fondamentale et pertinent pour la bio-informatique. </li>"+
				"<li>Mesurer le potentiel applicatif des méthodes et outils développés en bio-informatique pour d'autres champs "+
				"applicatifs tels les sciences sociales. </li>"+
				"<li>Avoir une vue sur l'ensemble des outils et implémentations mis à disposition par la communauté de recherche.</li></ul>",
            "en": ""
        },
        "html": "ENJ1BS9207_01/algorithmique-pour-la-bio-informatique-et-graphe"
    },


    "J1BS9206" : {
        "id": "J1BS9206",
        "acronym": "POA",
        "title": "Programmation Objet Avancée",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": "",
            "en": ""
        },
        "html": "ENJ1BS9206_01/programmation-objet-avancee"
    },
    
    "J1INAW12" : {
        "id": "J1INAW12",
        "acronym": "AppObj",
        "title": "Approche objet",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Rappels de programmation objet</li>"+
				"<li>Concepts avancés : exceptions, clonage, classes génériques, collections, itérations, classes internes...</li>"+
				"<li>Utilisation de quelques modèles de conception objets : Adaptateur, Décorateur, Observable ...</li>"+
				"<li>Utilisation de la programmation objet dans certains types de développements : IHM, Système ...</li>"+
				"</ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Pré-requis</h3>"+
				"<ul><li>Connaissances de la programmation impérative (langage C)</li>"+
				"<li>Connaissance et première utilisation d'un langage de programmation à objet (Java,C++,...)</li></ul>",
            "en": ""
        },
        "html": "ENJ1INAW12_01/approche-objet"
    },
    
    "J1IN9413" : {
        "id": "J1IN9413",
        "acronym": "IndexClass",
        "title": "Outils d'indexation et de classification de l'information",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<p>Analyse de données</p>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Pré-requis</h3>"+
                "<p>Informatique : Algorithmique, Structures de Données et Programmation (niveau L3)</p>",
            "en": ""
        },
        "html": "ENJ1IN9413_01/outils-d-indexation-et-de-classification-de-l-information"
    },
    
    "J1IN9523" : {
        "id": "J1IN9523",
        "acronym": "SysAuto",
        "title": "Systémes Autonomes",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2><p>Le programme comprend en particulier les points suivants:</p>"+
                "<h3>Configurations et plates-formes :</h3>"+
                "<p>Les systèmes actuels les plus pertinents seront étudiés:</p>"+
                "<ol><li>drones aériens</li>"+
				"<li>robots terrestres</li>"+
				"<li>capteurs</li>"+
				"<li>drones sous-marins</li></ol>"+
				"<p>L'accent sera mis en particulier sur l'autonomie et les environnements systèmes et logiciels associés, "+
				"indispensables à la réalisation d'une mission l'envergure. En effet, le contrôle temps réel par un opérateur "+
				"extérieur n'étant pas toujours possible, un certain nombre de décisions doivent donc être prises de manière autonome "+
				"par le système embarqué. Néanmoins, de par la réglementation et pour des raisons opérationnelles, des informations "+
				"doivent être ramenées vers un environnement logiciel de contrôle, qui lui, est à la disposition d'un opérateur, "+
				"auquel il présente un certain nombre d'informations (signes vitaux - position, altitude, etc. - par exemple -). "+
				"Cette chaine logicielle est une clef de voute de ces systèmes complexes qu'il est important de maîtriser.</p>"+
				"<h3>Ecosystème :</h3>"+
				"<p>Les domaines d'application sont nombreux et cette filière s'est structurée localement et nationalement, "+
				"avec des interactions internationales fortes. Mais ce potentiel fort ne doit pas laisser croire que 'tout est "+
				"permis', et il est donc crucial d'avoir une bonne connaissance des réglementations en cours.</p>"+
				"<ol><li>domaines d'applications et cas concrets</li>"+
				"<li>structuration du domaine, régionale/nationale/internationale</li>"+
				"<li>règlementation</li></ol>"+
				"<h3>Problématiques de recherche :</h3>"+
				"<p>Ces systèmes offrent de nouvelles voies de développement mais soulèvent un certain nombre de problèmes théorique "+
				"ou plus applicatifs qui relèvent d'activités de recherche. Par exemple :</p>"+
				"<ol><li>la structuration en essaims (swarming) ou flotte d'appareils</li>"+
				"<li>la mobilité, les graphes de communication sous-jacents, la dynamique du système, les modèles associés</li>"+
				"<li>les techniques de type sense and avoid, la localisation en in-door et out-door</li>"+
				"<li>les technologies associées, les problématiques applicatives tracking video, traitement d'images, radio, etc.</li></ol>"+
				"<h3>Mise en oeuvre</h3>"+
				"<p>Enfin, il est important que les étudiants qui choisissent cette UE puissent être opérationnels immédiatement. "+
				"C'est pourquoi, ils seront formés aux bases de l'aéronautique et suivront une formation d'opérateur drone, indispensable "+
				"aujourd'hui pour pouvoir faire voler un tel appareil.</p>"+
				"<ol><li>Bases d'aéronautique</li>"+
				"<li>Formation opérateur (pour l'essentiel an auto-apprentissage) + examen final</li></ol>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Pré-requis<br></h3>"+
				"<p>UEs Réseaux, Administration Réseaux et Systèmes d'exploitation de M1</p>",
            "en": ""
        },
        "html": "ENJ1IN9523_01/systemes-autonomes"
    },

/**********************************************
Semester 10:
Réalisation d'un projet de recherche et/ou développement
**********************************************/

    "F1BS0201" : {
        "id": "F1BS0201",
        "acronym": "StageM2",
        "title": "Réalisation d'un projet de recherche et/ou développement",
        "ects": 30,
        "semester": 10,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
            "<ul><li>Stage en laboratoire de recherche ou en entreprise d'une durée de 5 à 6 mois.</li>"+
            "<li>Il repose sur un projet scientifique préalablement rédigé et soumis aux responsables de la spécialité.</li>"+
            "<li>Ce stage peut avoir lieu en France ou à l'étranger."+
                "<ul><li>Parcours recherche:"+
                "<ul><li>Sujet de stage proposé par le Maître de Stage après validation par la commission pédagogique "+
                "de Master et choisi par l’étudiant en accord avec le responsable du stage.</li>"+
                "</ul>"+
                "</li>"+
                "<li>Parcours professionnel:"+
                "<ul><li>Sujet de stage défini par le Maître de Stage et l’étudiant en accord avec le responsable pédagogique.</li></ul>"+
                "</li></ul></li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>Objectifs pédagogiques"+
                "<ul><li>Mise en situation dans un environnement professionnel pour la réalisation d'un projet de recherche "+
                "et/ou développement en appliquant les notions fondamentales de gestion d'un projet de recherche et/ou développement:"+
                "<ul><li>préparation</li>"+
                "<li>réalisation</li>"+
                "<li>analyse critique des résultats</li>"+
                "<li>synthèse et présentation des résultats</li>"+
                "<li>Applications de \"bonnes pratiques\" et de la \"démarche qualité\".</li>"+
                "</ul></li>"+
                "</ul></li>"+
                "<li>Compétences acquises"+
                "<ul><li>Compétence dans la gestion d'un projet de recherche et/ou développement.</li>"+
                "<li>Acquérir l'autonomie nécessaire pour mener un projet de recherche et/ou de développement</li>"+
                "<li>Acquérir la notion de travail en équipe projet.</li>"+
                "<li>Compétences , à analyser et critiquer les résultats, à synthétiser des résultats, à présenter à l'écrit "+
                "et à l'oral un projet et les résultats obtenus dans le cadre de ce projet.</li>"+
                "<li>Maîtrise de l’anglais pour les étudiants qui partent à l’étranger.</li>"+
                "</ul>"+
                "</li></ul>",
            "en": ""
        },
        "html": "ENF1BS0201_01/realisation-d-un-projet-de-recherche-et-ou-developpement"
    }
    
}
;	var myNews;
	//fonction de recherche des éléments
	function initNews() {

	// var title=document.getElementById("title").value;
	// var intro=document.getElementById("intro").value;
	// var content=document.getElementById("content").value;

	var icons_name=[];
	var icons_type=[];
	for (var n in img){
		icons_name.push(img[n].name);
		icons_type.push(img[n].type)
	}
	for (var t in icons_name ){
		if(icons_type[t]=="biology"){
			var ident="biology";
		}
		else if(icons_type[t]=="teaching"){
			var ident="teaching";
		}
		else{
			var ident="misc";
		}
		document.getElementById(ident).innerHTML+='<input type="radio" name="imgident" value="' + t + '" id="' + icons_name[t] +'" class="imgselected" /> <img src="img/'+icons_name[t]+'_thumb.jpg">';
	}

	var date = new Date();
	var pday = ("0" + (date.getDate())).slice(-2);
	var pmonth = ("0" + (date.getMonth()+1)).slice(-2);
	var pyear = date.getFullYear().toString();

	document.getElementById("pubdate").innerHTML+='<input type="number" min="2015" max="2030" value="'+pyear+'" id="publiyear"/> <input type="number" min="1" max="12" value="'+pmonth+'" id="publimonth"/> <input type="number" min="1" max="31" value="'+pday+'" id="publiday" />';

	getNewsJSON();
	}

function getNewsJSON(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	myNews = JSON.parse(xhr.responseText); // Données textuelles récupérées
	    		updateNewsDisplay(myNews);
    	}
		
	};
	// xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/news.json", true);
	xhr.open("GET", "src/news_json.js", true);
	xhr.send(null);
}

function updateNewsDisplay() {
	document.getElementById("listForModify").innerHTML='';
	document.getElementById("listForDeletion").innerHTML='';
	  for(var n in myNews){
  		document.getElementById("listForModify").innerHTML+='<input type="radio" name="titlenewsmod" id="'+myNews[n]["title"]+'" class="titlenewsmod"/> <label for="'+myNews[n]["title"]+'">'+myNews[n]["title"]+'</label><br />'; 
  		document.getElementById("listForDeletion").innerHTML+='<input type="radio" name="titlenewsdel" id="'+myNews[n]["title"]+'" class="titlenewsdel"/> <label for="'+myNews[n]["title"]+'">'+myNews[n]["title"]+'</label><br />'; 
	}

}

function createNews(){

	var newNews={};

	var author=document.getElementById("author").value;
	newNews.title=document.getElementById("title").value;
	var intro=document.getElementById("intro").value;
	var content=document.getElementById("content").value;
	newNews.content=intro+'<-more->'+content;

  	var selectedimg = document.getElementsByClassName("imgselected");
	for (var i = 0; i< selectedimg.length; i++)
	{
	   if (selectedimg[i].checked){
	   	newNews.img=selectedimg[i].name;
	   }
	}

	var yearpubli=document.getElementById("publiyear").value;
	var monthpubli=document.getElementById("publimonth").value;
	var daypubli=document.getElementById("publiday").value;
	newNews.publidate=yearpubli+monthpubli+daypubli;

	var datecrea = new Date();
	var cday = ("0" + (datecrea.getDate())).slice(-2);
	var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
	var cyear = datecrea.getFullYear().toString();
	var chour = ("0" + (datecrea.getHours())).slice(-2);
	var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
	var csec = ("0" + (datecrea.getSeconds())).slice(-2);
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
	newNews.id = creadate+"@"+author;

	JSON.stringify(newNews);
	updateNewsDisplay();
}

function modifyNews(){
  		var nbtitles = document.getElementsByClassName("titlenewsmod");

		for (var i = 0; i< nbtitles.length; i++)
		{
		    if (nbtitles[i].checked)
		    {
		    	var content = myNews[i]["contents"].split('<!--more-->'); //à changer sur le json définitif
		    	console.log(content)
				document.getElementById("NewsforModify").innerHTML='<h3>Title</h3>     <input type="text" name="title" id="title" value="'+nbtitles[i].id+'"/><br><br>';
				document.getElementById("NewsforModify").innerHTML+='<h3>Introduction</h3>     <input type="text" name="intro" id="intro" value="'+content[0]+'"/><br><br>';
				document.getElementById("NewsforModify").innerHTML+='<h3>Content</h3><textarea name="content" id="content" rows="10" cols="50" >'+content[1]+'</textarea>';
				document.getElementById("NewsforModify").innerHTML+='<input type="submit" onclick="modifyNewsfromJSON()" value="Modify" />';
	        }
		}
		updateNewsDisplay();
}


function deleteNews(){
  		var nbtitles = document.getElementsByClassName("titlenewsdel");
		for (var i = 0; i< nbtitles.length; i++)
		{
		    if (nbtitles[i].checked)
		    {
		        myNews.splice(i,1);
	        }
		}
		getNewsJSON();
}







;var listUE=[];
var listUE7 = [],
	listUE8 = [],
	listUE9 = [],
	listUE10 = [];
listUE.push(listUE7,listUE8,listUE9,listUE10);
var listidUE=[];
var listidUE7 = [],
	listidUE8 = [],
	listidUE9 = [],
	listidUE10 = [];
listidUE.push(listidUE7,listidUE8,listidUE9,listidUE10);

var sem=[7,8,9,10];

var locTalence = [];
var locCarreire = [];
var listlect = [];
var listbat = [];
var listbatmodify = [];
var myCalendar;

function initCalendar() {

	initStatus();
	//création des listes de cours

	var semcourse;
	var acro;
	var idue;
	for (var c in course_data){
		if (course_data[c].visibility==="visible"){
			ue=course_data[c].id+"-"+course_data[c].acronym;
			if (course_data[c].link){
				semcourse=course_data[course_data[c].link].semester;
				ue=course_data[c].id;
			}
			else{
				semcourse=course_data[c].semester;
			}
			sem.forEach(function putCourseinSem(el,i,sem){
				if (sem[i]==semcourse){
					listUE[i].push(ue);
					listidUE[i].push(course_data[c].acronym);
					listUE[i].sort();
					listidUE[i].sort();
				}
			})
		}		
	}	
	//création de la liste des professeurs
	var lectselect='';
	for (var lec in lecturers){
		var namelec= lecturers[lec].name;
		listlect.push(namelec);
	}
	listlect.sort();
	for (var llec in listlect){
		lectselect +='<option value="'+listlect[llec]+'">'+listlect[llec]+'</option>';
	}
	document.getElementById("lecturer").innerHTML+=lectselect;

	//remplissage des listes de dates
	var yearselect;
	var monthselect;
	var dayselect;
	var hourselect;
	var minselect;
	var year=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030];
	for (var y=0;y<year.length;y++){
		yearselect+='<option value="'+year[y]+'">'+year[y]+'</option>';
	}

	var month=["01","02","03","04","05","06","07","08","09","10","11","12"];
	for (var mo=0;mo<month.length;mo++){
		monthselect+='<option value="'+month[mo]+'">'+month[mo]+'</option>';
	}
	var day=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	for (var d=0;d<day.length;d++){
		dayselect+='<option value="'+day[d]+'">'+day[d]+'</option>';
	}
	var hour=["00","08","09","10","11","12","13","14","15","16","17","18","19"];
	for (var h=0;h<hour.length;h++){
		hourselect+='<option value="'+hour[h]+'">'+hour[h]+'</option>';
	}
	var minute=["00","15","30","45"];
	for (var min=0;min<minute.length;min++){
		minselect+='<option value="'+minute[min]+'">'+minute[min]+'</option>';
	}
	document.getElementById("startYearevent").innerHTML+=yearselect;
	document.getElementById("startMonthevent").innerHTML+=monthselect;
	document.getElementById("startDayevent").innerHTML+=dayselect;
	document.getElementById("startHourevent").innerHTML+=hourselect;
	document.getElementById("startMinevent").innerHTML+=minselect;
	document.getElementById("endYearevent").innerHTML+=yearselect;
	document.getElementById("endMonthevent").innerHTML+=monthselect;
	document.getElementById("endDayevent").innerHTML+=dayselect;
	document.getElementById("endHourevent").innerHTML+=hourselect;
	document.getElementById("endMinevent").innerHTML+=minselect;
	document.getElementById("startYear").innerHTML+=yearselect;
	document.getElementById("startMonth").innerHTML+=monthselect;
	document.getElementById("startDay").innerHTML+=dayselect;
	document.getElementById("startHour").innerHTML+=hourselect;
	document.getElementById("startMin").innerHTML+=minselect;
	document.getElementById("endYear").innerHTML+=yearselect;
	document.getElementById("endMonth").innerHTML+=monthselect;
	document.getElementById("endDay").innerHTML+=dayselect;
	document.getElementById("endHour").innerHTML+=hourselect;
	document.getElementById("endMin").innerHTML+=minselect;

	//mise à la date du jour
	var date = new Date();
	startYearevent.value=date.getFullYear().toString();
	startMonthevent.value=("0" + (date.getMonth()+1)).slice(-2);
	startDayevent.value=("0" + (date.getDate())).slice(-2);
	endYearevent.value=date.getFullYear().toString();
	endMonthevent.value=month[date.getMonth()];
	endDayevent.value=("0" + (date.getDate())).slice(-2);
	startYear.value=date.getFullYear().toString();
	startMonth.value=("0" + (date.getMonth()+1)).slice(-2);
	startDay.value=("0" + (date.getDate())).slice(-2);
	endYear.value=date.getFullYear().toString();
	endMonth.value=month[date.getMonth()];
	endDay.value=("0" + (date.getDate())).slice(-2);

	//création de la liste des lieux
	var locselect='';
	for (var l in locations){
		var nameloc= locations[l].name;
		locselect +='<option value="'+nameloc+'">'+nameloc+'</option>';
		if(locations[l].type !=="bat"){
			listbat.push(nameloc);
		}
	}
	document.getElementById("location").innerHTML+=locselect;
	document.getElementById("locationevent").innerHTML+=locselect;

	//création de la liste des groupes
	var groupselect='';
	for (var g in groups){
		var namegroup= groups[g].name;
		groupselect +='<option value="'+namegroup+'">'+namegroup+'</option>';
	}
	document.getElementById("groups").innerHTML+=groupselect;

	//création de la liste des parcours
	var parselect='';
	for (var g in parcours){
		var namepar= parcours[g].name;
		var typepar= parcours[g].value;
		parselect +=' <input type="checkbox" name="'+namepar+'" id="'+namepar+'" value="'+typepar+'" checked /> <label for="'+namepar+'">'+namepar+'</label>';
	}	
	document.getElementById("parcours").innerHTML+=parselect;
	getCalendarJSON();
}

function initStatus(){
	window.location.search.substr(1).split("&").forEach(function ( v,i,arr) {
		tmp=v.split("=");
	if(tmp[0]==="status" && tmp[1]==="1"){
		updatePage(1);
		}
	});
}

function updatePage(stat){
	if(stat===1)
	{
		document.getElementById("auth").style.visibility="hidden";
		var githubauth='Vous êtes connecté à Github';
		document.getElementById("connect").style.visibility="visible";
		document.getElementById("connect").innerHTML=githubauth;
	}
	else
	{
		document.getElementById("auth").style.visibility="visible";
		document.getElementById("connect").style.visibility="hidden";
	}
}

function getCalendarJSON(){
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	myCalendar = JSON.parse(xhr.responseText); // Données textuelles récupérées
        	updateCalendarDisplay(myCalendar);
        }

    };
    xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/test.json", true);
    xhr.send(null);
}

function updateCalendarDisplay() {
	document.getElementById("listForModifycal").innerHTML='';
	document.getElementById("listForDeletioncal").innerHTML='';
	var listmodify='';
	var listdelete='';
	for(var n in myCalendar){
		var years= myCalendar[n]["date_start"].substring(0,4);
		var months= myCalendar[n]["date_start"].substring(4,6);
		var days=myCalendar[n]["date_start"].substring(6,8);
		if (myCalendar[n]["date_start"].length>8)
		{
			var hours=" "+myCalendar[n]["date_start"].substring(9,11)+"h";
			var mins=myCalendar[n]["date_start"].substring(11,13)+" ";
		}
		else
		{
			var hours='';
			var mins='';
		}
		var datestart=years+"/"+months+"/"+days+hours+mins; 

		var yeare = myCalendar[n]["date_end"].substring(0,4);
		var monthe= myCalendar[n]["date_end"].substring(4,6);
		var daye=myCalendar[n]["date_end"].substring(6,8);
		if (myCalendar[n]["date_end"].length>8)
		{
			var houre=" "+myCalendar[n]["date_end"].substring(9,11)+"h";
			var mine=myCalendar[n]["date_end"].substring(11,13)+" ";
		}
		else
		{
			var houre='';
			var mine='';
		}
		var dateend=yeare+"/"+monthe+"/"+daye+houre+mine; 
		listmodify+='<input type="radio" name="titlecalmod" id="'+myCalendar[n]["ID"]+'" class="titlecalmod"/>'+myCalendar[n]["comment"]+'-'+datestart+'-'+dateend+'<br />'; 
		listdelete+='<input type="radio" name="titlecalmod" id="'+myCalendar[n]["ID"]+'" class="titlecalmod"/>'+myCalendar[n]["comment"]+'-'+datestart+'-'+dateend+'<br />'; 	
	document.getElementById("listForModifycal").innerHTML=listmodify;
	document.getElementById("listForDeletioncal").innerHTML=listdelete;
	}
}

function selectUE(){
	var semc=document.getElementById('semester').value;
	semc=parseInt(semc);
	var listUEc,listisUEc;

	sem.forEach(function putCourseinSem(el,i,sem){
		if (sem[i]==semc){
			listUEc=listUE[i];
			listidUEc=listidUE7[i];
				}
			})
	var html ='<h3>UE</h3>     <select name="uesemester" id="uesemester"">';
	for (var m=0;m<listUEc.length;m++){
		html += '<option value="'+listUEc[m]+'" data-acronym="'+listidUEc[m]+'" >'+listUEc[m]+'</option>';
		
	}
	html += '</select>';
	html += '<select name="typecourse" id="typecourse">';
	html += '<option value="Cours/TD" selected>Cours/TD</option>'
	html += '<option value="Cours">Cours</option>';
	html += '<option value="TD">TD</option>';
    html += '<option value="TP">TP</option>';
    html += '<option value="Examen">Examen</option>'
    html += '</select>';
	document.getElementById("ue").innerHTML = html;
}

function selectRoom(){
	var loc=document.getElementById('location').value;
	for (var l=0;l<listbat.length;l++){
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="room" id="room" required/>';
		}
		document.getElementById("rooms").innerHTML=html;
	}
}

function selectRoomEvent(){
	var loc=document.getElementById('locationevent').value;
	for (var l=0;l<listbat.length;l++){
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="roomevent" id="roomevent" required/>';
		}
		document.getElementById("roomsevent").innerHTML=html;
	}
}

function createCalendarCourse(){

	var newCourse={};

	var summary=document.getElementById("uesemester");
	newCourse.comment=summary.options[summary.selectedIndex].getAttribute("data-acronym"); //récupération de l'acronyme pour le titre

	var sum=summary.value.split("-");

	semcourse=course_data[sum[0]].semester;

	//création de l'ID
	//extraction de l'année (M1 ou M2) via le semestre
	var sem=document.getElementById("semester").value;

	if (sem===7 || sem===8){
		var year=1;
	}
	else{
		var year=2;
	}
	newCourse.type=document.getElementById("typecourse").value;
	//extraction de l'auteur de la news (à changer par utilisateur GitHub)
	var author=document.getElementById("author").value;
	//extraction de la date de création
	var datecrea = new Date();
	var cday = ("0" + (datecrea.getDate())).slice(-2);
	var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
	var cyear = datecrea.getFullYear().toString();
	var chour = ("0" + (datecrea.getHours())).slice(-2);
	var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
	var csec = ("0" + (datecrea.getSeconds())).slice(-2);
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
	//extraction de la somme des valeurs des parcours ayant ce cours


	var stu=course_data[sum[0]].students; //sauvegarde de l'ID puis recherche des étudiants pour cette UE

	var stusplit = stu.split(","); //séparation des différents groupes

	var parc=[];
	for (var i in stusplit){
		var parca = stusplit[i].split("[");	
		parc.push(parca[0]); //récupération des noms de groupes seuls
	}
	// var sum=0;
	// for(var p in parc){
	// 	sum=sum+parcours[p].value; //addition des valeurs des groupes
	// }
	// var sumsum=(sum.toString(16))
	// if (sumsum==="f"){
		sumsum="F" //passage de la valeur en hexadecimal
	// }
		//ajout dans l'objet de l'ID et du summary
		newCourse.id = "C"+year+sumsum+creadate+"@"+author;
		newCourse.summary=document.getElementById("uesemester").value;

	//extraction de la date de début et de la date de fin du cours
	var yearstart=document.getElementById("startYear").value;
	var monthstart=document.getElementById("startMonth").value;
	var daystart=document.getElementById("startDay").value;
	var hourstart=document.getElementById("startHour").value;
	var minstart=document.getElementById("startMin").value;
	if ((hourstart===00 && minstart===00) || (allday.checked) ){
		var hourstart="00";
		var minstart="00";
		var yearend=yearstart;
		var monthend=monthstart;
		var dayend=daystart;
		var hourend=23;
		var minend=59;
	}
	else{
		var yearend=document.getElementById("endYear").value;
		var monthend=document.getElementById("endMonth").value;
		var dayend=document.getElementById("endDay").value;
		var hourend=document.getElementById("endHour").value;
		var minend=document.getElementById("endMin").value;		
	}
	newCourse.date_start=yearstart+monthstart+daystart+"T"+hourstart+minstart;
	newCourse.date_end=yearend+monthend+dayend+"T"+hourend+minend;

	//extraction des groupes d'étudiants concernés (hors parcours)
	newCourse.group=document.getElementById("groups").value;

	//extracteur du professeur 
	newCourse.lecturer=document.getElementById("lecturer").value;

	//extraction du lieu du cours
	var bat=document.getElementById("location").value;
	if (locations[bat].type!=="bat"){
		newCourse.location=bat;
	}
	else{
		var room=document.getElementById("room").value;
		newCourse.location="room"+room+"@"+bat;
	}

	//extraction de la description du cours
	newCourse.description=document.getElementById("content").value;

	console.log(newCourse);
	//passage de l'objet js en JSON

	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "/createcourse", true);
  	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

 	 // send the collected data as JSON
  	xhr.send(JSON.stringify(newCourse));
  	xhr.onreadystatechange = function () {
  		console.log("End");
	}
};

function createCalendarEvent(){

	var newEvent={};

	//création de l'ID
		//extraction de l'auteur de l'event (à remplacer par l'utilisateur GitHub)
		var author=document.getElementById("authorgitevent").value;
		//extraction de la date de création
		var datecrea = new Date();
		var cday = ("0" + (datecrea.getDate())).slice(-2);
		var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
		var cyear = datecrea.getFullYear().toString();
		var chour = ("0" + (datecrea.getHours())).slice(-2);
		var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
		var csec = ("0" + (datecrea.getSeconds())).slice(-2);
		var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
		//extraction de l'année concernée (M1 ou M2)
		var year = document.getElementById("yearstudy").value;
		//extraction des parcours concernés
		var sum=0;
	var checkboxes = document.getElementById("parcours").getElementsByTagName("input"); //extraction des différents input de l'ID (ici que checkboxes)
	for (var i = 0, iMax = checkboxes.length; i < iMax; ++i) {
   		var check = checkboxes[i]; //séparation de chacune des checkboxes
   		if (check.type == "checkbox" && check.checked) {
   			sumnum=parseInt(check.value) 
   			sum=sum+sumnum; //si coché, extraction de la valeur du parcours puis addition de cette valeur avec la somme des précédentes
   		}
   	}
	var sumsum=(sum.toString(16)) //passage en hexadécimal
	if (sumsum==="f"){
		sumsum="F" 
	}
		//creation de l'ID à partir des données extraites
		newEvent.id = "M"+year+sumsum+creadate+"@"+author;

	//extraction du titre
	newEvent.summary=document.getElementById("summaryevent").value;

	//extraction de la date de début et de fin de l'event
	var yearstart=document.getElementById("startYearevent").value;
	var monthstart=document.getElementById("startMonthevent").value;
	var daystart=document.getElementById("startDayevent").value;
	var hourstart=document.getElementById("startHourevent").value;
	var minstart=document.getElementById("startMinevent").value;
	if ((hourstart==="00" && minstart==="00") || (alldayevent.checked) ){
		var hourstart="00";
		var minstart="00";
		var yearend=yearstart;
		var monthend=monthstart;
		var dayend=daystart;
		var hourend=23;
		var minend=59;
	}
	else{
		var yearend=document.getElementById("endYearevent").value;
		var monthend=document.getElementById("endMonthevent").value;
		var dayend=document.getElementById("endDayevent").value;
		var hourend=document.getElementById("endHourevent").value;
		var minend=document.getElementById("endMinevent").value;		
	}
	newEvent.date_start=yearstart+monthstart+daystart+"T"+hourstart+minstart;
	newEvent.date_end=yearend+monthend+dayend+"T"+hourend+minend;

	//extraction de la personne faisant l'événement
	newEvent.lecturer=document.getElementById("lecturerevent").value;

	//extraction du lieu 
	var bat=document.getElementById("locationevent").value;
	if (locations[bat].type!=="bat"){
		newEvent.location=bat;
	}
	else{
		var room=document.getElementById("roomevent").value;
		newEvent.location="room"+room+"@"+bat;
	}

	//extraction de la description
	newEvent.description=document.getElementById("contentevent").value;

	//extraction des étudiants concernés
		//extraction de l'année concernée
		newEvent.year=document.getElementById("yearstudy").value;
		//extraction du(des) parcours concerné(s)
	var checkboxes = document.getElementById("parcours").getElementsByTagName("input");//extraction des différents input de l'ID (ici que checkboxes)
	var partot=[];
	for (var i = 0, iMax = checkboxes.length; i < iMax; ++i) {
  		var check = checkboxes[i]; //séparation de chacune des checkboxes
  		if (check.type == "checkbox" && check.checked) {
  			partot.push(check.name);
  		}
  	}
  	newEvent.students=partot.toString();

   	//extraction de l'obligation ou non d'assister à l'event
   	newEvent.presence=document.getElementById("choice").value;

   	summary=document.getElementById("summaryevent").value;
   	if (summary.length >=10){
   		newEvent.comment=document.getElementById("summaryevent").value.substring(0,11);
   	}
   	else{
   		newEvent.comment=document.getElementById("summaryevent").value;
   	}

   	console.log(newEvent);

   	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "/createevent", true);
  	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

 	 // send the collected data as JSON
  	xhr.send(JSON.stringify(newEvent));
  	xhr.onreadystatechange = function () {
	}
   }



function deleteCalendar(){
   	var nbtitles = document.getElementsByClassName("titlecaldel");
   	for (var i = 0; i< nbtitles.length; i++)
   	{
   		if (nbtitles[i].checked)
   		{
   			var ID=nbtitles[i]["id"];
   			delete myCalendar[ID];
   		}
   	}
   	getCalendarJSON();
}
;function modifyCalendar(){
   	var nbtitles = document.getElementsByClassName("titlecalmod");
   	for (var i = 0; i<= nbtitles.length; i++)
   	{
   		if (nbtitles[i].checked)
   		{
   			var ID=nbtitles[i]["id"];
   			var yearstart=myCalendar[ID].date_start.substring(0,4);
   			var monthstart=myCalendar[ID].date_start.substring(4,6);
   			var daystart=myCalendar[ID].date_start.substring(6,8);
   			var hourstart="00";
   			var minstart="00";
   			if (myCalendar[ID].date_start.charAt(8)==="T"){
   				daystart=myCalendar[ID].date_start.substring(6,8);
   				hourstart=myCalendar[ID].date_start.substring(9,11);	
   				minstart=myCalendar[ID].date_start.substring(11);
   			}
   			var yearend=myCalendar[ID].date_end.substring(0,4);
   			var monthend=myCalendar[ID].date_end.substring(4,6);
   			var dayend=myCalendar[ID].date_end.substring(6,8);
   			var hourend="00";
   			var minend="00";
   			if (myCalendar[ID].date_end.charAt(8)==="T"){
   				dayend=myCalendar[ID].date_end.substring(6,8);
   				hourend=myCalendar[ID].date_end.substring(9,11);	
   				minend=myCalendar[ID].date_end.substring(11)
   			}
   			var loc=myCalendar[ID].location.split('@');
   			var lect=myCalendar[ID]["lecturer"];
   			var group=myCalendar[ID]["group"];
   			var contentmodify=myCalendar[ID]["description"]

   			var titleparse=myCalendar[ID].ID.split('');
   			if(titleparse[0]==="C"){
   				var optionsmodify='';
		    	optionsmodify='<h3>Summary</h3>     <input type="text" name="title" id="title" value="'+myCalendar[ID]["summary"]+'"/><br><br>';
		    	optionsmodify+='<h3>Lecturer</h3>     <select name="lecturermodify" id="lecturermodify"></select><br><br>';
		    	optionsmodify+='<h3>Start</h3><select name="start" id="startYearModify"></select><select name="start" id="startMonthModify"></select><select name="start" id="startDayModify"></select>-<select name="start" id="startHourModify"></select>h<select name="start" id="startMinModify"></select><br>'
		    	optionsmodify+='<h3>End</h3><select name="end" id="endYearModify"></select><select name="end" id="endMonthModify"></select><select name="end" id="endDayModify"></select>-<select name="end" id="endHourModify"></select>h<select name="end" id="endMinModify"></select><br>'
		    	optionsmodify+='<div id="locations"><h3>Location</h3><select name="locationmodify" id="locationmodify" onChange="selectRoomModify()"></select><span id="roomsmodify"></span></div>';
		    	optionsmodify+='<span id="students"><h3>Students</h3><select name="groupsmodify" id="groupsmodify"></select></span><br><br><br>'
		    	optionsmodify+='<h3>Notes</h3><textarea name="notes" id="contentmodify" rows="10" cols="50" required>'+contentmodify+'</textarea>'
		    	optionsmodify+='<input type="submit" onclick="modifyNewsfromJSON()" value="Modify" />';
		    }
   			if(titleparse[0]==="E"){
   				var optionsmodify='';
		    	optionsmodify='<h3>Summary</h3>     <input type="text" name="title" id="title" value="'+myCalendar[ID]["summary"]+'"/><br><br>';
		    	optionsmodify+='<h3>Lecturer</h3><input type="text" name="lecturer" id="lecturerevent" required/><br><br>';
		    	optionsmodify+='<h3>Start</h3><select name="start" id="startYearModify"></select><select name="start" id="startMonthModify"></select><select name="start" id="startDayModify"></select>-<select name="start" id="startHourModify"></select>h<select name="start" id="startMinModify"></select><br>'
		    	optionsmodify+='<h3>End</h3><select name="end" id="endYearModify"></select><select name="end" id="endMonthModify"></select><select name="end" id="endDayModify"></select>-<select name="end" id="endHourModify"></select>h<select name="end" id="endMinModify"></select><br>'
		    	optionsmodify+='<div id="locations"><h3>Location</h3><select name="locationmodify" id="locationmodify" onChange="selectRoomModify()"></select><span id="roomsmodify"></span></div>';
		    	optionsmodify+='<span id="students"><h3>Students</h3><select name="yearstudymodify" id="yearstudymodify"></select><span id="parcoursmodify"></span><br><br>'
		    	optionsmodify+='<h3>Notes</h3><textarea name="notes" id="contentmodify" rows="10" cols="50" required>'+contentmodify+'</textarea>'
		    	optionsmodify+='<input type="submit" onclick="modifyNewsfromJSON()" value="Modify" />';
		    }
		    document.getElementById("CalendarforModify").innerHTML=optionsmodify
		    // updateDateModify(yearstart,monthstart,daystart,hourstart,minstart,yearend,monthend,dayend,hourend,minend);
		    // updateLocationModify(loc);
		    initmodifyCalendar(lect,yearstart,monthstart,daystart,hourstart,minstart,yearend,monthend,dayend,hourend,minend,loc,group,titleparse);
		}
	}
	// updateNewsDisplay();
}

function initmodifyCalendar(lect,yearstart,monthstart,daystart,hourstart,minstart,yearend,monthend,dayend,hourend,minend,loc,group,titleparse) {
	//remplissage des listes de dates
	var yearselectstart;
	var monthselectstart;
	var dayselectstart;
	var hourselectstart;
	var minselectstart;
	var yearselectend;
	var monthselectend;
	var dayselectend;
	var hourselectend;
	var minselectend;

	var year=["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"]
	for (var y=0;y<year.length;y++){
		if (year[y]===yearstart){
			yearselectstart+='<option value="'+year[y]+'" selected>'+year[y]+'</option>';
		}
		else {
			yearselectstart+='<option value="'+year[y]+'">'+year[y]+'</option>';
		}
		if (year[y]===yearend){
			yearselectend+='<option value="'+year[y]+'" selected>'+year[y]+'</option>';
		}
		else{
			yearselectend+='<option value="'+year[y]+'">'+year[y]+'</option>';
		}
	}

	var month=["01","02","03","04","05","06","07","08","09","10","11","12"];
	for (var mo=0;mo<month.length;mo++){
		if (month[mo]===monthstart){
			monthselectstart+='<option value="'+month[mo]+'" selected>'+month[mo]+'</option>';
		}
		else{
			monthselectstart+='<option value="'+month[mo]+'">'+month[mo]+'</option>';
		}
		if (month[mo]===monthend){
			monthselectend+='<option value="'+month[mo]+'" selected>'+month[mo]+'</option>';
		}
		else{
			monthselectend+='<option value="'+month[mo]+'">'+month[mo]+'</option>';
		}
	}

	var day=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
	for (var d=0;d<day.length;d++){
		if (day[d]===daystart){
			dayselectstart+='<option value="'+day[d]+'" selected>'+day[d]+'</option>';
		}
		else {
			dayselectstart+='<option value="'+day[d]+'">'+day[d]+'</option>';
		}
		if (day[d]===dayend){
			dayselectend+='<option value="'+day[d]+'" selected>'+day[d]+'</option>';
			}
		else {
			dayselectend+='<option value="'+day[d]+'">'+day[d]+'</option>';
		}
	}

	var hour=["00","08","09","10","11","12","13","14","15","16","17","18","19"]
	for (var h=0;h<hour.length;h++){
		if (hour[h]===hourstart){
			hourselectstart+='<option value="'+hour[h]+'" selected>'+hour[h]+'</option>';
		}
		else{
			hourselectstart+='<option value="'+hour[h]+'">'+hour[h]+'</option>'
		}
		if (hour[h]===hourend){
			hourselectend+='<option value="'+hour[h]+'" selected>'+hour[h]+'</option>';
		}
		else{
			hourselectend+='<option value="'+hour[h]+'">'+hour[h]+'</option>';
		}
	}
	var minute=["00","15","30","45"]
	for (var min=0;min<minute.length;min++){
		if (minute[min]===minstart){
			minselectstart+='<option value="'+minute[min]+'" selected>'+minute[min]+'</option>';
		}
		else{
			minselectstart+='<option value="'+minute[min]+'">'+minute[min]+'</option>';
		}
		if (minute[min]===minend){
			minselectend+='<option value="'+minute[min]+'" selected>'+minute[min]+'</option>';
		}
		else{
			minselectend+='<option value="'+minute[min]+'">'+minute[min]+'</option>';
		}
	}
	document.getElementById("startYearModify").innerHTML+=yearselectstart;
	document.getElementById("startMonthModify").innerHTML+=monthselectstart;
	document.getElementById("startDayModify").innerHTML+=dayselectstart;
	document.getElementById("startHourModify").innerHTML+=hourselectstart;
	document.getElementById("startMinModify").innerHTML+=minselectstart;
	document.getElementById("endYearModify").innerHTML+=yearselectend;
	document.getElementById("endMonthModify").innerHTML+=monthselectend;
	document.getElementById("endDayModify").innerHTML+=dayselectend;
	document.getElementById("endHourModify").innerHTML+=hourselectend;
	document.getElementById("endMinModify").innerHTML+=minselectend;

	//création de la liste des lieux
	var locselectmodify='';
	if (loc[0]===""){
		loc.splice(0,1,"Autre-Aucun");
	}
	for (var l in locations){
		var nameloc= locations[l].name;
		if (nameloc===loc[1] || nameloc===loc[0]){
			locselectmodify +='<option value="'+nameloc+'" selected>'+nameloc+'</option>';
		}
		else{
		locselectmodify +='<option value="'+nameloc+'">'+nameloc+'</option>';
		}
		if(locations[l].type !=="bat"){
			listbatmodify.push(nameloc);
		}
	}
	document.getElementById("locationmodify").innerHTML+=locselectmodify;
	for (var l=0;l<listbatmodify.length;l++){
		if (loc[1]===listbatmodify[l] || loc[0]===listbatmodify[l]){
			var html=' ';
		}
	}
	if (html!==' '){
			var html='<h3>Room</h3>     <input type="text" name="room" id="room" value="'+loc[0].substring(4)+'" required/>';
		}
		
	document.getElementById("roomsmodify").innerHTML=html;

	if (titleparse[0]==="E"){

	//création de la liste des années
	var yearselectmodify='';
	if (titleparse[1]==="0"){
		yearselectmodify+='<option value="All" selected>All</option>'
	}
	else{
		yearselectmodify+='<option value="All">All</option>'
	}
	if (titleparse[1]==="1"){
		yearselectmodify+='<option value="M1" selected>M1</option>'
	}
	else{
		yearselectmodify+='<option value="M1">M1</option>'
	}
	if (titleparse[1]==="2"){
		yearselectmodify+='<option value="M2" selected>M2</option>'
	}
	else{
		yearselectmodify+='<option value="M2">M2</option>'
	}
	document.getElementById("yearstudymodify").innerHTML+=yearselectmodify;

	//création de la liste des parcours
	var parselectmodify='';
	for (var g in parcours){
		var namepar= parcours[g].name;
		var typepar= parcours[g].value;
		parselectmodify +=' <input type="checkbox" name="'+namepar+'" id="'+namepar+'" value="'+typepar+'" checked /> <label for="'+namepar+'">'+namepar+'</label>';
		}
	document.getElementById("parcoursmodify").innerHTML+=parselectmodify;
	}

	if (titleparse[0]==="C"){
		//remplissage des lecturers
		var lectselect='';
		for (var llec in listlect){
			if (listlect[llec]===lect){
				lectselect +='<option value="'+listlect[llec]+'" selected>'+listlect[llec]+'</option>';
			}
			else{
			lectselect +='<option value="'+listlect[llec]+'">'+listlect[llec]+'</option>';
			}
		}
		document.getElementById("lecturermodify").innerHTML+=lectselect;

		//création de la liste des groupes
		var groupselectmodify='';
		
		for (var g in groups){
			var namegroup= groups[g].name;
			if (namegroup===group){
				groupselectmodify +='<option value="'+namegroup+'" selected>'+namegroup+'</option>';
			}
			else{
				groupselectmodify +='<option value="'+namegroup+'">'+namegroup+'</option>';
			}
		}
		document.getElementById("groupsmodify").innerHTML+=groupselectmodify;
	}
}



function selectRoomModify(){
	var locmodify=document.getElementById('locationmodify').value;
	for (var l=0;l<listbatmodify.length;l++){
		if (locmodify===listbatmodify[l]){
			var html=' ';
		}
	}
	if (html!==' '){
			var html='<h3>Room</h3>     <input type="text" name="room" id="room" required/>';
		}

	document.getElementById("roomsmodify").innerHTML=html;
};var locations = {
    'CREMI::Talence' : {
        'name': "CREMI::Talence",
        'loc' : "Talence",
        'type': "bat"
    },

    'A21::Talence' : {
        'name': "A21::Talence",
        'loc' : "Talence",
        'type': "bat"
    },

    'A29::Talence' : {
        'name': "A29::Talence",
        'loc' : "Talence",
        'type': "bat"
    },

    'A30::Talence' : {
        'name': "A30::Talence",
        'loc' : "Talence",
        'type': "bat"
    },

    'B4::Talence' : {
        'name': "B4::Talence",
        'loc' : "Talence",
        'type': "bat"
    },

    'B5::Talence' : {
        'name': "B5::Talence",
        'loc' : "Talence",
        'type': "bat",
    },

    'B7::Talence' : {
        'name': "B7::Talence",
        'loc' : "Talence",
        'type': "bat"
    },

    'AmphiA5::Carreire' : {
        'name': "AmphiA5::Carreire",
        'loc' : "Carreire",
        'type': "amphi"
    },

    'ED::Carreire' : {
        'name': "ED::Carreire",
        'loc' : "Carreire",
        'type': "bat"
    },
    'Autre-Aucun' : {
        'name': "Autre-Aucun",
        'loc' : "Autre",
        'type': "amphi"
    }
}

var lecturers = {
    'Beurton-Aimar M' : {
        'name':"Beurton-Aimar M"
    },
    'Taveau JC' : {
        'name':"Taveau JC"
    },
    'Thébault P' : {
        'name':"Thébault P"
    },
    'Delmas O' : {
        'name':"Delmas O"
    },
    'Desbarat P' : {
        'name':"Desbarat P"
    },
    'Hernould M' : {
        'name':"Hernould M"
    },
    'Boussicault A' : {
        'name':"Boussicault A"
    },
    'Nogues X' : {
        'name':"Nogues X"
    },
    'Other' : {
        'name':"Other"
    }
}


var groups = {
    'All' : {
        'name':"All"
    },
    'A' : {
        'name':"A"
    },
    'B' : {
        'name':"B"
    }
}

var parcours = {
    'C++BIO' : {
        'name':"C++BIO",
        'value':1
    },
    'GENORG' : {
        'name':"GENORG",
        'value':2
    },
    'ORGECO' : {
        'name':"ORGECO",
        'value':4
    },
    'BSC' : {
        'name':"BSC",
        'value':8
    }
}
