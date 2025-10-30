// usePickaxeStage.ts
export const usePickaxeStage = () => {
    const isPickaxeCursorActive = useState<boolean>('isPickaxeCursorActive', () => false)
    const setIsPickaxeCursorActive = () => {
        isPickaxeCursorActive.value = !isPickaxeCursorActive.value
    }
    return {
        isPickaxeCursorActive,
        setIsPickaxeCursorActive
    }
}
