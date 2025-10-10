import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR, REST_RESSOURCES } from "../config/constantes.js";
import type { MemeInterface } from "orsys-tjs-meme";

export const loadRessources = createAsyncThunk(
  "ressources/loadRessources",
  async () => {
    const pri = fetch(`${REST_ADR}${REST_RESSOURCES.images}`, {
      method: "GET",
    });
    const prm = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
    const prall = await Promise.all([pri, prm]);
    return { images: await prall[0].json(), memes: await prall[1].json() };
  }
);

export const saveCurrent = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const prm = await fetch(
      `${REST_ADR}${REST_RESSOURCES.memes}${
        meme.id !== undefined ? "/" + meme.id : ""
      }`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meme),
      }
    );
    return await prm.json();
  }
);
