import { writable } from  "svelte/store";
import {supabase} from "../lib/supabase.js";

export const ModalOpen = writable(false);
export const getResult = writable([]);

/**
 * @param {any} Name
 */
export const getInfo = async () => {
    const {data, error} = await supabase.from("AlgoStruc").select();
    if (error) {
        console.log(error);
      }
      getResult.set(data);
}
export function ModalInfo(Name, Description){
    console.log(Name, Description);
    name = Name;
    info = Description
    ModalOpen.set(true);
}

/**
 * @type {string}
 */
export let name;
/**
 * @type {string}
 */
export let info;