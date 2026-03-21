# Чеклист перед повторной отправкой в App Store

## ✅ Выполнено автоматически

1. **Страница поддержки** — `docs/support.html`  
   URL: https://pifagortradebtc.github.io/turkish-flashcards/support.html

2. **Иконки** — финальная брендированная иконка вместо placeholder  
   Обновлён `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

3. **Capacitor sync** — проект синхронизирован

---

## 📋 Ваши действия (≈5 мин)

### Быстрый способ: откройте `app-store-connect-helper.html`

Файл откроется в браузере. Кнопки «Копировать» — для Support URL и App Review Notes. Скопируйте и вставьте в App Store Connect.

### 1. App Store Connect — Support URL

App Information → **Support URL** → вставьте:
`https://pifagortradebtc.github.io/turkish-flashcards/support.html`

### 2. App Review Information (Notes)

Проверка приложения → **Примечания** → вставьте текст из `app-store-connect-helper.html` (кнопка «Копировать»).

### 3. Screen Recording

Снимите 1–2 минуты на iPhone (Запись экрана в Пункте управления):
- Запуск, добавление слова, режимы «Учу» и «Проверка», переключение языков

Прикрепите в App Store Connect → Проверка приложения → **Вложение**.

### 4. IPA и Resubmit

- Codemagic: сборка могла уже запуститься после push. Проверьте [Codemagic](https://codemagic.io).
- Выберите новый билд в App Store Connect → **Повторно отправить на проверку**.
