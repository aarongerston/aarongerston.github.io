# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public/assets/projects"
New-Item -ItemType Directory -Force -Path "public/assets/clients"

# Function to create SVG placeholder
function Create-SVGPlaceholder {
    param (
        [string]$Text
    )
    return @"
<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1F2937"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#9CA3AF" text-anchor="middle" dominant-baseline="middle">
        $Text
    </text>
</svg>
"@
}

# Create unique SVG placeholders for each project
Create-SVGPlaceholder -Text "Healthcare Analytics Project" | Out-File -FilePath "public/assets/projects/healthcare-analytics.svg" -Encoding UTF8
Create-SVGPlaceholder -Text "Climate Change Project" | Out-File -FilePath "public/assets/projects/climate-change.svg" -Encoding UTF8
Create-SVGPlaceholder -Text "News Coverage Project" | Out-File -FilePath "public/assets/projects/news-coverage.svg" -Encoding UTF8
Create-SVGPlaceholder -Text "In the World Project" | Out-File -FilePath "public/assets/projects/world.svg" -Encoding UTF8
Create-SVGPlaceholder -Text "CovidStats Project" | Out-File -FilePath "public/assets/projects/covid.svg" -Encoding UTF8

# Download client logos
Invoke-WebRequest -Uri "https://wdh01.azureedge.net/-/media/oticon/shared/logos/oticon_no_payoff.svg" -OutFile "public/assets/clients/oticon.svg"
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Tel_Aviv_university_logo.svg/1920px-Tel_Aviv_university_logo.svg.png" -OutFile "public/assets/clients/tau.png"
Invoke-WebRequest -Uri "https://xtrodes.com/wp-content/uploads/2023/07/logo.svg" -OutFile "public/assets/clients/xtrodes.svg" 