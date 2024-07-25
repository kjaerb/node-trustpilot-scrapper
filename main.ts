import { JSDOM } from "jsdom";

const url = "https://dk.trustpilot.com/review/www.lomax.dk";

const requestOptions: RequestInit = {
  method: "GET",
  redirect: "follow",
};

async function getTrustpilotJSONLD(): Promise<string | null> {
  return await fetch(url, requestOptions)
    .then((response) => response.text())
    .then(async (html) => {
      const dom = new JSDOM(html);
      const scriptTag = dom.window.document.querySelector(
        'script[type="application/ld+json"][data-business-unit-json-ld="true"]'
      );
      if (scriptTag) {
        const jsonData = scriptTag.textContent;
        return jsonData;
      } else {
        console.error("Script tag not found");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching data", error);
      return null;
    });
}

// Du kan altid lige "hover" over funktionen for at se hvad den returnerer, eller over variablen for at se dens type
const trustpilotData = await getTrustpilotJSONLD();

// Næste step er at parse data til JSON.
