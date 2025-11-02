// Composable for card destroy animation
import type { CardStages } from '~/types'

export const useCardDestroy = (initialCards: Record<string, number>) => {
    const { isPickaxeCursorActive } = usePickaxeStage()
    const cardStages = ref<CardStages>(initialCards)

    const handleCardClick = (cardName: string) => {
        if (!isPickaxeCursorActive.value) return
        
        if (cardStages.value[cardName] !== undefined && cardStages.value[cardName] <= 10) {
            cardStages.value[cardName] = cardStages.value[cardName] + 1
        }
    }

    const isCardDestroyed = (cardName: string) => {
        const currentStage = cardStages.value[cardName]
        return currentStage !== undefined && currentStage > 10
    }

    return {
        cardStages,
        handleCardClick,
        isCardDestroyed
    }
}
