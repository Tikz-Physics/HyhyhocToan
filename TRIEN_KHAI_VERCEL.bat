@echo off
cls
echo ======================================================================
echo    HUONG DAN VA TRIEN KHAI UNG DUNG LEN VERCEL (MIEN PHI 100%%)
echo               VUONG QUOC TOAN HOC LOP 1 VA TIMO
echo ======================================================================
echo.
echo [1] KHI BAN THAY DOI CODE THI APP CO TU THAY DOI THEO KHONG?
echo     ----------------------------------------------------------
echo     - Neu ban ket noi GitHub voi Vercel:
echo       --^> CO, 100%% TU DONG! Moi khi ban commit hoac push code len GitHub,
echo          Vercel se tu dong nhan dien, build lai va cap nhat link
echo          xxx.vercel.app sau chi 20 - 30 giay!
echo.
echo     - Neu ban dung file nay (.bat):
echo       --^> Moi khi sua code xong, ban chi can chay file nay 1 lan,
echo          he thong se tu build va deploy de len link cu ngay lap tuc!
echo.
echo ======================================================================
echo.

set "TARGET_DIR=%~dp0toan-lop1"
if exist "%TARGET_DIR%\package.json" (
    cd /d "%TARGET_DIR%"
) else (
    cd /d "%~dp0"
)

if not exist "package.json" (
    echo [LOI] Khong tim thay file package.json!
    pause
    exit /b 1
)

echo [BUOC 1/2] Dang kiem tra va bien dich goi ung dung (npm run build)...
call npm.cmd run build
if %ERRORLEVEL% neq 0 (
    echo.
    echo [LOI] Qua trinh bien dich build that bai!
    pause
    exit /b 1
)

echo.
echo [BUOC 2/2] Dang kiem tra tai khoan Vercel...
call npx.cmd vercel whoami >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ======================================================================
    echo [DANG NHAP VERCEL LAN DAU TIEN - CHI MAT 10 GIAY]
    echo Vui long chon phuong thuc dang nhap (dung mui ten len/xuong va Enter):
    echo  - Continue with GitHub (Neu ban co tai khoan GitHub)
    echo  - Continue with Email (Neu ban muon nhan ma qua Email)
    echo ======================================================================
    echo.
    call npx.cmd vercel login
)

echo.
echo Dang day ung dung len Vercel Production...
call npx.cmd vercel --prod

echo.
echo ======================================================================
echo    HOAN TAT TRIEN KHAI LEN VERCEL!
echo    Ban co the mo duong link xxx.vercel.app tren dien thoai, iPad,
echo    hoac may tinh khac de be hoc toan moi luc moi noi.
echo ======================================================================
pause
