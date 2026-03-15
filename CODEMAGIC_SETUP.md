# Сборка iOS через Codemagic (без Mac)

Файл `codemagic.yaml` настроен. Дальнейшие шаги выполняются вручную.

---

## Шаг 1: Загрузить проект в GitHub

Если проект ещё не в репозитории:

```powershell
cd c:\Users\pifag\OneDrive\turkish-flashcards
git add .
git commit -m "Add Codemagic config"
git push origin main
```

Репозиторий: https://github.com/pifagortradebtc/turkish-flashcards

---

## Шаг 2: Регистрация в Codemagic

1. Перейдите на https://codemagic.io
2. Нажмите **Sign up** и войдите через **GitHub**
3. Разрешите Codemagic доступ к репозиториям

---

## Шаг 3: Добавить приложение

1. **Add application** → **Finish: Add application**
2. Выберите репозиторий **turkish-flashcards**
3. Тип проекта: **Other** (или **Ionic** — Codemagic определит по codemagic.yaml)
4. Нажмите **Add application**

---

## Шаг 4: Code signing (обязательно для iOS)

### 4.1. App Store Connect API Key

1. Войдите в [App Store Connect](https://appstoreconnect.apple.com) → **Users and Access** → **Integrations** → **App Store Connect API**
2. Нажмите **+** для создания ключа
3. Имя: `Codemagic`, доступ: **App Manager**
4. Скачайте файл `.p8` (только один раз)
5. Сохраните **Issuer ID** и **Key ID**

### 4.2. Добавить ключ в Codemagic

1. Codemagic → **Team settings** → **Integrations** → **Developer Portal**
2. **Manage keys** → **Add key**
3. Загрузите `.p8`, введите Issuer ID и Key ID
4. Имя ключа: `App Store Connect API key` (или любое)

### 4.3. Сертификат и профиль

1. **Team settings** → **Code signing identities**
2. **iOS certificates** → **Create certificate** (или **Fetch from Developer Portal**)
3. Выберите App Store Connect API key
4. Тип: **Apple Distribution**
5. **iOS provisioning profiles** → **Download selected**
6. Выберите профиль для `com.kelime.kartlari` (App Store)
7. Укажите Reference name: `kelime_profile`

---

## Шаг 5: Запуск сборки

1. Откройте приложение в Codemagic
2. Выберите ветку **main**
3. Нажмите **Start new build**
4. Выберите workflow **Kelime Kartları iOS**
5. **Start build**

---

## Шаг 6: Результат

После успешной сборки:

- **Artifacts** → скачайте файл `.ipa`
- Загрузите IPA в App Store Connect через **Transporter** (Windows) или настройте автоматическую публикацию в `codemagic.yaml`

---

## Автоматическая публикация в TestFlight

После настройки API key в Codemagic раскомментируйте в `codemagic.yaml`:

```yaml
integrations:
  app_store_connect: App Store Connect API key  # имя вашего ключа
publishing:
  app_store_connect:
    auth: integration
    submit_to_testflight: true
```

---

## Требования

- **Apple Developer Program** ($99/год)
- Приложение создано в App Store Connect
- Bundle ID: `com.kelime.kartlari`
