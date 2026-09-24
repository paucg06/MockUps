@echo off
chcp 65001 >nul
title Subir a GitHub - Wireframe Studio

cd /d "%~dp0"

echo ========================================================
echo       SUBIR PROYECTO A GITHUB (paucg06/MockUps)
echo ========================================================
echo.

REM Verificar si Git esta instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git no esta instalado o no se encuentra en el PATH.
    echo Por favor instala Git desde https://git-scm.com/
    pause
    exit /b 1
)

echo [1/4] Comprobando repositorio Git y rama main...
git init
git branch -M main

REM Configurar remoto origin
git remote remove origin 2>nul
git remote add origin https://github.com/paucg06/MockUps.git

echo [2/4] Preparando archivos para commit...
git add .

echo.
set /p COMMIT_MSG="Introduce mensaje de commit (o pulsa ENTER para usar el predeterminado): "
if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=Actualizacion de Wireframe Studio
)

echo.
echo [3/4] Creando commit: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%" 2>nul

echo.
echo [4/4] Subiendo cambios a GitHub (https://github.com/paucg06/MockUps.git)...
echo.
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo --------------------------------------------------------
    echo Si el repositorio remoto contiene archivos previos en GitHub,
    echo sincronizando con pull...
    echo --------------------------------------------------------
    git pull origin main --rebase --allow-unrelated-histories
    git push -u origin main
)

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo      [EXITO] Proyecto subido correctamente a GitHub!
    echo      URL: https://github.com/paucg06/MockUps
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo      [ATENCION] No se pudo completar la subida.
    echo      Verifica que tienes acceso e inicia sesion en GitHub.
    echo ========================================================
)

echo.
pause
