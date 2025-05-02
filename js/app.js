// Main app functionality
document.addEventListener('DOMContentLoaded', () => {
    const heroSelector = document.getElementById('hero-selector');
    const heroInfo = document.getElementById('hero-info');
    const heroBuilder = document.getElementById('hero-build-container');
    const shareBtn = document.getElementById('share-btn');
    const buildCodeDisplay = document.getElementById('build-code');
    
    // Page references
    const overviewPage = document.getElementById('overview-page');
    const powersPage = document.getElementById('powers-page');
    const heroItemsPage = document.getElementById('hero-items-page');
    const universalItemsPage = document.getElementById('universal-items-page');
    
    // Selected powers and items tracking
    let selectedPowers = [];
    let selectedItems = [];
    let selectedHero = null;
    loadBuildFromURL();
    setupShareFeatures();

    // Call this after displaying a hero
    // Define base stats for each hero
    const heroBaseStats = {
        reaper: {
            'Health': 250,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        dva: {
            'Health': 300,
            'Armor': 300,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        moira: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        reinhardt: {
            'Health': 500,
            'Armor': 125,
            'Shield': 1600,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        soldier76: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        kiriko: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        genji: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        mei: {
            'Health': 250,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        zarya: {
            'Health': 250,
            'Armor': 0,
            'Shield': 225,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        junkerqueen: {
            'Health': 425,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        orisa: {
            'Health': 275,
            'Armor': 275,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        cassidy: {
            'Health': 225, 
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        ashe: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        ana: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        mercy: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        lucio: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        juno: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        }
    
    };
    
    // Current hero stats and modifiers
    let currentHeroStats = {};
    let statModifiers = {};
    
    // Pattern to match stat patterns in item descriptions
    // Add or update this near the top of app.js
const statPatterns = [
    { regex: /\+(\d+)\s*Health/g, stat: 'Health', isPercentage: false, baseValue: 0 },
    { regex: /\+(\d+)\s*Armor/g, stat: 'Armor', isPercentage: false, baseValue: 0 },
    { regex: /\+(\d+)\s*Shield/g, stat: 'Shield', isPercentage: false, baseValue: 0 },
    { regex: /\+(\d+)%\s*Weapon Power/g, stat: 'Weapon Power', isPercentage: true, baseValue: 100 },
    { regex: /\+(\d+)%\s*Ability Power/g, stat: 'Ability Power', isPercentage: true, baseValue: 100 },
    { regex: /\+(\d+)%\s*Attack Speed/g, stat: 'Attack Speed', isPercentage: true, baseValue: 100 },
    { regex: /\+(\d+)%\s*Move Speed/g, stat: 'Move Speed', isPercentage: true, baseValue: 100 },
    { regex: /\+(\d+)%\s*Cooldown Reduction/g, stat: 'Cooldown Reduction', isPercentage: true, baseValue: 0 },
    { regex: /\+(\d+)%\s*Weapon Lifesteal/g, stat: 'Weapon Lifesteal', isPercentage: true, baseValue: 0 },
    { regex: /\+(\d+)%\s*Ability Lifesteal/g, stat: 'Ability Lifesteal', isPercentage: true, baseValue: 0 },
    { regex: /\+(\d+)%\s*Reload Speed/g, stat: 'Reload Speed', isPercentage: true, baseValue: 0 },
    { regex: /\+(\d+)%\s*Melee Damage/g, stat: 'Melee Damage', isPercentage: true, baseValue: 0 },
    { regex: /\+(\d+)%\s*Critical Damage/g, stat: 'Critical Damage', isPercentage: true, baseValue: 0 }
];
    
    // Helper function to map item names to icon filenames (PNG format)
    function getIconFileName(itemName) {
        // Keep the original name including spaces and special characters, just use PNG extension
        return itemName + '.png';
    }
    
    // Helper function to map power names to icon filenames (PNG format)
    function getPowerIconFileName(powerName) {
        // Keep the original name including spaces and special characters, just use PNG extension
        return powerName + '.png';
    }
    
    // Function to get hero icon path
    function getHeroIconPath(heroName) {
        if (heroName.includes("Soldier")) return `images/heroes/Soldier76/soldier76.png`;
        return `images/heroes/${heroName}/${heroName.toLowerCase()}.png`;
    }

    // Function to get ability icon path
    function getAbilityIconPath(heroName, abilityName) {
        return `images/heroes/${heroName}/Abilities/${abilityName}.png`;
    }
    
    // Fallback function to generate colored icon with initial if image doesn't load
    function handleImageError(img) {
        // Get name from alt attribute
        const name = img.alt || 'X';
        
        // Determine category from parent elements
        let category = 'unknown';
        if (img.closest('.item-card')) {
            category = img.closest('.item-card').dataset.category;
        } else if (img.closest('.power-card')) {
            category = 'power';
        }
        
        // Determine color based on category
        let bgColor;
        if (category === 'weapon') {
            bgColor = '#ff7e33'; // Weapon color
        } else if (category === 'ability') {
            bgColor = '#4adfff'; // Ability color
        } else if (category === 'survival') {
            bgColor = '#83ff52'; // Survival color
        } else if (category === 'power') {
            bgColor = '#ff9c1e'; // Power color
        } else {
            bgColor = '#b0b0b0'; // Default gray
        }
        
        // Create a canvas to draw our fallback icon
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');
        
        // Fill with background color
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 40, 40);
        
        // Draw initial letter
        ctx.fillStyle = 'white';
        ctx.font = 'bold 20px "Rajdhani", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name.charAt(0), 20, 20);
        
        // Replace image source with canvas data
        img.src = canvas.toDataURL('image/png');
        // Remove error handler to prevent infinite loops
        img.onerror = null;
    }
    function updateExtendedStatsDisplay() {
        if (!selectedHero) return;
        
        const hero = heroes[selectedHero];
        
        // Check if stats section elements exist at all before proceeding
        if (!document.getElementById('life-bar-container')) {
            // Elements don't exist yet - bail out early
            return;
        }
        
        try {
            // Update stat bars
    updateStatBar('weapon-power-bar', currentHeroStats['Weapon Power'] || 100);
    updateStatBar('ability-power-bar', currentHeroStats['Ability Power'] || 100);
    updateStatBar('attack-speed-bar', currentHeroStats['Attack Speed'] || 100);
    updateStatBar('cooldown-bar', currentHeroStats['Cooldown Reduction'] || 0, 50);
    updateStatBar('max-ammo-bar', currentHeroStats['Max Ammo'] || 100);
    updateStatBar('weapon-lifesteal-bar', currentHeroStats['Weapon Lifesteal'] || 0, 50);
    updateStatBar('ability-lifesteal-bar', currentHeroStats['Ability Lifesteal'] || 0, 50);
    updateStatBar('move-speed-bar', currentHeroStats['Move Speed'] || 100, 150);
    updateStatBar('reload-speed-bar', currentHeroStats['Reload Speed'] || 0, 50);
    updateStatBar('melee-damage-bar', currentHeroStats['Melee Damage'] || 0, 50);
    updateStatBar('critical-damage-bar', currentHeroStats['Critical Damage'] || 0, 50);
    
    // Update health bar segments
    updateHealthBarSegments(currentHeroStats['Health'] || hero.health);
            
            // Update percentage-based stats
            const statMappings = [
                { stat: 'Weapon Power', barId: 'weapon-power-bar', valueId: 'weapon-power-value' },
                { stat: 'Ability Power', barId: 'ability-power-bar', valueId: 'ability-power-value' },
                { stat: 'Attack Speed', barId: 'attack-speed-bar', valueId: 'attack-speed-value' },
                { stat: 'Cooldown Reduction', barId: 'cooldown-bar', valueId: 'cooldown-value' },
                { stat: 'Max Ammo', barId: 'max-ammo-bar', valueId: 'max-ammo-value' },
                { stat: 'Weapon Lifesteal', barId: 'weapon-lifesteal-bar', valueId: 'weapon-lifesteal-value' },
                { stat: 'Ability Lifesteal', barId: 'ability-lifesteal-bar', valueId: 'ability-lifesteal-value' },
                { stat: 'Move Speed', barId: 'move-speed-bar', valueId: 'move-speed-value' },
                { stat: 'Reload Speed', barId: 'reload-speed-bar', valueId: 'reload-speed-value' },
                { stat: 'Melee Damage', barId: 'melee-damage-bar', valueId: 'melee-damage-value' },
                { stat: 'Critical Damage', barId: 'critical-damage-bar', valueId: 'critical-damage-value' }
            ];
            
            statMappings.forEach(mapping => {
                const baseValue = 100; // Default base value
                const currentValue = currentHeroStats[mapping.stat] || baseValue;
                const diff = currentValue - baseValue;
                
                // Set the bar width (max 100%)
                const barElement = document.getElementById(mapping.barId);
                if (barElement) {
                    // Calculate percentage (0-100%)
                    let percentage = (currentValue / 200) * 100; // Assuming 200% is max for display
                    percentage = Math.min(100, Math.max(0, percentage)); // Clamp between 0-100
                    barElement.style.width = `${percentage}%`;
                }
                
                // Update the value text
                const valueElement = document.getElementById(mapping.valueId);
                if (valueElement) {
                    if (diff !== 0) {
                        valueElement.textContent = `${diff > 0 ? '+' : ''}${diff}%`;
                    } else {
                        valueElement.textContent = '0%';
                    }
                }
            });
        } catch (error) {
            console.error("Error updating extended stats display:", error);
        }
    }
    function updateAllStats() {
        // For each stat, check if we have a current value
        const stats = [
            "Weapon Power", "Ability Power", "Attack Speed", "Move Speed", 
            "Cooldown Reduction", "Weapon Lifesteal", "Ability Lifesteal",
            "Reload Speed", "Melee Damage", "Critical Damage", "Max Ammo"
        ];
        
        for (const stat of stats) {
            // Get base value
            const baseValue = stat === "Weapon Power" || stat === "Ability Power" || 
                              stat === "Attack Speed" || stat === "Move Speed" || 
                              stat === "Max Ammo" ? 100 : 0;
                              
            // Get current value
            const currentValue = currentHeroStats[stat] || baseValue;
            
            // Calculate difference
            const diff = currentValue - baseValue;
            
            // Update display
            const valueElement = document.getElementById(`${stat.toLowerCase().replace(/\s+/g, '-')}-value`);
            if (valueElement) {
                valueElement.textContent = diff !== 0 ? `${diff > 0 ? '+' : ''}${diff}%` : '0%';
            }
            
            // Update bar
            const barElement = document.getElementById(`${stat.toLowerCase().replace(/\s+/g, '-')}-bar`);
            if (barElement) {
                // Different max values based on stat type
                let maxValue = 200;
                if (stat === "Cooldown Reduction" || stat === "Weapon Lifesteal" || 
                    stat === "Ability Lifesteal" || stat === "Reload Speed" || 
                    stat === "Melee Damage" || stat === "Critical Damage") {
                    maxValue = 50;
                } else if (stat === "Move Speed") {
                    maxValue = 150;
                }
                
                // Calculate width percentage
                const range = maxValue - baseValue;
                const percentage = Math.min(100, Math.max(0, ((currentValue - baseValue) / range) * 100));
                barElement.style.width = `${percentage}%`;
            }
        }
        
        // Update health bar
        const healthValue = currentHeroStats['Health'] || 
                           (selectedHero ? heroes[selectedHero].health : 0);
        const healthElement = document.getElementById('persistent-health');
        if (healthElement) {
            healthElement.textContent = healthValue;
        }
        
        // Update health bar segments
        updateHealthBarSegments(healthValue);
        updatePersistentAbilityStats();
    }
    
    // When updating the DOM, add error handlers to all images
    function setupImageErrorHandlers() {
        document.querySelectorAll('.item-icon img, .power-icon img, .summary-item-icon img, .ability-icon img, .hero-profile img, .build-hero-icon img, .saved-build-hero-icon img').forEach(img => {
            if (!img.dataset.hasErrorHandler) {
                img.onerror = function() {
                    handleImageError(this);
                };
                img.dataset.hasErrorHandler = 'true';
            }
        });
    }
    function safeBase64Decode(str) {
        try {
          // Decode base64 and use decodeURIComponent to handle non-Latin1 characters
          const decoded = decodeURIComponent(atob(str));
          return JSON.parse(decoded);
        } catch (e) {
          console.error("Error decoding build data:", e);
          return null;
        }
      }
    
    // Tab navigation
    function setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const tabName = button.dataset.tab;
                const pages = document.querySelectorAll('.page');
                pages.forEach(page => page.classList.remove('active'));
                document.getElementById(`${tabName}-page`).classList.add('active');
            });
        });
        
        // Set Powers tab as default active tab
        const powersTab = document.querySelector('.tab-button[data-tab="powers"]');
        if (powersTab) {
            powersTab.click();
        }
    }
    function ensurePersistentBuildSummary() {
        const container = document.getElementById('persistent-build-summary');
        
        // If the container doesn't exist or is empty, create it
        if (!container || container.children.length === 0) {
            // Create the persistent build summary structure in the DOM
            document.body.insertAdjacentHTML('beforeend', `
                <div class="persistent-build-summary" id="persistent-build-summary">
                    <div class="persistent-hero-info">
                        <div class="persistent-hero-icon">
                            <!-- Hero icon -->
                        </div>
                        <div class="persistent-hero-details">
                            <h3 id="persistent-hero-name">Select a Hero</h3>
                            <div id="persistent-hero-role" class="persistent-hero-role">-</div>
                        </div>
                    </div>
                    
                    <!-- Stats Section -->
                    <div class="stats-section">
                        <div class="stat-row">
                            <div class="stat-icon">
                                <img src="images/stats/life.png" alt="Life">
                            </div>
                            <div class="stat-name">LIFE</div>
                            <div class="life-bar-container" id="life-bar-container">
                                <!-- Life segments will be added dynamically -->
                            </div>
                            <div class="stat-value" id="persistent-health">0</div>
                        </div>
                        
                        <!-- Add all other stat rows here -->
                        <!-- ... -->
                        
                    </div>
                    
                    <div class="persistent-build-details">
                        <div class="persistent-powers">
                            <div class="persistent-powers-header">
                                <span>Powers (<span id="persistent-powers-count">0</span>/4)</span>
                            </div>
                            <div class="persistent-powers-list" id="persistent-powers-list">
                                <div class="empty-selection">No powers selected</div>
                            </div>
                        </div>
                        
                        <div class="persistent-items">
                            <div class="persistent-items-header">
                                <span>Items (<span id="persistent-items-count">0</span>/6)</span>
                                <span class="persistent-total-cost">Total: <span id="persistent-total-cost">0</span></span>
                            </div>
                            <div class="persistent-items-list" id="persistent-items-list">
                                <div class="empty-selection">No items selected</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="persistent-actions">
                        <button id="persistent-save" class="persistent-action-btn">
                            <i class="fas fa-save"></i> Save
                        </button>
                        <button id="persistent-share" class="persistent-action-btn">
                            <i class="fas fa-share-alt"></i> Share
                        </button>
                    </div>
                </div>
            `);
            
            // Add other stat rows to complete the stats section
            const statsSection = document.querySelector('.stats-section');
            if (statsSection) {
                const statsToAdd = [
                    { name: 'WEAPON POWER', icon: 'weapon-power', id: 'weapon-power' },
                    { name: 'ABILITY POWER', icon: 'ability-power', id: 'ability-power' },
                    { name: 'ATTACK SPEED', icon: 'attack-speed', id: 'attack-speed' },
                    { name: 'COOLDOWN REDUCTION', icon: 'cooldown-reduction', id: 'cooldown' },
                    { name: 'MAX AMMO', icon: 'max-ammo', id: 'max-ammo' },
                    { name: 'WEAPON LIFESTEAL', icon: 'weapon-lifesteal', id: 'weapon-lifesteal' },
                    { name: 'ABILITY LIFESTEAL', icon: 'ability-lifesteal', id: 'ability-lifesteal' },
                    { name: 'MOVE SPEED', icon: 'move-speed', id: 'move-speed' },
                    { name: 'RELOAD SPEED', icon: 'reload-speed', id: 'reload-speed' },
                    { name: 'MELEE DAMAGE', icon: 'melee-damage', id: 'melee-damage' },
                    { name: 'CRITICAL DAMAGE', icon: 'critical-damage', id: 'critical-damage' }
                ];
                
                statsToAdd.forEach(stat => {
                    statsSection.insertAdjacentHTML('beforeend', `
                        <div class="stat-row">
                            <div class="stat-icon">
                                <img src="images/stats/${stat.icon}.png" alt="${stat.name}">
                            </div>
                            <div class="stat-name">${stat.name}</div>
                            <div class="stat-bar-container">
                                <div class="stat-bar" id="${stat.id}-bar"></div>
                            </div>
                            <div class="stat-value" id="${stat.id}-value">0%</div>
                        </div>
                    `);
                });
            }
            
            // Add event listeners for the buttons
            document.getElementById('persistent-save')?.addEventListener('click', saveCurrentBuild);
            document.getElementById('persistent-share')?.addEventListener('click', shareBuild);
        }
    }
    // Function to reset stats when hero changes
    function resetStats() {
        if (selectedHero) {
            currentHeroStats = JSON.parse(JSON.stringify(heroBaseStats[selectedHero]));
            statModifiers = {};
            
            // Update all stats displays
            updateAllStats();
        }
    }
    // Find this function in app.js
    function updateStatBar(id, value, maxValue = 200) {
        const bar = document.getElementById(id);
        if (bar) {
            // For ability lifesteal and similar stats, use base of 0 instead of 100
            const baseValue = id.includes('lifesteal') || id.includes('cooldown') || 
                             id.includes('reload') || id.includes('melee') ||
                             id.includes('critical') ? 0 : 100;
            
            // Calculate percentage (0-100%)
            let percentage = ((value - baseValue) / (maxValue - baseValue)) * 100;
            percentage = Math.min(100, Math.max(0, percentage)); // Clamp between 0-100
            bar.style.width = `${percentage}%`;
        }
    }
    
    // Function to parse item description and extract stat changes
    function parseItemStats(itemId, description, isAdding) {
        const multiplier = isAdding ? 1 : -1;
        
        // Clear existing stats for this item
        if (!statModifiers[itemId]) {
            statModifiers[itemId] = {};
        }
        
        // Health, Armor, Shield
        const healthMatch = description.match(/\+(\d+)\s*Health/);
        if (healthMatch) {
            statModifiers[itemId]['Health'] = parseInt(healthMatch[1]) * multiplier;
        }
        
        const armorMatch = description.match(/\+(\d+)\s*Armor/);
        if (armorMatch) {
            statModifiers[itemId]['Armor'] = parseInt(armorMatch[1]) * multiplier;
        }
        
        const shieldMatch = description.match(/\+(\d+)\s*Shield/);
        if (shieldMatch) {
            statModifiers[itemId]['Shield'] = parseInt(shieldMatch[1]) * multiplier;
        }
        
        // Percentage-based stats
        const statMatches = [
            { regex: /\+(\d+)%\s*Weapon Power/g, stat: 'Weapon Power' },
            { regex: /\+(\d+)%\s*Ability Power/g, stat: 'Ability Power' },
            { regex: /\+(\d+)%\s*Attack Speed/g, stat: 'Attack Speed' },
            { regex: /\+(\d+)%\s*Move Speed/g, stat: 'Move Speed' },
            { regex: /\+(\d+)%\s*Cooldown Reduction/g, stat: 'Cooldown Reduction' },
            { regex: /\+(\d+)%\s*Weapon Lifesteal/g, stat: 'Weapon Lifesteal' },
            { regex: /\+(\d+)%\s*Ability Lifesteal/g, stat: 'Ability Lifesteal' },
            { regex: /\+(\d+)%\s*Reload Speed/g, stat: 'Reload Speed' },
            { regex: /\+(\d+)%\s*Melee Damage/g, stat: 'Melee Damage' },
            { regex: /\+(\d+)%\s*Critical Damage/g, stat: 'Critical Damage' },
            { regex: /\+(\d+)%\s*Max Ammo/g, stat: 'Max Ammo' }
        ];
        
        statMatches.forEach(match => {
            const regex = match.regex;
            const stat = match.stat;
            
            const matches = [...description.matchAll(regex)];
            if (matches.length > 0) {
                statModifiers[itemId][stat] = parseInt(matches[0][1]) * multiplier;
            }
        });
    }
    
    // Function to find item description for an item
    function findItemDescription(itemId, itemName) {
        // First check if the item exists in the hero's items
        if (heroes[selectedHero]) {
            for (const category in heroes[selectedHero].items) {
                const foundItem = heroes[selectedHero].items[category].find(item => 
                    item.name === itemName || item.name.toLowerCase().replace(/\s/g, '-') === itemId);
                
                if (foundItem) {
                    return foundItem.description;
                }
            }
        }
        
        // Then check universal items
        for (const category in universalItems) {
            const foundItem = universalItems[category].find(item => 
                item.name === itemName || 'universal-' + item.name.toLowerCase().replace(/\s/g, '-') === itemId);
            
            if (foundItem) {
                return foundItem.description;
            }
        }
        return '';
    }
    
    // Calculate the updated stats based on base values and modifiers
    function calculateUpdatedStats() {
        // Start with base stats
        const updatedStats = {
            'Health': selectedHero ? heroes[selectedHero].health : 0,
            'Armor': selectedHero ? heroes[selectedHero].armor : 0,
            'Shield': selectedHero ? heroes[selectedHero].shield : 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0,
            'Reload Speed': 0,
            'Melee Damage': 0,
            'Critical Damage': 0,
            'Max Ammo': 100
        };
        
        // Apply all modifiers
        for (const itemId in statModifiers) {
            const modifiers = statModifiers[itemId];
            
            for (const stat in modifiers) {
                const value = modifiers[stat];
                updatedStats[stat] += value;
            }
        }
        
        // Update current stats
        currentHeroStats = updatedStats;
    }
    
    // Function to update stats when items are selected/deselected
    // Also update this function
    function updateStatsFromItems() {
        // Reset to base stats
        resetStats();
        
        // Apply modifiers from all selected items
        selectedItems.forEach(item => {
            const itemDescription = item.description || findItemDescription(item.id, item.name);
            
            if (itemDescription) {
                parseItemStats(item.id, itemDescription, true);
            }
        });
        
        // Calculate new stats
        calculateUpdatedStats();
        
        // Update all UI displays
        updateAllStats();
        
        // Update overview page if active 
        const overviewPageElement = document.getElementById('overview-page');
        if (overviewPageElement.classList.contains('active')) {
            updateOverviewPage();
        }
    }
    
    // Create and update the stats display panel
    function updateStatsDisplay() {
        const statsContainer = document.getElementById('hero-stats-panel');
        if (!statsContainer) return;
        
        if (!selectedHero) return;
        const hero = heroes[selectedHero];
        
        let statsHTML = `<h3>Current Stats</h3><div class="stats-grid">`;
        
        // Display health, armor, shield stats
        const healthValue = currentHeroStats['Health'] || hero.health;
        const armorValue = currentHeroStats['Armor'] || hero.armor;
        const shieldValue = currentHeroStats['Shield'] || hero.shield;
        
        const healthDiff = healthValue - hero.health;
        const armorDiff = armorValue - hero.armor;
        const shieldDiff = shieldValue - hero.shield;
        
        // Create tickbar for health
        const maxHealth = 500; // Base value for 100% width
        const healthPercent = Math.min(100, (healthValue / maxHealth) * 100);
        
        statsHTML += `
            <div class="stat-item ${healthDiff !== 0 ? 'modified' : ''}">
                <span class="stat-label">Health:</span>
                <div class="stat-value-container">
                    <span class="stat-value stat-health">${healthValue}${healthDiff !== 0 ? 
                        `<span class="stat-bonus">${healthDiff > 0 ? '+' : ''}${healthDiff}</span>` : ''}
                    </span>
                    <div class="stat-tickbar-container">
                        <div class="stat-tickbar stat-tickbar-health" style="width: ${healthPercent}%"></div>
                    </div>
                </div>
            </div>
        `;
        
        if (hero.armor > 0 || armorValue > 0) {
            const maxArmor = 300; // Base value for 100% width
            const armorPercent = Math.min(100, (armorValue / maxArmor) * 100);
            
            statsHTML += `
                <div class="stat-item ${armorDiff !== 0 ? 'modified' : ''}">
                    <span class="stat-label">Armor:</span>
                    <div class="stat-value-container">
                        <span class="stat-value stat-armor">${armorValue}${armorDiff !== 0 ? 
                            `<span class="stat-bonus">${armorDiff > 0 ? '+' : ''}${armorDiff}</span>` : ''}
                        </span>
                        <div class="stat-tickbar-container">
                            <div class="stat-tickbar stat-tickbar-armor" style="width: ${armorPercent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        if (hero.shield > 0 || shieldValue > 0) {
            const maxShield = 1600; // Base value for 100% width for Reinhardt's shield
            const effectiveMaxShield = hero.name === "Reinhardt" ? maxShield : 300;
            const shieldPercent = Math.min(100, (shieldValue / effectiveMaxShield) * 100);
            
            statsHTML += `
                <div class="stat-item ${shieldDiff !== 0 ? 'modified' : ''}">
                    <span class="stat-label">Shield:</span>
                    <div class="stat-value-container">
                        <span class="stat-value stat-shield">${shieldValue}${shieldDiff !== 0 ? 
                            `<span class="stat-bonus">${shieldDiff > 0 ? '+' : ''}${shieldDiff}</span>` : ''}
                        </span>
                        <div class="stat-tickbar-container">
                            <div class="stat-tickbar stat-tickbar-shield" style="width: ${shieldPercent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Add code for armor and shield display...
    // (Your existing code for these sections)
    
    // Display percentage-based stats
    const displayPercentageStats = [
        { name: 'Weapon Power', styleClass: 'stat-weapon', maxValue: 200 },
        { name: 'Ability Power', styleClass: 'stat-ability', maxValue: 200 },
        { name: 'Attack Speed', styleClass: 'stat-weapon', maxValue: 200 },
        { name: 'Move Speed', styleClass: 'stat-survival', maxValue: 150 },
        { name: 'Cooldown Reduction', styleClass: 'stat-cooldown', maxValue: 50 },
        { name: 'Weapon Lifesteal', styleClass: 'stat-weapon', maxValue: 50 },
        { name: 'Ability Lifesteal', styleClass: 'stat-ability', maxValue: 50 }
    ];
    
    displayPercentageStats.forEach(stat => {
        const baseValue = heroBaseStats[selectedHero][stat.name] || 0;
        const currentValue = currentHeroStats[stat.name] || baseValue;
        const diff = currentValue - baseValue;
        
        if (diff !== 0 || stat.name === 'Weapon Power' || stat.name === 'Ability Power') {
            const statPercent = Math.min(100, (currentValue / stat.maxValue) * 100);
            
            statsHTML += `
                <div class="stat-item ${diff !== 0 ? 'modified' : ''}">
                    <span class="stat-label">${stat.name}:</span>
                    <div class="stat-value-container">
                        <span class="stat-value ${stat.styleClass}">${currentValue}%${diff !== 0 ? 
                            `<span class="stat-bonus">${diff > 0 ? '+' : ''}${diff}%</span>` : ''}
                        </span>
                        <div class="stat-tickbar-container">
                            <div class="stat-tickbar ${stat.styleClass}-bar" style="width: ${statPercent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    statsHTML += `</div>`;
    statsContainer.innerHTML = statsHTML;
    
    // Also update the persistent stats
    updatePersistentStats();
    }
    document.addEventListener('heroSelected', function() {
        initAbilityCarousel();
        updateAllStats();
    });
    function setupRoleFilters() {
        const roleFilters = document.querySelectorAll('.role-filter');
        roleFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Set active class
                roleFilters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                
                // Filter heroes
                const role = filter.dataset.role;
                const heroCards = document.querySelectorAll('.hero-card');
                
                heroCards.forEach(card => {
                    const heroId = card.dataset.hero;
                    const hero = heroes[heroId];
                    
                    if (role === 'all' || hero.role === role) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Calculate modified ability stats based on current stat values
    // Enhanced function to calculate modified ability stats for all heroes
    function calculateModifiedAbilityStats(ability, currentStats, baseStats) {
        const modifiedStats = [];
        
        ability.stats.forEach(stat => {
            // Default values
            let baseValue = null;
            let modifiedValue = null;
            let modifier = 0;
            let contributors = [];
            let modifierType = null;
            let displayFormat = null;
            
            // Parse the stat value based on its format
            
            // 1. Pellet-based damage (e.g. "6 per pellet, 20 pellets per shot")
            if (stat.value.includes("per pellet") && stat.value.includes("pellet")) {
                const pelletMatch = /(\d+(\.\d+)?)\s*per pellet/.exec(stat.value);
                const countMatch = /(\d+(\.\d+)?)\s*pellets?/.exec(stat.value);
                
                if (pelletMatch && countMatch) {
                    const pelletDamage = parseFloat(pelletMatch[1]);
                    const pelletCount = parseFloat(countMatch[1]);
                    const totalBase = pelletDamage * pelletCount;
                    
                    displayFormat = "pellet";
                    baseValue = {
                        pellet: pelletDamage,
                        count: pelletCount,
                        total: totalBase
                    };
                    
                    // Apply modifier based on stat type
                    if (stat.label.includes("Damage")) {
                        modifierType = "Weapon Power";
                        const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                        const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                        
                        const pelletMod = pelletDamage * weaponPowerModifier;
                        const totalMod = totalBase * weaponPowerModifier;
                        
                        modifier = {
                            pellet: pelletMod,
                            total: totalMod
                        };
                        
                        modifiedValue = {
                            pellet: pelletDamage + pelletMod,
                            count: pelletCount,
                            total: totalBase + totalMod
                        };
                    }
                }
            }
            else if ((stat.label.includes("Damage") || stat.value.includes("damage")) && 
         stat.value.includes("over") && stat.value.includes("s")) {
    
    // Look for patterns like "30 damage over 3s" or "40 over 2 seconds"
    const dotMatch = /(\d+(\.\d+)?)\s*(?:damage)?\s*over\s*(\d+(\.\d+)?)\s*s(?:econds?)?/i.exec(stat.value);
    
    if (dotMatch) {
        const totalDamage = parseFloat(dotMatch[1]);
        const duration = parseFloat(dotMatch[3]);
        
        displayFormat = "dot";
        baseValue = {
            total: totalDamage,
            duration: duration,
            dps: totalDamage / duration
        };
        
        // DOT effects scale with both Weapon Power and Attack Speed
        const weaponPowerPercent = currentStats['Weapon Power'] || 100;
        const attackSpeedPercent = currentStats['Attack Speed'] || 100;
        
        // Weapon Power affects total damage
        const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
        const damageModifier = totalDamage * weaponPowerModifier;
        
        // Attack Speed affects how quickly the damage is dealt (reducing duration)
        const attackSpeedModifier = (attackSpeedPercent - 100) / 100;
        const durationModifier = -(duration * attackSpeedModifier);
        
        // Calculate new values
        const newTotalDamage = totalDamage + damageModifier;
        const newDuration = Math.max(0.1, duration + durationModifier);
        const newDps = newTotalDamage / newDuration;
        
        modifiedValue = {
            total: newTotalDamage,
            duration: newDuration,
            dps: newDps
        };
        
        modifier = {
            total: damageModifier,
            duration: durationModifier,
            dps: newDps - baseValue.dps
        };
        
        // Track both modifiers
        modifierType = {
            damage: "Weapon Power",
            duration: "Attack Speed"
        };
    }
}
            // 2. Range-based stats (e.g. "95-190 per second")
            else if (stat.value.includes("-") && !stat.value.includes("seconds")) {
                const rangeMatch = /(\d+(\.\d+)?)-(\d+(\.\d+)?)/.exec(stat.value);
                
                if (rangeMatch) {
                    const minValue = parseFloat(rangeMatch[1]);
                    const maxValue = parseFloat(rangeMatch[3]);
                    
                    displayFormat = "range";
                    baseValue = { min: minValue, max: maxValue };
                    
                    // Determine appropriate modifier
                    if (stat.label.includes("Damage")) {
                        modifierType = "Weapon Power";
                        const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                        const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                        
                        modifier = {
                            min: minValue * weaponPowerModifier,
                            max: maxValue * weaponPowerModifier
                        };
                        
                        modifiedValue = {
                            min: minValue + modifier.min,
                            max: maxValue + modifier.max
                        };
                    }
                }
            }
            // 3. Fire rate stats
            else if ((stat.label.includes("Fire Rate") || stat.label.includes("Rate of Fire")) && 
                     (stat.value.includes("per second") || stat.value.includes("rounds per second") || 
                      stat.value.includes("shots per second"))) {
                
                let rateMatch = /(\d+(\.\d+)?)\s*(shots|rounds)?\s*per second/.exec(stat.value);
                
                if (!rateMatch) {
                    // Try alternate format like "1 swing per 0.9 seconds"
                    rateMatch = /(\d+(\.\d+)?)\s*(?:swing|shot)s?\s*per\s*(\d+(\.\d+)?)\s*seconds/.exec(stat.value);
                    
                    if (rateMatch) {
                        const count = parseFloat(rateMatch[1]);
                        const time = parseFloat(rateMatch[3]);
                        baseValue = count / time; // Convert to per second
                    } 
                } else {
                    baseValue = parseFloat(rateMatch[1]);
                }
                
                if (baseValue !== null) {
                    modifierType = "Attack Speed";
                    const attackSpeedPercent = currentStats['Attack Speed'] || 100;
                    const attackSpeedModifier = (attackSpeedPercent - 100) / 100;
                    
                    modifier = baseValue * attackSpeedModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "rate";
                }
            }
            // 4. Cooldown stats
            else if (stat.label.includes("Cooldown")) {
                const cdMatch = /(\d+(\.\d+)?)\s*seconds?/.exec(stat.value);
                
                if (cdMatch) {
                    baseValue = parseFloat(cdMatch[1]);
                    
                    modifierType = "Cooldown Reduction";
                    const cooldownPercent = currentStats['Cooldown Reduction'] || 0;
                    const cooldownModifier = cooldownPercent / 100;
                    
                    modifier = -(baseValue * cooldownModifier); // Negative for reduction
                    modifiedValue = baseValue + modifier;
                    displayFormat = "cooldown";
                }
            }
            // 5. Duration stats
            else if (stat.label.includes("Duration") && !stat.label.includes("Stun") && 
                     !stat.label.includes("Sleep") && stat.value.includes("seconds")) {
                
                const durationMatch = /(\d+(\.\d+)?)\s*seconds?/.exec(stat.value);
                
                if (durationMatch) {
                    baseValue = parseFloat(durationMatch[1]);
                    
                    // Ability durations scale with Ability Power
                    modifierType = "Ability Power";
                    const abilityPowerPercent = currentStats['Ability Power'] || 100;
                    const abilityPowerModifier = (abilityPowerPercent - 100) / 100;
                    
                    modifier = baseValue * abilityPowerModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "duration";
                }
            }
            // 6. Healing over time
            else if (stat.label.includes("Healing") && stat.value.includes("over")) {
                const healMatch = /(\d+(\.\d+)?)\s*over/.exec(stat.value);
                
                if (healMatch) {
                    baseValue = parseFloat(healMatch[1]);
                    
                    modifierType = "Ability Power";
                    const abilityPowerPercent = currentStats['Ability Power'] || 100;
                    const abilityPowerModifier = (abilityPowerPercent - 100) / 100;
                    
                    modifier = baseValue * abilityPowerModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "healing";
                }
            }
            // 7. Direct + splash damage format
            else if (stat.value.includes("direct") && stat.value.includes("splash")) {
                const directMatch = /(\d+(\.\d+)?)\s*direct/.exec(stat.value);
                const splashMatch = /(\d+(\.\d+)?)\s*splash/.exec(stat.value);
                
                if (directMatch && splashMatch) {
                    const directDamage = parseFloat(directMatch[1]);
                    const splashDamage = parseFloat(splashMatch[1]);
                    
                    baseValue = { direct: directDamage, splash: splashDamage };
                    displayFormat = "directSplash";
                    
                    modifierType = "Weapon Power";
                    const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                    const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                    
                    modifier = {
                        direct: directDamage * weaponPowerModifier,
                        splash: splashDamage * weaponPowerModifier
                    };
                    
                    modifiedValue = {
                        direct: directDamage + modifier.direct,
                        splash: splashDamage + modifier.splash
                    };
                }
            }
            // 8. Damage per second
            else if (stat.value.includes("per second") && (stat.label.includes("Damage") || stat.label.includes("DPS"))) {
                const dpsMatch = /(\d+(\.\d+)?)\s*per second/.exec(stat.value);
                
                if (dpsMatch) {
                    baseValue = parseFloat(dpsMatch[1]);
                    
                    modifierType = "Weapon Power";
                    const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                    const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                    
                    modifier = baseValue * weaponPowerModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "dps";
                }
            }
            // 9. Healing per second
            else if (stat.value.includes("per second") && stat.label.includes("Healing")) {
                const hpsMatch = /(\d+(\.\d+)?)\s*per second/.exec(stat.value);
                
                if (hpsMatch) {
                    baseValue = parseFloat(hpsMatch[1]);
                    
                    modifierType = "Ability Power";
                    const abilityPowerPercent = currentStats['Ability Power'] || 100;
                    const abilityPowerModifier = (abilityPowerPercent - 100) / 100;
                    
                    modifier = baseValue * abilityPowerModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "hps";
                }
            }
            // 10. Percentage-based stats (e.g. "+50%")
            else if (stat.value.includes("%")) {
                const percentMatch = /\+?(\d+(\.\d+)?)%/.exec(stat.value);
                
                if (percentMatch) {
                    baseValue = parseFloat(percentMatch[1]);
                    displayFormat = "percentage";
                    
                    // Determine which modifier applies
                    if (stat.label.includes("Healing") || (stat.value.includes("Healing") && stat.value.includes("Boost"))) {
                        modifierType = "Ability Power";
                        const abilityPowerPercent = currentStats['Ability Power'] || 100;
                        const abilityPowerModifier = (abilityPowerPercent - 100) / 100;
                        
                        modifier = baseValue * abilityPowerModifier;
                        modifiedValue = baseValue + modifier;
                    }
                    else if (stat.label.includes("Damage")) {
                        modifierType = "Weapon Power";
                        const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                        const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                        
                        modifier = baseValue * weaponPowerModifier;
                        modifiedValue = baseValue + modifier;
                    }
                    else if (stat.label.includes("Speed")) {
                        modifierType = "Move Speed";
                        const moveSpeedPercent = currentStats['Move Speed'] || 100;
                        const moveSpeedModifier = (moveSpeedPercent - 100) / 100;
                        
                        modifier = baseValue * moveSpeedModifier;
                        modifiedValue = baseValue + modifier;
                    }
                    else {
                        // If we can't determine a specific type, don't modify
                        modifiedValue = baseValue;
                        modifier = 0;
                    }
                }
            }
            // 11. Simple damage values (e.g. "120")
            else if (stat.label.includes("Damage") && !stat.label.includes("Reduction")) {
                const damageMatch = /^(\d+(\.\d+)?)/.exec(stat.value);
                
                if (damageMatch) {
                    baseValue = parseFloat(damageMatch[1]);
                    
                    modifierType = "Weapon Power";
                    const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                    const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                    
                    modifier = baseValue * weaponPowerModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "damage";
                }
            }
            // 12. Simple healing values (e.g. "70")
            else if (stat.label.includes("Healing")) {
                const healingMatch = /^(\d+(\.\d+)?)/.exec(stat.value);
                
                if (healingMatch) {
                    baseValue = parseFloat(healingMatch[1]);
                    
                    modifierType = "Ability Power";
                    const abilityPowerPercent = currentStats['Ability Power'] || 100;
                    const abilityPowerModifier = (abilityPowerPercent - 100) / 100;
                    
                    modifier = baseValue * abilityPowerModifier;
                    modifiedValue = baseValue + modifier;
                    displayFormat = "healing";
                }
            }
            // 13. Radius/Range values - these don't generally scale with stats
            else if (stat.label.includes("Radius") || stat.label.includes("Range") || stat.label.includes("Width")) {
                const radiusMatch = /(\d+(\.\d+)?)\s*meters?/.exec(stat.value);
                
                if (radiusMatch) {
                    baseValue = parseFloat(radiusMatch[1]);
                    modifiedValue = baseValue; // No modification by default
                    displayFormat = "radius";
                }
            }
            // 14. Simple numeric values at the start that don't match other patterns
            else {
                const numericMatch = /^(\d+(\.\d+)?)/.exec(stat.value);
                if (numericMatch) {
                    baseValue = parseFloat(numericMatch[1]);
                    modifiedValue = baseValue; // No modification by default
                    displayFormat = "numeric";
                }
            }
            
            // If we have a modifier type, track contributions from items
            if (modifierType && selectedItems && selectedItems.length > 0) {
                selectedItems.forEach(item => {
                    if (statModifiers[item.id] && statModifiers[item.id][modifierType]) {
                        const itemValue = statModifiers[item.id][modifierType];
                        
                        // Different contribution calculation based on format
                        let contribution = null;
                        
                        if (displayFormat === "pellet" && baseValue && typeof baseValue.pellet === 'number') {
                            const pelletContribution = baseValue.pellet * (itemValue / 100);
                            const totalContribution = baseValue.total * (itemValue / 100);
                            contribution = { pellet: pelletContribution, total: totalContribution };
                        }
                        else if (displayFormat === "range" && baseValue && typeof baseValue.min === 'number') {
                            const minContribution = baseValue.min * (itemValue / 100);
                            const maxContribution = baseValue.max * (itemValue / 100);
                            contribution = { min: minContribution, max: maxContribution };
                        }
                        else if (displayFormat === "directSplash" && baseValue && typeof baseValue.direct === 'number') {
                            const directContribution = baseValue.direct * (itemValue / 100);
                            const splashContribution = baseValue.splash * (itemValue / 100);
                            contribution = { direct: directContribution, splash: splashContribution };
                        }
                        else if (displayFormat === "cooldown" && typeof baseValue === 'number') {
                            // Negative for cooldown reduction
                            contribution = -(baseValue * (itemValue / 100));
                        }
                        // Add this to the contributors section in calculateModifiedAbilityStats

else if (displayFormat === "dot") {
    // Track contributions for both Weapon Power and Attack Speed
    if (modifierType.damage === stat.modifierType || modifierType.duration === stat.modifierType) {
        // Get base values
        const totalDamage = baseValue.total;
        const duration = baseValue.duration;
        
        if (modifierType === "Weapon Power") {
            // Weapon Power affects total damage
            const damageContribution = totalDamage * (itemValue / 100);
            
            contributors.push({
                name: item.name,
                value: itemValue,
                aspect: "damage",
                contribution: damageContribution
            });
        }
        else if (modifierType === "Attack Speed") {
            // Attack Speed affects duration
            const durationContribution = -(duration * (itemValue / 100));
            
            contributors.push({
                name: item.name,
                value: itemValue,
                aspect: "duration",
                contribution: durationContribution
            });
        }
    }
}
                        else if (typeof baseValue === 'number') {
                            // Simple contribution
                            contribution = baseValue * (itemValue / 100);
                        }
                        
                        if (contribution !== null) {
                            contributors.push({
                                name: item.name,
                                value: itemValue,
                                contribution: contribution
                            });
                        }
                    }
                });
            }
            
            // Add the stat to our results
            modifiedStats.push({
                label: stat.label,
                baseValue: baseValue,
                modifiedValue: modifiedValue,
                displayValue: stat.value, // Original display string
                modifier: modifier,
                modifierType: modifierType,
                contributors: contributors,
                displayFormat: displayFormat
            });
        });
        
        return modifiedStats;
    }
    
    // Generate the HTML for the modified ability stats
    function generateModifiedAbilityHTML(ability, currentStats, baseStats) {
        const modifiedStats = calculateModifiedAbilityStats(ability, currentStats, baseStats);
        
        // Generate HTML for each stat
        let statsHTML = '';
        
        // Track values for DPS calculation
        let damagePerShot = null;
        let fireRate = null;
        
        modifiedStats.forEach(stat => {
            // Track values for DPS calculation
            if (stat.label.includes("Damage") && !stat.label.includes("per second") && 
                !stat.label.includes("Reduction")) {
                
                if (stat.displayFormat === "pellet" && stat.modifiedValue && typeof stat.modifiedValue.total === 'number') {
                    damagePerShot = stat.modifiedValue.total;
                } else if (typeof stat.modifiedValue === 'number') {
                    damagePerShot = stat.modifiedValue;
                }
            }
            
            if (stat.label.includes("Fire Rate") || (stat.label.includes("Rate") && 
                stat.value.includes("per second"))) {
                
                if (typeof stat.modifiedValue === 'number') {
                    fireRate = stat.modifiedValue;
                }
            }
            
            // Skip stats that don't have parseable values
            if (stat.baseValue === null) {
                statsHTML += `
                    <div class="ability-stat">
                        <label>${stat.label}:</label>
                        <span>${stat.displayValue}</span>
                    </div>
                `;
                return;
            }
            
            // Color-code the stat based on type
            let valueClass = '';
            if (stat.label.includes("Damage")) {
                valueClass = 'stat-damage';
            } else if (stat.label.includes("Healing")) {
                valueClass = 'stat-healing';
            } else if (stat.label.includes("Cooldown")) {
                valueClass = 'stat-cooldown';
            } else if (stat.label.includes("Duration")) {
                valueClass = 'stat-ability';
            }
            
            // Format the display text based on stat type
            let displayText = '';
            let hasModification = false;
            let modifierHTML = '';
            
            try {
                // Different handling based on display format
                if (stat.displayFormat === "pellet" && stat.modifiedValue && typeof stat.modifiedValue.pellet === 'number') {
                    displayText = `${stat.modifiedValue.pellet.toFixed(1)} per pellet, ${stat.modifiedValue.count} pellets`;
                    
                    if (typeof stat.modifiedValue.total === 'number') {
                        displayText += ` (${stat.modifiedValue.total.toFixed(1)} total)`;
                    }
                    
                    if (stat.modifier && typeof stat.modifier.pellet === 'number' && Math.abs(stat.modifier.pellet) > 0.01) {
                        hasModification = true;
                        modifierHTML = `
                            <span class="modifier ${stat.modifier.pellet >= 0 ? 'positive' : 'negative'}">
                                (${stat.modifier.pellet > 0 ? '+' : ''}${stat.modifier.pellet.toFixed(1)} per pellet)
                            </span>`;
                    }
                }
                else if (stat.displayFormat === "dot" && stat.modifiedValue && 
                    typeof stat.modifiedValue.total === 'number' && 
                    typeof stat.modifiedValue.duration === 'number') {
               
               displayText = `${stat.modifiedValue.total.toFixed(1)} damage over ${stat.modifiedValue.duration.toFixed(1)}s (${stat.modifiedValue.dps.toFixed(1)} DPS)`;
               
               // Check for significant modifications
               if ((typeof stat.modifier.total === 'number' && Math.abs(stat.modifier.total) > 0.01) || 
                   (typeof stat.modifier.duration === 'number' && Math.abs(stat.modifier.duration) > 0.01)) {
                   
                   hasModification = true;
                   modifierHTML = `
                       <span class="modifier ${stat.modifier.total >= 0 ? 'positive' : 'negative'}">
                           (${stat.modifier.total > 0 ? '+' : ''}${stat.modifier.total.toFixed(1)} damage, 
                           ${stat.modifier.duration > 0 ? '+' : ''}${stat.modifier.duration.toFixed(1)}s duration)
                       </span>`;
               }
               
               // Create formula explanation
               formulaHTML = `
                   Base damage: ${stat.baseValue.total.toFixed(1)} × ${stat.modifierType.damage} (${currentStats[stat.modifierType.damage]}%) = ${stat.modifiedValue.total.toFixed(1)}<br>
                   Base duration: ${stat.baseValue.duration.toFixed(1)}s affected by ${stat.modifierType.duration} (${currentStats[stat.modifierType.duration]}%) = ${stat.modifiedValue.duration.toFixed(1)}s<br>
                   New DPS: ${stat.modifiedValue.dps.toFixed(1)} (${stat.modifier.dps > 0 ? '+' : ''}${stat.modifier.dps.toFixed(1)} DPS change)
               `;
           }
                else if (stat.displayFormat === "range" && stat.modifiedValue && 
                         typeof stat.modifiedValue.min === 'number' && typeof stat.modifiedValue.max === 'number') {
                    
                    displayText = `${stat.modifiedValue.min.toFixed(1)}-${stat.modifiedValue.max.toFixed(1)}`;
                    
                    // Add the rest of the original text after the range
                    const originalSuffix = stat.displayValue.split('-')[1].trim();
                    if (originalSuffix) {
                        const suffixStart = originalSuffix.indexOf(' ');
                        if (suffixStart > 0) {
                            displayText += ` ${originalSuffix.substring(suffixStart)}`;
                        }
                    }
                    
                    if (stat.modifier && typeof stat.modifier.min === 'number' && 
                        (Math.abs(stat.modifier.min) > 0.01 || Math.abs(stat.modifier.max) > 0.01)) {
                        
                        hasModification = true;
                        modifierHTML = `
                            <span class="modifier ${stat.modifier.min >= 0 ? 'positive' : 'negative'}">
                                (${stat.modifier.min > 0 ? '+' : ''}${stat.modifier.min.toFixed(1)} to ${stat.modifier.max > 0 ? '+' : ''}${stat.modifier.max.toFixed(1)})
                            </span>`;
                    }
                }
                else if (stat.displayFormat === "directSplash" && stat.modifiedValue && 
                         typeof stat.modifiedValue.direct === 'number' && typeof stat.modifiedValue.splash === 'number') {
                    
                    displayText = `${stat.modifiedValue.direct.toFixed(1)} direct, ${stat.modifiedValue.splash.toFixed(1)} splash`;
                    
                    if (stat.modifier && typeof stat.modifier.direct === 'number' && 
                        (Math.abs(stat.modifier.direct) > 0.01 || Math.abs(stat.modifier.splash) > 0.01)) {
                        
                        hasModification = true;
                        modifierHTML = `
                            <span class="modifier ${stat.modifier.direct >= 0 ? 'positive' : 'negative'}">
                                (${stat.modifier.direct > 0 ? '+' : ''}${stat.modifier.direct.toFixed(1)} direct, ${stat.modifier.splash > 0 ? '+' : ''}${stat.modifier.splash.toFixed(1)} splash)
                            </span>`;
                    }
                }
                else if (typeof stat.modifiedValue === 'number' && typeof stat.baseValue === 'number') {
                    // Handle simple numeric values
                    // Create a modified display by replacing the original number
                    const originalText = stat.displayValue;
                    displayText = originalText.replace(/\d+(\.\d+)?/, stat.modifiedValue.toFixed(1));
                    
                    // Add modifier display if there is a significant change
                    if (typeof stat.modifier === 'number' && Math.abs(stat.modifier) > 0.01) {
                        hasModification = true;
                        modifierHTML = `
                            <span class="modifier ${stat.modifier >= 0 ? 'positive' : 'negative'}">
                                (${stat.modifier > 0 ? '+' : ''}${stat.modifier.toFixed(1)})
                            </span>`;
                    }
                }
                else {
                    // Fallback to original display
                    displayText = stat.displayValue;
                }
            } catch (error) {
                // If any error occurs during formatting, just use the original value
                console.error(`Error formatting stat: ${stat.label}`, error);
                displayText = stat.displayValue;
            }
            
            // Create contributors HTML if we have any
            let contributorsHTML = '';
            if (hasModification && stat.contributors && stat.contributors.length > 0) {
                contributorsHTML = `
                    <div class="stat-contributors">
                        <div class="contributors-title">Contributions from:</div>
                `;
                
                stat.contributors.forEach(contributor => {
                    try {
                        // Different formatting based on contribution type
                        if (stat.displayFormat === "pellet" && typeof contributor.contribution === 'object') {
                            contributorsHTML += `
                                <div class="contributor">
                                    <span class="contributor-name">${contributor.name}:</span>
                                    <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}%</span>
                                    <span class="contributor-result">(${contributor.contribution.pellet > 0 ? '+' : ''}${contributor.contribution.pellet.toFixed(1)} per pellet)</span>
                                </div>
                            `;
                        }
                        else if (stat.displayFormat === "range" && typeof contributor.contribution === 'object') {
                            contributorsHTML += `
                                <div class="contributor">
                                    <span class="contributor-name">${contributor.name}:</span>
                                    <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}%</span>
                                    <span class="contributor-result">(${contributor.contribution.min > 0 ? '+' : ''}${contributor.contribution.min.toFixed(1)} to ${contributor.contribution.max > 0 ? '+' : ''}${contributor.contribution.max.toFixed(1)})</span>
                                </div>
                            `;
                        }
                        else if (stat.displayFormat === "directSplash" && typeof contributor.contribution === 'object') {
                            contributorsHTML += `
                                <div class="contributor">
                                    <span class="contributor-name">${contributor.name}:</span>
                                    <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}%</span>
                                    <span class="contributor-result">(${contributor.contribution.direct > 0 ? '+' : ''}${contributor.contribution.direct.toFixed(1)} direct, ${contributor.contribution.splash > 0 ? '+' : ''}${contributor.contribution.splash.toFixed(1)} splash)</span>
                                </div>
                            `;
                        }
                        // Add this case to the contributorsHTML generation in generateModifiedAbilityHTML

else if (stat.displayFormat === "dot") {
    // Show different contributions based on aspect
    if (contributor.aspect === "damage") {
        contributorsHTML += `
            <div class="contributor">
                <span class="contributor-name">${contributor.name}:</span>
                <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}% ${contributor.aspect}</span>
                <span class="contributor-result">(${contributor.contribution > 0 ? '+' : ''}${contributor.contribution.toFixed(1)} damage)</span>
            </div>
        `;
    } else {
        contributorsHTML += `
            <div class="contributor">
                <span class="contributor-name">${contributor.name}:</span>
                <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}% ${contributor.aspect}</span>
                <span class="contributor-result">(${contributor.contribution > 0 ? '+' : ''}${contributor.contribution.toFixed(1)}s duration)</span>
            </div>
        `;
    }
}
                        else if (typeof contributor.contribution === 'number') {
                            contributorsHTML += `
                                <div class="contributor">
                                    <span class="contributor-name">${contributor.name}:</span>
                                    <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}%</span>
                                    <span class="contributor-result">(${contributor.contribution > 0 ? '+' : ''}${contributor.contribution.toFixed(1)})</span>
                                </div>
                            `;
                        }
                    } catch (error) {
                        // Skip this contributor if there's an error
                        console.error(`Error formatting contributor: ${contributor.name}`, error);
                    }
                });
                
                contributorsHTML += `</div>`;
            }
            
            // Create formula explanation
            let formulaHTML = '';
            try {
                if (hasModification) {
                    if (stat.displayFormat === "pellet" && stat.baseValue && typeof stat.baseValue.pellet === 'number') {
                        formulaHTML = `Base damage per pellet (${stat.baseValue.pellet.toFixed(1)}) × ${stat.modifierType} modifier (${(currentStats[stat.modifierType] / 100).toFixed(2)}) = ${stat.modifiedValue.pellet.toFixed(1)} per pellet`;
                    }
                    else if (stat.displayFormat === "range" && stat.baseValue && typeof stat.baseValue.min === 'number') {
                        formulaHTML = `Base range (${stat.baseValue.min.toFixed(1)}-${stat.baseValue.max.toFixed(1)}) × ${stat.modifierType} modifier (${(currentStats[stat.modifierType] / 100).toFixed(2)})`;
                    }
                    else if (stat.displayFormat === "directSplash" && stat.baseValue && typeof stat.baseValue.direct === 'number') {
                        formulaHTML = `Base (${stat.baseValue.direct.toFixed(1)} direct, ${stat.baseValue.splash.toFixed(1)} splash) × ${stat.modifierType} modifier (${(currentStats[stat.modifierType] / 100).toFixed(2)})`;
                    }
                    else if (stat.displayFormat === "cooldown" && typeof stat.baseValue === 'number') {
                        formulaHTML = `Base cooldown (${stat.baseValue.toFixed(1)}s) × (1 - ${stat.modifierType} (${currentStats[stat.modifierType]}%)) = ${stat.modifiedValue.toFixed(1)}s`;
                    }
                    else if (typeof stat.baseValue === 'number') {
                        formulaHTML = `Base value (${stat.baseValue.toFixed(1)}) × ${stat.modifierType} modifier (${(currentStats[stat.modifierType] / 100).toFixed(2)}) = ${stat.modifiedValue.toFixed(1)}`;
                    }
                }
            } catch (error) {
                console.error(`Error generating formula for stat: ${stat.label}`, error);
                formulaHTML = `Modified by ${stat.modifierType} (${currentStats[stat.modifierType]}%)`;
            }
            
            // Generate the final HTML
            if (hasModification) {
                statsHTML += `
                    <div class="ability-stat expandable">
                        <label>${stat.label}:</label>
                        <div class="stat-value-container">
                            <span class="base-value ${valueClass}">${displayText}</span>
                            ${modifierHTML}
                            <button class="expand-btn" title="Show details">↓</button>
                            <div class="stat-details">
                                <div class="stat-formula">${formulaHTML}</div>
                                ${contributorsHTML}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // No modification, show simple stat
                statsHTML += `
                    <div class="ability-stat">
                        <label>${stat.label}:</label>
                        <span class="${valueClass}">${displayText}</span>
                    </div>
                `;
            }
        });
        
        // Add DPS calculation if we have both damage and fire rate
        if (damagePerShot !== null && fireRate !== null) {
            const dps = damagePerShot * fireRate;
            statsHTML += `
                <div class="ability-stat dps-calculation">
                    <label>Effective DPS:</label>
                    <span class="stat-damage">${dps.toFixed(1)}</span>
                    <span class="dps-formula">(${damagePerShot.toFixed(1)} damage × ${fireRate.toFixed(2)} shots/sec)</span>
                </div>
            `;
        }
        
        return statsHTML;
    }
    // Find the function that handles ability carousel rendering
function updatePersistentAbilityStats() {
    const abilityCarousel = document.getElementById('ability-carousel');
    if (!abilityCarousel || !selectedHero) return;
    
    abilityCarousel.innerHTML = '';
    
    // Get hero abilities
    const hero = heroes[selectedHero];
    
    // Loop through abilities and create slides
    hero.abilities.forEach((ability, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `ability-slide ${index === 0 ? 'active' : ''}`;
        slide.setAttribute('data-index', index);
        
        // Get ability icon
        const abilityIconPath = getAbilityIconPath(hero.name, ability.name);
        
        // Generate enhanced stats HTML using our improved function
        const statsHTML = generateModifiedAbilityHTML(ability, currentHeroStats, heroBaseStats[selectedHero]);
        
        // Create slide content
        slide.innerHTML = `
            <div class="ability-header">
                <div class="ability-icon">
                    <img src="${abilityIconPath}" alt="${ability.name}" 
                        onerror="this.parentNode.innerHTML='${ability.name.charAt(0)}'"/>
                </div>
                <div class="ability-name">${ability.name}</div>
            </div>
            <div class="ability-description">${ability.description}</div>
            <div class="ability-stats">
                ${statsHTML}
            </div>
        `;
        
        abilityCarousel.appendChild(slide);
        
        // Also update indicator dots
        const indicator = document.getElementById('ability-indicator');
        if (indicator) {
            indicator.innerHTML = '';
            
            for (let i = 0; i < hero.abilities.length; i++) {
                const dot = document.createElement('div');
                dot.className = `indicator-dot ${i === 0 ? 'active' : ''}`;
                dot.setAttribute('data-index', i);
                dot.addEventListener('click', () => showAbilitySlide(i));
                indicator.appendChild(dot);
            }
        }
    });
    
    // Setup expandable stat details
    setupExpandableStats();
    initAbilityCarousel();
}
    
    // Function to update the Overview page 
    function updateOverviewPage() {
        const overviewPage = document.getElementById('overview-page');
        if (!overviewPage) return;
        
        const hero = heroes[selectedHero];
        if (!hero) return;
        
        // Get role-specific CSS class
        let roleBadgeClass = '';
        if (hero.role === 'Tank') {
            roleBadgeClass = 'tank-badge';
        } else if (hero.role === 'Damage') {
            roleBadgeClass = 'damage-badge';
        } else if (hero.role === 'Support') {
            roleBadgeClass = 'support-badge';
        }
        
        // Get hero icon path
        const heroImagePath = getHeroIconPath(hero.name);
        
        // Start building the overview content
        let overviewHTML = `
            <div class="overview-container">
                <div class="hero-profile">
                    <img src="${heroImagePath}" alt="${hero.name}" 
                        onerror="this.src='https://placehold.co/300x400/0088FF/FFFFFF?text=${hero.name}'" />
                    <h2>${hero.name}</h2>
                    <div class="role-badge ${roleBadgeClass}">${hero.role}</div>
                    
                    <!-- Stats Panel -->
                    <div id="hero-stats-panel" class="stats-panel">
                        <h3>Current Stats</h3>
                        <div class="stats-grid">
                            <!-- Stats will be dynamically updated here -->
                        </div>
                    </div>
                </div>
                
                <div class="hero-detail-wrapper">
                    <!-- Hero Abilities Section -->
                    <div class="hero-abilities">
                        <h3 class="section-title">
                            <i class="fas fa-fire"></i> Hero Abilities
                        </h3>
        `;
        
        // Add each ability with icons and modified stats
        hero.abilities.forEach(ability => {
            // Get ability icon
            const abilityIconPath = getAbilityIconPath(hero.name, ability.name);
            
            // Generate modified ability stats HTML
            const statsHTML = generateModifiedAbilityHTML(ability, currentHeroStats, heroBaseStats[selectedHero]);
            
            overviewHTML += `
                <div class="ability">
                    <div class="ability-header">
                        <div class="ability-icon">
                            <img src="${abilityIconPath}" alt="${ability.name}" 
                                onerror="this.parentNode.innerHTML='${ability.name.charAt(0)}'"/>
                        </div>
                        <div class="ability-name">${ability.name}</div>
                    </div>
                    <div class="ability-description">${ability.description}</div>
                    <div class="ability-stats">
                        ${statsHTML}
                    </div>
                </div>
            `;
        });
        
        // Close the hero abilities div and hero detail wrapper
        overviewHTML += `
                    </div>
                </div>
            </div>
        `;
        
        // Update the overview page content
        overviewPage.innerHTML = overviewHTML;
        
        // Update the stats display
        updateAllStats();
        
        // Set up expandable stats
        setupExpandableStats();
    }
    
    // Function to add event listeners to expandable stats
    function setupExpandableStats() {
        document.querySelectorAll('.ability-stat.expandable').forEach(statElement => {
            if (statElement.querySelector('.expand-btn')) {
                statElement.querySelector('.expand-btn').addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent the stat element click from triggering
                    statElement.classList.toggle('expanded');
                    
                    // Close other expanded stats
                    document.querySelectorAll('.ability-stat.expanded').forEach(stat => {
                        if (stat !== statElement) {
                            stat.classList.remove('expanded');
                        }
                    });
                });
            }
        });
    }
    
    // Function to apply color highlighting to power descriptions
    function colorizePowerDescription(description) {
        if (!description) return '';
        
        let coloredDesc = description;
        
        // Highlight ability names in brackets
        coloredDesc = coloredDesc.replace(/\[([^\]]+)\]/g, '[<span class="stat-ability">$1</span>]');
        
        // Highlight percentage values
        coloredDesc = coloredDesc.replace(/(\d+)%/g, '<span class="stat-cooldown">$1%</span>');
        
        // Highlight time values (seconds)
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)s/g, '<span class="stat-cooldown">$1s</span>');
        
        // Highlight distance values (meters)
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)m/g, '<span class="stat-cooldown">$1m</span>');
        
        // Highlight damage values
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)\s*damage/gi, '<span class="stat-damage">$1</span> damage');
        
        // Highlight healing values
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)\s*healing/gi, '<span class="stat-healing">$1</span> healing');
        coloredDesc = coloredDesc.replace(/heal\s*(\d+\.?\d*)/gi, 'heal <span class="stat-healing">$1</span>');
        
        return coloredDesc;
    }
    
    // Function to colorize item descriptions
    function colorizeDescription(description) {
        if (!description) return '';
        
        let coloredDesc = description;
        
        // Color Health values
        coloredDesc = coloredDesc.replace(/\+(\d+)\s*Health/g, '+<span class="stat-health">$1</span> Health');
        
        // Color Armor values
        coloredDesc = coloredDesc.replace(/\+(\d+)\s*Armor/g, '+<span class="stat-armor">$1</span> Armor');
        
        // Color Shield values
        coloredDesc = coloredDesc.replace(/\+(\d+)\s*Shield/g, '+<span class="stat-shield">$1</span> Shield');
        
        // Color Weapon Power values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Weapon Power/g, '+<span class="stat-weapon">$1%</span> Weapon Power');
        
        // Color Ability Power values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Ability Power/g, '+<span class="stat-ability">$1%</span> Ability Power');
        
        // Color Attack Speed values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Attack Speed/g, '+<span class="stat-weapon">$1%</span> Attack Speed');
        
        // Color Move Speed values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Move Speed/g, '+<span class="stat-survival">$1%</span> Move Speed');
        
        // Color Cooldown Reduction values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Cooldown Reduction/g, '+<span class="stat-cooldown">$1%</span> Cooldown Reduction');
        
        // Color Lifesteal values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Lifesteal/g, '+<span class="stat-health">$1%</span> Lifesteal');
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Weapon Lifesteal/g, '+<span class="stat-weapon">$1%</span> Weapon Lifesteal');
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Ability Lifesteal/g, '+<span class="stat-ability">$1%</span> Ability Lifesteal');
        
        // Color specific ability names (within brackets like [Rocket Hammer])
        coloredDesc = coloredDesc.replace(/\[([^\]]+)\]/g, '[<span class="stat-ability">$1</span>]');
        
        return coloredDesc;
    }
    
    // Create the item card with PNG image and error handling
    function createItemCard(item, category, isUniversal = false) {
        const itemId = isUniversal ? 'universal-' + item.name.toLowerCase().replace(/\s/g, '-') : item.name.toLowerCase().replace(/\s/g, '-');
        const iconFileName = getIconFileName(item.name);
        
        // Create colored description
        let coloredDescription = colorizeDescription(item.description);
        
        return `
            <div class="item-card" data-item="${itemId}" data-cost="${item.cost}" data-category="${category}" data-name="${item.name}" data-description="${encodeURIComponent(item.description)}">
                <div class="item-header">
                    <div class="item-icon">
                        <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                    </div>
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-cost">${item.cost}</div>
                    </div>
                </div>
                <div class="item-description">${coloredDescription}</div>
            </div>
        `;
    }
    
    // Create power card with PNG image and error handling
    function createPowerCard(power) {
        const powerId = power.name.toLowerCase().replace(/\s/g, '-');
        const iconFileName = getPowerIconFileName(power.name);
        
        // Create colored description
        let coloredDescription = colorizePowerDescription(power.description);
        
        return `
            <div class="power-card" data-power="${powerId}" data-name="${power.name}">
                <div class="power-header">
                    <div class="power-icon">
                        <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                    </div>
                    <div class="power-name">${power.name}</div>
                </div>
                <div class="power-description">${coloredDescription}</div>
            </div>
        `;
    }
    
    // Display hero details
    function displayHeroDetails(heroId) {
        // Ensure the persistent build summary exists before proceeding
        ensurePersistentBuildSummary();
        selectedHero = heroId;
        selectedPowers = [];
        selectedItems = [];
        
        const hero = heroes[heroId];
        if (!hero) return;
        
        // Reset stats
        resetStats();
        
        // Show hero builder container
        heroInfo.style.display = 'none';
        heroBuilder.style.display = 'block';
        
        // Generate Powers Page
        let powersHTML = `
            <h2 class="page-title">Powers Selection</h2>
            <p class="section-description">Powers are transformative modifiers that grant unique passives or entirely new abilities. Select up to 4 powers for your build.</p>
            <div class="powers-grid">
        `;
        
        hero.powers.forEach(power => {
            powersHTML += createPowerCard(power);
        });
        
        powersHTML += '</div>';
        powersPage.innerHTML = powersHTML;
        
        // Generate Hero Items Page
        let heroItemsHTML = `
            <h2 class="page-title">Hero-Specific Items</h2>
            <p class="section-description">Items designed specifically for ${hero.name}. Select up to 6 items total for your build.</p>
        `;
        
        ['weapon', 'ability', 'survival'].forEach(category => {
            const categoryTitleClass = `category-title-${category}`;
            heroItemsHTML += `
                <div class="item-category item-category-${category}">
                    <div class="category-title ${categoryTitleClass}">${category.charAt(0).toUpperCase() + category.slice(1)} Items</div>
                    <div class="items-grid">
            `;
            
            hero.items[category].forEach(item => {
                heroItemsHTML += createItemCard(item, category);
            });
            
            heroItemsHTML += `
                    </div>
                </div>
            `;
        });
        
        heroItemsPage.innerHTML = heroItemsHTML;
        
        // Generate Universal Items Page
        let universalItemsHTML = `
            <h2 class="page-title">Universal Items</h2>
            <p class="section-description">Items available to all heroes. Select up to 6 items total for your build.</p>
        `;
        
        ['weapon', 'ability', 'survival'].forEach(category => {
            const categoryTitleClass = `category-title-${category}`;
            universalItemsHTML += `
                <div class="item-category item-category-${category}">
                    <div class="category-title ${categoryTitleClass}">Universal ${category.charAt(0).toUpperCase() + category.slice(1)} Items</div>
                    <div class="items-grid">
            `;
            
            universalItems[category].forEach(item => {
                universalItemsHTML += createItemCard(item, category, true);
            });
            
            universalItemsHTML += `
                    </div>
                </div>
            `;
        });
        
        universalItemsPage.innerHTML = universalItemsHTML;
        updatePersistentBuildSummary();
        updatePersistentStats();
        
        // Setup event listeners for tabs, items and powers
        setupTabNavigation();
        setupSelectionListeners();
        
        // Initialize the stats display
        updateAllStats();
        updateStatsDisplay();
        
        // Set up image error handlers
        setupImageErrorHandlers();
        
        // Setup build management functionality
        setupBuildManagement();
        
        // Initialize ability statistics
        initAbilityCarousel();
        updateAbilityStats();
        
        // Trigger an event to notify that a hero has been selected
        document.dispatchEvent(new CustomEvent('heroSelected', { detail: { heroId: heroId } }));
    }
    
    // Set up selection listeners for powers and items
    function setupSelectionListeners() {
        // Power selection
        const powerCards = document.querySelectorAll('.power-card');
        powerCards.forEach(card => {
            card.addEventListener('click', () => {
                const powerId = card.dataset.power;
                const powerName = card.dataset.name;
                
                if (card.classList.contains('selected')) {
                    // Deselect
                    card.classList.remove('selected');
                    selectedPowers = selectedPowers.filter(power => power.id !== powerId);
                } else {
                    // Select if we haven't reached the limit
                    if (selectedPowers.length < 4) {
                        card.classList.add('selected');
                        selectedPowers.push({
                            id: powerId,
                            name: powerName
                        });
                    } else {
                        alert('You can only select up to 4 Powers.');
                    }
                }
                
                updateSelectionSummary();
            });
        });
        
        // Item selection
        const itemCards = document.querySelectorAll('.item-card');
        itemCards.forEach(card => {
            card.addEventListener('click', () => {
                const itemId = card.dataset.item;
                const itemName = card.dataset.name;
                const itemCost = parseInt(card.dataset.cost);
                const itemCategory = card.dataset.category;
                const itemDescription = decodeURIComponent(card.dataset.description || '');
                
                if (card.classList.contains('selected')) {
                    // Deselect
                    card.classList.remove('selected');
                    selectedItems = selectedItems.filter(item => item.id !== itemId);
                } else {
                    // Select if we haven't reached the limit
                    if (selectedItems.length < 6) {
                        card.classList.add('selected');
                        selectedItems.push({
                            id: itemId,
                            name: itemName,
                            cost: itemCost,
                            category: itemCategory,
                            description: itemDescription
                        });
                    } else {
                        alert('You can only select up to 6 Items.');
                    }
                }
                
                updateSelectionSummary();
                // Trigger stats update
                updateStatsFromItems();
            });
        });
        
        // Share build button
        shareBtn.addEventListener('click', shareBuild);
    }
    // Add to app.js - Enhanced ability statistics calculation
function updatePersistentAbilityStats() {
    const abilitiesList = document.getElementById('persistent-abilities-list');
    if (!abilitiesList || !selectedHero) return;
    
    abilitiesList.innerHTML = '';
    
    // Get hero abilities
    const hero = heroes[selectedHero];
    
    // Current stat modifiers
    const weaponPowerMod = (currentHeroStats['Weapon Power'] || 100) / 100;
    const abilityPowerMod = (currentHeroStats['Ability Power'] || 100) / 100;
    const attackSpeedMod = (currentHeroStats['Attack Speed'] || 100) / 100;
    const cooldownMod = 1 - ((currentHeroStats['Cooldown Reduction'] || 0) / 100);
    
    // Process each ability
    hero.abilities.forEach(ability => {
        const abilityEl = document.createElement('div');
        abilityEl.className = 'persistent-ability-item';
        
        // Ability header with icon
        const abilityIcon = getAbilityIconPath(hero.name, ability.name);
        
        let abilityHTML = `
            <div class="persistent-ability-header">
                <div class="persistent-ability-icon">
                    <img src="${abilityIcon}" alt="${ability.name}" onerror="this.src='images/ability-placeholder.png'">
                </div>
                <div class="persistent-ability-name">${ability.name}</div>
            </div>
            <div class="persistent-ability-stats">
        `;
        
        // Process ability stats
        let damagePerShot = 0;
        let attacksPerSecond = 0;
        let cooldownTime = 0;
        let hasDamageStats = false;
        let hasAttackSpeedStats = false;
        
        ability.stats.forEach(stat => {
            // Try to extract numeric values
            const numMatch = stat.value.match(/(\d+(\.\d+)?)/);
            
            if (numMatch) {
                const baseValue = parseFloat(numMatch[1]);
                let modifiedValue = baseValue;
                let modifier = 0;
                let isModified = false;
                
                // Apply modifiers based on stat type
                if (stat.label.includes('Damage')) {
                    modifiedValue = baseValue * weaponPowerMod;
                    modifier = modifiedValue - baseValue;
                    isModified = Math.abs(modifier) > 0.01;
                    
                    // Track for DPS calculation
                    if (stat.label.includes('per shot') || !stat.label.includes('per')) {
                        damagePerShot = modifiedValue;
                        hasDamageStats = true;
                    }
                } 
                else if (stat.label.includes('Healing')) {
                    modifiedValue = baseValue * abilityPowerMod;
                    modifier = modifiedValue - baseValue;
                    isModified = Math.abs(modifier) > 0.01;
                } 
                else if (stat.label.includes('Cooldown')) {
                    modifiedValue = baseValue * cooldownMod;
                    modifier = modifiedValue - baseValue;
                    isModified = Math.abs(modifier) > 0.01;
                    cooldownTime = modifiedValue;
                }
                else if (stat.label.includes('Fire Rate') || stat.label.includes('per second')) {
                    modifiedValue = baseValue * attackSpeedMod;
                    modifier = modifiedValue - baseValue;
                    isModified = Math.abs(modifier) > 0.01;
                    attacksPerSecond = modifiedValue;
                    hasAttackSpeedStats = true;
                }
                
                // Format values
                const formattedBase = baseValue.toFixed(1).replace(/\.0$/, '');
                const formattedMod = modifier.toFixed(1).replace(/\.0$/, '');
                const formattedValue = modifiedValue.toFixed(1).replace(/\.0$/, '');
                
                // Create stat HTML
                const statClass = isModified ? 'persistent-ability-stat modified' : 'persistent-ability-stat';
                const modifierHTML = isModified ? 
                    `<span class="stat-bonus ${modifier >= 0 ? 'positive' : 'negative'}">(${modifier >= 0 ? '+' : ''}${formattedMod})</span>` : '';
                
                abilityHTML += `
                    <div class="${statClass}">
                        <div class="ability-stat-label">${stat.label}</div>
                        <div class="ability-stat-value">
                            ${formattedValue} ${modifierHTML}
                        </div>
                    </div>
                `;
            } else {
                // Non-numeric stat
                abilityHTML += `
                    <div class="persistent-ability-stat">
                        <div class="ability-stat-label">${stat.label}</div>
                        <div class="ability-stat-value">${stat.value}</div>
                    </div>
                `;
            }
        });
        
        abilityHTML += `</div>`;
        
        // Add DPS calculation if we have both damage and attack speed
        if (hasDamageStats && hasAttackSpeedStats) {
            const dps = damagePerShot * attacksPerSecond;
            abilityHTML += `
                <div class="dps-calculation">
                    <span class="dps-label">Effective DPS:</span>
                    <span class="dps-value">${dps.toFixed(1)}</span>
                    <div class="dps-formula">${damagePerShot.toFixed(1)} damage × ${attacksPerSecond.toFixed(2)} attacks/sec</div>
                </div>
            `;
        }
        // Add time-to-kill calculation for ultimate abilities
        else if (ability.name.includes('Ultimate') && damagePerShot > 0) {
            // Assuming 200 HP target for calculation
            const targetHP = 200;
            const timeToKill = targetHP / damagePerShot;
            
            abilityHTML += `
                <div class="dps-calculation">
                    <span class="dps-label">Time to Kill (200 HP):</span>
                    <span class="dps-value">${timeToKill.toFixed(2)} seconds</span>
                </div>
            `;
        }
        
        abilityEl.innerHTML = abilityHTML;
        abilitiesList.appendChild(abilityEl);
    });
}

    
    // Update selection summary
    function updateSelectionSummary() {
        const powersCounter = document.getElementById('powers-counter');
        const itemsCounter = document.getElementById('items-counter');
        const totalCostDisplay = document.getElementById('total-cost');
        const selectedPowersList = document.getElementById('selected-powers-list');
        const selectedItemsList = document.getElementById('selected-items-list');
        
        // Update counters
        powersCounter.textContent = selectedPowers.length;
        itemsCounter.textContent = selectedItems.length;
        
        // Calculate total cost
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        totalCostDisplay.textContent = totalCost;
        
        // Update selected powers list with icons
        if (selectedPowers.length === 0) {
            selectedPowersList.innerHTML = '<div class="empty-selection">No powers selected yet</div>';
        } else {
            selectedPowersList.innerHTML = '';
            selectedPowers.forEach(power => {
                const iconFileName = getPowerIconFileName(power.name);
                const powerElement = document.createElement('div');
                powerElement.className = 'summary-item';
                powerElement.dataset.id = power.id;
                powerElement.innerHTML = `
                    <div class="summary-item-icon">
                        <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                    </div>
                    ${power.name}
                    <span class="remove-btn" data-remove-power="${power.id}">✕</span>
                `;
                selectedPowersList.appendChild(powerElement);
            });
            
            // Add remove event listeners
            document.querySelectorAll('[data-remove-power]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const powerId = btn.dataset.removePower;
                    removePower(powerId);
                });
            });
            updatePersistentBuildSummary();
            updatePersistentStats();
        }
        
        // Update selected items list with icons
        if (selectedItems.length === 0) {
            selectedItemsList.innerHTML = '<div class="empty-selection">No items selected yet</div>';
        } else {
            selectedItemsList.innerHTML = '';
            selectedItems.forEach(item => {
                const iconFileName = getIconFileName(item.name);
                const itemElement = document.createElement('div');
                itemElement.className = 'summary-item';
                itemElement.dataset.id = item.id;
                itemElement.innerHTML = `
                    <div class="summary-item-icon">
                        <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                    </div>
                    ${item.name} (<span class="item-cost">${item.cost}</span>)
                    <span class="remove-btn" data-remove-item="${item.id}">✕</span>
                `;
                selectedItemsList.appendChild(itemElement);
            });
            
            // Add remove event listeners
            document.querySelectorAll('[data-remove-item]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const itemId = btn.dataset.removeItem;
                    removeItem(itemId);
                });
            });
        }
        
        // Set up image error handlers for new images
        setupImageErrorHandlers();
        updateStatsFromItems();
    updateAbilityStats();
    updatePersistentBuildSummary();
    updatePersistentStats();
    updatePersistentAbilityStats();
    }
    function updatePersistentLists() {
        const persistentPowersList = document.getElementById('persistent-powers-list');
        const persistentItemsList = document.getElementById('persistent-items-list');
        
        if (persistentPowersList) {
            if (selectedPowers.length === 0) {
                persistentPowersList.innerHTML = '<div class="empty-selection">No powers selected</div>';
            } else {
                persistentPowersList.innerHTML = '';
                selectedPowers.forEach(power => {
                    const iconFileName = getPowerIconFileName(power.name);
                    const powerElement = document.createElement('div');
                    powerElement.className = 'persistent-power-item';
                    powerElement.dataset.id = power.id;
                    powerElement.innerHTML = `
                        <div class="persistent-power-icon">
                            <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                        </div>
                        <span>${power.name}</span>
                        <div class="persistent-remove" data-remove-power="${power.id}">×</div>
                    `;
                    persistentPowersList.appendChild(powerElement);
                });
                
                // Add remove event listeners
                document.querySelectorAll('[data-remove-power]').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const powerId = btn.dataset.removePower;
                        removePower(powerId);
                    });
                });
            }
        }
        
        if (persistentItemsList) {
            if (selectedItems.length === 0) {
                persistentItemsList.innerHTML = '<div class="empty-selection">No items selected</div>';
            } else {
                persistentItemsList.innerHTML = '';
                selectedItems.forEach(item => {
                    const iconFileName = getIconFileName(item.name);
                    const itemElement = document.createElement('div');
                    itemElement.className = 'persistent-item-item';
                    itemElement.dataset.id = item.id;
                    itemElement.innerHTML = `
                        <div class="persistent-item-icon">
                            <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                        </div>
                        <span>${item.name}</span>
                        <span class="persistent-item-cost">${item.cost}</span>
                        <div class="persistent-remove" data-remove-item="${item.id}">×</div>
                    `;
                    persistentItemsList.appendChild(itemElement);
                });
                
                // Add remove event listeners
                document.querySelectorAll('[data-remove-item]').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const itemId = btn.dataset.removeItem;
                        removeItem(itemId);
                    });
                });
            }
        }
    }
    function getStatColorClass(statName) {
        if (statName === 'Health') return 'stat-health';
        if (statName === 'Armor') return 'stat-armor';
        if (statName === 'Shield') return 'stat-shield';
        if (statName === 'Weapon Power' || statName === 'Weapon Lifesteal') return 'stat-weapon';
        if (statName === 'Ability Power' || statName === 'Ability Lifesteal') return 'stat-ability';
        if (statName === 'Move Speed') return 'stat-survival';
        if (statName === 'Cooldown Reduction') return 'stat-cooldown';
        return '';
    }    
    // Fix the order of operations to ensure elements exist before updating
function updatePersistentBuildSummary() {
    if (!selectedHero) return;
    
    const hero = heroes[selectedHero];
    
    // Update hero info first
    const persistentHeroName = document.getElementById('persistent-hero-name');
    const persistentHeroRole = document.getElementById('persistent-hero-role');
    const persistentHeroIcon = document.querySelector('.persistent-hero-icon');
    
    if (persistentHeroName) persistentHeroName.textContent = hero.name;
    if (persistentHeroRole) {
        persistentHeroRole.textContent = hero.role;
        persistentHeroRole.className = `persistent-hero-role ${hero.role}`;
    }
    if (persistentHeroIcon) {
        persistentHeroIcon.innerHTML = `<img src="${getHeroIconPath(hero.name)}" alt="${hero.name}" onerror="handleImageError(this)" />`;
    }
    
    // Make sure the counts are updated
    const persistentPowersCount = document.getElementById('persistent-powers-count');
    const persistentItemsCount = document.getElementById('persistent-items-count');
    const persistentTotalCost = document.getElementById('persistent-total-cost');
    
    if (persistentPowersCount) persistentPowersCount.textContent = selectedPowers.length;
    if (persistentItemsCount) persistentItemsCount.textContent = selectedItems.length;
    
    // Calculate total cost
    const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
    if (persistentTotalCost) persistentTotalCost.textContent = totalCost;
    
    // Update powers and items lists
    updatePersistentLists();
    
    // Initialize the ability carousel only after ensuring the elements exist
    setTimeout(() => {
        initAbilityCarousel();
        updateAllStats();
    }, 50);
}
    
    // Remove power
    function removePower(powerId) {
        selectedPowers = selectedPowers.filter(power => power.id !== powerId);
        
        // Unselect the power card
        const powerCard = document.querySelector(`.power-card[data-power="${powerId}"]`);
        if (powerCard) {
            powerCard.classList.remove('selected');
        }
        
        updateSelectionSummary();
    }
    // Update function to match the HTML element IDs
// The updated persistent stats function that matches your HTML IDs
function updatePersistentStats() {
    if (!selectedHero) return;
    
    const hero = heroes[selectedHero];
    
    // Update health value
    const healthValue = currentHeroStats['Health'] || hero.health;
    const healthElement = document.getElementById('persistent-health');
    if (healthElement) {
        healthElement.textContent = healthValue;
    }
    
    // Update percentage-based stats with the correct IDs from your HTML
    const statMappings = [
        { stat: 'Weapon Power', valueId: 'weapon-power-value', baseValue: 100, maxValue: 200 },
        { stat: 'Ability Power', valueId: 'ability-power-value', baseValue: 100, maxValue: 200 },
        { stat: 'Attack Speed', valueId: 'attack-speed-value', baseValue: 100, maxValue: 200 },
        { stat: 'Cooldown Reduction', valueId: 'cooldown-value', baseValue: 0, maxValue: 50 },
        { stat: 'Max Ammo', valueId: 'max-ammo-value', baseValue: 100, maxValue: 200 },
        { stat: 'Weapon Lifesteal', valueId: 'weapon-lifesteal-value', baseValue: 0, maxValue: 50 },
        { stat: 'Ability Lifesteal', valueId: 'ability-lifesteal-value', baseValue: 0, maxValue: 50 },
        { stat: 'Move Speed', valueId: 'move-speed-value', baseValue: 100, maxValue: 150 },
        { stat: 'Reload Speed', valueId: 'reload-speed-value', baseValue: 0, maxValue: 50 },
        { stat: 'Melee Damage', valueId: 'melee-damage-value', baseValue: 0, maxValue: 50 },
        { stat: 'Critical Damage', valueId: 'critical-damage-value', baseValue: 0, maxValue: 50 }
    ];
    
    statMappings.forEach(mapping => {
        const currentValue = currentHeroStats[mapping.stat] || mapping.baseValue;
        const diff = currentValue - mapping.baseValue;
        
        // Update the value element
        const valueElement = document.getElementById(mapping.valueId);
        if (valueElement) {
            valueElement.textContent = diff !== 0 ? `${diff > 0 ? '+' : ''}${diff}%` : '0%';
        }
        
        // Update the bar width
        const barId = mapping.valueId.replace('-value', '-bar');
        const barElement = document.getElementById(barId);
        if (barElement) {
            // Calculate percentage (0-100%)
            const percentage = ((currentValue - mapping.baseValue) / (mapping.maxValue - mapping.baseValue)) * 100;
            const clampedPercentage = Math.min(100, Math.max(0, percentage)); // Clamp between 0-100
            barElement.style.width = `${clampedPercentage}%`;
        }
    });
    
    // Update health bar segments
    updateHealthBarSegments(healthValue);
}
// Function to update the health bar segments
// Improved health bar segments function
function updateHealthBarSegments(healthValue) {
    const lifeBarContainer = document.getElementById('life-bar-container');
    if (!lifeBarContainer) return;
    
    // Clear existing segments
    lifeBarContainer.innerHTML = '';
    
    // Create 10 segments
    const segmentsTotal = 10;
    const maxHealth = 500; // Base value for 100% width
    const healthPerSegment = maxHealth / segmentsTotal;
    
    for (let i = 0; i < segmentsTotal; i++) {
        const segment = document.createElement('div');
        segment.className = 'life-segment';
        
        // Fill segments based on current health
        if (i * healthPerSegment < healthValue) {
            segment.classList.add('life-filled');
        } else {
            segment.classList.add('life-empty');
        }
        
        lifeBarContainer.appendChild(segment);
    }
}
    // Function to initialize ability carousel
    function initAbilityCarousel() {
        if (!selectedHero) return;
        
        const hero = heroes[selectedHero];
        const carousel = document.getElementById('ability-carousel');
        const indicator = document.getElementById('ability-indicator');
        
        if (!carousel || !indicator) return;
        
        // Clear existing content
        carousel.innerHTML = '';
        indicator.innerHTML = '';
        
        // Add slides for each ability
        hero.abilities.forEach((ability, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `ability-slide ${index === 0 ? 'active' : ''}`;
            slide.setAttribute('data-index', index);
            
            // Get ability icon
            const abilityIconPath = getAbilityIconPath(hero.name, ability.name);
            
            // Generate enhanced stats HTML using our improved function
            try {
                const statsHTML = generateModifiedAbilityHTML(ability, currentHeroStats, heroBaseStats[selectedHero]);
                
                // Create slide content
                slide.innerHTML = `
                    <div class="ability-header">
                        <div class="ability-icon">
                            <img src="${abilityIconPath}" alt="${ability.name}" 
                                onerror="this.parentNode.innerHTML='${ability.name.charAt(0)}'"/>
                        </div>
                        <div class="ability-name">${ability.name}</div>
                    </div>
                    <div class="ability-description">${ability.description}</div>
                    <div class="ability-stats">
                        ${statsHTML}
                    </div>
                `;
            } catch (error) {
                console.error(`Error generating ability stats for ${ability.name}:`, error);
                
                // Fallback to simple display without stats calculation
                slide.innerHTML = `
                    <div class="ability-header">
                        <div class="ability-icon">
                            <img src="${abilityIconPath}" alt="${ability.name}" 
                                onerror="this.parentNode.innerHTML='${ability.name.charAt(0)}'"/>
                        </div>
                        <div class="ability-name">${ability.name}</div>
                    </div>
                    <div class="ability-description">${ability.description}</div>
                    <div class="ability-stats">
                        ${ability.stats.map(stat => `
                            <div class="ability-stat">
                                <label>${stat.label}:</label>
                                <span>${stat.value}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            carousel.appendChild(slide);
            
            // Create indicator dot
            const dot = document.createElement('div');
            dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('data-index', index);
            indicator.appendChild(dot);
        });
        
        // Set up navigation
        document.getElementById('prev-ability')?.addEventListener('click', () => {
            navigateAbility('prev');
        });
        
        document.getElementById('next-ability')?.addEventListener('click', () => {
            navigateAbility('next');
        });
        
        // Add click handler for indicator dots
        document.querySelectorAll('.indicator-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                showAbilitySlide(index);
            });
        });
        
        // Setup expandable stats after they're added to DOM
        setTimeout(() => {
            setupExpandableStats();
        }, 100);
    }
    

    function navigateAbility(direction) {
        const slides = document.querySelectorAll('.ability-slide');
        if (!slides.length) return;
        
        const currentSlide = document.querySelector('.ability-slide.active');
        if (!currentSlide) return;
        
        // Get current index
        let currentIndex = parseInt(currentSlide.getAttribute('data-index'));
        
        // Calculate next index
        let nextIndex;
        if (direction === 'next') {
            nextIndex = (currentIndex + 1) % slides.length;
        } else {
            nextIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
        
        // Show the next slide
        showAbilitySlide(nextIndex);
    }
    
    function showAbilitySlide(index) {
        const slides = document.querySelectorAll('.ability-slide');
        const dots = document.querySelectorAll('.indicator-dot');
        
        // Make sure index is valid
        if (index < 0 || index >= slides.length) {
            console.error(`Invalid slide index: ${index}`);
            return;
        }
        
        // Update slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
        
        // Update indicators
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    }

// Function to show a specific ability slide
function showAbilitySlide(index) {
    const slides = document.querySelectorAll('.ability-slide');
    const dots = document.querySelectorAll('.indicator-dot');
    
    // Validate index
    if (index < 0 || index >= slides.length) {
        console.error(`Invalid slide index: ${index}`);
        return;
    }
    
    // Update slides
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Update indicators
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Log the ACTUAL index we're showing, not some string
    console.log(`Showing slide ${index}`);
}
    // Remove item
    function removeItem(itemId) {
        selectedItems = selectedItems.filter(item => item.id !== itemId);
        
        // Unselect the item card
        const itemCard = document.querySelector(`.item-card[data-item="${itemId}"]`);
        if (itemCard) {
            itemCard.classList.remove('selected');
        }
        
        updateSelectionSummary();
        updateStatsFromItems();
    }

    // Function to show toast notification
    // Update showToast function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    // Set message and type
    toastMessage.textContent = message;
    toast.className = 'toast'; // Reset classes
    toast.classList.add(`toast-${type}`);
    
    // Update icon
    const icon = toast.querySelector('i');
    if (icon) {
        if (type === 'success') {
            icon.className = 'fas fa-check-circle';
        } else if (type === 'error') {
            icon.className = 'fas fa-exclamation-circle';
        } else if (type === 'info') {
            icon.className = 'fas fa-info-circle';
        }
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
    
    // Function to save current build
    function saveCurrentBuild() {
        if (!selectedHero || (selectedPowers.length === 0 && selectedItems.length === 0)) {
            showToast('Please select a hero and at least one Power or Item to save a build.', 'error');
            return;
        }
        
        // Prompt for build name
        const buildName = prompt('Enter a name for your build:', `${heroes[selectedHero].name} Build`);
        
        if (!buildName) return; // User cancelled
        
        // Create build object
        const build = {
            id: Date.now().toString(),
            name: buildName,
            hero: selectedHero,
            powers: selectedPowers,
            items: selectedItems,
            stats: { ...currentHeroStats },
            date: new Date().toISOString()
        };
        
        // Get existing builds from localStorage
        let savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Add new build
        savedBuilds.push(build);
        postBuildToDiscord(build);
        // Save back to localStorage
        localStorage.setItem('stadiumBuilds', JSON.stringify(savedBuilds));
        
        // Show success message
        showToast(`Build "${buildName}" saved successfully!`);
        
        // Update saved builds panel if open
        if (document.getElementById('saved-builds-panel').style.display === 'block') {
            loadSavedBuilds();
        }
    }
    
    // Function to load saved builds
    function loadSavedBuilds() {
        const savedBuildsList = document.getElementById('saved-builds-list');
        const savedBuildsPanel = document.getElementById('saved-builds-panel');
        
        // Get saved builds from localStorage
        const savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Clear existing list
        savedBuildsList.innerHTML = '';
        
        if (savedBuilds.length === 0) {
            savedBuildsList.innerHTML = '<div class="empty-selection">No saved builds yet</div>';
            return;
        }
        
        // Sort builds by date (newest first)
        savedBuilds.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Add each build to the list
        savedBuilds.forEach(build => {
            const hero = heroes[build.hero];
            if (!hero) return; // Skip if hero not found
            
            // Get role-specific class
            let roleClass = '';
            if (hero.role === 'Tank') {
                roleClass = 'tank-badge';
            } else if (hero.role === 'Damage') {
                roleClass = 'damage-badge';
            } else if (hero.role === 'Support') {
                roleClass = 'support-badge';
            }
            
            // Calculate total cost
            const totalCost = build.items.reduce((total, item) => total + item.cost, 0);
            
            // Create build element
            const buildElement = document.createElement('div');
            buildElement.className = 'saved-build-item';
            buildElement.dataset.buildId = build.id;
            
            buildElement.innerHTML = `
                <div class="saved-build-header">
                    <div class="saved-build-hero">
                        <div class="saved-build-hero-icon">
                            <img src="${getHeroIconPath(hero.name)}" alt="${hero.name}" 
                                onerror="this.src='https://placehold.co/32x32/0088FF/FFFFFF?text=${hero.name.charAt(0)}'" />
                        </div>
                        <div>
                            <div class="saved-build-name">${build.name}</div>
                            <div class="saved-build-role">${hero.role}</div>
                        </div>
                    </div>
                    <div class="saved-build-actions">
                        <button class="saved-build-delete" title="Delete build" data-build-id="${build.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="saved-build-load" title="Load build" data-build-id="${build.id}">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
                <div class="saved-build-stats">
                    <div class="saved-build-stat">
                        <i class="fas fa-bolt"></i> ${build.powers.length}
                    </div>
                    <div class="saved-build-stat">
                        <i class="fas fa-shopping-cart"></i> ${build.items.length}
                    </div>
                </div>
                <div class="saved-build-cost">
                    Total: <span class="item-cost">${totalCost}</span>
                </div>
            `;
            
            savedBuildsList.appendChild(buildElement);
        });
        
        // Add event listeners
        document.querySelectorAll('.saved-build-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const buildId = btn.dataset.buildId;
                deleteSavedBuild(buildId);
            });
        });
        
        document.querySelectorAll('.saved-build-load').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const buildId = btn.dataset.buildId;
                loadBuild(buildId);
            });
        });
        
        // Make entire item clickable to load build
        document.querySelectorAll('.saved-build-item').forEach(item => {
            item.addEventListener('click', () => {
                const buildId = item.dataset.buildId;
                loadBuild(buildId);
            });
        });
        
        // Show the panel
        savedBuildsPanel.style.display = 'block';
    }
    
    // Function to delete a saved build
    function deleteSavedBuild(buildId) {
        // Confirm deletion
        if (!confirm('Are you sure you want to delete this build?')) {
            return;
        }
        
        // Get saved builds
        let savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Find build name before removing
        const buildToDelete = savedBuilds.find(build => build.id === buildId);
        const buildName = buildToDelete ? buildToDelete.name : 'Build';
        
        // Remove build
        savedBuilds = savedBuilds.filter(build => build.id !== buildId);
        
        // Save back to localStorage
        localStorage.setItem('stadiumBuilds', JSON.stringify(savedBuilds));
        
        // Show success message
        showToast(`"${buildName}" deleted successfully!`);
        
        // Reload the list
        loadSavedBuilds();
    }
    
    // Function to load a build
    function loadBuild(buildId) {
        // Get saved builds
        const savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Find the build
        const build = savedBuilds.find(build => build.id === buildId);
        
        if (!build) {
            showToast('Build not found!', 'error');
            return;
        }
        
        // Reset current selections
        selectedPowers = [];
        selectedItems = [];
        
        // Select the hero
        document.querySelectorAll('.hero-card').forEach(card => {
            if (card.dataset.hero === build.hero) {
                card.click();
            }
        });
        
        // Need to wait a bit for hero data to load
        setTimeout(() => {
            // Select powers
            build.powers.forEach(power => {
                const powerCard = document.querySelector(`.power-card[data-power="${power.id}"]`);
                if (powerCard && !powerCard.classList.contains('selected')) {
                    powerCard.click();
                }
            });
            
            // Select items
            build.items.forEach(item => {
                const itemCard = document.querySelector(`.item-card[data-item="${item.id}"]`);
                if (itemCard && !itemCard.classList.contains('selected')) {
                    itemCard.click();
                }
            });
            
            // Show success message
            showToast(`Build "${build.name}" loaded successfully!`);
            
            // Hide saved builds panel
            document.getElementById('saved-builds-panel').style.display = 'none';
        }, 100);
    }
    
    // Function to export build as text
    function exportBuildAsText() {
        if (!selectedHero || (selectedPowers.length === 0 && selectedItems.length === 0)) {
            showToast('Please select a hero and at least one Power or Item to share a build.', 'error');
            return null;
        }
        
        const hero = heroes[selectedHero];
        
        // Calculate total cost
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        
        // Create JSON representation of build
        const buildData = {
            version: '1.0',
            hero: selectedHero,
            powers: selectedPowers,
            items: selectedItems
        };
        
        // Encode as base64 to make it more compact
        const buildCode = btoa(JSON.stringify(buildData));
        
        // Create human-readable summary
        let buildText = `STADITECH BUILDER - ${hero.name} Build\n`;
        buildText += `========================================\n`;
        buildText += `Hero: ${hero.name} (${hero.role})\n`;
        buildText += `Total Cost: ${totalCost} Stadium Cash\n\n`;
        
        if (selectedPowers.length > 0) {
            buildText += `POWERS:\n`;
            selectedPowers.forEach(power => {
                buildText += `- ${power.name}\n`;
            });
            buildText += `\n`;
        }
        
        if (selectedItems.length > 0) {
            buildText += `ITEMS:\n`;
            selectedItems.forEach(item => {
                buildText += `- ${item.name} (${item.cost})\n`;
            });
            buildText += `\n`;
        }
        
        buildText += `========================================\n`;
        buildText += `Import code: ${buildCode}\n`;
        buildText += `Created with Staditech Builder`;
        
        return buildText;
    }
    
    // Function to share build
    function shareBuild() {
        if (!selectedHero) {
            showToast('Please select a hero first.', 'error');
            return;
        }
        
        if (selectedPowers.length === 0 && selectedItems.length === 0) {
            showToast('Please select at least one Power or Item for your build.', 'error');
            return;
        }
        
        const hero = heroes[selectedHero];
        
        // Calculate total cost
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        
        // Get role-specific class
        let roleClass = '';
        if (hero.role === 'Tank') {
            roleClass = 'build-tank';
        } else if (hero.role === 'Damage') {
            roleClass = 'build-damage';
        } else if (hero.role === 'Support') {
            roleClass = 'build-support';
        }
        
        // Export as text for copying
        const buildText = exportBuildAsText();
        if (!buildText) return;
        
        // Update the hidden textarea for copying
        const buildCodeText = document.getElementById('build-code-text');
        buildCodeText.value = buildText;
        
        // Hero image path
        const heroImagePath = getHeroIconPath(hero.name);
        
        // Create enhanced build code HTML
        let buildCodeHTML = `
            <div class="build-header">
                <div class="build-hero-icon">
                    <img src="${heroImagePath}" alt="${hero.name}" 
                        onerror="this.src='https://placehold.co/64x64/0088FF/FFFFFF?text=${hero.name.charAt(0)}'" />
                </div>
                <div class="build-hero-info">
                    <h3>${hero.name} Stadium Build</h3>
                    <div class="build-hero-role ${roleClass}">${hero.role}</div>
                </div>
            </div>
            
            <div class="build-stats-grid">
        `;
        
        // Display health, armor, shield stats
        const healthValue = currentHeroStats['Health'] || hero.health;
        const armorValue = currentHeroStats['Armor'] || hero.armor;
        const shieldValue = currentHeroStats['Shield'] || hero.shield;
        
        const healthDiff = healthValue - hero.health;
        const armorDiff = armorValue - hero.armor;
        const shieldDiff = shieldValue - hero.shield;
        
        buildCodeHTML += `
            <div class="build-stat-item">
                <span class="stat-label">Health:</span>
                <span class="stat-value stat-health">${healthValue}${healthDiff !== 0 ? 
                    `<span class="stat-bonus">(${healthDiff > 0 ? '+' : ''}${healthDiff})</span>` : ''}
                </span>
            </div>
        `;
        
        if (hero.armor > 0 || armorValue > 0) {
            buildCodeHTML += `
                <div class="build-stat-item">
                    <span class="stat-label">Armor:</span>
                    <span class="stat-value stat-armor">${armorValue}${armorDiff !== 0 ? 
                        `<span class="stat-bonus">(${armorDiff > 0 ? '+' : ''}${armorDiff})</span>` : ''}
                    </span>
                </div>
            `;
        }
        
        if (hero.shield > 0 || shieldValue > 0) {
            buildCodeHTML += `
                <div class="build-stat-item">
                    <span class="stat-label">Shield:</span>
                    <span class="stat-value stat-shield">${shieldValue}${shieldDiff !== 0 ? 
                        `<span class="stat-bonus">(${shieldDiff > 0 ? '+' : ''}${shieldDiff})</span>` : ''}
                    </span>
                </div>
            `;
        }
        
        // Display percentage-based stats that have been modified
        const displayPercentageStats = [
            { name: 'Weapon Power', styleClass: 'stat-weapon' },
            { name: 'Ability Power', styleClass: 'stat-ability' },
            { name: 'Attack Speed', styleClass: 'stat-weapon' },
            { name: 'Move Speed', styleClass: 'stat-survival' },
            { name: 'Cooldown Reduction', styleClass: 'stat-cooldown' },
            { name: 'Weapon Lifesteal', styleClass: 'stat-weapon' },
            { name: 'Ability Lifesteal', styleClass: 'stat-ability' }
        ];
                // Generate build URL for sharing
        const buildData = {
            hero: selectedHero,
            powers: selectedPowers.map(p => p.id),
            items: selectedItems.map(i => i.id)
        };
        const encodedData = btoa(JSON.stringify(buildData));
        const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
        
        postToDiscord(shareURL);
        
        displayPercentageStats.forEach(stat => {
            const baseValue = heroBaseStats[selectedHero][stat.name] || 0;
            const currentValue = currentHeroStats[stat.name] || baseValue;
            const diff = currentValue - baseValue;
            
            if (diff !== 0) {
                buildCodeHTML += `
                    <div class="build-stat-item">
                        <span class="stat-label">${stat.name}:</span>
                        <span class="stat-value ${stat.styleClass}">${currentValue}%
                            <span class="stat-bonus">(${diff > 0 ? '+' : ''}${diff}%)</span>
                        </span>
                    </div>
                `;
            }
        });
        
        buildCodeHTML += `</div>`;
        
        // Add selections section
        buildCodeHTML += `<div class="build-selections">`;
        
        // Powers section
        if (selectedPowers.length > 0) {
            buildCodeHTML += `
                <div class="build-section">
                    <h4>Powers</h4>
                    <div class="build-powers-list">
            `;
            
            selectedPowers.forEach(power => {
                const iconFileName = getPowerIconFileName(power.name);
                buildCodeHTML += `
                    <div class="build-power-item">
                        <div class="summary-item-icon">
                            <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                        </div>
                        <span>${power.name}</span>
                    </div>
                `;
            });
            
            buildCodeHTML += `
                    </div>
                </div>
            `;
        }
        
        // Items section
        if (selectedItems.length > 0) {
            buildCodeHTML += `
                <div class="build-section">
                    <h4>Items</h4>
                    <div class="build-items-list">
            `;
            
            selectedItems.forEach(item => {
                const iconFileName = getIconFileName(item.name);
                buildCodeHTML += `
                    <div class="build-item-item">
                        <div class="summary-item-icon">
                            <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                        </div>
                        <span>${item.name}</span>
                        <span class="item-cost">${item.cost}</span>
                    </div>
                `;
            });
            
            buildCodeHTML += `
                    </div>
                </div>
            `;
        }
        
        buildCodeHTML += `</div>`;
        
        buildCodeHTML += `
        <div class="build-footer">
            <div class="build-total-cost">
                Total Cost: <span class="item-cost">${totalCost}</span> Stadium Cash
            </div>
            <div class="build-buttons">
                <button class="copy-build-btn" id="copy-build-btn">
                    <i class="fas fa-copy"></i> Copy Build Text
                </button>
                <button class="share-url-btn" id="share-url-btn">
                    <i class="fas fa-link"></i> Share URL
                </button>
                <button class="save-build-btn" id="save-build-btn">
                    <i class="fas fa-save"></i> Save Build
                </button>
            </div>
        </div>
    `;
    
    // Update the build code display
    const buildCodeDisplay = document.getElementById('build-code');
    buildCodeDisplay.innerHTML = buildCodeHTML;
    buildCodeDisplay.style.display = 'block';
    
    // Add event listeners to the new buttons
    document.getElementById('copy-build-btn').addEventListener('click', copyBuildToClipboard);
    document.getElementById('save-build-btn').addEventListener('click', saveCurrentBuild);
    document.getElementById('share-url-btn').addEventListener('click', shareBuildViaURL);
    
    // Set up image error handlers for new images
    setupImageErrorHandlers();
    
    // Scroll to build code
    buildCodeDisplay.scrollIntoView({ behavior: 'smooth' });
}
    // Function to copy build to clipboard
    function copyBuildToClipboard() {
        const buildCodeText = document.getElementById('build-code-text');
        
        // Select the text
        buildCodeText.select();
        buildCodeText.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy to clipboard
        navigator.clipboard.writeText(buildCodeText.value)
            .then(() => {
                showToast('Build copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy build: ', err);
                showToast('Failed to copy build.', 'error');
            });
    }
    
    // Function to import build from text
    function importBuild() {
        const importText = document.getElementById('import-textarea').value.trim();
        
        if (!importText) {
            showToast('Please enter a build code to import.', 'error');
            return;
        }
        
        try {
            // Find the import code in the text
            const codeRegex = /Import code: ([A-Za-z0-9+/=]+)/;
            const codeMatch = importText.match(codeRegex);
            
            let buildCode;
            if (codeMatch && codeMatch[1]) {
                // Code found in formatted text
                buildCode = codeMatch[1];
            } else {
                // Try to use the whole text as a code
                buildCode = importText;
            }
            
            // Decode the build
            const buildData = JSON.parse(atob(buildCode));
            
            // Verify version and required fields
            if (!buildData.version || !buildData.hero || !buildData.powers || !buildData.items) {
                throw new Error('Invalid build format');
            }
            
            // Reset current selections
            selectedPowers = [];
            selectedItems = [];
            
            // Select the hero
            document.querySelectorAll('.hero-card').forEach(card => {
                if (card.dataset.hero === buildData.hero) {
                    card.click();
                }
            });
            
            // Need to wait a bit for hero data to load
            setTimeout(() => {
                // Select powers
                buildData.powers.forEach(power => {
                    const powerCard = document.querySelector(`.power-card[data-power="${power.id}"]`);
                    if (powerCard && !powerCard.classList.contains('selected')) {
                        powerCard.click();
                    }
                });
                
                // Select items
                buildData.items.forEach(item => {
                    const itemCard = document.querySelector(`.item-card[data-item="${item.id}"]`);
                    if (itemCard && !itemCard.classList.contains('selected')) {
                        itemCard.click();
                    }
                });
                
                // Show success message
                showToast('Build imported successfully!');
                
                // Close import modal
                document.getElementById('import-modal').style.display = 'none';
                
                // Clear textarea
                document.getElementById('import-textarea').value = '';
            }, 100);
        } catch (error) {
            console.error('Failed to import build: ', error);
            showToast('Failed to import build. Invalid code format.', 'error');
        }
    }
    
    // Setup event listeners for build management
    function setupBuildManagement() {
        // Save current build
        document.getElementById('save-current-build').addEventListener('click', saveCurrentBuild);
        
        // Show saved builds dropdown
        document.getElementById('show-saved-builds-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent clicking from bubbling to document
            const panel = document.getElementById('saved-builds-panel');
            panel.classList.toggle('active');
            
            if (panel.classList.contains('active')) {
                loadSavedBuilds();
                
                // Close when clicking outside the panel
                document.addEventListener('click', function closePanel(e) {
                    if (!panel.contains(e.target) && e.target !== document.getElementById('show-saved-builds-btn')) {
                        panel.classList.remove('active');
                        document.removeEventListener('click', closePanel);
                    }
                });
            }
        });
        
        // Close saved builds panel with close button
        document.getElementById('close-saved-builds').addEventListener('click', () => {
            document.getElementById('saved-builds-panel').classList.remove('active');
        });
        
        // Import build button
        document.getElementById('import-build-btn').addEventListener('click', () => {
            document.getElementById('import-modal').style.display = 'flex';
        });
        
        // Close import modal
        document.getElementById('close-import-modal').addEventListener('click', () => {
            document.getElementById('import-modal').style.display = 'none';
        });
        
        // Import build
        document.getElementById('import-build').addEventListener('click', importBuild);
    }
    function safeBase64Encode(obj) {
        // Convert the object to a JSON string
        const jsonString = JSON.stringify(obj);
        
        // Use encodeURIComponent to handle non-Latin1 characters
        return btoa(encodeURIComponent(jsonString));
      }
    // Add this to your existing shareBuild function
    function shareBuildViaURL() {
        // Create minimal build object
  const buildData = {
    hero: selectedHero,
    powers: selectedPowers.map(p => p.id),
    items: selectedItems.map(i => i.id)
  };
 
  
  
  // Use the safe encoding function
  const encodedData = safeBase64Encode(buildData);
  
  // Create shareable URL
  const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
        
        // Create and open URL share dialog
        const dialog = document.createElement('div');
        dialog.className = 'url-share-dialog';
        dialog.innerHTML = `
            <div class="url-share-content">
                <div class="url-share-header">
                    <h3>Share Your Build</h3>
                    <button class="close-dialog">×</button>
                </div>
                <p>Share this link with others to let them view your build:</p>
                <div class="url-input-container">
                    <input type="text" value="${shareURL}" readonly class="url-input">
                    <button class="copy-url-btn">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        // Select the URL input for easy copying
        const urlInput = dialog.querySelector('.url-input');
        urlInput.select();
        
        // Add event listeners for the dialog
        dialog.querySelector('.close-dialog').addEventListener('click', () => {
            document.body.removeChild(dialog);
        });
        
        dialog.querySelector('.copy-url-btn').addEventListener('click', () => {
            urlInput.select();
            document.execCommand('copy');
            showToast('URL copied to clipboard!');
        });
        
        // Close when clicking outside the dialog content
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                document.body.removeChild(dialog);
            }
        });
        
        // Prevent the dialog from closing when clicking inside the content
        dialog.querySelector('.url-share-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    function loadBuildFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const buildParam = urlParams.get('build');
        
        if (buildParam) {
            try {
                const buildData = safeBase64Decode(buildParam);
                
                // Need to make sure DOM is fully loaded before working with it
                setTimeout(() => {
                    // Select the hero
                    const heroCard = document.querySelector(`.hero-card[data-hero="${buildData.hero}"]`);
                    if (heroCard) {
                        heroCard.click();
                        
                        // Need to wait for hero data to load
                        setTimeout(() => {
                            // Select powers
                            if (buildData.powers && Array.isArray(buildData.powers)) {
                                buildData.powers.forEach(powerId => {
                                    const powerCard = document.querySelector(`.power-card[data-power="${powerId}"]`);
                                    if (powerCard && !powerCard.classList.contains('selected')) {
                                        powerCard.click();
                                    }
                                });
                            }
                            
                            // Select items
                            if (buildData.items && Array.isArray(buildData.items)) {
                                buildData.items.forEach(itemId => {
                                    const itemCard = document.querySelector(`.item-card[data-item="${itemId}"]`);
                                    if (itemCard && !itemCard.classList.contains('selected')) {
                                        itemCard.click();
                                    }
                                });
                            }
                            
                            showToast('Build loaded from URL successfully!');
                            
                            // Switch to overview tab
                            document.querySelector('.tab-button[data-tab="overview"]').click();
                        }, 300); // Wait a bit for hero data to load
                    } else {
                        showToast('Failed to load hero from URL', 'error');
                    }
                }, 100); // Wait for DOM to be ready
            } catch (error) {
                console.error('Failed to load build from URL:', error);
                showToast('Failed to load build from URL', 'error');
            }
        }
    }
    
    // Generate hero cards
    function generateHeroCards() {
        const heroSelector = document.getElementById('hero-selector');
        if (!heroSelector) {
            console.error('Hero selector element not found!');
            return; // Exit the function if element doesn't exist
        }
        
        // Clear existing heroes first
        heroSelector.innerHTML = '';
        
        for (const heroId in heroes) {
            const hero = heroes[heroId];
            
            const heroCard = document.createElement('div');
            heroCard.className = 'hero-card';
            heroCard.dataset.hero = heroId;
            
            // Choose a color based on hero role for fallback
            let roleColor = '#0088FF'; // Default blue
            if (hero.role === 'Tank') {
                roleColor = '#FFAA00'; // Yellow/orange for tanks
            } else if (hero.role === 'Damage') {
                roleColor = '#FF5C5C'; // Red for damage
            } else if (hero.role === 'Support') {
                roleColor = '#40FF9C'; // Green for support
            }
            
            // Use the hero image path
            const heroImagePath = getHeroIconPath(hero.name);
            
            heroCard.innerHTML = `
                <img src="${heroImagePath}" alt="${hero.name}" onerror="this.src='https://placehold.co/100x100/${roleColor.replace('#', '')}/FFFFFF?text=${hero.name.charAt(0)}'" />
                <h3>${hero.name}</h3>
                <div class="role ${hero.role}">${hero.role}</div>
            `;
            
            heroCard.addEventListener('click', () => {
                document.querySelectorAll('.hero-card').forEach(card => card.classList.remove('active'));
                heroCard.classList.add('active');
                displayHeroDetails(heroId);
            });
            
            heroSelector.appendChild(heroCard);
        }
        setupRoleFilters();
    }
    function updateAbilityStats() {
        const abilities = document.querySelectorAll('.ability');
        
        abilities.forEach(ability => {
            const abilityName = ability.querySelector('.ability-name').textContent;
            const statsContainer = ability.querySelector('.ability-stats');
            
            // Clear existing stats
            statsContainer.innerHTML = '';
            
            // Find ability in hero data
            const heroAbility = heroes[selectedHero].abilities.find(a => a.name === abilityName);
            if (!heroAbility) return;
            
            // Get current stat modifiers
            const weaponPowerMod = (currentHeroStats['Weapon Power'] - 100) / 100 || 0;
            const abilityPowerMod = (currentHeroStats['Ability Power'] - 100) / 100 || 0;
            const cooldownMod = (currentHeroStats['Cooldown Reduction']) / 100 || 0;
            
            // Process each stat
            heroAbility.stats.forEach(stat => {
                let statValue = stat.value;
                let modifiedValue = null;
                let modifier = null;
                
                // Extract numeric values if possible
                const numMatch = statValue.match(/(\d+(\.\d+)?)/);
                if (numMatch) {
                    const baseValue = parseFloat(numMatch[1]);
                    
                    // Apply appropriate modifiers based on stat type
                    if (stat.label.includes('Damage')) {
                        modifiedValue = baseValue * (1 + weaponPowerMod);
                        modifier = baseValue * weaponPowerMod;
                    } else if (stat.label.includes('Healing')) {
                        modifiedValue = baseValue * (1 + abilityPowerMod);
                        modifier = baseValue * abilityPowerMod;
                    } else if (stat.label.includes('Cooldown')) {
                        modifiedValue = baseValue * (1 - cooldownMod);
                        modifier = -baseValue * cooldownMod;
                    }
                    
                    // Create stat element
                    const statEl = document.createElement('div');
                    statEl.className = 'ability-stat';
                    
                    if (modifiedValue !== null) {
                        // Format values to 1 decimal place
                        const formattedBase = baseValue.toFixed(1);
                        const formattedMod = modifier.toFixed(1);
                        const formattedValue = modifiedValue.toFixed(1);
                        
                        // Determine modifier style
                        const modClass = modifier >= 0 ? 'stat-bonus-positive' : 'stat-bonus-negative';
                        const modSign = modifier >= 0 ? '+' : '';
                        
                        // Show detailed stat with modifier
                        statEl.innerHTML = `
                            <div class="stat-label">${stat.label}:</div>
                            <div class="stat-value-container">
                                <span class="base-value">${formattedBase}</span>
                                <span class="modifier ${modClass}">${modSign}${formattedMod}</span>
                                <span class="equals">=</span>
                                <span class="final-value">${formattedValue}</span>
                            </div>
                        `;
                    } else {
                        // Show standard stat
                        statEl.innerHTML = `
                            <div class="stat-label">${stat.label}:</div>
                            <div class="stat-value">${statValue}</div>
                        `;
                    }
                    
                    statsContainer.appendChild(statEl);
                }
            });
        });
    }
    function setupShareFeatures() {
        // Create the share popup
        const sharePopup = document.createElement('div');
        sharePopup.className = 'share-popup';
        sharePopup.id = 'share-popup';
        
        sharePopup.innerHTML = `
            <div class="share-popup-content">
                <div class="share-popup-header">
                    <h2>Share Your Build</h2>
                    <button class="close-popup" id="close-share-popup">×</button>
                </div>
                <div class="share-methods" id="share-methods">
                    <!-- Share methods will be added dynamically -->
                </div>
            </div>
        `;
        
        document.body.appendChild(sharePopup);
        
        // Setup floating share button
        const floatingShareBtn = document.getElementById('floating-share-btn');
        if (floatingShareBtn) {
            floatingShareBtn.addEventListener('click', openSharePopup);
        }
        
        // Setup close button
        document.getElementById('close-share-popup').addEventListener('click', () => {
            sharePopup.classList.remove('active');
        });
        
        // Close when clicking outside the content
        sharePopup.addEventListener('click', (e) => {
            if (e.target === sharePopup) {
                sharePopup.classList.remove('active');
            }
        });
    }
    
    // Open share popup and populate with share methods
    function openSharePopup() {
        if (!selectedHero) {
            showToast('Please select a hero first.', 'error');
            return;
        }
        
        if (selectedPowers.length === 0 && selectedItems.length === 0) {
            showToast('Please select at least one Power or Item for your build.', 'error');
            return;
        }
        
        const hero = heroes[selectedHero];
        const sharePopup = document.getElementById('share-popup');
        const shareMethods = document.getElementById('share-methods');
        
        // Generate share data
        const buildData = {
            hero: selectedHero,
            powers: selectedPowers.map(p => p.id),
            items: selectedItems.map(i => i.id)
        };
        
        // Encode as base64 to make it more compact
        const encodedData = btoa(JSON.stringify(buildData));
        const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
        
        // Generate text summary
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        
        let shareText = `STADITECH BUILDER - ${hero.name} Build\n`;
        shareText += `Hero: ${hero.name} (${hero.role})\n`;
        shareText += `Total Cost: ${totalCost} Stadium Cash\n\n`;
        
        if (selectedPowers.length > 0) {
            shareText += `POWERS:\n`;
            selectedPowers.forEach(power => {
                shareText += `- ${power.name}\n`;
            });
            shareText += `\n`;
        }
        
        if (selectedItems.length > 0) {
            shareText += `ITEMS:\n`;
            selectedItems.forEach(item => {
                shareText += `- ${item.name} (${item.cost})\n`;
            });
            shareText += `\n`;
        }
        
        shareText += `Load this build: ${shareURL}\n`;
        shareText += `Created with Staditech Builder`;
        
        // Generate Discord formatting
        let discordText = `**STADITECH BUILDER - ${hero.name} Build**\n`;
        discordText += `Hero: ${hero.name} (${hero.role})\n`;
        discordText += `Total Cost: ${totalCost} Stadium Cash\n\n`;
        
        if (selectedPowers.length > 0) {
            discordText += `**POWERS:**\n`;
            selectedPowers.forEach(power => {
                discordText += `- ${power.name}\n`;
            });
            discordText += `\n`;
        }
        
        if (selectedItems.length > 0) {
            discordText += `**ITEMS:**\n`;
            selectedItems.forEach(item => {
                discordText += `- ${item.name} (${item.cost})\n`;
            });
            discordText += `\n`;
        }
        
        discordText += `Load this build: ${shareURL}\n`;
        discordText += `Created with Staditech Builder`;
        
        // Clear existing methods
        shareMethods.innerHTML = '';
        
        // Add URL share method
        const urlMethod = document.createElement('div');
        urlMethod.className = 'share-method';
        urlMethod.innerHTML = `
            <div class="share-method-header">
                <div class="share-method-icon">
                    <i class="fas fa-link"></i>
                </div>
                <div class="share-method-title">Share URL</div>
            </div>
            <p>Share this link for others to load your build directly:</p>
            <div class="url-input-container">
                <input type="text" value="${shareURL}" readonly class="url-input" id="share-url-input">
                <button class="copy-url-btn" id="copy-url-btn">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
        `;
        shareMethods.appendChild(urlMethod);
        
        // Add text share method
        const textMethod = document.createElement('div');
        textMethod.className = 'share-method';
        textMethod.innerHTML = `
            <div class="share-method-header">
                <div class="share-method-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <div class="share-method-title">Share as Text</div>
            </div>
            <p>Copy this text to share your build in forums or emails:</p>
            <textarea readonly class="text-share-area" id="text-share-area">${shareText}</textarea>
            <button class="copy-text-btn" id="copy-text-btn">
                <i class="fas fa-copy"></i> Copy Text
            </button>
        `;
        shareMethods.appendChild(textMethod);
        
        // Add Discord share method
        const discordMethod = document.createElement('div');
        discordMethod.className = 'share-method';
        discordMethod.innerHTML = `
            <div class="share-method-header">
                <div class="share-method-icon" style="background-color: #5865F2;">
                    <i class="fab fa-discord"></i>
                </div>
                <div class="share-method-title">Share to Discord</div>
            </div>
            <p>Copy this formatted text to share in Discord:</p>
            <textarea readonly class="text-share-area" id="discord-share-area">${discordText}</textarea>
            <button class="copy-text-btn" id="copy-discord-btn" style="background-color: #5865F2;">
                <i class="fas fa-copy"></i> Copy for Discord
            </button>
        `;
        shareMethods.appendChild(discordMethod);
       
        
        // Add event listeners for copy buttons
        document.getElementById('copy-url-btn').addEventListener('click', () => {
            const urlInput = document.getElementById('share-url-input');
            urlInput.select();
            document.execCommand('copy');
            showToast('URL copied to clipboard!');
        });
        
        document.getElementById('copy-text-btn').addEventListener('click', () => {
            const textArea = document.getElementById('text-share-area');
            textArea.select();
            document.execCommand('copy');
            showToast('Text copied to clipboard!');
        });
        
        document.getElementById('copy-discord-btn').addEventListener('click', () => {
            const discordArea = document.getElementById('discord-share-area');
            discordArea.select();
            document.execCommand('copy');
            showToast('Discord text copied to clipboard!');
        });
        
        // Show the popup
        sharePopup.classList.add('active');
    }
    
    // Initialize share features
// Function to post build to Discord webhook
function postBuildToDiscord(build) {
    const hasConsented = localStorage.getItem('buildSharingConsent');
    
    // Only share if explicitly consented
    if (hasConsented !== 'true') {
        console.log('User has not consented to Discord sharing');
        return;
    }
  // Discord webhook URL
  const webhookUrl = "https://discord.com/api/webhooks/1366651926959095892/fANkUR_cUgnMoTLlfhgxSBx0kY8x3Pvr97CuS6uhKg5CF--8R37BrTFeYpMNNtnwJTO1";
  
  // Generate build URL
  const buildData = {
    hero: build.hero,
    powers: build.powers.map(p => p.id),
    items: build.items.map(i => i.id)
  };
  const encodedData = btoa(JSON.stringify(buildData));
  const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
  
  // Calculate total cost
  const totalCost = build.items.reduce((total, item) => total + item.cost, 0);
  
  // Create embed
  const embed = {
    title: build.name,
    description: `A new Stadium build has been created!`,
    color: 16754470, // OW orange color
    fields: [
      {
        name: "Hero",
        value: `${heroes[build.hero].name} (${heroes[build.hero].role})`,
        inline: true
      },
      {
        name: "Powers",
        value: build.powers.length > 0 ? build.powers.map(p => p.name).join(", ") : "None",
        inline: true
      },
      {
        name: "Total Cost",
        value: `${totalCost} Stadium Cash`,
        inline: true
      },
    ],
    footer: {
      text: "Created with Staditech Builder"
    },
    timestamp: new Date().toISOString()
  };
  
  // Create webhook data
  const webhookData = {
    content: `**${build.name}**\nBuild Link: ${shareURL}`,
    embeds: [embed]
  };
  
  // Send webhook
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(webhookData)
  }).catch(error => console.error("Error posting to Discord:", error));
}
// Function that posts to Discord without notifying user
function postToDiscord(shareURL) {
    // Discord webhook URL
    const hasConsented = localStorage.getItem('buildSharingConsent');
    
    // Only share if explicitly consented
    if (hasConsented !== 'true') {
        console.log('User has not consented to Discord sharing');
        return;
    }
    const webhookUrl = "https://discord.com/api/webhooks/1366651926959095892/fANkUR_cUgnMoTLlfhgxSBx0kY8x3Pvr97CuS6uhKg5CF--8R37BrTFeYpMNNtnwJTO1";
    
    // Get hero info
    const hero = heroes[selectedHero];
    
    // Calculate total cost
    const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
    
    // Create simple content message
    const content = `**Build Shared!**
  Hero: ${hero.name} (${hero.role})
  Powers: ${selectedPowers.map(p => p.name).join(", ") || "None"}
  Items: ${selectedItems.length} items (${totalCost} Stadium Cash)
  Build URL: ${shareURL}`;
  
    // Use the simplest possible payload
    const webhookData = {
      content: content
    };
    
    // Send webhook with error handling but no user notification
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    })
    .then(response => {
      if (!response.ok) {
        console.error(`Discord webhook failed: ${response.status} ${response.statusText}`);
      } else {
        console.log("Discord webhook sent successfully");
      }
    })
    .catch(error => {
      console.error("Error posting to Discord:", error);
    });
  }
    
    // Create a mutation observer to watch for DOM changes
    const observer = new MutationObserver(() => {
        setupImageErrorHandlers();
    });
    
    // Start observing the document body for DOM changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Initialize
    setTimeout(() => {
        try {
            // Initialize
            generateHeroCards();
            
            // Set up role filters if they exist
            if (document.querySelector('.role-filters')) {
                setupRoleFilters();
            }
            
            // Select first hero by default if hero selector exists
            const heroSelector = document.getElementById('hero-selector');
            if (heroSelector && heroSelector.children.length > 0) {
                heroSelector.children[0].click();
            }
        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }, 100);
    
    // Select first hero by default
    if (heroSelector.children.length > 0) {
        heroSelector.children[0].click();
    }
    // Privacy policy functionality
document.getElementById('privacy-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('privacy-modal').style.display = 'flex';
});

document.getElementById('close-privacy-modal').addEventListener('click', () => {
    document.getElementById('privacy-modal').style.display = 'none';
});



});