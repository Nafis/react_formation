import { createSlice } from '@reduxjs/toolkit';
import { type ImageInterface, type MemeInterface } from 'orsys-tjs-meme';
import {memes, images} from "../../db/db.json"

interface IResourceState{
    memes: Array<MemeInterface>
    images: Array<ImageInterface>
}

const initialState:IResourceState = {
    memes : memes,
    images : images,
}

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {}
});

// export const {} = ressources.actions
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer 