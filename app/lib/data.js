
import npsSchema from "./models";

export const fetchNPS = async () => {
    try {
        const scores = npsSchema.find();
        return scores
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch NPS score!')
    }
}