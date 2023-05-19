import { ADD_SEASONS, REMOVE_SEASONS, MARK_COMPLETED } from "./action.types";

export const addSeason = (season: any) => ({
    type: ADD_SEASONS,
    Payload: season
})

export const removeSeason = (id: any) => ({
    type: REMOVE_SEASONS,
    Payload: id
})

export const markCompleted = (id: any) => ({
    type: MARK_COMPLETED,
    payload: id
})