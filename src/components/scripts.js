export function getRang(lvl) {
    switch (lvl) {
        case 0:
            return "Не изучено";
        case 1:
            return "Новичок";
        case 2:
            return "Ученик";
        case 3:
            return "Адепт";
        case 4:
            return "Эксперт";
        case 5:
            return "Мастер";
        default:
            return "Ошибка";
    }
}
