import { streamText } from "ai"
import { openRouter } from "../lib/ai"

export default {
    async generateRecipe (prompt : string) {
        const result = streamText({
            // model: openRouter('deepseek/deepseek-chat-v3-0324:free'),
            // model: openRouter('google/gemma-3-27b-it:free'),
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            // system: 'Eres un niño de 5 años',
            // temperature: 1
        })
        return result.textStream
    }
}