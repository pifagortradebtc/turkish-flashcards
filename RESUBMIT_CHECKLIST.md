# Чеклист перед повторной отправкой в App Store

## ✅ Выполнено автоматически

1. **Страница поддержки** — `docs/support.html`  
   URL: https://pifagortradebtc.github.io/turkish-flashcards/support.html

2. **Иконки** — финальная брендированная иконка вместо placeholder  
   Обновлён `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

3. **Capacitor sync** — проект синхронизирован

---

## 📋 Ваши действия

### 1. Опубликовать изменения на GitHub

```bash
git add .
git commit -m "Fix App Store: support page, branded icons"
git push origin main
```

После push подождите 1–2 минуты — GitHub Pages обновит страницу поддержки.

### 2. App Store Connect — обновить Support URL

1. App Store Connect → Ваше приложение → **App Information**
2. **Support URL** замените на:  
   `https://pifagortradebtc.github.io/turkish-flashcards/support.html`

### 3. App Review Information (Notes)

App Store Connect → **Проверка приложения** → **Примечания**

Скопируйте текст из `APP_REVIEW_NOTES.md` (английский вариант).

### 4. Screen Recording

Снимите видео 1–2 минуты на iPhone (Настройки → Пункт управления → Запись экрана):
- Запуск приложения
- Добавление слова
- Режим «Учу»
- Режим «Проверка»
- Переключение языков

Прикрепите в App Store Connect → Проверка приложения → **Вложение**.

### 5. Собрать новый IPA и загрузить

Через Codemagic или Xcode → Product → Archive → Distribute App.

### 6. Resubmit

App Store Connect → выберите новый билд → **Повторно отправить на проверку**.
