import uuid = require('uuid');
const apikey:string = "";
const endpoint:string = "";

/**
 * Translate a Term using Microsoft Translate.
 * @customfunction translate
 * @param term Term to be translated
 * @param from original language of the Term
 * @param to language to which the Term is translated to
 * @returns Translated Term
 */

export async function translate(term: string, from: string, to: string): Promise<string> {
  const url = endpoint + "translate?api-version=3.0&to=" + to + "&from=" + from;
  const body = JSON.stringify([{ text: term }]);
  const abc = "tt";
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": apikey,
        "X-ClientTraceId": uuid.v4().toString(),
        "Ocp-Apim-Subscription-Region": "westeurope"
      }
    });
    const data = await res.json();
    console.log(data);
    return data[0].translations[0].text;
  } catch(error) {
    console.log(error);
    let errorT = typeof(error);
    throw error;
    return "error";
  }
}

/**
 * Translate a Term using Microsoft Translate (auto detect from).
 * @customfunction translate_AUTO
 * @param term Term to be translated
 * @param to language to which the Term is translated to
 * @returns Translated Term
 */

export async function translateAuto(term: string, to: string): Promise<string> {
  const url = endpoint + "translate?api-version=3.0&to=" + to ;
  const body = JSON.stringify([{ text: term }]);
  const abc = "tt";
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": apikey,
        "X-ClientTraceId": uuid.v4().toString(),
        "Ocp-Apim-Subscription-Region": "westeurope"
      }
    });
    const data = await res.json();
    console.log(data);
    return data[0].translations[0].text;
  } catch(error) {
    console.log(error);
    let errorT = typeof(error);
    throw error;
    return "error";
  }
}