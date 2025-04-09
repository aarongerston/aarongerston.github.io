# Create the directories if they don't exist
New-Item -ItemType Directory -Force -Path "public/assets/clients"
New-Item -ItemType Directory -Force -Path "public/assets/projects"

# Download Oticon logo
Invoke-WebRequest -Uri "https://wdh01.azureedge.net/-/media/oticon/shared/logos/oticon_no_payoff.svg" -OutFile "public/assets/clients/oticon.svg"

# Download Tel Aviv University logo (as PNG)
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Tel_Aviv_university_logo.svg/1920px-Tel_Aviv_university_logo.svg.png" -OutFile "public/assets/clients/tau.png"

# Download X-trodes logo
Invoke-WebRequest -Uri "https://xtrodes.com/wp-content/uploads/2023/07/logo.svg" -OutFile "public/assets/clients/xtrodes.svg"

# Create placeholder images for projects
$placeholderColor = "#1F2937" # dark-800 color
$imageSize = "800x400"

# Healthcare Analytics placeholder
$image = New-Object System.Drawing.Bitmap 800, 400
$graphics = [System.Drawing.Graphics]::FromImage($image)
$graphics.Clear([System.Drawing.Color]::FromArgb(31, 41, 55)) # dark-800 color
$graphics.Dispose()
$image.Save("public/assets/projects/healthcare-analytics.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$image.Dispose()

# Climate Change placeholder
$image = New-Object System.Drawing.Bitmap 800, 400
$graphics = [System.Drawing.Graphics]::FromImage($image)
$graphics.Clear([System.Drawing.Color]::FromArgb(31, 41, 55)) # dark-800 color
$graphics.Dispose()
$image.Save("public/assets/projects/climate-change.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$image.Dispose() 