# Исправление иконок для App Store (Guideline 2.3.8)

Apple отклоняет приложение, если иконки выглядят как placeholder. Нужна финальная брендированная иконка.

## Вариант 1: @capacitor/assets (рекомендуется)

1. Сохраните ваш логотип как **1024×1024 px**, PNG, **без прозрачности**
2. Положите в `assets/icon.png`
3. Выполните:
   ```bash
   npm install --save-dev @capacitor/assets
   npx @capacitor/assets generate --ios
   ```
4. `npm run sync` и пересоберите IPA

## Вариант 2: Ручная замена

1. Создайте иконку 1024×1024 px (ваш логотип с голубыми формами)
2. Сохраните без альфа-канала (непрозрачный фон)
3. Замените файл:
   ```
   ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png
   ```
4. Пересоберите приложение в Xcode

## Требования Apple

- Размер: 1024×1024 px
- Формат: PNG
- Без прозрачности (solid background)
