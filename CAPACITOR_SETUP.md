# Пошаговая настройка Capacitor для Kelime Kartları

## Шаг 0: Установить Node.js (если ещё не установлен)

1. Скачайте Node.js LTS: https://nodejs.org/
2. Установите (оставьте галочку "Add to PATH")
3. Перезапустите терминал/PowerShell
4. Проверьте: `node -v` и `npm -v` — должны показать версии

---

## Шаг 1: Инициализация npm

Откройте PowerShell или CMD в папке проекта:

```powershell
cd c:\Users\pifag\OneDrive\turkish-flashcards
npm init -y
```

Создастся файл `package.json`.

---

## Шаг 2: Установка Capacitor

```powershell
npm install @capacitor/core @capacitor/cli @capacitor/ios
```

---

## Шаг 3: Инициализация Capacitor

```powershell
npx cap init "Kelime Kartları" "com.kelime.kartlari"
```

- **"Kelime Kartları"** — имя приложения (можно изменить)
- **com.kelime.kartlari** — Bundle ID (уникальный идентификатор, например com.вашеимя.kelime)

---

## Шаг 4: Папка www

Веб-файлы скопированы в папку `www/`. При изменении `index.html`, `spanish.html`, `english.html` или `manifest.json` выполните:

```powershell
npm run copy-web
```

Или сразу копирование + синхронизация:

```powershell
npm run sync
```

---

## Шаг 5: Добавление платформы iOS

```powershell
npx cap add ios
```

Создастся папка `ios/` с нативным Xcode-проектом.

---

## Шаг 6: Синхронизация

```powershell
npx cap sync
```

Или используйте `npm run sync` — скопирует файлы в www и выполнит cap sync.

---

## Шаг 7: Открытие в Xcode (только на Mac)

```powershell
npx cap open ios
```

Откроется Xcode. Дальше:
- Выбрать симулятор или устройство
- Product → Run (или ⌘R)
- Для публикации: Product → Archive → Distribute App

---

## Шаг 8 (опционально): Добавление Android

Если хотите также Google Play:

```powershell
npm install @capacitor/android
npx cap add android
npx cap sync
npx cap open android
```

Требуется установленный Android Studio.

---

## Важные файлы после настройки

| Файл/папка | Назначение |
|------------|------------|
| `package.json` | Зависимости npm |
| `capacitor.config.ts` | Конфигурация Capacitor |
| `ios/` | Нативный iOS-проект для Xcode |
| `node_modules/` | Установленные пакеты |

---

## Команды для дальнейшей работы

- **После изменений в HTML/CSS/JS** — выполните `npx cap sync`
- **Открыть iOS** — `npx cap open ios`
- **Открыть Android** — `npx cap open android`
