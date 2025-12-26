# Fix French file
$file = 'c:\Users\lolab\Desktop\projet-sae-105-2025-LolaBrt\fr\matilda-through-ages.html'
$lines = @(Get-Content $file -Encoding UTF8)
$output = @()

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($i -eq 259) {
        # Replace the malformed section with correct Jocelyn Bell div
        $output += '        <div class="portrait">'
        $output += '            <img class="portrait__image" src="/assets/img/frise/jocelyn_bell.webp" alt="Jocelyn Bell" loading="lazy" />'
        $output += '            <h3 class="portrait__date">'
        $output += '                1943'
        $output += '            </h3>'
        $output += '            <h3 class="portrait__name">'
        $output += '                Jocelyn Bell'
        $output += '            </h3>'
        $output += '            <p class="portrait__description">'
        $output += '                Elle a découvert les pulsars, étoiles à neutrons tournant très rapidement sur elles-mêmes.'
        $output += '            </p>'
        $output += '        </div>'
        # Skip lines 260-284 (the malformed section)
        $i = 284
    } else {
        $output += $lines[$i]
    }
}

$output | Set-Content $file -Encoding UTF8
Write-Host 'French file fixed!'

# Fix English file  
$file = 'c:\Users\lolab\Desktop\projet-sae-105-2025-LolaBrt\en\matilda-through-ages.html'
$lines = @(Get-Content $file -Encoding UTF8)
$output = @()

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($i -eq 259) {
        # Replace the malformed section with correct Jocelyn Bell div
        $output += '        <div class="portrait">'
        $output += '            <img class="portrait__image" src="/assets/img/frise/jocelyn_bell.webp" alt="Jocelyn Bell" loading="lazy" />'
        $output += '            <h3 class="portrait__date">'
        $output += '                1943'
        $output += '            </h3>'
        $output += '            <h3 class="portrait__name">'
        $output += '                Jocelyn Bell'
        $output += '            </h3>'
        $output += '            <p class="portrait__description">'
        $output += '                She discovered pulsars, neutron stars spinning very rapidly on themselves.'
        $output += '            </p>'
        $output += '        </div>'
        # Skip lines 260-284 (the malformed section)
        $i = 284
    } else {
        $output += $lines[$i]
    }
}

$output | Set-Content $file -Encoding UTF8
Write-Host 'English file fixed!'
