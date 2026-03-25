# Шаги после создания CSR

Файлы **request.csr** и **private.key** созданы в папке `turkish-flashcards`.

---

## Шаг 1: Загрузить CSR в Apple Developer

1. Откройте https://developer.apple.com/account/resources/certificates/list
2. **+** → **Apple Distribution**
3. **Choose File** → выберите `request.csr` из папки turkish-flashcards
4. **Continue** → **Download** (файл `distribution.cer`)

---

## Шаг 2: Конвертировать в .p12 для Codemagic

Положите скачанный `.cer` файл в папку `turkish-flashcards` и выполните:

```powershell
cd c:\Users\pifag\OneDrive\turkish-flashcards
node create-p12.js
```

Или если файл имеет другое имя:

```powershell
node create-p12.js AppleDistribution.cer
```

Будет создан `codemagic.p12`. Пароль: **codemagic**

---

## Шаг 3: Добавить в Codemagic

1. Codemagic → **Teams** → **Code signing identities**
2. **iOS certificates** → **Add certificate**
3. Загрузите `codemagic.p12`
4. Введите пароль от .p12
5. Reference name: `kelime_distribution`

---

## Шаг 4: Provisioning Profile

Вернитесь в Apple Developer → **Profiles** → создайте профиль (теперь сертификат есть).

Или в Codemagic: **Download selected** → выберите профиль для com.kelime.kartlari.

---

## Важно

- **private.key** — секретный, никому не передавайте
- Файлы добавлены в .gitignore — не попадут в Git
