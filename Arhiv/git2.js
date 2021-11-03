 //Папка с файлом *.json
//Восстановить каталог node_modules
//Комманда npm install

https://github.com/sasha-is-permi/vue.js

// надо представиться если не представлялись. Один раз после создания проекта
// Информация записывается в .git/config
git init // создает git/config
git config --local user.name "Alexandr"         - имя пользователя для проекта
git config --local user.email sasha-is-permi@mail.ru         - e-mail


// После создания или изменения файлов в проекте
git add -A
git commit -m "first commit"

// Только первый раз при создании.
// Информация записывается в .git/config
git remote add origin https://github.com/sasha-is-permi/vue.js
// Посылаем файлы проекта на github
// В следующий раз можно посылать файлы более простой командой:
// git push
git push -u origin master

// Повторно- если не выходили из visual studio
git add -A
git commit -m "second commit"
git push 




Если с компьютера на работе а делали дома  (в чистую папку надо скопировать):
Переходим в папку рабочую vue.js
git clone https://github.com/sasha-is-permi/vue.js vue-project
// Файлы копируются с респозитория в папку vue-project

// Затем зайти в файл проекта git vue-project

// Если проект уже есть- прописанны все пути в нем до github- 
// просто:
// зайти в visual studio code, terminal, в каталог vue-project
git pull
// (с удаленного респозитория копируются изменные файлы на наш компьютер)


// Изменили файлы на рабочем компьютере. Затем отправим обратно на github изменения
git add -A
git commit -m "second commit"
git push
// Если клонировали репозиторий на локальную машину с github
//- локальный уже связан с удаленным (это в настройках проекта 
// прописывается. Даже если вышли из программы, опять зашли- все равно
// в файле .git/config информация о пути осталась
// Дома на компьютере который связан уже с удаленным репозиторием:
 git pull - синхронизация- обновление из удаленного репозитория на локальный компьютер
// Если при отправке git push ошибка  error: filed to push, 
// то надо набрать комманду git pull (с сервера новые изменения перекачаются)
// локальный и удаленный проекты сливаются (merge)
