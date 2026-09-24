@echo off
chcp 65001 >nul
title Iniciar Wireframe Studio

cd /d "%~dp0"

echo ========================================================
echo               INICIAR WIREFRAME STUDIO
echo ========================================================
echo.
echo Iniciando servidor local en http://localhost:8085 ...
echo Puedes cerrar esta ventana para detener el servidor.
echo.

start "" http://localhost:8085/
python -m http.server 8085

pause
