import tubularPhotobioreactors from "../../assets/photos/tubular-photobioreactors.jpg";
import microalgaeCells from "../../assets/photos/microalgae-cells.jpg";
import scientistCultureFlask from "../../assets/photos/scientist-culture-flask.jpg";
import benchPhotobioreactor from "../../assets/photos/bench-photobioreactor.jpg";
import spirulinaMicrograph from "../../assets/photos/spirulina-micrograph.jpg";
import outdoorPhotobioreactor from "../../assets/photos/outdoor-photobioreactor.jpg";
import algaeLagoons from "../../assets/photos/algae-lagoons.jpg";
import algaeCultureFlasks from "../../assets/photos/algae-culture-flasks.jpg";
import algaeLabFlask from "../../assets/photos/algae-lab-flask.jpg";

export interface SitePhoto {
  src: string;
  alt: string;
  credit: { author: string; license: string; licenseUrl: string; source: string };
}

/*
 * Stock photos from Wikimedia Commons, used under the licences listed below.
 * Attribution is shown on the /credits page. Replace with BluGreen's own photos
 * when available (and remove the matching credit).
 */
export const photos = {
  tubularPhotobioreactors: {
    src: tubularPhotobioreactors,
    alt: "Rows of tubular photobioreactors filled with green microalgae culture",
    credit: { author: "AlgaEnergy", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Tubular_Photobioreactors.jpg" },
  },
  microalgaeCells: {
    src: microalgaeCells,
    alt: "Green microalgae cells seen under a microscope",
    credit: { author: "CSIRO", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", source: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_7604_Microalgae.jpg" },
  },
  scientistCultureFlask: {
    src: scientistCultureFlask,
    alt: "Scientist examining a flask of green microalgae culture in the lab",
    credit: { author: "CSIRO", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", source: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_1938_Microalgae_Collection.jpg" },
  },
  benchPhotobioreactor: {
    src: benchPhotobioreactor,
    alt: "Bench-scale photobioreactor columns growing green microalgae under lights",
    credit: { author: "Luis Fernando Flores LAB", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Bench-scale_photobioreactor_1.jpg" },
  },
  spirulinaMicrograph: {
    src: spirulinaMicrograph,
    alt: "Spirulina (Arthrospira platensis) filaments under a microscope",
    credit: { author: "MaCameron", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", source: "https://commons.wikimedia.org/wiki/File:Arthrospira_platensis.jpg" },
  },
  outdoorPhotobioreactor: {
    src: outdoorPhotobioreactor,
    alt: "Outdoor vertical photobioreactor array cultivating microalgae in sunlight",
    credit: { author: "Jardín Botánico Ibiza", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Fotobiorreactor_Ibiza.jpg" },
  },
  algaeLagoons: {
    src: algaeLagoons,
    alt: "Researcher holding a beaker of green microalgae beside open cultivation lagoons",
    credit: { author: "Olivier Dugornay (IFREMER)", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", source: "https://commons.wikimedia.org/wiki/File:Culture_de_micro-algues_en_lagunes_artificielles_(Ifremer_00620-73205_-_47347).jpg" },
  },
  algaeCultureFlasks: {
    src: algaeCultureFlasks,
    alt: "Flasks of microalgae cultures growing on a lit laboratory shelf",
    credit: { author: "Oak Ridge National Laboratory", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Algal_cultures_(51160010381).jpg" },
  },
  algaeLabFlask: {
    src: algaeLabFlask,
    alt: "Flask of green algae culture on a laboratory stirrer",
    credit: { author: "Oak Ridge National Laboratory", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Algae_for_biofuels_(16156156931).jpg" },
  },
} satisfies Record<string, SitePhoto>;
