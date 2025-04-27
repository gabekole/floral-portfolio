@echo off
setlocal enabledelayedexpansion

:: Check if a path was provided
if "%~1"=="" (
    echo Usage: rename_images.bat [folder]
    exit /b
)

cd "%~1" || exit /b

set counter=1

for %%f in (*.*) do (
    set "ext=%%~xf"
    ren "%%f" "!counter!!ext!"
    set /a counter+=1
)

echo Done renaming in "%~1"!
pause
