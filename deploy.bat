@echo off
echo 🚀 Preparing Tala website for deployment...

REM Check if public directory exists
if not exist "public" (
    echo ❌ Public directory not found!
    pause
    exit /b 1
)

REM Check if all required files exist
if not exist "public\index.html" (
    echo ❌ Required file missing: public\index.html
    pause
    exit /b 1
)

if not exist "public\borrow.html" (
    echo ❌ Required file missing: public\borrow.html
    pause
    exit /b 1
)

if not exist "public\styles.css" (
    echo ❌ Required file missing: public\styles.css
    pause
    exit /b 1
)

if not exist "public\script.js" (
    echo ❌ Required file missing: public\script.js
    pause
    exit /b 1
)

echo ✅ All required files present

REM Check if vercel.json exists
if not exist "vercel.json" (
    echo ❌ vercel.json not found!
    pause
    exit /b 1
)

echo ✅ Vercel configuration found

REM Count files in public directory
for /f %%i in ('dir /b /s public ^| find /c /v ""') do set file_count=%%i
echo 📁 Found %file_count% files in public directory

echo.
echo 🎉 Ready for deployment!
echo.
echo Next steps:
echo 1. Push to GitHub: git push origin main
echo 2. Go to https://vercel.com
echo 3. Import your repository
echo 4. Deploy!
echo.
echo Or use Vercel CLI:
echo npm i -g vercel ^&^& vercel
echo.
pause
