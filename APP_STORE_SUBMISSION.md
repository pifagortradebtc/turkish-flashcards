# Публикация в App Store — пошаговый чеклист

---

## ✅ Шаг 1: Загрузка IPA в App Store Connect

**Вариант A — через Codemagic (рекомендуется, без Transporter):**

1. App Store Connect → Users and Access → Keys → создать **API Key** (роль App Manager)
2. Codemagic → Teams → Integrations → **App Store Connect** → добавить ключ
3. В `codemagic.yaml` раскомментировать блок `integrations` и `publishing`
4. Запустить сборку — IPA автоматически загрузится в TestFlight

**Вариант B — Transporter (если Codemagic недоступен):**

- Transporter в Microsoft Store **недоступен** в регионе RU/TR (ошибка «Продукт не найден»)
- iTMSTransporter (установщик Apple) — только **консоль**, для Windows нужен AppStoreInfo.plist из Xcode
- **Transporter GUI** (третья сторона): https://transportergui.com — бесплатный GUI для iTMSTransporter

---

## ✅ Шаг 2: App Store Connect — создание приложения

1. https://appstoreconnect.apple.com → **My Apps**
2. **+** → **New App**
3. **Platforms:** iOS
4. **Name:** Kelime Kartları (или из APP_STORE_METADATA.md)
5. **Primary Language:** Russian или English
6. **Bundle ID:** выберите `com.kelime.kartlari`
7. **SKU:** kelime-kartlari-001
8. **Create**

---

## ✅ Шаг 3: Заполнение метаданных

Используйте тексты из **APP_STORE_METADATA.md**:

- **Subtitle** (подзаголовок)
- **Description** (описание)
- **Keywords** (ключевые слова)
- **Support URL** — https://pifagortradebtc.github.io/turkish-flashcards/support.html (НЕ GitHub!)
- **Privacy Policy URL** (обязательно!)

---

## ✅ Шаг 4: Политика конфиденциальности

Файл `docs/privacy-policy.html` уже в репозитории.

1. GitHub → репозиторий turkish-flashcards → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main, папка **/docs**
4. **Save**
5. Через 1–2 минуты URL будет: https://pifagortradebtc.github.io/turkish-flashcards/privacy-policy.html

---

## ✅ Шаг 5: Скриншоты (обязательно)

Нужны скриншоты для:
- **iPhone 6.7"** (1290 × 2796 px) — обязательно
- **iPhone 6.5"** (1284 × 2778 px) — обязательно  
- **iPhone 5.5"** (1242 × 2208 px) — обязательно

**Как сделать:** симулятор iOS в Xcode или на реальном iPhone. Покажите: главный экран, экран карточек, экран добавления слова.

---

## ✅ Шаг 6: Иконка 1024×1024

В App Store Connect → **App Information** → загрузите иконку 1024×1024 px (без альфа-канала). Можно использовать `icon.png` если он 1024×1024.

---

## ✅ Шаг 7: Выбор билда

1. **App Store** → **iOS App** → **Build**
2. **+** → выберите загруженный билд (из Transporter)
3. Если билд не виден — подождите 10–30 минут после загрузки

---

## ✅ Шаг 8: App Privacy

**App Store Connect** → **App Privacy** → **Get Started**

Укажите:
- **Data collection:** Yes (AdMob собирает данные для рекламы)
- **Advertising Data:** Yes
- Следуйте подсказкам

---

## ✅ Шаг 9: Submit for Review

1. Заполните все обязательные поля (отмечены *)
2. **Add for Review** → **Submit to App Review**
3. Ожидайте 1–7 дней

---

## Перед отправкой

- [ ] IPA загружен через Transporter
- [ ] Приложение создано в App Store Connect
- [ ] Описание, ключевые слова заполнены
- [ ] URL политики конфиденциальности указан
- [ ] Скриншоты загружены (3 размера)
- [ ] Иконка 1024×1024 загружена
- [ ] Билд выбран
- [ ] App Privacy настроен
