# PowerShell script to run MikroORM migrations
# Usage: .\run-migrations.ps1 [command] [name]

# Set environment variables
$env:PG_HOST = "localhost"
$env:PG_PORT = "5432"
$env:PG_DATABASE = "keepeat"
$env:PG_USERNAME = "postgres"
$env:PG_PASSWORD = "postgres"
$env:PG_MIGRATIONS_RUN = "true"
$env:PG_LOGGINING = "true"

# Get command from arguments
$command = $args[0]
$name = $args[1]

Write-Host "Environment variables set for migrations" -ForegroundColor Green

switch ($command) {
    "list" {
        Write-Host "Listing migrations..." -ForegroundColor Yellow
        npm run migration:list
    }
    "create" {
        if ($name) {
            Write-Host "Creating migration: $name" -ForegroundColor Yellow
            npm run migration:create -- $name
        } else {
            Write-Host "Error: Please provide migration name" -ForegroundColor Red
            Write-Host "Usage: .\run-migrations.ps1 create migration-name" -ForegroundColor Yellow
        }
    }
    "up" {
        Write-Host "Applying migrations..." -ForegroundColor Yellow
        npm run migration:up
    }
    "down" {
        Write-Host "Rolling back migrations..." -ForegroundColor Yellow
        npm run migration:down
    }
    default {
        Write-Host "Available commands:" -ForegroundColor Green
        Write-Host "  .\run-migrations.ps1 list" -ForegroundColor Yellow
        Write-Host "  .\run-migrations.ps1 create migration-name" -ForegroundColor Yellow
        Write-Host "  .\run-migrations.ps1 up" -ForegroundColor Yellow
        Write-Host "  .\run-migrations.ps1 down" -ForegroundColor Yellow
    }
}

