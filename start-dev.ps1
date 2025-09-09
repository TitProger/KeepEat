# PowerShell script to start KepEat backend with environment variables
# Usage: .\start-dev.ps1

# Set environment variables
$env:PG_HOST = "localhost"
$env:PG_PORT = "5432"
$env:PG_DATABASE = "keepeat"
$env:PG_USERNAME = "postgres"
$env:PG_PASSWORD = "postgres"
$env:PG_MIGRATIONS_RUN = "true"
$env:PG_LOGGINING = "true"
$env:APP_HOST = "0.0.0.0"
$env:APP_PORT = "3000"

Write-Host "Environment variables set:" -ForegroundColor Green
Write-Host "PG_HOST: $env:PG_HOST" -ForegroundColor Yellow
Write-Host "PG_PORT: $env:PG_PORT" -ForegroundColor Yellow
Write-Host "PG_DATABASE: $env:PG_DATABASE" -ForegroundColor Yellow
Write-Host "PG_USERNAME: $env:PG_USERNAME" -ForegroundColor Yellow
Write-Host "PG_MIGRATIONS_RUN: $env:PG_MIGRATIONS_RUN" -ForegroundColor Yellow

Write-Host "Starting development server..." -ForegroundColor Green
npm run start:dev

