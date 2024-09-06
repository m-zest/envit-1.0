"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function TechnologyDescription() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/path-to-image1.jpg",
    "/path-to-image2.jpg",
    "/path-to-image3.jpg",
    "/path-to-image4.jpg",
    "/path-to-image5.jpg",
    "/path-to-image6.jpg",
    "/path-to-image7.jpg",
    "/path-to-image8.jpg"
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        SCIENTIFIC COOPERATION WITH UNIVERSITY AND RESEARCH INSTITUTES
      </h1>

      {/* Paragraph */}
      <p className="text-lg mb-8">
      ReSoil® is a sustainable (effective, cost-efficient, soil preserving, environmentally safe) technology and a breakthrough eco-innovation which promises remediation of now unattended contaminated areas. As such ReSoil® has spurred widespread interest in the scientific community. Prof. Domen Leštan leads R&D at Envit Ltd. and the soil remediation research group at University of Ljubljana. Envit and UL cooperate with scientists from University of Natural Resources and Life Sciences, Vienna in an ongoing research project concerning the management of demonstrational vegetable gardens with ReSoil remediated soil in Slovenia and Austria, financed by the Slovenian Research Agency and Austrian Science Fund. The properties of soil organic matter in ReSoil® remediated soil are studied in cooperation between UL and scientists from University of Udine, Italy. Contaminated soil from Pribram, Czech Republic was also treated using ReSoil® research commenced between UL and scientists from Czech University of Life Sciences Prague on ecosystem services of remediated soil.      </p>

      {/* Full-Width Image */}
      <div className="relative w-full h-80 md:h-[500px] mb-12">
        <Image 
          src="/rnd.jpg" 
          alt="Scientific Cooperation"
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>

      {/* Scientific Papers Section */}
      <section className="mb-12">
  <h2 className="text-xl md:text-2xl font-bold mb-4">ReSoil® SCIENTIFIC PAPERS</h2>
  <ul className="list-disc pl-5">
    <li className="mb-4">
      <strong>MORALES ARTEAGA, Juan, Francisco, ZUPANC, Mojca, DULAR, Matevz, LESTAN, Domen, and KAURIN, Anela.</strong> Removal of Toxic Metals from Sewage Sludge by Acid Hydrolysis Coupled with EDTA Washing in a Closed-Loop Process. International journal of environmental research and public health, 2023, 20(3), p.2544.
    </li>
    <li className="mb-4">
      <strong>MACEK, Irena, PINTARIC, Sara, SIBANC, Natasa, RAJNIS, Tatjana, KASTELEC, Damijana, LESTAN, Domen, and SUHADOLC, Metka.</strong> Plants play a crucial role in the development of soil fungal communities in the remediated substrate after EDTA washing of metal-contaminated soils. Frontiers in Environmental Science, 2022, 10, p.978850.
    </li>
    <li className="mb-4">
      <strong>NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca, and WATRZINGER, Andrea.</strong> Remediating Garden Soils: EDTA-Soil Washing and Safe Vegetable Production in Raised Bed Gardens. Toxics, 2022, 10(11), p.652.
    </li>
    <li className="mb-4">
      <strong>MORALES-ARTEAGA, Juan, Francisco, KAURIN, Anela, and LESTAN, Domen.</strong> Removal of toxic metals from sewage sludge by EDTA in a closed-loop washing process. Chemosphere, 2022, p.135917.
    </li>
    <li className="mb-4">
      <strong>MORALES-ARTEAGA, Juan, Francisco, GLUHAR, Simon, KAURIN, Anela, and LEŠTAN, Domen.</strong> Simultaneous removal of arsenic and toxic metals from contaminated soil: Laboratory development and pilot scale demonstration. Environmental Pollution, 2022, 294, p.118656.
    </li>
    <li className="mb-4">
      <strong>NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca, PUSCHENREITER, Markus, and WATRZINGER, Andrea.</strong> Effect of Chelant-Based Soil Washing and Post-Treatment on Pb, Cd, and Zn Bioavailability and Plant Uptake. Water, Air, & Soil Pollution, 2021, 232(10), pp.1-14.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, KAURIN, Anela, VODNIK, Dominik, KASTELEC, Damjana, ZUPANC, Vesna, and LEŠTAN, Domen.</strong> Demonstration gardens with EDTA-washed soil. Part III: Plant growth, soil physical properties, and production of safe vegetables. Science of The Total Environment, 2021, p.148521.
    </li>
    <li className="mb-4">
      <strong>KAURIN, Anela, GLUHAR, Simon, MAČEK, Irena, KASTELEC, Damjana, and LEŠTAN, Domen.</strong> Demonstrational gardens with EDTA-washed soil. Part II: Soil quality assessment using biological indicators. Science of The Total Environment, 2021, p.148522.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, KAURIN, Anela, FINŽGAR, Neža, GERL, Marko, KASTELEC, Damjana, and LEŠTAN, Domen.</strong> Demonstrational gardens with EDTA-washed soil. Part I: Remediation efficiency, effect on soil properties, and toxicity hazards. Science of The Total Environment, 2021, p.149060.
    </li>
    <li className="mb-4">
      <strong>JEŽ, Erika, BRAVO, Carlo, LESTAN, Domen, GLUHAR, Simon, MARTIN-NETO, Ladislau, De NOBILI, Maria, and CONTIN, Marco.</strong> Changes in Organic Matter Composition Caused by EDTA Washing of two Soils Contaminated with Toxic Metals. Environmental Science and Pollution Research, 2021.
    </li>
    <li className="mb-4">
      <strong>KAURIN, Anela, GLUHAR, Simon, TILIKJ, Natasha, and LEŠTAN, Domen.</strong> Soil washing with biodegradable chelating agents and EDTA: Effect on soil properties and plant growth. Chemosphere, 2020, 260, 127673.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, KAURIN, Anela, and LEŠTAN, Domen.</strong> Soil washing with biodegradable chelating agents and EDTA: Technological feasibility, remediation efficiency, and environmental sustainability. Chemosphere, 2020, vol. 257, 127226.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, JEŽ, Erika, and LEŠTAN, Domen.</strong> The use of zero-valent Fe for curbing toxic emissions after EDTA-based washing of Pb, Zn, and Cd contaminated calcareous and acidic soil. Chemosphere, 2018, vol. 215, p.482-489.
    </li>
    <li className="mb-4">
      <strong>KAURIN, Anela, and LEŠTAN, Domen.</strong> Multi-substrate induced microbial respiration, nitrification potential, and enzyme activities in metal-polluted, EDTA-washed soils. Environmental Pollution, 2018, vol. 243, p.238-245.
    </li>
    <li className="mb-4">
      <strong>KAURIN, Anela, CERNILOGAR, Zarja, and LEŠTAN, Domen.</strong> Revitalisation of metal-contaminated, EDTA-washed soil by addition of unpolluted soil, compost, and biochar: Effects on soil enzyme activity, microbial community composition, and abundance. Chemosphere, 2017, vol. 193, p.726-736.
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen.</strong> Novel chelant-based washing method for soil contaminated with Pb and other metals: A pilot-scale study. Land Degrad Develop., 2017, vol. 28, p.2585-2595.
    </li>
  </ul>
</section>


      {/* Conference Contributions Section */}
      <section className="mb-12">
  <h2 className="text-xl md:text-2xl font-bold mb-4">SCIENTIFIC CONFERENCE CONTRIBUTIONS, PERFORMED WORKS (EVENTS)</h2>
  <ul className="list-disc pl-5">
    <li className="mb-4">
      <strong>GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E., FINŽGAR, Neža, LEŠTAN, Domen.</strong> Case studies of ReSoil® – novel technology for efficient and sustainable removal of heavy metals from contaminated soils. V: ICOBTE & ICHMET 2023: book of abstracts: 1st Joint International Conference of Biochemistry of Trace Elements & 21st International Conference of Heavy Metals: 6-10 September 2023, Wuppertal: Clean environment. Human health. Our future. [S. l.: s. n., 2023]. p. 443. <a href="https://icobte-ichmet-2023.com/custom/media/ICOBTE23/Abstract_Book_Final_3.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, KAURIN, Anela, MORALES ARTEAGA, Juan Francisco, LEŠTAN, Domen.</strong> Simultaneous removal of arsenic and toxic metals from contaminated soil: Laboratory development and pilot scale demonstration. V: ICOBTE & ICHMET 2023: Book of abstracts: 1st Joint International Conference of Biochemistry of Trace Elements & 21st International Conference of Heavy Metals: 6-10 September 2023, Wuppertal: Clean environment. Human health. Our future. [S. l.: s. n., 2023]. p. 148. <a href="https://icobte-ichmet-2023.com/custom/media/ICOBTE23/Abstract_Book_Final_3.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen, GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E.</strong> Efficient and sustainable removal of toxic metals and metalloids from soils with ReSoil® technology. V: Open science inspires: 2023 ASA, CSSA, SSSA International annual meeting: October 29 - November 1, 2023, St. Louis, Missouri, and limited virtual. Madison: American Society of Agronomy. <a href="https://scisoc.confex.com/scisoc/2023am/meetingapp.cgi/Paper/153960" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>SHEN, Jian, VOGLAR, Grega E., GLUHAR, Simon, KAURIN, Anela, LEŠTAN, Domen.</strong> Current trends and Chinese perspective of the soil remediation methods using remediation trains. V: DI MARCELLO, Sara (ur.). L'innovazione per la sostenibilità ambientale nell’epoca della multitransizione: RemTech Expo 2023: Libro degli abstract. Roma: Consiglio Nazionale delle Ricerche, 2023. p. 514-517. ISBN 978-88-8080-574-8.
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen, MORALES ARTEAGA, Juan Francisco, GLUHAR, Simon, KAURIN, Anela.</strong> Simultaneous removal of toxic metalloids and metals from soil using ReSoil® technology. V: DI MARCELLO, Sara (ur.). L'innovazione per la sostenibilità ambientale nell’epoca della multitransizione: RemTech Expo 2023: Libro degli abstract. Roma: Consiglio Nazionale delle Ricerche, 2023. p. 475-477. ISBN 978-88-8080-574-8.
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen (interviewee), GLUHAR, Simon (interviewee).</strong> Tehnologija za čiščenje onesnaženih tal: projekt ReSoil: prispevek v oddaji Znanost in tehnologija, TV Slovenija, 2. program, 22. 6. 2023. <a href="https://365.rtvslo.si/arhiv/znanost-in-tehnologija/174967228" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon (interviewee), LEŠTAN, Domen (interviewee).</strong> V Celju so predstavili tehnologijo za čiščenje tal: komentar v oddaji Slovenska kronika, RTV SLO 1, Ljubljana, 10. 6. 2023. <a href="https://www.rtvslo.si/rtv365/arhiv/174964385?s=tv" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen, VOGLAR, Grega E.</strong> Can we clean up contaminated soils? 7th Annual Urban Soils Symposium, Metabolism of Cities. Developing mutualistic relationships between built & natural systems. November 16-17, 2022, New York. <a href="https://www.facebook.com/NYCUSI/photos/a.175889624..." className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen, VOGLAR, Grega E., GLUHAR, Simon, KAURIN, Anela, FINŽGAR, Neža.</strong> ReSoil - novel technology for efficient and sustainable removal of heavy metals from contaminated soils. V: Communication and public engagement for healthy people and a healthy planet: 2022 ASA, CSSA, SSSA International annual meeting: November 6-9, 2022, Baltimore, Maryland and limited virtual. Madison: American Society of Agronomy. <a href="https://scisoc.confex.com/scisoc/2022am/meetingapp..." className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>VOGLAR, Grega E., GLUHAR, Simon, KAURIN, Anela, LEŠTAN, Domen.</strong> Large-scale demonstration of ReSoil, a sustainable technology for soil washing of metal-contaminated soil. In: SUITMA 11, in Berlin (Germany), September 5-9, 2022.
    </li>
    <li className="mb-4">
      <strong>DACINGER, Renata (interviewer, presenter), LEŠTAN, Domen (interviewee), PREŠEREN, Petra (scenarist, author of introduction, etc.).</strong> Naša tla, zemlja, prst. Ljubljana: Radiotelevizija Slovenija javni zavod, 2022. 1 spletni vir (1 videodatoteka (25 min, 12 sek)), barve, zvok. Ugriznimo znanost. <a href="https://www.rtvslo.si/rtv365/arhiv/174900967?s=tv" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>, <a href="https://365.rtvslo.si/arhiv/ugriznimo-znanost/174900964" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, VOGLAR, Grega E., FINŽGAR, Neža, GERL, Marko, LEŠTAN, Domen.</strong> Large-scale demonstration of RESOIL, a sustainable technology for soil washing of metal contaminated soil: Remtech EXPO international event, 20.-24.09. 2021. <a href="https://www.facebook.com/watch/?v=603552011096332" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, KAURIN, Anela, ZUPANC, Vesna, VODNIK, Dominik, MAČEK, Irena, KASTELEC, Damijana, FINŽGAR, Neža, GERL, Marko, LEŠTAN, Domen.</strong> Large-scale demonstration of ReSoil, a sustainable technology for soil washing of metal contaminated soil. In: EUROSOIL 2020, in Geneva (Switzerland), August 23-27, 2021.
    </li>
    <li className="mb-4">
      <strong>LEŠTAN, Domen, GLUHAR, Simon, FINŽGAR, Neža, GERL, Marko.</strong> Large-scale demonstration of novel, entirely sustainable chelator-based washing of heavy metals contaminated soils. In: ICOBTE 2019. 15th International Conference on the Biogeochemistry of Trace Elements (ICOBTE 2019) in Nanjing, May 5th - 9th, 2019. [S.l.: S.n.], 2019. p. 1.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, LEŠTAN, Domen.</strong> Testing biodegradable chelators in realistic soil-washing process conditions: feasibility, efficiency, and effect on soil properties. In: ICOBTE 2019. 15th International Conference on the Biogeochemistry of Trace Elements (ICOBTE 2019) in Nanjing, May 5th - 9th, 2019. [S.l.: S.n.], 2019. p. 1.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, JEŽ, Erika, LEŠTAN, Domen.</strong> Curbing of toxic emissions after EDTA-based washing of Pb, Zn, and Cd contaminated calcareous and acidic soil. In: 2018 ICHMET. 19th International Conference on Heavy Metals in the Environment, July 22-25, 2018 Athens, GA USA. Athens: University of Georgia, 2018. No. 163.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, JEŽ, Erika, LEŠTAN, Domen.</strong> Elimination of harmful emissions from remediated soil by adding zero-valent Fe. In: FINŽGAR, Neža (ed.). Demonstracija inovativne tehnologije pranja s toksičnimi kovinami močno onesnaženih vrtnih tal: zbornik konference = Demonstration of innovative soil washing technology for removal of toxic metals from highly contaminated garden soil: proceedings of the conference. Ljubljana: Envit, 2018. Str. 60-62, ilustr. ISBN 978-961-288-861-9.
    </li>
    <li className="mb-4">
      <strong>GLUHAR, Simon, LEŠTAN, Domen.</strong> Combined EDTA soil washing and stabilization of residual toxic metals. In: Abstracts. 14th International Conference on the Biogeochemistry of Trace Elements, 16-20 July, 2017 - ETH Zurich, Switzerland.
    </li>
    <li className="mb-4">
      <strong>KAMMERER, Gerhard, ZUPANC, Vesna, GLUHAR, Simon, LEŠTAN, Domen.</strong> Effect of soil washing for lead and zinc removal on soil hydraulic properties. In: European Geosciences Union, General Assembly 2017, Vienna, Austria, 23-28 April 2017. München: European Geosciences Union, 2017. Geophysical research abstracts, vol. 19. ISSN 1607-7962.
    </li>
  </ul>
</section>


      {/* Projects Section */}
      <section className="mb-12">
  <h2 className="text-xl md:text-2xl font-bold mb-4">Projects</h2>
  <ul className="list-disc pl-5">
    <li className="mb-4">
      <strong>Achieving Remediation And GOverning Restoration of contaminated soils Now - ARAGORN</strong><br />
      Financer: ARAGORN has received funding from HORIZON-RIA - HORIZON Research and Innovation Actions (2021-2027) under grant agreement No 101112723<br />
      Duration: 01.10.2023 – 30.09.2027
    </li>
    <li className="mb-4">
      <strong>Remediation with toxic metals and metalloids and organic pollutants of contaminated soil at a model military shooting range - demonstration and recommendations for further measures</strong><br />
      Financer: Ministry of Defence of the Republic of Slovenia & Slovenian Research and Innovation Agency<br />
      Duration: 01.10.2022 – 01.10.2024
    </li>
    <li className="mb-4">
      <strong>Remediation of soil contaminated with toxic metals, metalloids and organic pollutants</strong><br />
      Financer: Slovenian Research and Innovation Agency<br />
      Duration: 01.10.2021 – 30.09.2023
    </li>
    <li className="mb-4">
      <strong>POlluted SIte DecontaminatiON - Pre-commercial procurement (PCP)</strong><br />
      Financer: European Union's Horizon 2020 research and innovation programme under grant agreement N. 776838<br />
      Duration: 01.02.2018 – 28.08.2021
    </li>
    <li className="mb-4">
      <strong>Gardens with remediated soils: hazard mitigation and safe food production</strong><br />
      Co-financer: Slovenian Research and Innovation Agency<br />
      Duration: 01.06.2017 – 31.05.2020
    </li>
    <li className="mb-4">
      <strong>Green and sustainable remediation of contaminated soils for urban land use</strong><br />
      Co-financer: Slovenian Research and Innovation Agency<br />
      Duration: 01.07.2014 – 30.06.2017
    </li>
    <li className="mb-4">
      <strong>Life ReSoil: Demonstration of innovative soil washing technology for removal of toxic metals from highly contaminated garden soil</strong><br />
      Co-financer: LIFE, reference: LIFE12 ENV/SI/000969<br />
      Duration: 01.07.2013 – 31.12.2017
    </li>
    <li className="mb-4">
      <strong>Control of harmful cyanobacteria bloom in fresh-water bodies</strong><br />
      Co-financer: Slovenian Research and Innovation Agency<br />
      Duration: 01.08.2013 – 31.07.2016
    </li>
    <li className="mb-4">
      <strong>Quality and functioning of contaminated garden soil as a plant substrate after remediation</strong><br />
      Co-financer: Slovenian Research and Innovation Agency<br />
      Duration: 01.01.2010 – 30.04.2013
    </li>
    <li className="mb-4">
      <strong>Remediation model for garden soils in Upper Meža valley</strong><br />
      Co-financer: Slovenian Research and Innovation Agency<br />
      Duration: 01.07.2011 – 30.06.2013
    </li>
    <li className="mb-4">
      <strong>Development of electrolytic cell for recycling of EDTA in solution after the washing of polluted soil</strong><br />
      Co-financer: The Slovene Enterprise Fund
    </li>
  </ul>
</section>


      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative bg-white p-4">
            <Image src={selectedImage} alt="Selected Image" layout="intrinsic" width={1000} height={1000} className="object-contain" />
            <button className="absolute top-2 right-2 text-white text-2xl font-bold" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
